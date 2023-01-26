import React,{useState} from "react";
import Footer from "../components/Footer";
import SignUp from "../components/SignUp";


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
      <div> <SignUp /> </div>
      <div> <Footer /></div>
    </div>
  );
}
