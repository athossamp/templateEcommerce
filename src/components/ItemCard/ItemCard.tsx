import s from "./ItemCard.module.css";

type DataArray = {
  available: boolean;
  category: string;
  title: string;
  cutPrice: number;
  currentPrice: number;
  image: string;
};
function ItemCard({ available, category, title, cutPrice, currentPrice, image }: DataArray) {
  return (
    <div className={s.cardTotal}>
      <div key={category} className={s.singleCard}>
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
        <div className={s.singleCardImg}>
          <img src={`images/${image}`} />
        </div>

        <p className={s.singleCardReview}>
          <img src="icons/stars.svg" alt="" /> Reviews(4){" "}
        </p>
        <p className={s.rowItemTitle}>{title}</p>
        <div className={s.ingleItemValue}>
          <p className={s.singleItemCutPrice}>${cutPrice}</p>
          <p>${currentPrice}</p>
        </div>
      </div>
    </div>
  );
}

export { ItemCard };
