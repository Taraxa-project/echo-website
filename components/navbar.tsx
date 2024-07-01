import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="navbar bg-transparent w-full flex justify-between p-10 px-24">
      <div className="navbar-start">
        <Link href={"/"}>
          <Image
            src="/echo-logo.svg"
            alt="Echo Logo"
            width={50}
            height={24}
            priority
          />
        </Link>
      </div>
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#" target="_blank">
              Build on Echo
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Explorer AI Agents
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Apply for a Grant
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
