import styles from "../style";
import { teamMembers } from "../constants";
import { Linkedin } from "lucide-react";

const Team = () => {
  return (
    <div className={`${styles.paddingY}`}>
      <div className="flex flex-col sm:flex-row items-center jsuttify-start">
        <h2
          className={`${styles.heading2} bg-primary px-2 sm:mr-10 mr-0 mb-5 sm:mb-0 rounded-lg`}
        >
          Team
        </h2>
        <p className={`${styles.paragraph} text-black max-w-[600px]`}>
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="flex flex-col items-start  px-8 py-6 sm:px-10 sm:py-8 border-[1px] font-space border-secondary border-b-[5px] rounded-[40px]"
          >
            <div className="flex items-center justify-start w-full mb-4 relative">
              <img
                src={member.image}
                alt={member.name}
                className="w-[100px] h-[100px] rounded-full mr-5 object-cover border-b-[5px] border-r-[5px] border-secondary"
              />
              <div className="bg-secondary p-2 rounded-full absolute sm:-right-5 sm:-top-3 right-0 top-0">
                <Linkedin size={"15px"} className="text-primary"/>
              </div>
              <div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
              </div>
            </div>

            <div>
              <hr className="h-[1px] bg-secondary w-full"/>
              <p className="mt-2">{member.description}</p>
            </div>
          </div>
        ))}
        
      </div>
      <div className="flex items-center sm:justify-end justify-center mt-5 w-full">
            <button className="bg-secondary px-12 py-3 rounded-lg text-white text-[18px] md:text-[22px] w-full sm:w-fit">See all team</button>
        </div>
    </div>
  );
};

export default Team;
