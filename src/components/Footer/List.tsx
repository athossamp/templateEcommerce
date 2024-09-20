import s from "./List.module.css";

type ListItem = {
  title: string;
  links: string[];
};

type ListDisplayProps = {
  lists: ListItem[];
};

const ListFooter: React.FC<ListDisplayProps> = ({ lists }) => {
  return (
    <div className={s.listTotal}>
      {lists.map((item, index) => (
        <div key={index} className={s.uniqueList}>
          <h2>{item.title}</h2>
          <ul>
            {item.links.map((link, index) => (
              <li key={index}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export { ListFooter };
