import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "@features/Layout";
import { Home } from "@pages/Home";
import { Login } from "@pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
