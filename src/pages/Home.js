import React,{useState} from "react";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


export default function Home() {
  const[users,setUsers]=useState(650);


  function handleClick(){
    setUsers(users+1);
   };
  return (
    <div>
      <h1 className="home">Home</h1>
      <h1 id="form">
        HYDRATECH INOVATIONS DESIGN AND BUILD
      </h1>
      <div className="users">USERS 👥:{users}</div>
      <button className="verify" onClick={handleClick}>Verify membership</button>
      <button className="btnhome">
        <Link to={"/signup"}> Create Account</Link>
      </button>
      <div> <Carousel/> </div>
      <div> <Footer /></div>
    </div>
  );
}
