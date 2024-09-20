import s from "./ItemList.module.css";
type DataArray = {
  available: boolean;
  category: string;
  title: string;
  cutPrice: number;
  currentPrice: number;
  image: string;
};
function ItemList({ available, category, title, cutPrice, currentPrice, image }: DataArray) {
  return (
    <div className={s.listTotal}>
      <div key={category} className={s.singleItem}>
        <div className={s.singleCardImg}>
          <img src={`images/${image}`} />
        </div>
        <div className={s.singleItemTitleReview}>
          <p className={s.singleCardReview}>
            <img src="icons/stars.svg" alt="" /> Reviews(4){" "}
          </p>
          <p className={s.rowItemTitle}>{title}</p>
          <div className={s.availability}>
            {available ? (
              <p className={s.available}>
                <img src="icons/available.svg" /> Available in stock
              </p>
            ) : (
              <p className={s.unavailable}>
                <img src="icons/unavailable.svg" /> Out of stock
              </p>
            )}
          </div>
          <button className={s.singleItemAddCart}>
            <img src="icons/add-cart.svg" /> Add to cart
          </button>
        </div>

        <div className={s.singleItemValue}>
          <p className={s.singleItemCutPrice}>${cutPrice}</p>
          <p>${currentPrice}</p>
        </div>
      </div>
    </div>
  );
}

export { ItemList };
