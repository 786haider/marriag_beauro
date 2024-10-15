"use client"
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Process from "./process/page";
import Price from "./pricing/page";
import Contact from "./contact/page";
import About from "./about/page";

export default function Home() {
  return (
    <div>
     
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div>
      <div className="flex flex-col items-center justify-center h-screen pt-20">
        <Image
          src={require(`./pictures/flower.jpg`)}
          alt="image"
          objectFit="cover"
          className="opacity-50 absolute top-20 left-0 w-full h-full"
          height={'50'}
        />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-pink-500 hover:text-pink-600 text-5xl font-bold font-italic ">
          <h1 className="transition duration-500 ease-in-out shadow-md hover:shadow-lg ml-5">
            <b>
              <i>
                <h1>
                  
                  <b>
                    <i>Wellcome to ,</i>
                  </b>
                </h1>
                <br />
                <b>
                  <i>
                    <Typewriter
                      options={{
                        strings: ["H.M Marriage Beauro"],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </i>
                </b>
              </i>
            </b>
          </h1>
        </div>
      </div>
    </div>
          </div>
          <br></br>
    <Process/>
    <br></br>
    <Price/>
    <br></br>
    <Contact/>
    <br></br>
    <About/>
    </div>
  );
}
