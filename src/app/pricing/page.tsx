"use client";
import { TiArrowBack } from "react-icons/ti";
import { useRouter } from 'next/navigation';
import { RiShareForwardFill } from "react-icons/ri";
import Typewriter from "typewriter-effect";

function Price() {
  const routerBack = useRouter();
  const routerNext = useRouter();

  return (
    <div>   
          
    <button className="text-pink-500 text-2xl flex flex-wrap"
onClick={() => routerBack.push(`/process`)} 
style={{marginLeft:`80px`}}>

 <TiArrowBack /> Back
   </button>
    <div className="flex flex-wrap  justify-center items-center">
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-6xl text-3xl font-medium title-font mb-2 text-pink-500 hover:text-pink-600">
              <Typewriter
                options={{
                  strings: ["Pricing List"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white-500">
              Trusted coprative price
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full ml-40">
              <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden font-bold">
                <h1 className="text-4xl text-pink-500 pb-4 mb-4 border-b border-white leading-none">
                  Pakstani Client
                </h1>
                <p className="flex items-center text-white mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-pink-500 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Registration 5000 PKR
                </p>
                <p className="flex items-center text-white mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-pink-500 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Proposal done 30,000 PKR
                </p>
                <p className="flex items-center text-white mb-6">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-pink-500 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Fees not refundable
                </p>
                <p className="text-xs text-gray-500 mt-3">
                  Make sure to inquiry of proposal after doning we are not
                  rsponsable!<br></br>
                  If you are interested fill the form .
                </p>
              </div>
            </div>

            <div className="p-4 xl:w-1/4 md:w-1/2 w-full ml-60">
              <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                <h1 className="text-pink-500 hover:text-pink-600  text-3xl font-bold mb-4">
                  Abrod <br></br>Clients
                </h1>
                <hr></hr>
                <br></br>
                <p className="flex items-center text-white mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-pink-500 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Registration 10,000 PKR
                </p>
                <p className="flex items-center text-white mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-pink-500 text-white rounded-full flex-shrink-0 ">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Proposal done 50,000 PKR
                </p>
                <p className="flex items-center text-white mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-pink-500 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Fees not refundable
                </p>
                <p className="text-xs text-gray-500 mt-3">
                  Make sure to inquiry of proposal after doning we are not
                  rsponsable!<br></br>
                  If you are interested fill the form .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <button className="text-pink-500 text-2xl flex flex-wrap justify-center items-center mx-5"
       onClick={() => routerNext.push(`/contact`)}
       style={{marginLeft:`300px`}}>
        Next<RiShareForwardFill/>
      </button>
    </div>
    </div>
    
  );
}
export default Price;
  