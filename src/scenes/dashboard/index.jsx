import React from 'react'
import Header from '../../components/Header'
import { Box, Button, IconButton, Typography, useTheme } from '@mui/material'
import { tokens } from '../../theme'
import { mockTransactions } from "../../data/mockData"
import { DownloadOutlined, EmailSharp, PersonAdd, PointOfSale, Traffic } from '@mui/icons-material'
import LineChart from '../../components/LineChart'
import BarChart from '../../components/BarChart'
import PieChart from '../../components/PieChart'
import GeographyChart from '../../components/GeographyChart'
import ProgressCircle from '../../components/ProgressCircle'
import StatBox from '../../components/StatBox'

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subTitle="Welcome to your dashboard" />


        <Box>
          <Button sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            p: "10px 20px"
          }}><DownloadOutlined sx={{ mr: "10px" }} /> Download Reports</Button>
        </Box>
      </Box>

      {/* Grids and Charts */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >

        {/* row 1 */}
        <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" justifyContent="center">
          <StatBox title="12,361" subTitle="Emails Sent" progress="0.85" increasePercentage="+14%" icon={<EmailSharp sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />} />
        </Box>
        <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" justifyContent="center">
          <StatBox title="45,342" subTitle="Sales Attained" progress="0.70" increasePercentage="+23%" icon={<PointOfSale sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />} />
        </Box>
        <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" justifyContent="center">
          <StatBox title="3423" subTitle="New Clients" progress="0.3" increasePercentage="+28%" icon={<PersonAdd sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />} />
        </Box>
        <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" justifyContent="center">
          <StatBox title="1,267,237" subTitle="Traffic Inbound" progress="0.8" increasePercentage="+50%" icon={<Traffic sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />} />
        </Box>

        {/* row 2 */}
        <Box gridColumn="span 8" gridRow="span 2" backgroundColor={colors.primary[400]}>
          <Box mt="25px" p="0 30px" display="flex" justifyContent="space-between" alignItems="center">
            <Box>
              <Typography variant='h5' fontWeight="600" color={colors.grey[100]}>
                Revenue Generated
              </Typography>
              <Typography variant='h3' fontWeight="bold" color={colors.greenAccent[600]}>
                $59,325,23
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlined sx={{
                  fontSize: "26px",
                  color: colors.greenAccent[600]
                }} />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" mt="-20px">
            <LineChart isDashboard={true} />
          </Box>


        </Box>
        {/* Transactions in row 2 */}
        <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]} overflow="auto">
          <Box display="flex" justifyContent="space-between" alignItems="center" borderBottom={`4px solid ${colors.primary[500]}`} color={colors.grey[100]} padding="15px">
            <Typography olor={colors.grey[100]} variant='h5' fontWeight="600">Recent Transactions</Typography>
          </Box>
          {mockTransactions.map((transaction, index) => (
            <Box key={index} display="flex" justifyContent="space-between" alignItems="center" borderBottom={`4px solid ${colors.primary[500]}`} padding="15px">
              <Box>
                <Typography color={colors.greenAccent[500]} variant='h5' fontWeight="600">{transaction.txId}</Typography>
                <Typography color={colors.grey[100]} variant='h5' fontWeight="600">{transaction.user}</Typography>

              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box backgroundColor={colors.greenAccent[500]} p="5px 10px" borderRadius="4px" >$ {transaction.cost}</Box>
            </Box>
          ))}
        </Box>

        {/* row 3 */}
        <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]} p="30px">
          <Typography variant='h5' fontWeight="600">Campagin</Typography>
          <Box display="flex" flexDirection="column" alignItems="center" mt="25px">
            <ProgressCircle size='125' />
            <Typography color={colors.greenAccent[500]} variant='h5' sx={{ mt: "15px" }}>$48,324 revenue generated</Typography>
            <Typography variant='h5' fontWeight="600">Includes extra expenditures and cost</Typography>
          </Box>
        </Box>

        {/* row 3 --- section 2 */}
        <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]}>
          <Typography variant='h5' fontWeight="600" p="30px 30px 0 30px">Sales Quantity</Typography>
          <Box height="250px" mt="-25px">
            <BarChart isDashboard={true}/>
          </Box>
        </Box>

        {/* row 3 --- section 3 */}
        <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]} p="30px">
          <Typography variant='h5' fontWeight="600" sx={{mb: "30px"}}>Geography based Traffic</Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true}/>
          </Box>
        </Box>

      </Box>
    </Box>
  )
}

export default Dashboard
