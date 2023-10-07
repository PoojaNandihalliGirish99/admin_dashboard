import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { tokens } from '../../theme'
import { mockDataTeam } from '../../data/mockData'
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from '@mui/icons-material'
import Header from '../../components/Header'

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID"},
    { field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell"},
    { field: "age", headerName: "Age", type: "number", headerAlign: "left", align: "left"},
    { field: "phone", headerName: "Phone Number" , flex: 1},
    { field: "email", headerName: "Email", flex: 1},
    { field: "access", headerName: "Access Level", headerAlign: "center", flex: 1, renderCell: ({row: {access}}) => {
      return (
        <Box width="60%" m="0 auto" p="5px" display="flex" justifyContent="center" backgroundColor={
          access === 'admin' ? colors.greenAccent[600] : colors.greenAccent[700] 
        } borderRadius="4px">
          {access === 'admin' && <AdminPanelSettingsOutlined/>}
          {access === 'manager' && <SecurityOutlined/>}
          {access === 'user' && <LockOpenOutlined/>}
          <Typography color={colors.grey[100]} sx={{ml: "5px"}}>{access}</Typography>
        </Box>
      )
    }},
  ]
  return (
    <Box m="20px">
      <Header title="TEAM" subTitle="Managing the team members"/>
      <Box
      mt="40px"
      height="75vh"
      width="100%"
      sx={{
        "& .MuiDataGrid-root":{
          border: "none"
        },
        "& .MuiDataGrid-cell":{
          border: "none"
        },
        "& .MuiDataGrid-columnHeaders":{
          backgroundColor: colors.blueAccent[700]
        },
        "& .name-column--cell":{
          color: colors.greenAccent[300]
        },
        "& .MuiDataGrid-virtualScrollbar":{
          backgroundColor: colors.primary[400]
        },
        "& .MuiDataGrid-footerContainer":{
          borderTop: "none",
          backgroundColor: colors.blueAccent[700]
        },
      }}
      >
        <DataGrid
        rows={mockDataTeam}
        columns={columns}
        />
      </Box>
    
    </Box>
  )
}

export default Team
