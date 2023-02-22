import { Routes, Route } from 'react-router-dom';
import Calculator from './Routes/CalculatorRoute';
import Home from './Routes/HomeRoute';
import Quote from './Routes/QuoteRoute';

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quote" element={<Quote />} />
      </Routes>
    </>
  );
}

export default Router;
