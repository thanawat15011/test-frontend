import * as React from "react";
import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import { typeView } from "../component/store/store";
import { useRecoilValue } from "recoil";
export default function Body({ children }) {
  let typeViewValue = useRecoilValue(typeView);
  console.log("bodfy", typeViewValue);
  return (
    <Paper
      sx={{
        maxWidth: "auto",
        margin: "auto",
        overflow: "hidden",
        height: "100vh",
        // textAlign: "center",
      }}
    >
      <Box sx={{ width: "100%", typography: "body1", }}>
        {children}
      </Box>
    </Paper>
  );
}
