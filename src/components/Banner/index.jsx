import "./index.css";

export const Banner = ({ src, alt, title }) => {
  return (
  <figure>
    <img src={src} alt={alt} />
    <figcaption>{title}</figcaption>
</figure>
  );
};

