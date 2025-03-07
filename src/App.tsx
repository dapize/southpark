import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "@features/Layout";
import { Home } from "@pages/Home";
import { Login } from "@pages/Login";
import { Demo } from "@pages/Demo";
import { NotFound } from "@pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
