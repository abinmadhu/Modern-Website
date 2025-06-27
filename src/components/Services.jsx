import React from "react";
import styles from "../style";
import { marketingServices } from "../constants";
import { ArrowBigRightIcon, MoveUpRight } from "lucide-react";

export const Services = () => {
  return (
    <div className={`${styles.paddingY}`}>
      <div className="flex flex-col sm:flex-row items-center jsuttify-start">
        <h2
          className={`${styles.heading2} bg-primary px-2 sm:mr-10 mr-0 mb-5 sm:mb-0 rounded-lg`}
        >
          Services
        </h2>
        <p className={`${styles.paragraph} text-black max-w-[600px]`}>
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-8   gap-10">
        {marketingServices.map((service, index) => (
          <div
            key={service.id}
            className={`grid grid-cols-2 p-[50px]  rounded-[35px] border-[1px] border-secondary border-b-[5px] ${
              service.id === 'seo' && "bg-dimWhite text-black"} ${service.id == "email" && "bg-dimWhite text-black"
            } ${(service.id =="analytics" || service.id === "social-media") && "bg-secondary text-white" } ${
              (service.id==="ppc" || service.id==="content") && "bg-primary text-white"
            }`}
          >
            <div className="flex flex-col justify-between">
              <h3 className={`${(index === 0 || index === 3 || index === 5) ? "bg-primary" : "bg-dimWhite"} text-secondary 
              p-1 xl:text-[30px] md:text-[25px] xs:text[-[20px] font-semibold rounded-xl`}> {service.titleLine1}<br />{service.titleLine2}</h3>
              
              <div className="flex gap-4 items-center">
                <div className={`${(index === 2 || index === 5) ? "bg-dimWhite text-black" : "bg-secondary text-primary"} p-2 rounded-full`}>
                   <MoveUpRight size={'30px'}/>
                </div>
                <p className={`${(index === 2 || index === 5) ? " text-white" : " text-black"} md:text-[20px]`}>Learn more</p>
              </div>
            </div>
            <img src={service.image} alt={service.title} className="w-full " />
          </div>
        ))}
      </div>
    </div>
  );
};
