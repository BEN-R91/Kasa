import "./index.css";

import { Link } from "react-router-dom";

export const CardHome = ({ id, title, cover }) => {
  return (
    <Link to={`/logement/${id}`}>
      <article>
        <img src={cover} alt={title} />
        <h2>{title}</h2>
      </article>
    </Link>
  );
};