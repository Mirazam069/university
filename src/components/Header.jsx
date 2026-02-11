import "./Header.css";
import { motion } from "framer-motion";
import {
  IoArrowForwardOutline,
  IoSchoolOutline,
  IoRibbonOutline,
  IoFlaskOutline,
  IoBookOutline,
} from "react-icons/io5";
import Video from "../images/universityVideo.mp4";

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

/* =========================
   MOTION VARIANTS (PRO)
========================= */
const easePro = [0.22, 1, 0.36, 1];

const pageStagger = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.12, // ✅ sekinroq ketma-ket
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

const fadeLeft = {
  hidden: { opacity: 0, x: -34, filter: "blur(10px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: easePro },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 34, filter: "blur(10px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: easePro },
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
      {/* VIDEO */}
      <motion.div className="hero-video" variants={fadeDown}>
        <video autoPlay muted loop playsInline className="hero-video-element">
          <source src={Video} type="video/mp4" />
        </video>
      </motion.div>

      {/* OVERLAY */}
      <motion.div
        className="hero-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, ease: easePro }}
      />

      <div className="hero-container">
        <div className="hero-grid">
          {/* LEFT */}
          <motion.div className="hero-left" variants={fadeLeft}>
            <motion.h1 className="hero-title" variants={fadeUp}>
              <span className="t-white">Welcome to International</span>{" "}
              <span className="t-green">Agriculture </span>
              <br />
              <span className="t-white">University</span>{" "}
            </motion.h1>

            <motion.p className="hero-desc" variants={fadeUp}>
              The International Agriculture University is a new state university located in Tashkent,
              operating in close relation with the Ministry of Agriculture of the Republic of Uzbekistan.
              The aim of this university is to provide high-quality teaching to young staff of the modern
              agri-food sector. IAU implements the program of a British partner university – Royal Agricultural
              University, so our graduates will receive a British diploma.
            </motion.p>

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

            {/* Pastdan mayin chiziq/shine */}
            <motion.div
              style={{
                marginTop: 18,
                height: 1,
                width: "min(520px, 100%)",
                background: "rgba(255,255,255,0.14)",
                borderRadius: 999,
                overflow: "hidden",
              }}
              variants={fadeUp}
            >
              <motion.div
                style={{
                  height: "100%",
                  width: "40%",
                  background: "rgba(255,255,255,0.35)",
                }}
                initial={{ x: "-120%" }}
                animate={{ x: "220%" }}
                transition={{ duration: 2.2, ease: easePro, delay: 1.0 }}
              />
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div className="hero-right" variants={fadeRight}>
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

                  <motion.div
                    className="hero-card-arrow"
                    initial={{ x: 0 }}
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.18 }}
                  >
                    →
                  </motion.div>
                </motion.button>
              ))}
            </motion.div>

            {/* Bonus: pastda mayin badge */}
            {/* <motion.div
              style={{
                marginTop: 16,
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 14px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.14)",
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(10px)",
                color: "rgba(255,255,255,0.92)",
                fontSize: 13,
              }}
              variants={fadeUp}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 999,
                  background: "#38d67a",
                  boxShadow: "0 0 0 6px rgba(56,214,122,0.12)",
                }}
              />
              Admissions open — apply in minutes
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
