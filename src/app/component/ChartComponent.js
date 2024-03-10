import * as React from "react";
import {
  Box,
  Tab,
  Tabs,
  Typography,
  Grid,
  Button,
  Card,
  CardHeader,
  Avatar,
  Tooltip,
  IconButton,
} from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import DiamondIcon from "@mui/icons-material/Diamond";
import { useRecoilValue } from "recoil";
import { selectedDate } from "./store/store";
import IosShareIcon from "@mui/icons-material/IosShare";
import { LineChart } from '@mui/x-charts/LineChart';
export default function ChartComponent() {
  const selectedDateValue = useRecoilValue(selectedDate);
  console.log("selectedDateValue", selectedDateValue);
  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box sx={{ textAlign: "left" }}>
            {selectedDateValue.getDate()}{" "}
            {selectedDateValue.toLocaleString("en-US", { month: "long" })}{" "}
            {selectedDateValue.getFullYear()}
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ textAlign: "right" }}>
            <Tooltip title="" sx={{ color: "blue" }}>
              <IconButton>
                <IosShareIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={0} sx={{ width: "100%", textAlign:"center", marginBottom:2}}>
        <Grid item xs={3}>
          <Box>
            <Button
              color="primary"
              size="small"
              variant="outlined"
              sx={{ width: "100%" }}
              startIcon={<ThumbUpOffAltIcon/>}
            >
              Like
            </Button>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box>
            <Button
              color="primary"
              size="small"
              variant="outlined"
              sx={{ width: "100%" }}
              startIcon={<ChatBubbleOutlineIcon/>}
            >
              Comment
            </Button>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box>
            <Button
              color="primary"
              size="small"
              variant="outlined"
              sx={{ width: "100%" }}
              startIcon={<CardGiftcardIcon/>}
            >
              Point
            </Button>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box>
            <Button
              color="primary"
              size="small"
              variant="outlined"
              sx={{ width: "100%" }}
              startIcon={<DiamondIcon/>}
            >
              Diamond
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ textAlign: "center" }}>
      <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
      ]}
      width={500}
      height={300}
    />
      </Grid>
    </Box>
  );
}
