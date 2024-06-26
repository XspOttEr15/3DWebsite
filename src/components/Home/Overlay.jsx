import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import useSound from "use-sound";

export function Overlay() {
  const transition = { type: "spring", duration: 0.8 };
  const soundUrl = "/sound_effects/ButtonPush.mp3";
  const [play] = useSound(soundUrl);
  const config = {
    initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0.5 } },
    animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
    exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } },
  };
  return (
    <div className="absolute z-30  lg:left-[25%] right-[25%]  md:left-[50%] md:top-[70%] lg:top-[70%] ">
      <motion.header
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
      ></motion.header>
      <AnimatePresence>
        {
          <motion.section
            key="main"
            {...config}
            className="pl-12 xl:pl-16 lg:pl-0 sm:pl-0 ssm:pl-0 md:pl-0"
          >
            <div className="section--container">
              <div className="support--content">
                <motion.div
                  key="p"
                  initial={{ x: -700, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{
                    type: "spring",
                    damping: 7,
                    stiffness: 30,
                    restDelta: 0.001,
                    duration: 0.8,
                    delay: 0.2,
                    delayChildren: 0.2,
                  }}
                >
                  
                  
                  <Link to={"/roomchapterone"}>
                    <button
                      style={{
                        cursor:
                          'url("/images/CustomMouses/pointer.png"), pointer',
                        backgroundColor: "rgb(26, 162, 125)",
                      }}
                      onClick={play}
                      className="text-white  bg-font-medium rounded-2xl  text-6xl px-20 py-5 text-center mr-5 mb-5 w-full"
                    >
                      Let's Begin 
                    </button>
                    
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.section>
        }
      </AnimatePresence>
    </div>
  );
}
