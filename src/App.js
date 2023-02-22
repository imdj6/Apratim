import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Technical from './pages/EventsPages/Technical';
import Cultural from './pages/EventsPages/Cultural';
import Literary from './pages/EventsPages/Literary';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      {/* page content starts here */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/events/technical' element={<Technical />} />
        <Route path='/events/cultural' element={<Cultural />} />
        <Route path='/events/literary' element={<Literary />} />
      </Routes>
      {/* page content ends here */}
      {/* Footer section starts here */}
      <Footer />
      {/* Footer section ends here */}
    </>
  );
}

export default App;
