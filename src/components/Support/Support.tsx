import { useSupports } from "../../hooks/useSupports/useSupports";
import s from "./Support.module.css";
function Support() {
  const support = useSupports();
  return (
    <div className={s.supportWrapper}>
      {support.map((item, index) => (
        <div key={index} className={s.supportItem}>
          <img src={`images/${item.image}`} className={s.supportItemImage} />
          <span className={s.supportItemTitle}>{item.title}</span>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export { Support };
