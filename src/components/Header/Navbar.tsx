import MenuItems, { MenuItemList } from "./MenuItems";

const Navbar = () => {
  return (
    <div>
      <ul>
        {MenuItemList.map((menu, index) => {
          const depthlevel = 0;
          return <MenuItems items={menu} key={index} depthLevel={depthlevel} />;
        })}
        <li></li>
      </ul>
    </div>
  );
};

export default Navbar;
