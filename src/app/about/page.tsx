"use client";

import Image from "next/image";
import Typewriter from "typewriter-effect";
import { TiArrowBack } from "react-icons/ti";
import { useRouter } from 'next/navigation';
import { RiShareForwardFill } from "react-icons/ri";



export default function About() {
  const routerBack = useRouter();
  const routerNext = useRouter();
  return (
    <div>
              
    <button className="text-pink-500 text-2xl flex flex-wrap"
onClick={() => routerBack.push(`/contact`)} 
style={{marginLeft:`80px`}}>

 <TiArrowBack /> Back
   </button>
    <div className="about flex flex-wrap justify-center">
      <section className="text-gray-400 bg-black-500 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <Image
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src={require(`../pictures/logo.jpg`)}
            width={500}
            height={500}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-4xl mb-4 font-medium text-pink-500 hover:text-pink-600">
              <Typewriter
                options={{
                  strings: ["About H.M Marriage Beauro"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="leading-relaxed mb-8">
              <i>
                <b>
                  H.M Marriage Beauro founded since <u>2014</u>. This beauro is
                  founded by <u>Habiba Mutahir</u>
                  <br></br>
                </b>
              </i>
              <i>
                <b>
                  <abbr title="Chief Officer">CO</abbr> founder of{" "}
                  <abbr title="Habiba Mutahir">H.M</abbr> Marriage Beauro. She
                  have a successful career in marriage beauro <br></br>field .
                  Since <u>2014</u> she have a lot of experience in this field.
                  From 2014 till now she <br></br>
                  help many peoples who were searching for best proposal
                  according to thier requirments.<br></br>
                  With the mercy of God every client who contact us proposal
                  will happy and staisfied with our <br></br>
                  suggestions and remeber us in their prayers.
                </b>
              </i>
            </p>
          </div>
        </div>
      </section>
    </div>
    <button className="text-pink-500 text-2xl flex flex-wrap justify-center items-center mx-5"
       onClick={() => routerNext.push(`/`)}
       style={{marginLeft:`300px`}}>
        Next<RiShareForwardFill/>
      </button>
    </div>
  );
}
