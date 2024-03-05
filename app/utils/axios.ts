
import axios from "axios";
import { AxiosResponse } from "axios";
/*
    Public Key: ce26c133d8efe866dc53a772e5dba35982fed2444d8d05c6fc5447f540db1cad
Private Key: Ab7afcC435f588540a4133Bca9fc5Bbf8c234D9ebe7065B93FEe443c98Fd5849
*/

const coinpaymentsConfig = {
    apiKey: 'ce26c133d8efe866dc53a772e5dba35982fed2444d8d05c6fc5447f540db1cad',
    apiSecret: 'Ab7afcC435f588540a4133Bca9fc5Bbf8c234D9ebe7065B93FEe443c98Fd5849',
};

type HandlePaymentResponse = {
    checkout_url: string;
  };

  type HandlePaymentParams = {
    amount: number;
    currency1: string;
    currency2: string;
    buyer_name: string;
    buyer_email: string;
    custom: string;
  };


const { apiKey, apiSecret } = coinpaymentsConfig;

const coinPaymentsAPI = axios.create({
  baseURL: 'https://coinpayments.net/',
  headers: {
    'Content-Type': 'application/json',
  },
  auth: {
    username: apiKey,
    password: apiSecret,
  },
});


export const coinPayment = async (payload: any) => {

    console.log("PAYLOAD:",payload)
    try {
        const response= await axios.post('https://coinpayments.net/',{
            cmd:"create_transaction",
            amount: payload.plan === "Monthly" ? 150 : 1500,
            currency1: "LTC",
            currency2: "LTC",
            buyer_name: payload.fullname,
            buyer_email: payload.email,
            custom: `Telegram handle: ${payload.handle}`,
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              },
            auth: {
                username: apiKey,
                password: apiSecret,
            },
            timeout: 9000
        });

  
        console.log("respnse: ",response);
  
        const { checkout_url } = response.data;
  
        //window.location.href = checkout_url;
      } catch (error) {
        console.log("error: ",error);
      }
}





