/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import { Sidebar, Menu, MenuItem} from 'react-pro-sidebar';
// import 'react-pro-sidebar/dist/styles'
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link, Navigate } from 'react-router-dom';
import { tokens } from '../../theme';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
// import RecieptOutlinedIcon from "@mui/icons-material/RecieptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import CalenderTodayOutlinedIcon from "@mui/icons-material/CalenderTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { CalendarTodayOutlined, ReceiptOutlined } from '@mui/icons-material';
const Item = ({title, icon, selected, url, setSelected}) => {
  
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem active={selected === title} style={{ color: colors.grey[100]}} onClick={() => {
      setSelected(url)
      }} icon={icon} sx={{hover: ""}}>
     <Typography>{title}</Typography>
     <Navigate to={selected}/>
    </MenuItem>
  )
}


function SideBar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("/");

  return (
    <Box sx={{
      "& .ps-sidebar-root, .ps-sidebar-container":{
        background: `${colors.primary[400]}`,
        border: "none"
      },
      // "& .ps-menuitem-root":{
      //   background: `${colors.primary[900]}`,
      // },
    }}>
      <Sidebar isCollapsed={isCollapsed} style={{ height: "100vh"}} width={isCollapsed ? "4rem" : "100%"}>
        <Menu iconShape="square" menuItemStyles={{ hover: "none"}}>
          <MenuItem onClick={() => setIsCollapsed(!isCollapsed)}
          icon={isCollapsed ? <MenuOutlinedIcon/> : null}
          style={{
            margin: "10px 0 20px 0",
            color: colors.grey[100]
          }}
          >

            {
              !isCollapsed && 
              <Box display="flex" justifyContent="space-between" alignItems="center" ml="15px">
                <Typography variant='h3' color={colors.grey[100]}>ADMINIS</Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}><MenuOutlinedIcon/></IconButton>
              </Box>
            }
          </MenuItem>

          {
            !isCollapsed &&
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img alt='profile-user' width="100px" height="100px" src={`../../assets/user.png`} style={{borderRadius:'50%', cursor:"pointer"}}/>
              </Box>

              <Box textAlign="center" >
                <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{ mt: "10px"}} >Pooja</Typography>
                <Typography variant='h5' color={colors.greenAccent[500]}>VIP Admin</Typography>
              </Box>
            </Box>
          }

          <Box paddingLeft={isCollapsed ? undefined : "10px" }>
            <Item title="Dashboard" url="/" icon={<HomeOutlinedIcon/>} selected={selected} setSelected={setSelected} sx={{
        color: `${colors.blueAccent[500]} !important`,
        backgroundColor: "transparent !important",
      }}/>
            <Typography variant='h6' color={colors.grey[300]} sx={{m: "15px 0 5px 20px"}}>Data</Typography>
            <Item title="Manage Team" url="/team" icon={<PeopleOutlinedIcon/>} selected={selected} setSelected={setSelected}/>
            <Item title="Contacts Information" url="/contacts" icon={<ContactsOutlinedIcon/>} selected={selected} setSelected={setSelected}/>
            <Item title="Invoices Balances" url="/invoices" icon={<ReceiptOutlined/>} selected={selected} setSelected={setSelected}/>
            <Typography variant='h6' color={colors.grey[300]} sx={{m: "15px 0 5px 20px"}}>Pages</Typography>
            <Item title="Profile Form" url="/form" icon={<PersonOutlinedIcon/>} selected={selected} setSelected={setSelected}/>
            <Item title="Calender" url="/calender" icon={<CalendarTodayOutlined/>} selected={selected} setSelected={setSelected}/>
            <Item title="FAQ" url="/faq" icon={<HelpOutlinedIcon/>} selected={selected} setSelected={setSelected}/>
            <Typography variant='h6' color={colors.grey[300]} sx={{m: "15px 0 5px 20px"}}>Charts</Typography>
            <Item title="Bar Chart" url="/bar" icon={<BarChartOutlinedIcon/>} selected={selected} setSelected={setSelected}/>
            <Item title="Pie Chart" url="/pie" icon={<PieChartOutlinedIcon/>} selected={selected} setSelected={setSelected}/>
            <Item title="Geography Chart" url="/geography" icon={<MapOutlinedIcon/>} selected={selected} setSelected={setSelected}/>
            <Item title="Bar Chart" url="/bar" icon={<TimelineOutlinedIcon/>} selected={selected} setSelected={setSelected}/>
          </Box>

        </Menu>
      </Sidebar>

    </Box>
  )
}

export default SideBar
