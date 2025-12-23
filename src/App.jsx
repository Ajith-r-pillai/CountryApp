import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountryList from "./pages/CountryList";
import CountryDetails from "./pages/CountryDetails";
import Favorites from "./pages/Favorites";
import { FavoritesProvider } from "./context/FavoritesContext";

import Navbar from "./components/Navbar";

function App() {
  return (
   
      <FavoritesProvider>
        <BrowserRouter>
          <Navbar />   {/* 👈 Toggle button is here */}
          <Routes>
            <Route path="/" element={<CountryList />} />
            <Route path="/country/:code" element={<CountryDetails />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </BrowserRouter>
      </FavoritesProvider>

  );
}

export default App;
