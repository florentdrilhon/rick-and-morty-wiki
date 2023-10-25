import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Characters from "./pages/Characters";
import Locations from "./pages/Locations";
import Episodes from "./pages/Episodes";
import Navbar from "components/Navbar/Navbar";
import CharacterDetails from "components/CharacterDetails/CharacterDetails";

const queryClient = new QueryClient();

function App(): React.ReactElement {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Characters />} />
            <Route path="/episodes" element={<Episodes />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/:characterId" element={<CharacterDetails />} />
            <Route
              path="/episodes/:characterId"
              element={<CharacterDetails />}
            />
            <Route
              path="/locations/:characterId"
              element={<CharacterDetails />}
            />
          </Routes>
        </div>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
