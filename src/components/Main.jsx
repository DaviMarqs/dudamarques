import MakeUp from "../assets/undraw_makeup_artist_rxn8.svg";

import Carousel from "../components/Carousel";

export default function Main() {
  return (
    <div className="flex items-center align-center flex-col">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={MakeUp} className="w-lg rounded-lg sm:min-w-[15rem]" />
          <div>
            <h1 className="text-5xl font-bold">Agende seu horário!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <a href="#contato" className="btn btn-primary">
              Entre em contato
            </a>
          </div>
        </div>
      </div>

      <Carousel />
    </div>
  );
}
