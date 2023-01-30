import React from "react";
import Footer from "../components/Footer";

export default function AboutUs() {
  return (
  
    <div className="prod">
      <div className="mission" id="mission">
        <h1 className="hydra">Our Mission</h1>
        <p className="par">Hydratech was established in Kenya in 2021 as a business Information and credit management company. In 2022 Hydratech entered into the business space of providing credit rating services that enable corporates to raise capital and meet their financing needs.</p>
        <p className="par">Hydratech is also licensed by the Keny Bureau of standards to showcases the hidden talents within and even outside Kenya. The 3 categories involved are paintwokrs, Fashion design and construction Our sevrices include information sharing and alternative client sources from MFIs, SACCOs, HELB, Utilities, Mobile phone companies and providers of goods and services on credit to help customers improve their access to finance and increase the credit providers’ capacity to lend profitably to more customers.</p>
        <p className="par">We support Credit providers and the youth in by displaying their talents to the world for people to appreciate their work therefore advertising their work hence can lead for new oppertunities since they are able to get new clients from the web.You will also be able to edit your when necessary and post the new work. The website is credited by both Kenya Bereu of Standards(KEBS) and The Metropolitan meuseum of art(MET) for its outstanding role in mobilising and encouraging the youth to showcase their different talents. We hope in the near future to be able introduce more categories for different talents eg music, photography etc. We hope for your support now and in the near future. </p>
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ flex: 1, backgroundColor: "#6F38C5", height: "3px" }} />
 
        <p style={{ margin: "0 10px" }}>INFORMATION</p>
    
        <div style={{ flex: 1, backgroundColor: "#6F38C5", height: "3px" }} />
      </div>

      <div className="space">
        <p className="mission">Phone Number: </p>
        <p>0797119374</p>
        <p className="mission">Our Vision</p>
        <p>To empower people to make sound decisions when engaged in exchanges of economic value both for themselves or for the organization they represent.</p>
        <p className="mission">Our Mission</p>
        <p>To develop innovative solutions with unique experiences to enable individuals make sound economic decisions.</p>
      </div>
      <div >
        <p className="mission">Email: </p>
        <p>Hydratech@gmail.com</p>
        <p className="mission">Terms and Conditions:</p>
        <p>© Hydratech Character Table, 2021–2023.Hydratech® is a registered trademark of Hydratec, Inc.</p>
        <p className="mission">Our Core Values</p>
        <p>Integrity, fairness, trust, professionalism, confidentiality, innovation and promptness.</p>
      </div>
      <div> <Footer /></div>
    </div>
    
  );
}
