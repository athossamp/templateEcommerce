import { Box, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import s from "./RowItemTabs.module.css";
import { RowItem } from "../RowItem/RowItem";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yprops(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}
type DataArray = {
  available: boolean;
  title: string;
  cutPrice: number;
  currentPrice: number;
  image: string;
};
type RowItemTabsProps = {
  customTheme: DataArray[][];
  imgThemeArrayList: string[];
  labels: string[];
};
function RowItemTabs({ customTheme, imgThemeArrayList, labels }: RowItemTabsProps) {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div className={s.tabsWrapper}>
      <div className={s.tabsContainer}>
        <div className={s.tabsHeaderWrapper}>
          <Tabs value={value} onChange={handleChange} className={s.tabsHeader}>
            <Tab label={labels[0]} {...a11yprops(0)} />
            <Tab label={labels[1]} {...a11yprops(1)} />
            <Tab label={labels[2]} {...a11yprops(2)} />
            <Tab label={labels[3]} {...a11yprops(3)} />
          </Tabs>
        </div>
        <div className={s.rowItemWrapper}>
          <CustomTabPanel value={value} index={0}>
            <RowItem theme={customTheme[0]} imgTheme={imgThemeArrayList[0]} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <RowItem theme={customTheme[1]} imgTheme={imgThemeArrayList[1]} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <RowItem theme={customTheme[2]} imgTheme={imgThemeArrayList[2]} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            <RowItem theme={customTheme[3]} imgTheme={imgThemeArrayList[3]} />
          </CustomTabPanel>
        </div>
      </div>
    </div>
  );
}

export default RowItemTabs;
