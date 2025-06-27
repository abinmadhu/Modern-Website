const Carousal = ({ testimonial }) => {
  return (
    <div className="">
      <div className="min-w-[320px]">
        <div className="border-[1px] border-primary rounded-[30px] p-5">
          <p className="">{testimonial.quote}</p>
        </div>
        <div>
          <h4 className="text-[18px] font-space font-semibold text-primary">
            {testimonial.name}
          </h4>
          <p className="font-space ">{testimonial.position}</p>
        </div>
      </div>
    </div>
  );
};

export default Carousal;
