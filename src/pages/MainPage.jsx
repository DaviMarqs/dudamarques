import { WhatsappLogo } from "phosphor-react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

export function MainPage() {
  return (
    <div className="max-w-[100vw]">
      <a
        className="fixed top-[90%] right-[5%] p-2 z-30"
        href="https://api.whatsapp.com/send?phone=553384055294&text=Olá, gostaria de saber mais sobre os seus serviços!"
        target="_blank"
      >
        <WhatsappLogo size={32} color="#d86fb6" />
      </a>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
