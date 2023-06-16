import './App.css';
import { Route, Routes } from "react-router";
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Home from './pages/Home';
import General from './pages/General';
import Entertainment from './pages/Entertainment';
import Business from './pages/Business';
import Health from './pages/Health';
import Science from './pages/Science';
import Sports from './pages/Sports';
import Technology from './pages/Technology';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="General" element={<General />} />
        <Route path="Entertainment" element={<Entertainment />} />
        <Route path="Business" element={<Business />} />
        <Route path="Health" element={<Health />} />
        <Route path="Science" element={<Science />} />
        <Route path="Sports" element={<Sports />} />
        <Route path="Technology" element={<Technology />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
