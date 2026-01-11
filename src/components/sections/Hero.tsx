import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { ComputersCanvas } from "../canvas";
import { avatar } from "../../assets";
import { config } from "../../constants/config";

const Hero = () => {
  return (
    <section className={`relative mx-auto h-screen w-full`}>
      <div
        className={`absolute inset-0 top-[120px] z-10 mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <div className="flex items-center">
            <div className="ml-6 mt-2 h-48 w-48 overflow-hidden rounded-full border-2 border-[#915EFF]/70 bg-[#1d1836] shadow-lg sm:h-56 sm:w-56">
              <img
                src={avatar}
                alt={`${config.hero.name} avatar`}
                className="h-full w-full object-cover object-[50%_5%]"
                loading="lazy"
              />
            </div>
          </div>

          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">{config.hero.name}</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            {config.hero.p[0]} <br className="hidden sm:block" />
            {config.hero.p[1]}
          </p>
        </div>
      </div>

      <div className="absolute inset-0 z-0">
        <ComputersCanvas />
      </div>

      <div className="xs:bottom-10 absolute bottom-32 z-10 flex w-full items-center justify-center">
        <a href="#about">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="bg-secondary mb-1 h-3 w-3 rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
