import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
//import AnchorLink from "react-anchor-link-smooth-scroll";

//Responsive
const Landing = ({ setSelectedPage }) => {
    const isAboveLarge = useMediaQuery("(min-width: 1060px)");
    return (
        <section
            id="home"
            className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
        >
            {/* Images with the border and saturation when we hover the image */}
            <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
                {isAboveLarge ? (
                    <div 
                        className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-pink before:z-[0]"
                    >
                        <img
                            alt="profile"
                            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
                            src="assets/profile-image.png"
                        />
                    </div>
                ) : (
                    <img
                        alt="profile"
                        className="z-10 w-full max-w-[400px] md:max-w-[600px]"
                        src="assets/profile-image.png"
                    />
                )}
            </div>

            {/* Main text */}
            <div className="z-30 basis-2/5 mt-12 md:mt-32">

                
                {/* Headings with animation */}
                
                <motion.div
                    initial="hidden"
                //   When we get to this point in the page will run a transition
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.9 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <p className="text-6xl font-playfair z-10 text-center md:text-start">
                        Angelica {""}
                        <span
                            className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
              before:absolute before:-left-[8px] before:-top-[20px] before:z-[-1]"
                        >
                            Ibarra
                        </span>
                    </p>

                    <p className="mt-10 mb-7 text-sm text-center md:text-start">
                        Web Development | Graphic and Web design
                    </p>
                </motion.div>

                {/* Action call */}
                <motion.div
                    className="flex mt-5 justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                   
                </motion.div>

                <motion.div
                    className="flex mt-5 justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <SocialMediaIcons />
                </motion.div>
            </div>
        </section>
    );
};

export default Landing;
