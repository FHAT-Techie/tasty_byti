import NavigationBar from "../Components/NavigationBar";
import OtherPageHero from "../Components/OtherPageHero";

export default function CateringPage() {
  return (
    <>
   
      <OtherPageHero
        Header="EVENT CATERING"
        SubHeader="At Tasty__byti, we bring more than just food—we create unforgettable culinary experiences tailored to your special occasions. Whether it’s a private gathering, corporate event, wedding, or celebration, our expert catering team delivers impeccable service with precision and attention to detail.

        Choose from our carefully curated platters, signature Nigerian dishes, indulgent desserts, handcrafted cocktails, and more. Looking for something unique? Our chefs can create customized menus to match your vision and delight your guests.
        
        To ensure a seamless experience, our professional team, including trained waitstaff and bartenders, is available to provide top-tier service, ensuring your event runs smoothly from start to finish."
        
        MoreDescription="Let Tasty__byti handle the details while you focus on making memories.
        
        📞 To book our catering services, call or WhatsApp us at [Insert Contact Number] or fill out the form below, and a team member will be in touch."
      />

      <div className="cateringImgSection">
        <div className="mainCateringImg">
<img src="/Event_Image/E7.webp" loading="lazy" alt="Food Image" />
 </div>
 <div className="cateringGallery">
  <div className="cateringImg">
  <img src="/Event_Image/E1.webp" loading="lazy" alt="Food Image" />
  </div>
  <div className="cateringImg">
  <img src="/Event_Image/E2.webp" loading="lazy" alt="Food Image" />
  </div>
  <div className="cateringImg">
  <img src="/Event_Image/E3.webp" loading="lazy" alt="Food Image" />
  </div>
  <div className="cateringImg">
  <img src="/Event_Image/E4.webp" loading="lazy" alt="Food Image" />
  </div>
  <div className="cateringImg">
  <img src="/Event_Image/E5.webp" loading="lazy" alt="Food Image" />
  </div>
  <div className="cateringImg">
  <img src="/Event_Image/E6.webp" loading="lazy" alt="Food Image" />
  </div>
  <div className="cateringImg">
  <img src="/Event_Image/E8.webp" loading="lazy" alt="Food Image" />
  </div>
  <div className="cateringImg">
  <img src="/Event_Image/E9.webp" loading="lazy" alt="Food Image" />
  </div>
  <div className="cateringImg">
  <img src="/Event_Image/E10.webp" loading="lazy" alt="Food Image" />
  </div>
 </div>
      </div>
    </>
  );
}
