import NavigationBar from "./NavigationBar";

export default function OtherPageHero({Header = "HEADER", SubHeader ="SubHeader", MoreDescription }) {
    return (
        <>
      <div 
      className="otherHeroImage">
   <NavigationBar/>
      </div>
      <div className="pageDes">
     <h1> {Header}</h1> 
     <p> {SubHeader}</p> 
     <i className="MoreDes">{MoreDescription}</i>
      </div>
      </>
    );
  }
  