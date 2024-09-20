import React from "react";
import { RowItemTabs } from "./RowItemTabs";

interface DataArray {
  available: boolean;
  title: string;
  cutPrice: number;
  currentPrice: number;
  image: string;
}
function ParentComponent({
  tabsData,
  a11yprops,
  theme,
  imgThemes // Accept imgThemes as a prop
}: {
  tabsData: { label: string }[];
  a11yprops: (index: number) => { id: string; "aria-controls": string };
  theme: DataArray[];
  imgThemes: string[]; // Define the prop type for imgThemes
}) {
  // ... (other code)

  return (
    <div>
      <RowItemTabs
        tabsData={tabsData} // Pass tabsData as a prop
        a11yprops={a11yprops}
        theme={theme}
        imgThemes={imgThemes} // Pass imgThemes as a prop
      />
    </div>
  );
}

export default ParentComponent;
