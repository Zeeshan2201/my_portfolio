import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import GoToTop from "../../../public/arr1.png"
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
       
          <span className="text-transparent  text-xl font-bold  my-2 bg-clip-text bg-gradient-to-r from-green-200 to-orange-200">
          Let&apos;s Connect
            </span>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Zeeshan2201">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/md-zeeshan-sheikh-a82a57187">
            <Image src={LinkedinIcon}  alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        <div className="flex">
        <Link href="/" className="flex">
          Go To Top <Image src={GoToTop} alt="goToUp" className="text-white ml-5 bg-white rounded-full"  width={25} height={20}/>
        </Link>
        </div>
      </div>
      </div>

      <div>
      <p className="text-slate-400 mb-12 ml-12">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;