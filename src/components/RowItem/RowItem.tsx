import s from "./RowItem.module.css";
type DataArray = {
  available: boolean;
  title: string;
  cutPrice: number;
  currentPrice: number;
  image: string;
};
type RowItemProps = {
  theme: DataArray[];
  imgTheme?: string;
};

function RowItem({ theme, imgTheme }: RowItemProps) {
  return (
    <div className={s.rowItemTotal}>
      <div className={s.rowItemMargin}>
        <div className={s.rowItemImg}>
          <img src={`images/${imgTheme}`} />
        </div>
        <div className={s.rowItemItems}>
          {theme.map((item) => (
            <div className={s.rowSingleItem}>
              <div className={s.availability}>
                {item.available ? (
                  <p className={s.available}>available in stock</p>
                ) : (
                  <p className={s.unavailable}>Out of stock</p>
                )}
              </div>
              <img className={s.rowSingleItemImg} src={`images/${item.image}`} />
              <div className={s.rowSingleItemDescription}>
                <p className={s.productReview}>
                  <img src="icons/stars.svg" alt="" /> Reviews(4){" "}
                </p>

                <p className={s.rowItemTitle}>{item.title}</p>
                <div className={s.rowSingleItemValue}>
                  <p className={s.rowItemCutPrice}>${item.cutPrice}</p>
                  <p>${item.currentPrice}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { RowItem };
