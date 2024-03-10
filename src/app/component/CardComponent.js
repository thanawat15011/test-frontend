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
import IosShareIcon from '@mui/icons-material/IosShare';
export default function CardComponent() {
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
        <Tooltip title="" sx={{color:"blue"}}>
          <IconButton>
            <IosShareIcon />
          </IconButton>
        </Tooltip>
        </Box>
      </Grid>
    </Grid>
      <Grid container spacing={2} sx={{ textAlign: "center" }}>
        <Grid item xs={6}>
          <Card variant="outlined">
            <Grid>
              <Grid item xs={12} sx={{ marginBottom: 5, marginTop: 2 }}>
                <Tooltip title="" sx={{ color: "blue" }}>
                  <IconButton>
                    <ThumbUpOffAltIcon />
                    Like
                  </IconButton>
                </Tooltip>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h3">34</Typography>
              </Grid>
              <Grid item xs={12}>
                Likes
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card variant="outlined">
            <Grid>
              <Grid item xs={12} sx={{ marginBottom: 5, marginTop: 2 }}>
                <Tooltip title="" sx={{ color: "blue" }}>
                  <IconButton>
                    <ChatBubbleOutlineIcon />
                    Comment
                  </IconButton>
                </Tooltip>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h3">56</Typography>
              </Grid>
              <Grid item xs={12}>
                Comments
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card variant="outlined">
            <Grid>
              <Grid item xs={12} sx={{ marginBottom: 5, marginTop: 2 }}>
                <Tooltip title="" sx={{ color: "blue" }}>
                  <IconButton>
                    <CardGiftcardIcon />
                    Point
                  </IconButton>
                </Tooltip>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h3">450</Typography>
              </Grid>
              <Grid item xs={12}>
                Point
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card variant="outlined">
            <Grid>
              <Grid item xs={12} sx={{ marginBottom: 5, marginTop: 2 }}>
                <Tooltip title="" sx={{ color: "blue" }}>
                  <IconButton>
                    <DiamondIcon />
                    Diamond
                  </IconButton>
                </Tooltip>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h3">40</Typography>
              </Grid>
              <Grid item xs={12}>
                Diamond
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
