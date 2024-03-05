import { sendEmail } from '@/app/utils/sendgrid';
import {  NextApiResponse, NextApiRequest } from 'next'
import { NextResponse, NextRequest } from 'next/server';




export async function POST(req:NextRequest , res: NextApiResponse) {

  
    const postData = await req.json()

  

    try{
      const { to, from , subject, text,html } = postData
      const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID_ONE
      const dynamic_template_data = {
        fullname: text,
      };
      
      const msg = ((subject === "Private Network Form") || (subject === "Opportunities Form")) ? {
        to,
        from,
        subject, 
        text,
        html
      } : {
        to,
        from,
        subject, 
        templateId,
        dynamic_template_data
      } ;

      await sendEmail(msg)
        return new Response("success",{ status: 200 })
      }catch(err){
        console.error("SendGrid API Error:", err);
        return new Response("error",{ status: 401 })
      }
     
      
     
        

} 