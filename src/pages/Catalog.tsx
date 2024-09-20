import { useEffect, useMemo, useState } from "react";
import s from "./Catalog.module.css";
import { useCatalogList } from "../hooks/useCatalogList/useCatalogList";
import { ItemCard } from "../components/ItemCard/ItemCard";
import { ItemList } from "../components/ItemList/ItemList";
function Catalog() {
  const catalogList = useCatalogList();

  const [itemList, setItemList] = useState<
    { available: boolean; category: string; title: string; cutPrice: number; currentPrice: number; image: string }[]
  >([]);
  const [selectCategory, setSelectCategory] = useState<string>();
  const [uniqueCategories, setUniqueCategories] = useState<string[]>([]);
  const [listView, setListView] = useState<"cards" | "list">("cards");
  const [isCardActive, setIsCardActive] = useState<boolean>(true);
  const [isListActive, setIsListActive] = useState<boolean>(false);

  useEffect(() => {
    const uniqueCategorySet = new Set<string>();
    catalogList.forEach((item) => uniqueCategorySet.add(item.category));
    const uniqueCategoryArray = Array.from(uniqueCategorySet);
    setUniqueCategories(uniqueCategoryArray);
  }, []);
  useEffect(() => {
    setItemList(catalogList);
  }, []);

  function getFilteredList() {
    if (!selectCategory) {
      return itemList;
    }
    return itemList.filter((item) => item.category === selectCategory);
  }
  const filteredList = useMemo(getFilteredList, [selectCategory, itemList]);

  function handleCategoryChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectCategory(event.target.value);
  }
  function handleCardView() {
    setListView("cards");
    setIsListActive(false);
    setIsCardActive(true);
  }
  function handleListView() {
    setListView("list");
    setIsCardActive(false);
    setIsListActive(true);
  }
  return (
    <div>
      <div className={s.viewChangerWrapper}>
        <div className={s.viewChanger}>
          <button className={`${s.buttonViewCard} ${isCardActive ? s.active : ""}`} onClick={handleCardView}>
            <img src="icons/card-view.svg" />
          </button>
          <button className={`${s.buttonViewList} ${isListActive ? s.active : ""}`} onClick={handleListView}>
            <img src="icons/list-view.svg" />
          </button>
        </div>
      </div>

      <div className={s.catalog}>
        <div className={s.filterWrapper}>
          <div className={s.filter}>
            <h3>Filter</h3>
            <select className={s.selectFilter} onChange={handleCategoryChange}>
              <option value="">Todas as categorias</option>
              {uniqueCategories.sort().map((category) => (
                <option value={category} key={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          {listView === "cards" ? (
            <div className={s.itemCards}>
              {filteredList.map((item, index) => (
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
          ) : (
            <div className={s.itemList}>
              {filteredList.map((item, index) => (
                <ItemList
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
          )}
        </div>
      </div>
    </div>
  );
}

export { Catalog };
/*adicionar filtro de preço*/
/*criar view para mobile*/
/*adicionar sistema de paginas*/
