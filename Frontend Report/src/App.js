import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Report from './component/Report';
import Home from './component/Home';
import BarChart from './component/BarChart';
import PieChart from './component/PieChart';
import HBarChart from './component/HBarChart';
import LineChart from './component/LineChart';
import AreaChart from './component/AreaChart';



function App() {

  return <div className="container">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
         <Route path="/report" element={<Report />} />
        <Route path="/barchart" element={<BarChart />} />
        <Route path="/piechart" element={<PieChart />} />
        <Route path="/hbarchart" element={<HBarChart />} />
        <Route path="/linechart" element={<LineChart />} />
        <Route path="/areachart" element={<AreaChart />} />
        

      </Routes>
    </BrowserRouter>

  </div>

}
export default App;


