import styles from "../style";
import heroImg from "../assets/hero-img.png";

const Hero = () => {
  return (
    <div className={`flex md:flex-row flex-col ${styles.paddingY} ${styles.flexCenter} `}>
      <div className="flex flex-col justify-center items-start gap-6 flex-1 order-2 md:order-1 h-full">
        <h1 className="font-bold font-space sm:text-[60px] sm:leading-[75px] text-[43px] leading-[50px]">Navigating the <br /> digital landscape <br /> for success</h1>
        <p className="text-[18px] leading-[30px] text-secondary max-w-[470px]">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <button className="bg-secondary text-dimWhite px-5 py-3 text-[18px] rounded-lg">Book a consultation</button>
      </div>
      <div className="flex-1 flex justify-center items-center md:my-0 my-10 order-1 md:order-2">
        <img src={heroImg} alt="heroimg" className=" object-contain" />
      </div>
    </div>
  );
};

export default Hero;
