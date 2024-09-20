import React from "react";
import { useLogos } from "../../hooks/useLogos/useLogos";
import s from "./LogosRow.module.css";
function LogosRow() {
  const logos = useLogos();
  return (
    <div className={s.logosRowTotal}>
      {logos.map((item, index) => (
        <img key={index} src={`images/${item.image}`} />
      ))}
    </div>
  );
}

export default LogosRow;
