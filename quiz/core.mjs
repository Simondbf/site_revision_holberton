export const STORAGE_KEY='holberton-quiz-guest-v1';
export const MAX_HISTORY=60;
export const normalizeFeedbackMode=mode=>mode==='end'?'end':'immediate';
export const emptyProgress=()=>({version:1,current:null,history:[],stats:{},seen:{},feedbackMode:'immediate'});
export function normalizeProgress(data){
 const fresh=emptyProgress();
 if(!data||typeof data!=='object'||data.version!==1)return fresh;
 return {
  version:1,
  current:data.current&&typeof data.current==='object'?data.current:null,
  history:Array.isArray(data.history)?data.history.slice(-MAX_HISTORY):[],
  stats:data.stats&&typeof data.stats==='object'?data.stats:{},
  seen:data.seen&&typeof data.seen==='object'?data.seen:{},
  feedbackMode:normalizeFeedbackMode(data.feedbackMode)
 };
}
export function readProgress(storage){
 try{return normalizeProgress(JSON.parse(storage.getItem(STORAGE_KEY)||'null'))}catch{return emptyProgress()}
}
export function writeProgress(storage,progress){
 try{storage.setItem(STORAGE_KEY,JSON.stringify(progress));return true}catch{return false}
}
export function checkBank(questions){
 const ids=new Set();
 for(const q of questions){
  if(!q.id||ids.has(q.id))throw Error('Identifiant de question dupliqué : '+q.id);
  ids.add(q.id);
  if(!q.notion_id||!q.prompt||!q.explanation||!Array.isArray(q.options)||!Array.isArray(q.correct_option_ids))throw Error('Question incomplète : '+q.id);
  if(q.options.length<3||q.options.length>5||new Set(q.options.map(o=>o.text)).size!==q.options.length)throw Error('Choix incohérents : '+q.id);
  if(!['single','multiple'].includes(q.answer_mode))throw Error('Mode inconnu : '+q.id);
  const optionIds=q.options.map(x=>x.id);
  if(optionIds.join('')!=='ABCDE'.slice(0,q.options.length))throw Error('Options non standard : '+q.id);
  if(new Set(q.correct_option_ids).size!==q.correct_option_ids.length||!q.correct_option_ids.every(id=>optionIds.includes(id)))throw Error('Corrigé invalide : '+q.id);
  if(q.answer_mode==='single'&&q.correct_option_ids.length!==1)throw Error('Réponse simple invalide : '+q.id);
  if(q.answer_mode==='multiple'&&(q.correct_option_ids.length<2||q.correct_option_ids.length>=q.options.length))throw Error('Réponses multiples invalides : '+q.id);
  if(!q.source_urls?.some(s=>s.startsWith('https://revision-hbtn.soleiljaune.be/#cours/')))throw Error('Fiche de cours manquante : '+q.id);
 }
 return true;
}
export function combineCandidates(pointerSection,variadicBank){
 const argc=pointerSection.questions.filter(q=>/^V1-N09_07[2-6]-0[1-5]$/.test(q.id));
 const others=variadicBank.questions;
 if(argc.length!==25||others.length!==30)throw Error('Le corpus de préversion doit contenir 25 questions argc et 30 stdarg.');
 const questions=[...argc.map(q=>({...q,family:'argc'})),...others.map(q=>({...q,family:'stdarg'}))];
 checkBank(questions);
 return questions;
}
export function matchesAnswer(given,answer){
 if(!Array.isArray(given)||!given.length||new Set(given).size!==given.length)return false;
 return given.length===answer.length && given.every(x=>answer.includes(x));
}
export function selectQuestions(bank,{family='all',amount=10,stats={},seen={},random=Math.random}={}){
 const eligible=bank.filter(q=>family==='all'||q.family===family);
 const groups=new Map();
 for(const q of eligible){if(!groups.has(q.notion_id))groups.set(q.notion_id,[]);groups.get(q.notion_id).push(q)}
 const entries=[...groups].map(([notionId,items])=>{
   const s=stats[notionId]||{};
   const attempts=Number(s.attempts)||0,errors=Number(s.errors)||0;
   const priority=attempts?errors/attempts:0.6;
   return {id:notionId,priority,items:items.map(q=>({q,rand:random()})).sort((a,b)=>(Number(seen[a.q.id])||0)-(Number(seen[b.q.id])||0)||a.rand-b.rand).map(x=>x.q)};
 }).sort((a,b)=>b.priority-a.priority||a.id.localeCompare(b.id));
 const result=[];
 while(result.length<Math.min(amount,eligible.length)&&entries.some(x=>x.items.length)){
  for(const entry of entries){
   if(result.length>=Math.min(amount,eligible.length))break;
   if(entry.items.length)result.push(entry.items.shift());
  }
 }
 return result;
}
// Fisher-Yates : toutes les permutations sont équiprobables si random() est uniforme.
export function shuffleOptionIds(options,random=Math.random){
 const ids=options.map(option=>option.id);
 for(let i=ids.length-1;i>0;i--){
  const sample=random();
  if(!(sample>=0&&sample<1))throw Error('Source aléatoire invalide');
  const j=Math.floor(sample*(i+1));
  [ids[i],ids[j]]=[ids[j],ids[i]];
 }
 return ids;
}
export function newSession(questions,family='all',now=new Date(),random=Math.random,feedbackMode='immediate'){
 if(!questions.length)throw Error('Aucune question disponible');
 // Le tirage est renouvelé pour chaque session, mais enregistré pour pause/reprise.
 const optionOrder=Object.fromEntries(questions.map(q=>[q.id,shuffleOptionIds(q.options,random)]));
 return {version:1,id:'guest-'+now.getTime()+'-'+Math.random().toString(36).slice(2,9),family,createdAt:now.toISOString(),questionIds:questions.map(q=>q.id),cursor:0,answers:{},optionOrder,feedbackMode:normalizeFeedbackMode(feedbackMode)};
}
export function applyAnswer(session,question,selected,now=new Date()){
 if(!session.questionIds.includes(question.id)||session.answers[question.id])throw Error('Réponse déjà enregistrée ou question inconnue');
 if(!selected.length||new Set(selected).size!==selected.length||selected.some(id=>!question.options.some(o=>o.id===id)))throw Error('Sélection invalide');
 const saved={...session,answers:{...session.answers}};
 saved.answers[question.id]={selected:[...selected],correct:matchesAnswer(selected,question.correct_option_ids),at:now.toISOString()};
 return saved;
}
// « Je ne sais pas » compte comme une question traitée mais incorrecte.
 // Cette trace distincte aide à revoir les notions difficiles sans inventer de réponse.
