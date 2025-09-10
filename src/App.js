import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./Nav";

import Home from "./pages/Home";
import Booking from "./pages/Booking";
function App() {
  return (
    <BrowserRouter>
      <Header />

      {/* <Nav /> */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </main>
      <Main />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
