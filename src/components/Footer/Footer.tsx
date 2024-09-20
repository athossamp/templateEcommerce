import { useListFooter } from "../../hooks/useListFooter/useListFooter";
import { ListFooter } from "./List";
import s from "./Footer.module.css";
import { useIconsFooter, useSocialsFooter } from "../../hooks/useIconsFooter/useIconsFooter";
function Footer() {
  const list = useListFooter();
  const icons = useIconsFooter();
  const socials = useSocialsFooter();
  return (
    <div className={s.totalFooter}>
      <div className={s.footerItems}>
        <h1>Sign up do our newsletter.</h1>
        <p>Be the first to hear about our latests offers.</p>
        <div className={s.footerList}>
          <ListFooter lists={list} />
        </div>
        <hr className={s.footerSeparator} />
        <div className={s.footerIcons}>
          <div>
            {socials.map((item, index) => (
              <img src={`images/${item}`} key={index} />
            ))}
          </div>
          <div>
            {icons.map((item, index) => (
              <img src={`images/${item}`} key={index} />
            ))}
          </div>
          <div>
            <p>Copyright &copy; 2023 Shop Pty.Ltd.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export { Footer };
