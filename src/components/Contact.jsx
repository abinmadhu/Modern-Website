import styles from "../style";
import contactImg from "../assets/contact.png";

const Contact = () => {
  return (
    <div className={`${styles.paddingY}`}>
      <div className="flex flex-col sm:flex-row items-center jsuttify-start">
        <h2
          className={`${styles.heading2} bg-primary px-2 sm:mr-10 mr-0 mb-5 sm:mb-0 rounded-lg`}
        >
          Contact Us
        </h2>
        <p className={`${styles.paragraph} text-black max-w-[600px]`}>
          Connect with us to discuss your Digital Marketing Needs.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-start w-full md:rounded-[35px]  md:px-10 md:py-12 md:bg-dimWhite mt-5 md:mt-10 relative">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center ">
          <form className="flex flex-col gap-4 w-full rounded-[35px] px-6 py-8 md:p-0 bg-dimWhite">
            <div className="flex items-center justify-between md:justify-start md:px-0 px-5 text-space text-[16px] mb-5">
              <div class="flex items-center md:mr-5 mr-0">
                <input
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-primary dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label class="ms-2 text-space ">Say Hi</label>
              </div>
              <div class="flex items-center">
                <input
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label class="ms-2  text-space">Disabled checked</label>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label for="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                className="px-5 py-3  rounded-xl border-[1px] border-secondary"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label for="name">Email*</label>
              <input
                type="email"
                placeholder="Your Email"
                className="px-5 py-3  rounded-xl border-[1px] border-secondary"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label for="name">Message*</label>
              <textarea
                placeholder="Your Message"
                className="px-5 py-3  rounded-xl h-32 border-[1px] border-secondary"
                required
              ></textarea>
            </div>
          </form>
          <button
            type="submit"
            className="bg-secondary mt-5 w-full rounded-xl text-white px-4 py-4 text-[18px] md:text-[22px]  hover:bg-secondary transition-colors"
          >
            Send Message
          </button>
        </div>
        <div className="absolute top-0 right-0 h-full">
            <img
                src={contactImg}
                alt="Contact Us"
                className="w-full h-full  object-cover hidden md:block"
            />
        </div>
      </div>
    </div>
  );
};

export default Contact;
