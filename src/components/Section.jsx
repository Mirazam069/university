import "./Section.css";
import { motion } from "framer-motion";
import President from "../images/president.jpg"; // chap rasm
import Campus from "../images/campus.PNG"; // o‘ng fon rasm
import Pattern from "../images/sectionImage.jpg"; // 1-rasm ornament
import sectionLogo from "../images/navbarLogo.PNG";

export default function VisionSection() {
  const easePro = [0.22, 1, 0.36, 1];

  const wrap = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: { when: "beforeChildren", staggerChildren: 0.12, delayChildren: 0.12 },
    },
  };

  const leftImg = {
    hidden: { opacity: 0, x: -34, y: 12, filter: "blur(10px)" },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.9, ease: easePro },
    },
  };

  const rightPanel = {
    hidden: { opacity: 0, x: 34, y: 12, filter: "blur(10px)" },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.9, ease: easePro, delay: 0.05 },
    },
  };

  const content = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.85, ease: easePro },
    },
  };

  return (
    <motion.section
      className="vision-section"
      style={{ backgroundImage: `url(${Pattern})` }}
      variants={wrap}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="vision-container">
        <motion.div className="vision-card" variants={wrap}>
          {/* LEFT IMAGE */}
          <motion.div className="vision-left" variants={leftImg}>
            <img src={President} alt="President" />
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            className="vision-right"
            style={{ backgroundImage: `url(${Campus})` }}
            variants={rightPanel}
          >
            <div className="vision-overlay" />

            <motion.div className="vision-content" variants={content}>
              <img src={sectionLogo} alt="Section Logo" className="vision-logo" />

              <p>
                "O‘zbekiston Respublikasi Prezidentining PQ-237 qaroriga ko‘ra
                tashkil etilgan Xalqaro qishloq xo‘jaligi universiteti bugungi kunda
                Xalqaro Davlat universiteti sifatida faoliyat olib bormoqda.
                Universitet bitiruvchilari Buyuk Britaniya universiteti RAUning
                diplomiga ega bo‘lishadi, ushbu diplom Uzbekistonda tan olinadi"
              </p>

              <h4>Shavkat Mirziyoyev</h4>
              <span>President of the Republic Uzbekistan</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
