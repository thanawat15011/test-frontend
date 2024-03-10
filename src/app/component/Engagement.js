import * as React from "react";
import { Box, Tab, Tabs, Typography, Grid, Button } from "@mui/material";
import { TabPanel, TabContext } from "@mui/lab";
import BarChartIcon from "@mui/icons-material/BarChart";
import ListIcon from "@mui/icons-material/List";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DatePicker from "react-horizontal-datepicker";
import { format } from "date-fns";
import { useRecoilState } from 'recoil';
import { typeView,selectedDate,typeShowData } from './store/store';
export default function Engagement() {
  const [selectedDateValue, setSelectedDateValue] = useRecoilState(selectedDate);
  const [viewValue, setViewValue] = useRecoilState(typeView);
  const [typeShowDataValue, setTypeShowDataValue] = useRecoilState(typeShowData);
  const handleChange = (event, newValue) => {
    setViewValue(newValue);
  };
  const handleChangeTypeShowData = (event, newValue) => {
    setTypeShowDataValue(newValue);
  };

  const selectedDay = (val) => {
    setSelectedDateValue(val)
  };
  return (
    <Box>
      <TabContext value={viewValue}>
        <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Tabs
                value={viewValue}
                onChange={handleChange}
                centered
                sx={{ borderColor: "divider" }}
              >
                <Tab
                  label="Daily"
                  value={0}
                  sx={{ minWidth: 0, borderBottom: "1px solid black" }}
                />
                <Tab
                  label="Weekly"
                  value={1}
                  sx={{ minWidth: 0, borderBottom: "1px solid black" }}
                />
                <Tab
                  label="Monthly"
                  value={2}
                  sx={{ minWidth: 0, borderBottom: "1px solid black" }}
                />
              </Tabs>
            </Grid>
            <Grid item xs={4}>
              <Tabs value={typeShowDataValue} onChange={handleChangeTypeShowData} centered>
                <Tab
                  value={0}
                  icon={<BarChartIcon />}
                  sx={{ minWidth: 0 }}
                />

                <Tab
                  value={1}
                  icon={<ListIcon />}
                  sx={{ minWidth: 0 }}
                />
              </Tabs>
            </Grid>
          </Grid>
          <TabPanel
            value={0}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0px",

              "& button": {
                padding: "4px",
                minWidth: "unset",
              },
              "& .MuiTypography-root": {
                fontSize: "0.875rem",
              },
            }}
          >
            <DatePicker
              getSelectedDay={selectedDay}
              labelFormat={"MMMM"}
              color={""}
              enableDaysBefore={2}
            />
          </TabPanel>

          <TabPanel value={1}>
          <DatePicker
              getSelectedDay={selectedDay}
              labelFormat={"MMMM"}
              color={""}
              enableDaysBefore={2}
            />
          </TabPanel>
        </Box>
      </TabContext>
    </Box>
  );
}
