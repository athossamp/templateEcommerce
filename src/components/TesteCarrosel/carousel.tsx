/* eslint-disable indent */
import embla from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useState, useEffect, cloneElement } from "react";
import cn from "classnames";
import s from "./caroulsel.module.css";

type CarouselFunctionSnap = {
  actualSnap: number;
  setActualSnap: (number: number) => void;
};

export function Carousel({
  isDotted = false,
  isAutoplay,
  children,
  startIndex = 0,
  dragfree = false,
  axis = "x",
  onSnapChange,
  customContainerClassName = "",
  customArrowBack,
  customArrowFoward,
  customDotClassName = "",
  customSelectedDotClassName = "",
  customLoaderClassName = "",
  customDotsContainerClassName = ""
}: {
  isDotted?: boolean;
  isAutoplay?: boolean;
  children: React.ReactNode | (({ actualSnap }: CarouselFunctionSnap) => React.ReactNode);
  startIndex?: number;
  dragfree?: boolean;
  onSnapChange?: (number: number) => void;
  axis?: "x" | "y";
  customContainerClassName?: string;
  customArrowBack?: JSX.Element;
  customArrowFoward?: JSX.Element;
  customDotClassName?: string;
  customSelectedDotClassName?: string;
  customLoaderClassName?: string;
  customDotsContainerClassName?: string;
}) {
  const [actualSnap, setActualSnap] = useState(startIndex);
  const [emblaRef, carousel] = embla(
    { align: "start", axis: axis, dragFree: dragfree, startIndex: startIndex, containScroll: "trimSnaps" },
    isAutoplay ? [Autoplay({ delay: 4000 })] : []
  );

  useEffect(() => {
    carousel?.on("select", (_e) => {
      setActualSnap(carousel.selectedScrollSnap());
      onSnapChange?.(carousel.selectedScrollSnap());
    });

    return () => {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      carousel?.off("select", () => {});
    };
  }, [carousel]);

  function handleScrollTo(index: number) {
    if (index < 0) {
      carousel?.scrollTo(0);
      setActualSnap(0);
      onSnapChange?.(0);
      return;
    }

    if (carousel?.slideNodes()?.length && carousel?.slideNodes()?.length - 1 < index) {
      carousel?.scrollTo(carousel?.slideNodes()?.length - 1);
      setActualSnap(carousel?.slideNodes()?.length - 1);
      onSnapChange?.(carousel?.slideNodes()?.length - 1);
      return;
    }

    carousel?.scrollTo(index);
    setActualSnap(index);
    onSnapChange?.(index);
  }

  return (
    <div className={s.carouselContainer}>
      {customArrowBack
        ? cloneElement(customArrowBack, {
            onClick: () => handleScrollTo(actualSnap - 1),
            className: cn({ [s.backX]: axis === "x", [s.backY]: axis === "y" }, customArrowBack.props.className)
          })
        : null}
      <div ref={emblaRef} className={cn(s.embla, customContainerClassName)}>
        <div className={cn(s.embla__container, { [s.embla__container__vertical]: axis === "y" })}>
          {typeof children === "function" ? children({ actualSnap, setActualSnap: handleScrollTo }) : children}
        </div>
      </div>
      {customArrowFoward
        ? cloneElement(customArrowFoward, {
            onClick: () => handleScrollTo(actualSnap + 1),
            className: cn({ [s.fowardX]: axis === "x", [s.fowardY]: axis === "y" }, customArrowFoward.props.className)
          })
        : null}
      {isDotted ? (
        <div className={cn(s.dots, customDotsContainerClassName)}>
          {carousel?.slideNodes().map((_, index) => (
            <div className={s.dotContainer} key={index}>
              {isAutoplay && actualSnap === index ? (
                <svg viewBox="0 0 30 30" height={20} width={20}>
                  <circle
                    className={cn(s.circle, customLoaderClassName)}
                    cx="15px"
                    cy="15px"
                    r="13px"
                    stroke="rgb(184, 139, 255)"
                    strokeWidth={3}
                    fill="none"
                  />
                </svg>
              ) : null}
              <button
                onClick={() => {
                  carousel?.scrollTo(index);
                  setActualSnap(index);
                }}
                type="button"
                className={cn(
                  s.dot,
                  { [customSelectedDotClassName ? customSelectedDotClassName : s.dotSelected]: actualSnap === index },
                  customDotClassName
                )}
              />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
