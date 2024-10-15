"use client"
import Image from "next/image";
import { TiArrowBack } from "react-icons/ti";
import { useRouter } from 'next/navigation';
import { RiShareForwardFill } from "react-icons/ri";


export default function Process() {
  const routerBack = useRouter();
  const routerNext = useRouter();
  return (
    <div>   
          
           <button className="text-pink-500 text-2xl flex flex-wrap"
      onClick={() => routerBack.push(`/`)} 
      style={{marginLeft:`80px`}}>
    
        <TiArrowBack /> Back
          </button>
          

        <div className="process flex flex-wrap  ">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none" />
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-pink-500 text-white relative z-10 title-font font-medium text-sm">
              1
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-black-500 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <Image
                  src={require(`../pictures/logo.jpg`)}
                  alt="logo"
                  width={80}
                />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-pink-500 hover:text-pink-600 mb-1 text-2xl">
                  Visiting
                </h2>
                <p className="leading-relaxed text-white">
                  Vist our site and get familiar with our services and satisfied
                  yourself<br></br>
                  from our organization.
                </p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none" />
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-pink-500 text-white relative z-10 title-font font-medium text-sm">
              2
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-black-500 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <Image
                  src={require(`../pictures/logo.jpg`)}
                  alt="logo"
                  width={80}
                />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-pink-500 hover:text-pink-600 mb-1 text-2xl">
                  Process
                </h2>
                <p className="leading-relaxed text-white">
                  Read the process and pricing carefully and register yourself
                  for the proposal<br></br> you want from our organization.
                  <br></br>
                </p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none" />
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-pink-500 text-white relative z-10 title-font font-medium text-sm">
              3
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-black-500 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <Image
                  src={require(`../pictures/logo.jpg`)}
                  alt="logo"
                  width={80}
                />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-pink-500 hover:text-pink-600 mb-1 text-2xl">
                  Form Filling
                </h2>
                <p className="leading-relaxed text-white">
                  To get form click on cantact and contact us we will provided a
                  form to you fill <br></br>it carefully and submit it to our
                  contact .
                </p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none" />
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-pink-500 text-white relative z-10 title-font font-medium text-sm">
              4
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-black-500 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <Image
                  src={require(`../pictures/logo.jpg`)}
                  alt="logo"
                  width={80}
                  height={20}
                />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-pink-500 hover:text-pink-600 mb-1 text-2xl">
                  Final Step
                </h2>
                <p className="leading-relaxed text-white">
                  You are now register in our organization our team members will
                  contact<br></br>
                  you for further details and guide you for forward steps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <button className="text-pink-500 text-2xl flex flex-wrap justify-center items-center mx-5"
       onClick={() => routerNext.push(`/pricing`)}
       style={{marginLeft:`300px`}}>
        Next<RiShareForwardFill/>
      </button>
    </div>
    </div>

  );
}
