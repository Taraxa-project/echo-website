import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="footer bg-[#13151f] text-base-content p-10 px-24">
      <aside>
        <Link href={"/"}>
          <Image
            src="/echo-logo.svg"
            alt="Echo Logo"
            width={50}
            height={24}
            priority
          />
        </Link>
        <p>Echo, powered by Taraxa</p>
      </aside>
      <nav>
        <a className="link link-hover">Build on Echo</a>
        <a className="link link-hover">Explorer AI Agents</a>
        <a className="link link-hover">Apply for a Grant</a>
      </nav>
    </footer>
  );
};
