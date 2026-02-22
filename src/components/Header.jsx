import "./Header.css";
import { motion } from "framer-motion";
import {
  IoArrowForwardOutline,
  IoSchoolOutline,
  IoRibbonOutline,
  IoFlaskOutline,
  IoBookOutline,
} from "react-icons/io5";
import Campus from "../images/campus.PNG";

const cards = [
  {
    title: "Undergraduate",
    sub: "Browse the undergraduate degrees",
    icon: <IoSchoolOutline />,
    tone: "teal",
    from: "right",
  },
  {
    title: "Graduate",
    sub: "Browse the graduate degrees",
    icon: <IoRibbonOutline />,
    tone: "blue",
    from: "left",
  },
  {
    title: "Phd and DSc Programmes",
    sub: "Browse the programs",
    icon: <IoFlaskOutline />,
    tone: "green",
    from: "right",
  },
  {
    title: "Courses",
    sub: "Browse the courses",
    icon: <IoBookOutline />,
    tone: "blue2",
    from: "bottom",
  },
];

const easePro = [0.22, 1, 0.36, 1];

const pageStagger = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.12,
      delayChildren: 0.18,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 26, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: easePro },
  },
};

const fadeDown = {
  hidden: { opacity: 0, y: -18, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: easePro },
  },
};

const btnPop = {
  hidden: { opacity: 0, y: 22, scale: 0.98, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: easePro },
  },
};

const cardsWrap = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.14, delayChildren: 0.22 },
  },
};

function cardVariant(from) {
  if (from === "left") {
    return {
      hidden: { opacity: 0, x: -36, y: 10, scale: 0.98, filter: "blur(10px)" },
      show: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: { duration: 0.85, ease: easePro },
      },
    };
  }
  if (from === "right") {
    return {
      hidden: { opacity: 0, x: 36, y: 10, scale: 0.98, filter: "blur(10px)" },
      show: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: { duration: 0.85, ease: easePro },
      },
    };
  }
  if (from === "bottom") {
    return {
      hidden: { opacity: 0, y: 30, scale: 0.98, filter: "blur(10px)" },
      show: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: { duration: 0.85, ease: easePro },
      },
    };
  }
  return fadeUp;
}

export default function Header() {
  return (
    <motion.section
      className="hero"
      variants={pageStagger}
      initial="hidden"
      animate="show"
    >
      <motion.div className="hero-bg" variants={fadeDown}>
        <img
          src={Campus}
          alt="International Agriculture University campus"
          className="hero-bg-image"
        />
      </motion.div>

      <motion.div
        className="hero-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, ease: easePro }}
      />

      <div className="hero-container">
        <div className="hero-content">
          <motion.h1 className="hero-title-center" variants={fadeUp}>
            SCIENCE-BASED, PRACTICE-ORIENTED
          </motion.h1>

          <motion.button
            className="hero-btn"
            type="button"
            variants={btnPop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.18 }}
          >
            More about us <IoArrowForwardOutline />
          </motion.button>

          <motion.div className="hero-stack" variants={cardsWrap}>
            {cards.map((c) => (
              <motion.button
                key={c.title}
                className={`hero-card ${c.tone}`}
                type="button"
                variants={cardVariant(c.from)}
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.18 }}
              >
                <div className="hero-card-ic">{c.icon}</div>
                <div className="hero-card-txt">
                  <div className="hero-card-title">{c.title}</div>
                  <div className="hero-card-sub">{c.sub}</div>
                </div>

                <div className="hero-card-arrow">
                  <IoArrowForwardOutline />
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
