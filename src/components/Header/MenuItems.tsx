import { useState } from "react";
import Dropdown from "./Dropdown";
import "./Header.css";
import { useCatalogList } from "../../hooks/useCatalogList/useCatalogList";
export const MenuItemList = [
  {
    title: "Laptops",
    url: "/laptops",
    submenu: [
      {
        title: "Item Catalog",
        url: "/catalog",
        submenu: [
          {
            title: "submenu 1",
            url: "submenu1",
            submenu: [
              {
                title: "Catalogo",
                url: "catalog"
              },
              {
                title: "submenu do submenu 2",
                url: "submenu2"
              }
            ]
          },
          {
            title: "submenu 2",
            url: "submenu1"
          },
          {
            title: "submenu 3",
            url: "submenu1"
          },
          {
            title: "submenu 4",
            url: "submenu1"
          }
        ]
      },
      {
        title: "MSI Workstation Series",
        url: "menu1",
        submenu: [
          {
            title: "submenu 1",
            url: "submenu1",
            submenu: [
              {
                title: "Catalogo",
                url: "catalog"
              },
              {
                title: "submenu do submenu 2",
                url: "submenu2"
              }
            ]
          },
          {
            title: "submenu 2",
            url: "submenu1"
          },
          {
            title: "submenu 3",
            url: "submenu1"
          },
          {
            title: "submenu 4",
            url: "submenu1"
          }
        ]
      },
      {
        title: "MSI Prestige Series",
        url: "menu1"
      },
      {
        title: "Gaming Notebooks",
        url: "menu1"
      },
      {
        title: "Tablets And Pads",
        url: "menu1"
      },
      {
        title: "Netbooks",
        url: "menu1"
      },
      {
        title: "Infinity Gaming Notebooks",
        url: "menu1"
      }
    ]
  },
  {
    title: "Desktop PCs",
    url: "/desktop-pcs"
  },
  {
    title: "Networking Devices",
    url: "/devices"
  },
  {
    title: "Printers & Scanners",
    url: "/printers-scanners"
  },
  {
    title: "PC Parts",
    url: "/pc-parts"
  },
  {
    title: "All Other Products",
    url: "/products"
  },
  {
    title: "Repairs",
    url: "/repairs"
  }
];
interface MenuItemProps {
  items: {
    title: string;
    url?: string;
    submenu?: Array<{ title: string; url: string }>;
  };
  depthLevel: number;
}

const MenuItems: React.FC<MenuItemProps> = ({ items, depthLevel }) => {
  const cardItems = useCatalogList();
  const [dropdown, setDropdown] = useState(true);
  // const ref = useRef<HTMLLIElement | null>(null);
  // useEffect(() => {
  //   const handler = (event: Event) => {
  //     if (dropdown && ref.current && !ref.current.contains(event.target as Node)) {
  //       setDropdown(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handler);
  //   document.addEventListener("touchstart", handler);
  //   return () => {
  //     document.removeEventListener("mousedown", handler);
  //     document.removeEventListener("touchstart", handler);
  //   };
  // }, [dropdown]);

  return (
    <li className="menu-items">
      {items.submenu ? (
        <>
          <a type="button" aria-haspopup="menu" onClick={() => setDropdown((prev) => !prev)}>
            {items.title}
            {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
          </a>
          <Dropdown depthlevel={depthLevel} dropdown={dropdown} submenus={items.submenu} theme={cardItems} />
        </>
      ) : (
        <a href={items.url}>{items.title}</a>
      )}
    </li>
  );
};

export default MenuItems;
