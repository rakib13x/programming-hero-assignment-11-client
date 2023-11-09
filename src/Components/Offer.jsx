import CountDown from "./CountDown";
import { motion } from "framer-motion";

const Offer = () => {
  const fadeInAnimationsVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <motion.li
      variants={fadeInAnimationsVariants}
      initial="initial"
      whileInView="animate"
    >
      <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
        {/* TEXT CONTAINER */}
        <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
          <h1 className="text-white text-5xl font-bold xl:text-6xl">
            Delicious Burger & French Fry
          </h1>
          <p className="text-white xl:text-xl">
            Progressively simplify effective e-toilers and process-centric
            methods of empowerment. Quickly pontificate parallel.
          </p>
          <CountDown />
          <button className="bg-red-500 text-white rounded-md py-3 px-6">
            Order Now
          </button>
        </div>
        {/* IMAGE CONTAINER */}
        <div className="flex-1 w-full relative md:h-full">
          <img
            src="/offerProduct.png"
            alt=""
            fill="true"
            className="object-contain"
          />
        </div>
      </div>
    </motion.li>
  );
};

export default Offer;
