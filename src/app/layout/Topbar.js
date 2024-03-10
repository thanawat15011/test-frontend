import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Menu, Home } from "@mui/icons-material";
import { typeView } from "../component/store/store";
import { useRecoilValue } from "recoil";

export default function ButtonAppBar() {
  let typeViewValue = useRecoilValue(typeView)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Home />
          </IconButton>
          {/* <FormControl fullWidth sx={{ maxWidth: { xl: 140, md: 120,xs:100 } }}>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="Age"
              // onChange={handleChange}
              sx={{ width: '100%' }} 
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl> */}
          <Menu />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
