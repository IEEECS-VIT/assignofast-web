import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon"

export default function Footer() {
  return (
    <>
      <footer className="flex text-white flex-col md:flex-row items-center md:justify-between justify-center p-8 gap-6 pb-0 bg-black">
        <div>
          <p>© 2024 Assignofast. All Rights Reserved.</p>
        </div>

        <div>
          <div className="flex gap-x-6">
            <Icon link="https://www.facebook.com/ieeecsvit/" alt="facebook" />
            <Icon link="https://www.instagram.com/ieeecs_vit/" alt="instagram"/>
            <Icon link="https://www.youtube.com/@ieeecomputersociety-vitcha2386" alt="youtube"/>
            <Icon link="https://github.com/ieeecs-vit/" alt="github" />
            <Icon link="https://www.linkedin.com/company/ieee-cs-vit/" alt="linkedin" />
            <Icon link="https://x.com/ieeecsvit" alt="twitter" />
            <Icon link="https://medium.com/@IEEE_Computer_Society_VIT" alt="medium" />
          </div>
        </div>

        <Link href="/privacy-policy">
          <p>Privacy Policy</p>
        </Link>

        <Image src="./ieeecs-logo.svg" alt="logo" height={50} width={100} />
      </footer>
    </>
  );
}
