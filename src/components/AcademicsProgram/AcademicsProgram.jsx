import "./AcademicsProgram.css";
import {
  IoBookOutline,
  IoChevronForwardOutline,
  IoFlaskOutline,
  IoLibraryOutline,
  IoPeopleOutline,
  IoRibbonOutline,
  IoSchoolOutline,
  IoBusinessOutline,
} from "react-icons/io5";

const programCards = [
  {
    title: "Undergraduate",
    count: "9 programs",
    icon: <IoSchoolOutline />,
  },
  {
    title: "Graduate",
    count: "6 programs",
    icon: <IoRibbonOutline />,
  },
  {
    title: "Phd and DSc Programmes",
    count: "11 programs",
    icon: <IoFlaskOutline />,
  },
  {
    title: "Courses",
    count: "3 programs",
    icon: <IoBookOutline />,
  },
];

const statTiles = [
  {
    value: "1302",
    label: "Students",
    icon: <IoSchoolOutline />,
    tone: "tone-a",
  },
  {
    value: "200",
    label: "Staff",
    icon: <IoPeopleOutline />,
    tone: "tone-b",
  },
  {
    value: "3",
    label: "Schools",
    icon: <IoBusinessOutline />,
    tone: "tone-c",
  },
  {
    value: "69",
    label: "Faculty",
    icon: <IoLibraryOutline />,
    tone: "tone-d",
  },
];

export default function AcademicsProgram() {
  return (
    <section className="apg" aria-label="Academics and Program">
      <div className="apg__container">
        <header className="apg__head">
          <h2 className="apg__title">
            Academics & <span>Program</span>
          </h2>
          <div className="apg__divider" />
        </header>

        <div className="apg__cards">
          {programCards.map((card) => (
            <article className="apg-card" key={card.title}>
              <div className="apg-card__badge" aria-hidden="true">
                {card.icon}
              </div>

              <h3 className="apg-card__title">{card.title}</h3>
              <p className="apg-card__count">{card.count}</p>

              <a className="apg-card__more" href="/">
                See more <IoChevronForwardOutline />
              </a>
            </article>
          ))}
        </div>

        <div className="apg__bottom">
          <article className="apg-about">
            <p className="apg-about__label">Section</p>

            <h3 className="apg-about__title">
              About International
              <br />
              <span>Agriculture University</span>
            </h3>

            <p className="apg-about__text">
              International Agriculture University combines science-based education with
              practice-oriented learning, preparing students for modern agri-food systems,
              innovation, and global professional opportunities.
            </p>

            <a className="apg-about__btn" href="/">
              More about us <IoChevronForwardOutline />
            </a>
          </article>

          <div className="apg-stats">
            {statTiles.map((tile) => (
              <article className={`apg-stat ${tile.tone}`} key={tile.label}>
                <div className="apg-stat__icon" aria-hidden="true">
                  {tile.icon}
                </div>
                <div className="apg-stat__watermark" aria-hidden="true">
                  {tile.icon}
                </div>
                <p className="apg-stat__value">{tile.value}</p>
                <p className="apg-stat__label">{tile.label}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
