
import { sendEmail } from '@/app/utils/sendgrid';
import {  NextResponse, NextRequest } from 'next/server'
import Coinpayments from 'coinpayments';


const credentials = {
    key: "18a40d23148134dc193a8012079996fcbe3d224665e28d6e452f2ac6a2ee91d1",
    secret: "4c38520eeC25d99050dea539D6D806D63483E89c68B1Ca59ef77f185e83B5AC5",
  };
  
const client = new Coinpayments(credentials);

export async function POST(req: NextRequest, res: NextResponse) {

    const body = await req.json()

      
     try{
      //await coinPayment(body)
      //const response = client.getBasicInfo()
        const response = await client.createTransaction({
            amount: body.plan === "Monthly" ? 150 : 1500,
            currency1: "LTC",
            currency2: "LTC",
            buyer_name: body.fullname,
            buyer_email: body.email,
            custom: `Telegram handle: ${body.handle}`,
        })
        //const response = await coinPayment(body)
      console.log("RESPONSE :",response)
      return NextResponse.json({ msg : "CoinPayment!" })
    }catch(err){
        console.log("ERRRROR:", err)
        return NextResponse.json({ msg : "error" })
    }
        

} 