import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import "./Card.css";
import { useCallback } from "react";

const products = [
  {
    title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
    image: "images/tablet.png",
    oldValue: "R$499.99",
    newValue: "R$399.00",
    isAvailable: true
  },
  {
    title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
    image: "images/black-cpu.png",
    oldValue: "R$499.99",
    newValue: "R$399.00",
    isAvailable: false
  },
  {
    title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
    image: "images/cpu.png",
    oldValue: "R$499.99",
    newValue: "R$399.00",
    isAvailable: true
  },
  {
    title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
    image: "images/notebook.png",
    oldValue: "R$499.99",
    newValue: "R$399.00",
    isAvailable: true
  },
  {
    title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
    image: "images/tablet.png",
    oldValue: "R$499.99",
    newValue: "R$399.00",
    isAvailable: true
  },
  {
    title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
    image: "images/cpu.png",
    oldValue: "R$499.99",
    newValue: "R$399.00",
    isAvailable: true
  },
  {
    title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
    image: "images/notebook.png",
    oldValue: "R$499.99",
    newValue: "R$399.00",
    isAvailable: true
  },
  {
    title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
    image: "images/notebook.png",
    oldValue: "R$499.99",
    newValue: "R$399.00",
    isAvailable: true
  },
  {
    title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
    image: "images/tablet.png",
    oldValue: "R$499.99",
    newValue: "R$399.00",
    isAvailable: true
  },
  {
    title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
    image: "images/notebook.png",
    oldValue: "R$499.99",
    newValue: "R$399.00",
    isAvailable: true
  },
  {
    title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
    image: "images/notebook.png",
    oldValue: "R$499.99",
    newValue: "R$399.00",
    isAvailable: true
  }
];
function Card() {
  const options: EmblaOptionsType = { dragFree: true, containScroll: "trimSnaps" };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="offers">
      <div className="offers-title">
        <h2>New Products</h2>
      </div>

      <div className="products-card">
        <div className="embla__2">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container__2">
              {products.map((item, index) => (
                <div className="product" key={index}>
                  <div className="product-available">
                    {item.isAvailable ? (
                      <p className="available">Available in stock</p>
                    ) : (
                      <p className="unavailable">Out of stock</p>
                    )}
                  </div>
                  <div className="product-image">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="product-description">
                    <p className="product-review">
                      <img src="icons/stars.svg" alt="" /> Reviews(4){" "}
                    </p>
                    <span>{item.title}</span>
                    <div className="product-value">
                      <p className="old-value">{item.oldValue}</p>
                      <p>{item.newValue}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="embla__button">
              <button className="embla__prev__2" onClick={scrollPrev}>
                <img src="icons/arrow-prev.svg" alt="" />
              </button>
              <button className="embla__next__2" onClick={scrollNext}>
                <img src="icons/arrow-next.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
