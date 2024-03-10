import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import {
  CheckCircle,
  Send,
  PieChart,
  Settings,
  Mode
} from '@mui/icons-material';
export default function Footer() {
  const [value, setValue] = React.useState(3);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example" sx={{ width: '100%' }}>
      <Tab icon={<Mode />} label="Write" value={0} sx={{ minWidth: 0, width: '20%' }}/>
      <Tab icon={<CheckCircle />} label="FAVORITES" value={1} sx={{ minWidth: 0, width: '20%' }}/>
      <Tab icon={<Send />} label="Report" value={2} sx={{ minWidth: 0, width: '20%' }}/>
      <Tab icon={<PieChart />} label="NEARBY" value={3} sx={{ minWidth: 0, width: '20%' }}/>
      <Tab icon={<Settings />} label="Setting" value={4} sx={{ minWidth: 0, width: '20%' }}/>
    </Tabs>
  );
}
