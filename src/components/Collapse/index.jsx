import "./index.css";
import arrow from "@/assets/ArrowCollapse.svg";

export const Collapse = ({ title, children, className = "" }) => {
  return (
    <details className={className}>
      <summary>
        <h2>{title}</h2>
        <img src={arrow} alt="" />
      </summary>

      <div>{children}</div>
    </details>
  );
};