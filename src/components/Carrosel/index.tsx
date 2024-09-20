import useEmblaCarousel from "embla-carousel-react";
import "./Carrosel.css";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";

function Carrosel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "center" }, [Autoplay()]);
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <div className="wrapperEmbla">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <img className="embla__slide__img" src="images/carrosel-home.png" alt="" />
          </div>
          <div className="embla__slide">
            <img className="embla__slide__img" src="images/carrosel-home.png" alt="" />
          </div>
          <div className="embla__slide">
            <img className="embla__slide__img" src="images/carrosel-home.png" alt="" />
          </div>
        </div>
        <button className="embla__prev" onClick={scrollPrev}>
          <img src="icons/arrow-prev.svg" alt="" />
        </button>
        <button className="embla__next" onClick={scrollNext}>
          <img src="icons/arrow-next.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Carrosel;
