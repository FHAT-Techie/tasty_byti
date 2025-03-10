import Button from "../Components/Button";
import NavigationBar from "../Components/NavigationBar";

export default function HomePageHero(){
    return(
        <div className="HomeHero">
          <NavigationBar/>
          <div className="HeroWriteUp">
            <h1>
            Now more than delivery, <br />
            Luxury dining now at our new walk-in restaurant in Owerri
            </h1>
            <Button
            buttonText="VIEW MENU"
            />
          </div>
        </div>
    )
}