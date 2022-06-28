import { InstagramLogo, Phone, Chats } from "phosphor-react";

export default function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded h-[20vh]">
      <div id="contato">
        <div className="grid grid-flow-col gap-4">
          <a className="cursor-pointer">
            <InstagramLogo size={32} color="#d86fb6" />
          </a>
          <a className="cursor-pointer">
            <Phone size={32} color="#d86fb6" />
          </a>
          <a className="cursor-pointer">
            <Chats size={32} color="#d86fb6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
