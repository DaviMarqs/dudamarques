import Job1 from "../assets/job-1.jpeg";
import Job2 from "../assets/job-2.jpeg";
import Job3 from "../assets/job-3.jpeg";
import Job4 from "../assets/job-4.jpeg";
import Job5 from "../assets/job-5.jpeg";
import Job6 from "../assets/job-6.jpeg";
import Job7 from "../assets/job-7.jpeg";
import Job8 from "../assets/job-8.jpeg";

export default function Carousel() {
  return (
    <div className="flex items-center justify-center h-[50vh]">
      <div className="carousel carousel-center min-w-xl p-4 space-x-4 bg-ghost rounded-box h-[80%] mx-6">
        <div className="carousel-item">
          <img src={Job1} alt="job1" className="rounded-box h-[100%]" />
        </div>
        <div className="carousel-item">
          <img src={Job2} alt="job2" className="rounded-box h-[100%]" />
        </div>
        <div className="carousel-item">
          <img src={Job3} alt="job3" className="rounded-box h-[100%]" />
        </div>
        <div className="carousel-item">
          <img src={Job4} alt="job4" className="rounded-box h-[100%]" />
        </div>
        <div className="carousel-item">
          <img src={Job5} alt="job5" className="rounded-box h-[100%]" />
        </div>
        <div className="carousel-item">
          <img src={Job6} alt="job6" className="rounded-box h-[100%]" />
        </div>
        <div className="carousel-item">
          <img src={Job7} alt="job7" className="rounded-box h-[100%]" />
        </div>
        <div className="carousel-item">
          <img src={Job8} alt="job8" className="rounded-box h-[100%]" />
        </div>
      </div>
    </div>
  );
}
