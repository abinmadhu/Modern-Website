import styles from "../style";
import { testimonials } from "../constants";
import Carousal from "./Carousal";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  const next = () => setIndex((prev) => (prev + 1) % total);
  const prev = () => setIndex((prev) => (prev - 1 + total) % total);

  const { quote, name, position } = testimonials[index];
  return (
    <div className={`${styles.paddingY}`}>
      <div className="flex flex-col sm:flex-row items-center jsuttify-start">
        <h2
          className={`${styles.heading2} bg-primary px-2 sm:mr-10 mr-0 mb-5 sm:mb-0 rounded-lg`}
        >
          Testimonials
        </h2>
        <p className={`${styles.paragraph} text-black max-w-[600px]`}>
          Hear ffrom our satisfied clients who have experienced the
          transformative power of our digital marketing services.
        </p>
      </div>
      <div className="flex flex-col items-center text-center py-6 px-7  md:py-12 relative bg-secondary text-white rounded-[30px] mt-10">
        {/* Animated wrapper */}
        <div
          key={index} // trigger transition on index change
          className="transition-all duration-500 ease-in-out opacity-100 translate-y-0"
        >
          <p className="text-lg max-w-[600px] min-h-[350px] flex items-center justify-center border border-primary p-3 rounded-[25px] text-[15px] mb-4 transition-opacity duration-500">
            “{quote}”
          </p>
          <div className="flex flex-col items-start pl-5 mt-8">
            <h4 className="text-[20px] font-space font-semibold text-primary">
              {name}
            </h4>
            <p className="text-sm text-white font-space">{position}</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center mt-10 gap-10 items-center ">
          <button onClick={prev} className="text-white">
            <ArrowLeft />
          </button>
         
         <div className="flex justify-center  space-x-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full ${
              i === index ? "bg-primary" : "bg-gray-300"
            } transition-colors duration-300`}
          />
        ))}
      </div>
          <button onClick={next} className=" text-white">
            <ArrowLeft className="rotate-180" />
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Testimonials;
