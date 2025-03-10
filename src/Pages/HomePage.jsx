import Button from "../Components/Button";
import Footer from "../Components/Footer";
import NavigationBar from "../Components/NavigationBar";
import HomePageHero from "../Sections/HomePageHero";

export default function HomePage() {
  return (
    <>
      <div className="home">
        <HomePageHero />

        <div className="scrolling-content">
          <div className="biteBond">
            <h1>Bite & Bond</h1>
            <p>
              We use fresh ingredients to make our food, so the sweet, salty,
              and sour flavors shine. Even our desserts show the quality of our
              ingredients.
            </p>
            <Button buttonText="MAKE A RESERVATION" />
          </div>
          <div className="homeGallery">
            <div className="imageSection">
              <div className="imgG">
                <img src="/g1.png" alt="" />
              </div>
              <div className="imgG">
                <img src="/g2.png" alt="" />
              </div>
              <div className="imgG">
                <img src="/g3.png" alt="" />
              </div>
            </div>
            <Button buttonText="VIEW MENUS" />
          </div>
<div className="aboutUs">
<p>
Tasty__byti is a contemporary Nigerian restaurant, bringing a fresh and elevated twist to familiar flavors. As the next step in our journey from premium small chops to full-scale dining, we blend tradition with innovation to create unforgettable culinary experiences. Nestled in a stylish, welcoming space, Tasty__byti offers an intimate ambiance where rich Nigerian heritage meets modern elegance. Our menu is a celebration of bold flavors, featuring expertly crafted cocktails, indulgent desserts, and many more delights designed to tantalize your taste buds. Step in and indulge in a rare dining experience that redefines Nigerian cuisine with sophistication and creativity.
</p>
</div>
<div>
  
</div>
          <Footer />
        </div>
      </div>
    </>
  );
}
