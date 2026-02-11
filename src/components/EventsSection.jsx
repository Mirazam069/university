// src/components/EventsSection/EventsSection.jsx
import "./EventsSection.css";
import { motion } from "framer-motion";
import { IoLocationOutline, IoChevronForwardOutline } from "react-icons/io5";

export default function EventsSection() {
  const easePro = [0.22, 1, 0.36, 1];

  const wrap = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.22,
        delayChildren: 0.28,
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

  const cardFromLeft = {
    hidden: { opacity: 0, x: -70, y: 16, filter: "blur(12px)" },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.25, ease: easePro },
    },
  };

  const cardFromRight = {
    hidden: { opacity: 0, x: 70, y: 16, filter: "blur(12px)" },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.25, ease: easePro },
    },
  };

  const events = [
    {
      id: 1,
      title: "First Central Asia Conference on Sports Science invites...",
      place: "New Uzbekistan University",
      start: "28 April",
      end: "30 April",
      year: "2026",
      time: "09:00",
    },
    {
      id: 2,
      title: "First Central Asia Conference on Sports Science invites...",
      place: "New Uzbekistan University",
      start: "28 April",
      end: "30 April",
      year: "2026",
      time: "09:00",
    },
    {
      id: 3,
      title: "First Central Asia Conference on Sports Science invites...",
      place: "New Uzbekistan University",
      start: "28 April",
      end: "30 April",
      year: "2026",
      time: "09:00",
    },
    {
      id: 4,
      title: "First Central Asia Conference on Sports Science invites...",
      place: "New Uzbekistan University",
      start: "28 April",
      end: "30 April",
      year: "2026",
      time: "09:00",
    },
  ];

  return (
    <motion.section
      className="evx"
      variants={wrap}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
    >
      <div className="evx-container">
        <motion.div className="evx-head" variants={fadeDown}>
          <h2 className="evx-title">
            Upcoming <span>Events</span>
          </h2>

          <a className="evx-more" href="/">
            See more <IoChevronForwardOutline />
          </a>
        </motion.div>

        <div className="evx-trackWrap">
          <motion.div className="evx-track" role="list" variants={wrap}>
            {events.map((e, idx) => (
              <motion.article
                className="evx-card"
                key={e.id}
                role="listitem"
                variants={idx % 2 === 0 ? cardFromLeft : cardFromRight}
              >
                <div className="evx-left">
                  <h3 className="evx-h3" title={e.title}>
                    {e.title}
                  </h3>

                  <div className="evx-divider" />

                  <div className="evx-loc">
                    <span className="evx-locIc">
                      <IoLocationOutline />
                    </span>
                    <span className="evx-locTx">{e.place}</span>
                  </div>
                </div>

                <div className="evx-right" aria-label="Event date and time">
                  <div className="evx-date">
                    <div className="evx-dateTop">
                      <span>{e.start}</span>
                      <span>{e.end}</span>
                    </div>
                    <div className="evx-year">{e.year}</div>
                  </div>

                  <div className="evx-time">{e.time}</div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
