import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";
import Link from "next/link";


const BlogDetailsPage = () => {
  return (
    <>
      <section className="pt-[150px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  How to pay (Ghana)
                </h2>
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                 
                 
                </div>
                <div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Step-By-Step-Approach<br />
                  •	1. After clicking on "Make Payment" and selecting your country, Choose "Pay with Flutterwave".<br />
	•	2. Click on any of the displayed plans to subscribe for it.<br />
	•	3. Select the Mobile money payment option in the selection box and click Pay.<br />
	•	4. Insert Your NAME EMAIL and NUMBER  and CONTINUE to pay with mobile money. <br />
	•	5. Select either MTN,VODAFONE,AIRTEL OR TIGO<br />
	•	6. . Insert your PAYMENT NUMBER and click PAY.<br />
	•	7.   Verify with a Flutterwave code that is sent to your number and confirm with your pin <br />
	•	8. A Payment Response stating the details of the transaction is then received, indicating successful payment.<br />
	•	9. Your account is then automatically upgraded to the selected plan.<br />
    <br /><br />
HOW TO FUND WALLET VIA BITCOIN AND USDT
<br />
All Payments should be made "ONLY" to the Wallet stated below
Bitcoin
<br /><br />
39ZBVKQhvHZDeZHyvaFyB6S28UX1PJ38fP
<br /><br />
USDT (ERC-20)
<br /><br />
0x7203E4a15092C81399f2ad75448ff02b04a79885

<br /><br />
	•	After making a successful payment, kindly send your proof of payment details<br />
	•	, Amount Sent, Registered Email Address/Phone Number & date of transaction) to crypto@futnance.com.<br />
	•	    Your account would be upgraded as soon as payment is received and confirmed.<br />

                  </p>
                  <Link
                    href="https://futnance-new.vercel.app/"
                    className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                   Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
