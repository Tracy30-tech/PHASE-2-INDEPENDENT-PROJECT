import React from "react";
import Footer from "../components/Footer";

export default function Help() {
  return (
    <div className="reports">
      <h1 className="report">HELP</h1>
      <p className="parag">First, fill out the form in the home page/ landing page and submit it for it to be registered on the database.Make sure to verify your membersip by clicking the 'View membership' button on the top right corner of the page.This should prompt the number of users to increase.</p>
      <p className="parag">Next, go to Login page where you will get to view the existing work posted by other members, here you get to post your own work specifying the category it falls in.Once you have posted, IT CANNOT BE DELETED  as it is already posted to the web but you can update your work by clicking the update link on the bottom.</p>
      <p className="parag">About Us generally entails what the website is about and the background of the website</p>
      <div><Footer /> </div>
    </div>
  );
}
