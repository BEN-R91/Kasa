import "./index.css";

export const CardHome = ({ title, cover }) => {
  return (
    <article>
      <img src={cover} alt={title} />
      <h2>{title}</h2>
    </article>
  );
};