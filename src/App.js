import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
// import Main from "./components/Main";
// import Nav from "./Nav";

import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import AboutPage from "./pages/AboutPage";
import Main from "../src/components/Main";
function App() {
  return (
    <BrowserRouter>
      <Header />

      {/* <Nav /> */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Booking" element={<Main />} />
          <Route path="/About" element={<AboutPage />} />
        </Routes>
      </main>

      {/* <Main /> */}

      <Footer />
    </BrowserRouter>
  );
}

export default App;
