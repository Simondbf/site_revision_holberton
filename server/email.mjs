export async function makeBrevoSmtpSender(env=process.env){
 const {HBTN_SMTP_HOST,HBTN_SMTP_PORT,HBTN_SMTP_USER,HBTN_SMTP_PASSWORD,HBTN_MAIL_FROM}=env;
 if(!HBTN_SMTP_HOST||!HBTN_SMTP_USER||!HBTN_SMTP_PASSWORD||!HBTN_MAIL_FROM)return null;
 const {default:nodemailer}=await import('nodemailer');
 const transport=nodemailer.createTransport({
  host:HBTN_SMTP_HOST,port:Number(HBTN_SMTP_PORT||587),secure:false,requireTLS:true,
  tls:{minVersion:'TLSv1.2'},auth:{user:HBTN_SMTP_USER,pass:HBTN_SMTP_PASSWORD},
  connectionTimeout:10000,greetingTimeout:10000,socketTimeout:15000
 });
 return async(to,link)=>{
  await transport.sendMail({
   from:HBTN_MAIL_FROM,to,
   subject:'Holberton Révision — lien de connexion',
   text:'Tu as demandé une connexion à Holberton Révision.\n\nOuvre ce lien dans les 15 minutes :\n'+link+
    '\n\nSi tu n’as rien demandé, ignore cet e-mail. Aucun mot de passe n’a été transmis.'
  });
 };
}
