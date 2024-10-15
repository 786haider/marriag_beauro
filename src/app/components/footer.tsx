import Image from "next/image";
export default function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-3 py-5 mx-auto flex items-center sm:flex-row flex-col">
        <Image
          src={require(`../pictures/logo.jpg`)}
          alt=""
          width={100}
          height={100}
        />

        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2014 MarriageBeauro@H.M{"  "} 
</p>
          <h1 className=" text-pink-500 hover:text-pink-600 text-2xl text-bold">
            <u>
              <i>Thanks for visiting our page</i>
            </u>
          </h1>
        
      </div>
    </footer>
  );
}
