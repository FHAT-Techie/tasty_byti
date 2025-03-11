import OtherPageHero from "../Components/OtherPageHero";
import Footer from "../Components/Footer"
export default function MenuPage(){
    return (
        <>
        <div>
        <OtherPageHero
        Header="MENU"
        SubHeader="Explore a menu crafted for every craving, from rich Nigerian flavors to international delights. We use the freshest ingredients to create delicious meals, from hearty mains to refreshing drinks. Whether you're dining in or ordering out, there's something special waiting for you at Tasty__ByTi!"/>

        <div className="menuImage">
            <img src="/Menu_Image/MENU-1.webp" alt="" />
            <img src="/Menu_Image/MENU-2.webp" alt="" />
            <img src="/Menu_Image/MENU-3.webp" alt="" />
        </div>
        <Footer/>
        </div>
        </>
    )
}