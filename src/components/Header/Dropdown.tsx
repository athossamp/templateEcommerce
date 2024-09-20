import { ItemCard } from "../ItemCard/ItemCard";
import "./Header.css";
import "./MenuItems";
import MenuItems from "./MenuItems";
interface useCustomBuildsTypes {
  available: boolean;
  category: string;
  title: string;
  cutPrice: number;
  currentPrice: number;
  image: string;
}
interface DropdownProps {
  dropdown: boolean;
  submenus: Array<{ title: string; url: string }>;
  theme: useCustomBuildsTypes[];
  depthlevel: number;
}
const logosDrop = [
  {
    image: "images/image 33.png"
  },
  {
    image: "images/image 33 (1).png"
  },
  {
    image: "images/image 33 (2).png"
  },
  {
    image: "images/image 33 (3).png"
  },
  {
    image: "images/image 33 (4).png"
  },
  {
    image: "images/image 33 (5).png"
  },
  {
    image: "images/image 33 (6).png"
  }
];
const Dropdown: React.FC<DropdownProps> = ({ submenus, dropdown, theme, depthlevel }) => {
  depthlevel = depthlevel + 1;
  // depthlevel < 2 ?
  const dropdownClass = depthlevel > 1 ? "dropdown-submenu" : "";
  return (
    <div>
      {depthlevel < 2 ? (
        <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
          <div className="dropdown-background">
            <div className="dropdown-menu-wrapper">
              <div className="dropdown-menu-box">
                {submenus.map((submenu, index) => (
                  <MenuItems depthLevel={depthlevel} items={submenu} key={index} />
                ))}
              </div>
              <div className="dropdown-menu-cards">
                {theme.slice(0, 3).map((item, index) => (
                  <ItemCard
                    available={item.available}
                    title={item.title}
                    category={item.category}
                    image={item.image}
                    cutPrice={item.cutPrice}
                    currentPrice={item.currentPrice}
                    key={index}
                  />
                ))}
              </div>
            </div>
            <div className="dropdown-logos">
              {logosDrop.map((item, index) => (
                <img src={item.image} key={index} />
              ))}
            </div>
          </div>
        </ul>
      ) : depthlevel < 3 ? (
        <ul className={`dropdown-2 ${dropdownClass} ${dropdown ? "show" : ""}`}>
          <div className="dropdown-background-2">
            {submenus.map((item, index) => (
              <MenuItems depthLevel={depthlevel} items={item} key={index} />
            ))}
          </div>
        </ul>
      ) : (
        <ul className={`dropdown-3 ${dropdownClass} ${dropdown ? "show" : ""}`}>
          <div className="dropdown-background-3">
            {submenus.map((item, index) => (
              <MenuItems depthLevel={depthlevel} items={item} key={index} />
            ))}
          </div>
        </ul>
      )}
    </div>
  );
};
export default Dropdown;
