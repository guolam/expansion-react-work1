
// import { ActionButton } from "./components/ActionButton";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Omikuji } from "./pages/Omikuji";
import { Janken } from "./pages/Janken";
import Image from './img/janken.png';
import Image2 from './img/star.png';
import axios from "axios";




const App = () => {
  return (
    <BrowserRouter>
      <div className="w-96">
        <h1 className="m-[30px] text-center text-4xl font-bold">遊び場</h1>
        <ul>
          {/* Linkをあらかじめいreact-router-domから入れる */}
          <div className="place-content-evenly flex justify-items center">
            <li>
              <Link to="/omikuji"><img className="flex-1 h-12" src={Image2} alt="Image" /></Link>
            </li>
            <li>
              <Link to="/janken"> <img className="flex-1 h-12" src={Image} alt="Image" /></Link>
            </li>
          </div>
        </ul>

        <Routes>
          <Route path="/omikuji" element={<Omikuji />} />
          <Route path="/Janken" element={<Janken />} />
        </Routes>
      </div >
    </BrowserRouter >

  );
};
export default App;