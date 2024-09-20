import { useSocials } from "../../hooks/useSocials/useSocials";
import s from "./Socials.module.css";
function Socials() {
  const socialNews = useSocials();
  return (
    <div className={s.socials}>
      <h1>Follow us on instagram for News, Offers & More!</h1>
      <div className={s.socialsWrapper}>
        {socialNews.map((item, index) => (
          <div key={index} className={s.socialsTotal}>
            <img src={`images/${item.image}`} />
            <p>{item.text}</p>
            <span>{item.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Socials;
