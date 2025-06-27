import React from "react";
import styles from "../style";
import { caseStudies } from "../constants";
import { MoveUpRight } from "lucide-react";

const CaseStudies = () => {
  return (
    <div className={`${styles.paddingY}`}>
      <div className="flex flex-col sm:flex-row items-center justify-start">
        <h2
          className={`${styles.heading2} bg-primary px-2 sm:mr-10 mr-0 mb-5 sm:mb-0 rounded-lg`}
        >
          Case Studies
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] `}>
          Explore our successful projects and see how we have helped our clients
          achieve their goals.
        </p>
      </div>
      <div className="mt-10 flex flex-col md:flex-row items-start justify-between gap-8 md:bg-secondary md:px-10 md:py-12 rounded-[30px]">
        {caseStudies.map((caseStudy, index) => (
          <div
            key={caseStudy.id}
            className={`flex flex-col  items-start h-full justify-between  bg-secondary px-12 py-10 md:px-8 md:py-6 rounded-[30px] text-white`}
          >
            <p className="text=[18px] leading-[19px]">{caseStudy.description}</p>
            <div className="flex flex-row items-center text-primary mt-5 gap-5">
                <p>Learn more</p>
            
                <MoveUpRight/>
            </div>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
