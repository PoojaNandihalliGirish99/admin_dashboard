import { Route, Routes } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import {CssBaseline} from "@mui/material"
import {ThemeProvider} from "@mui/material"
import Topbar from "./scenes/global/Topbar"
import SideBar from './scenes/global/Sidebar';
import Dashboard from './scenes/dashboard';
import Team from './scenes/team';
import Invoices from './scenes/invoices';
import Contacts from './scenes/contacts';
import Form from './scenes/form';
// import Bar from './scenes/bar';
// import Line from './scenes/line';
// import Pie from './scenes/pie';
// import FAQ from './scenes/faq';
// import Geography from './scenes/geography';
import CalendarScheduler from './scenes/calender';


const App = () => {

  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
    <div className="app">
      <SideBar/>
    <main className='content'>
      <Topbar/>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/invoices" element={<Invoices/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/form" element={<Form/>}/>
        {/* <Route path="/faq" element={<FAQ/>}/> */}
        {/* <Route path="/line" element={<Line/>}/> */}
        {/* <Route path="/bar" element={<Bar/>}/> */}
        {/* <Route path="/pie" element={<Pie/>}/> */}
        {/* <Route path="/geography" element={<Geography/>}/> */}
        <Route path="/calender" element={<CalendarScheduler/>}/>

      </Routes>
    </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
