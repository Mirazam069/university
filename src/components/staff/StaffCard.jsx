import { IoMailOutline } from "react-icons/io5";
import "./StaffCard.css";

export default function StaffCard({ member }) {
  return (
    <article className="stc-card">
      <div className="stc-photoWrap">
        <img src={member.photoUrl} alt={member.name} className="stc-photo" loading="lazy" />
      </div>

      <div className="stc-body">
        <h3 className="stc-name">{member.name}</h3>
        <div className="stc-line" />
        <p className="stc-position">{member.position}</p>

        {member.email ? (
          <a className="stc-email" href={`mailto:${member.email}`}>
            <span className="stc-emailIcon">
              <IoMailOutline />
            </span>
            <span>{member.email}</span>
          </a>
        ) : null}
      </div>
    </article>
  );
}
