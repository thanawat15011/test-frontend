"use client";
import { useState } from "react";
import Paperbase from "./layout/page";
import {
  Box,
  Tab,
  Tabs,
  Typography
} from "@mui/material";
import {
  TabPanel,
  TabContext
} from "@mui/lab";
import Engagement from "./component/Engagement";
import CardComponent from "./component/CardComponent";
import ChartComponent from "./component/ChartComponent";
import { typeView } from "./component/store/store";
import { useRecoilValue,RecoilRoot } from "recoil";
export default function Home() {
  const [value, setValue] = useState(1);
  const typeViewValue = useRecoilValue(typeView)
  console.log('typeViewValue', typeViewValue)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Paperbase>
      <TabContext value={value}>
        <Box sx={{ width: "100%", bgcolor: "background.paper",borderBottom: "1px solid black", }}>
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            sx={{ borderBottom: 1, borderColor: "divider" }}
          >
            <Tab
              label="Submission"
              value={0}
              sx={{ borderBottom: "1px solid black" }}
            />
            <Tab
              label="Engagement"
              value={1}
              sx={{ borderBottom: "1px solid black" }}
            />
          </Tabs>
          <TabPanel value={0}>
            {/* <Typography>Item One Panel</Typography> */}
          </TabPanel>
          <TabPanel value={1}>
            <Engagement/>
          </TabPanel>
        </Box>
      </TabContext>
      <Box>
        {typeViewValue == 0 ? <CardComponent/>: <ChartComponent/>}
      
      </Box>
    </Paperbase>
  );
}
