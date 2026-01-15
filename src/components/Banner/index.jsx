import "./index.css";

export const Banner = ({ src, title }) => {
  return (
    <figure className="banner">
      <img src={src} alt=""/>
      <figcaption>{title}</figcaption>
    </figure>
  );
};

