export default function Main() {
  return (
    <div className="flex items-center align-center flex-col">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="src/assets/undraw_makeup_artist_rxn8.svg"
            className="w-lg rounded-lg sm:min-w-[15rem]"
          />
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

      <div className="flex items-center justify-center h-[50vh]">
        <div className="carousel carousel-center min-w-xl p-4 space-x-4 bg-ghost rounded-box h-[80%] mx-6">
          <div className="carousel-item">
            <img src="src/assets/job-1.jpeg" className="rounded-box h-[100%]" />
          </div>
          <div className="carousel-item">
            <img src="src/assets/job-2.jpeg" className="rounded-box h-[100%]" />
          </div>
          <div className="carousel-item">
            <img src="src/assets/job-3.jpeg" className="rounded-box h-[100%]" />
          </div>
          <div className="carousel-item">
            <img src="src/assets/job-4.jpeg" className="rounded-box h-[100%]" />
          </div>
          <div className="carousel-item">
            <img src="src/assets/job-5.jpeg" className="rounded-box h-[100%]" />
          </div>
          <div className="carousel-item">
            <img src="src/assets/job-6.jpeg" className="rounded-box h-[100%]" />
          </div>
          <div className="carousel-item">
            <img src="src/assets/job-7.jpeg" className="rounded-box h-[100%]" />
          </div>
          <div className="carousel-item">
            <img src="src/assets/job-8.jpeg" className="rounded-box h-[100%]" />
          </div>
        </div>
      </div>
    </div>
  );
}
