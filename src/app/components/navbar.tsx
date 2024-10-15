import Image from "next/image";
import Link from  "next/link";


export default function Navbar() {
  return (
    <header className="text-gray-600 body-font bg-black-500 flex flex-wrap">
      <div className="container mx-auto flex flex-wrap p-0 flex-col md:flex-row items-center">
    

        <Image
          src={require(`../pictures/logo.jpg`)}
          alt="Logo"
          width={100}
          height={100}
        />

        <span className="ml-3 text-2xl text-pink-500 hover:text-pink-600">
          <b>
            <u>
              <i>H.M Marriage Beauro</i>
            </u>
          </b>
        </span>

        <nav className="md:mr-Linkuto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-grLinky-400	flex flex-wrLinkp items-center text-bLinkse justify-center bg-blLinkck-500">
          <Link
            href={`/`}
            className="mr-5 hover:text-pink-600 text-pink-500"
          >
            Home
          </Link>
          <Link
            href={`/process`}
            className="mr-5 hover:text-pink-600 text-pink-500"
          >
            Process
          </Link>
          <Link
            href={`/pricing`}
            className="mr-5 hover:text-pink-600 text-pink-500"
          >
            Pricing
          </Link>
          <Link
            href={`/contact`}
            className="mr-5 hover:text-pink-600 text-pink-500"
          >
            
            Contact
          </Link>
          <Link
            href={`/about`}
            className="mr-5 hover:text-pink-600 text-pink-500"
          >
            
            About Us
          </Link>
        </nav>
       
      </div>
    </header>
  );
}
