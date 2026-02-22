import { Link } from "react-router-dom";
import { IoChevronForwardOutline } from "react-icons/io5";
import "./DepartmentCard.css";

export default function DepartmentCard({ department }) {
  const preview = department.members.slice(0, 5);

  return (
    <article className="sdc-card">
      <Link className="sdc-link" to={`/staff/${department.id}`} aria-label={`Open ${department.title}`}>
        <h3 className="sdc-title">{department.title}</h3>
        <div className="sdc-line" />

        <div className="sdc-bottom">
          <div className="sdc-avatars" aria-hidden="true">
            {preview.map((member) => (
              <img
                key={member.name}
                src={member.photoUrl}
                alt=""
                className="sdc-avatar"
                loading="lazy"
              />
            ))}
          </div>

          <span className="sdc-more">
            See more <IoChevronForwardOutline />
          </span>
        </div>
      </Link>
    </article>
  );
}
