import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Edit from "./pages/Edit";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" Component={Home}  />
            <Route path="/create" Component={Contact} />
            <Route path="/update/:id" Component={Edit} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;