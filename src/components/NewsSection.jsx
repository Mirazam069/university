// src/components/NewsSection/NewsSection.jsx
import "./NewsSection.css";
import { motion } from "framer-motion";
import {
  IoCalendarOutline,
  IoEyeOutline,
  IoChevronForwardOutline,
} from "react-icons/io5";
import image1 from "../images/newsBig.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/events.jpg";

export default function NewsSection() {
  const easePro = [0.22, 1, 0.36, 1];

  const wrap = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.25, // 🔥 juda sekin ketma-ket
        delayChildren: 0.3,
      },
    },
  };

  const fadeDown = {
    hidden: { opacity: 0, y: -40, filter: "blur(12px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: easePro },
    },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -60, y: 20, filter: "blur(12px)" },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: easePro },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 60, y: 20, filter: "blur(12px)" },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: easePro },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 60, scale: 0.98, filter: "blur(12px)" },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: easePro },
    },
  };

  const featured = {
    img: image1,
    title:
      "Spiritual and Enlightenment Hour at the International Agriculture University – with the Rector",
    date: "11 February, 2026",
    views: "190",
  };

  const gridCards = [
    {
      id: 1,
      img: image2,
      title:
        "Spiritual and Enlightenment Hour at the International Agriculture University – with the Rector",
      date: "6 February, 2026",
      views: "99",
    },
    {
      id: 2,
      img: image3,
      title:
        "Spiritual and Enlightenment Hour at the International Agriculture University – with the Rector",
      date: "5 February, 2026",
      views: "89",
    },
    {
      id: 3,
      img: image4,
      title:
        "Spiritual and Enlightenment Hour at the International Agriculture University – with the Rector",
      date: "3 February, 2026",
      views: "110",
    },
    {
      id: 4,
      img: image5,
      title:
        "Spiritual and Enlightenment Hour at the International Agriculture University – with the Rector",
      date: "3 February, 2026",
      views: "121",
    },
  ];

  return (
    <motion.section
      className="newsx"
      variants={wrap}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="newsx-container">
        {/* HEAD */}
        <motion.div className="newsx-head" variants={fadeDown}>
          <h2 className="newsx-title">
            University <span>News</span>
          </h2>

          <a className="newsx-more" href="/">
            See more <IoChevronForwardOutline />
          </a>
        </motion.div>

        <div className="newsx-grid newsx-grid--noSide">
          {/* FEATURED */}
          <motion.article className="newsx-feature" variants={fadeLeft}>
            <a className="newsx-media" href="/" aria-label={featured.title}>
              <img src={featured.img} alt={featured.title} />
              <div className="newsx-metaBar">
                <span className="newsx-chip">
                  <IoCalendarOutline /> {featured.date}
                </span>
                <span className="newsx-chip">
                  <IoEyeOutline /> {featured.views}
                </span>
              </div>
            </a>

            <a className="newsx-h3" href="/">
              {featured.title}
            </a>
          </motion.article>

          {/* 4 CARDS */}
          <motion.div className="newsx-mid newsx-mid--wide" variants={wrap}>
            {gridCards.map((c, index) => (
              <motion.article
                className="newsx-card"
                key={c.id}
                variants={
                  index % 2 === 0
                    ? fadeRight // navbat bilan o‘ngdan
                    : fadeUp    // pastdan
                }
              >
                <a className="newsx-media sm" href="/" aria-label={c.title}>
                  <img src={c.img} alt={c.title} />
                  <div className="newsx-metaBar sm">
                    <span className="newsx-chip">
                      <IoCalendarOutline /> {c.date}
                    </span>
                    <span className="newsx-chip">
                      <IoEyeOutline /> {c.views}
                    </span>
                  </div>
                </a>

                <a className="newsx-h4" href="/" title={c.title}>
                  {c.title}
                </a>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
