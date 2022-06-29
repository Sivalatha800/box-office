import React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="starred" element={<Starred />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

function Home() {
  return <div>This is Home Page</div>;
}
function Starred() {
  return <div>This is Starred Page</div>;
}
function NotFound() {
  return <div>This 404 Page</div>;
}
export default App;
