import styles from "../style";
import { processSteps } from "../constants";
import { Plus } from "lucide-react";
import { useState } from "react";

const Process = () => {
  const [openSteps, setOpenSteps] = useState({}); // track open states per ID

  const toggleDescription = (id) => {
    setOpenSteps((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  return (
    <div className={styles.paddingY}>
      <div className="flex flex-col sm:flex-row items-center justify-start">
        <h2
          className={`${styles.heading2} bg-primary px-2 sm:mr-10 mr-0 mb-5 sm:mb-0 rounded-lg sm:text-center`}
        >
          Our Working Process
        </h2>
        <p className={`${styles.paragraph} text-black md:max-w-[350px]`}>
          Step by step Guide to Achieving Your Business Goals
        </p>
      </div>
      <div className="flex flex-col items-center gap-5 mt-10">
        {processSteps.map((process, index) => (
          <div
            key={index}
            className={`flex flex-col sm:px-[60px] sm:py-[40px] px-[30px] py-[25px] rounded-[35px] border-[1px] border-b-[5px] border-secondary w-full 
            ${openSteps[process.id] && "bg-primary"} bg-dimWhite`}
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-secondary sm:text-[30px] text-[20px] font-semibold font-space flex items-center dm:gap-10 gap-5">
                <span className="sm:text-[60px] text-[40px]">
                  {"0"}
                  {index + 1}
                </span>
                {process.title}
              </h3>
              <div
                className="border-[1px] rounded-full sm:p-3 p-1 border-secondary bg-white"
                onClick={() => toggleDescription(process.id)}
              >
                <Plus />
              </div>
            </div>
            {openSteps[process.id] && (
              <div>
                <hr className="bg-secondary h-[1px] w-full" />
                <p className="font-space w-full sm:text-[22px] text-[16px] mt-5">
                  {process.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
