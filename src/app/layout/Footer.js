"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Paper from '@mui/material/Paper';
import {
  CheckCircle,
  Send,
  PieChart,
  Settings,
  Mode
} from '@mui/icons-material';
export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Write" icon={<Mode />} />
        <BottomNavigationAction label="Favorites" icon={<CheckCircle />} /> {/* รูปไม่ชัด */}
        <BottomNavigationAction label="Report" icon={<Send />} />
        <BottomNavigationAction label="Report" icon={<PieChart />} />{/* รูปไม่ชัด */}
        <BottomNavigationAction label="Setting" icon={<Settings />} />
      </BottomNavigation>
      </Paper>
  );
}