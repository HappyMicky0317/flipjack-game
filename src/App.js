// import logo from './logo.svg';
import "./App.css";
import Home from "./components/home/Home";
import Header from "./components/include/header";
import Explaination from "./components/explaination/Explaination";
import Dice from "./components/play/Dice";
import Signin from "./components/user/Singin";
import Signup from "./components/user/Signup";
import MyPage from "./components/user/MyPage";
import Footer from "./components/include/footer";
import Default from "./components/Default";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/howtoplay" element={<Explaination />} />
          <Route exact path="/dice" element={<Dice />} />
          <Route exact path="/user/signin" element={<Signin />} />
          <Route exact path="/user/signup" element={<Signup />} />
          <Route exact path="/user/mypage" element={<MyPage />} />
          <Route exact path="*" element={<Default />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