export function skipAnswer(session,question,now=new Date()){
 if(!session.questionIds.includes(question.id)||session.answers[question.id])throw Error('Réponse déjà enregistrée ou question inconnue');
 const saved={...session,answers:{...session.answers}};
 saved.answers[question.id]={selected:[],skipped:true,correct:false,at:now.toISOString()};
 return saved;
}
export function resultSummary(session,bank){
 const map=new Map(bank.map(q=>[q.id,q]));
 let answered=0,correct=0;
 const notions=new Map(),mistakes=[];
 for(const id of session.questionIds){
  const q=map.get(id),entry=session.answers[id];if(!q||!entry)continue;
  answered++;if(entry.correct)correct++;
  let row=notions.get(q.notion_id)||{notion_id:q.notion_id,label:q.notion,done:0,correct:0,course:q.source_urls?.[0],family:q.family};
  row.done++;row.correct+=Number(entry.correct);notions.set(q.notion_id,row);
  if(!entry.correct)mistakes.push({id:q.id,notion:q.notion,course:q.source_urls?.[0],explanation:q.explanation});
 }
 return {answered,correct,total:session.questionIds.length,percent:answered?Math.round(correct/answered*100):0,notions:[...notions.values()].sort((a,b)=>a.correct/a.done-b.correct/b.done),mistakes};
}
export function completeSession(progress,session,bank){
 const summary=resultSummary(session,bank);
 if(summary.answered!==summary.total)throw Error('Quiz incomplet');
 const next=normalizeProgress(progress);
 next.current=null;
 const record={id:session.id,family:session.family,createdAt:session.createdAt,finishedAt:new Date().toISOString(),questionIds:[...session.questionIds],answers:session.answers,total:summary.total,correct:summary.correct};
 next.history=[...next.history.filter(s=>s.id!==session.id),record].slice(-MAX_HISTORY);
 for(const id of session.questionIds){
  const q=bank.find(x=>x.id===id),entry=session.answers[id];if(!q)continue;
  const prev=next.stats[q.notion_id]||{attempts:0,errors:0};
  next.stats[q.notion_id]={attempts:Number(prev.attempts||0)+1,errors:Number(prev.errors||0)+Number(!entry.correct)};
  next.seen[id]=Number(next.seen[id]||0)+1;
 }
 return {progress:next,summary};
}
// Une session est libre : l'apprenant peut demander son bilan après n'importe quelle réponse validée.
export function finishSession(progress,session,bank){
 if(!session?.questionIds?.length||!session?.answers)throw Error('Session invalide');
 const answeredIds=session.questionIds.filter(id=>Object.hasOwn(session.answers,id));
 if(!answeredIds.length)throw Error('Valide au moins une réponse avant de terminer.');
 const finished={...session,questionIds:answeredIds,cursor:answeredIds.length-1};
 return completeSession(progress,finished,bank);
}
export function progressSummary(progress){
 const rows=progress.history||[];
 return {sessions:rows.length,answered:rows.reduce((sum,s)=>sum+(Number(s.total)||0),0),correct:rows.reduce((sum,s)=>sum+(Number(s.correct)||0),0),notions:Object.keys(progress.stats||{}).length,unfinished:!!progress.current};
}
