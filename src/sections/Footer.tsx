import Logo from "@/assets/logo.svg";
import Xsocial from "@/assets/social-x.svg";
import Instagram from "@/assets/social-instagram.svg";
import Youtube from "@/assets/social-youtube.svg";
export const Footer = () => {
  return (
    <footer className="contianer py-5">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex gap-2  items-center lg:flex-1">
          {" "}
          <Logo className="w-6 h-6" />
          <div className="font-medium">AI Startup Landing Page</div>
        </div>
        <div>
          <nav className="flex flex-col  lg:flex-row gap-5  lg:justify-center lg:flex-1">
            <a
              href="#"
              className="text-white/70 hover:text-white text-xs transition"
            >
              Features
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white text-xs transition"
            >
              Developers
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white text-xs transition"
            >
              Company
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white text-xs transition"
            >
              Features
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white text-xs transition"
            >
              Blog
            </a>
          </nav>
        </div>
        <div className="flex gap-5  lg:justify-end lg:flex-1">
          <Xsocial className="text-white/70 hover:text-white  transition" />
          <Instagram className="text-white/70 hover:text-white  transition" />
          <Youtube className="text-white/70 hover:text-white  transition" />
        </div>
      </div>
    </footer>
  );
};
