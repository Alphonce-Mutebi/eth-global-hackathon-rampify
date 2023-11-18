// import * as dotenv from 'dotenv';
import IntaSend from 'intasend-node';


// dotenv.config();

// const IntaSend = require('intasend-node');
const TOKEN = process.env.INTASEND_SECRET_TOKEN;
const PUBLISHABLE_KEY = process.env.INTASEND_PUBLISHABLE_KEY;

const intasend = new IntaSend(
    PUBLISHABLE_KEY,
    TOKEN,
    false,
  );

export const sendToMoMo = async (
    phoneNumber: string | any,
    name: string,
    amount: number,
    narrative: string
    ) =>{
    try {
        // Step 1: Initiate M-Pesa B2C
        const response = await intasend.payouts().mpesa({
          currency: 'KES',
          transactions: [{
            name,
            account: phoneNumber,
            amount: amount.toString(),
            narrative,
          }],
        });
    
        //step 2: Approve and release payment
        return await intasend.payouts().approve(response, false).then((res: any) => {
          console.log(res);
          console.log("Payout approved");

        }).catch((err: any) => {
          console.log(err);
        });
      } catch (err: any) {
        console.error(`Error sending mobile money payout:`, err);
        console.error(err.toString('ascii'));
      }
};


