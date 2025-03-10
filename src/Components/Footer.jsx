import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faInstagram,
  faTiktok,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons"; // Correct import for WhatsApp

export default function Footer() {
  return (
    <footer>
      <div className="footerIcons">
        <FontAwesomeIcon icon={faWhatsapp} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faTiktok} />
        <FontAwesomeIcon icon={faGoogle} />
      </div>

      <div className="footerMid">
        <div className="footerLocation">
          <h3>LOCATION</h3>
          <p>115 Wetheral road, <br /> Owerri, Imo state. <br /> 07041931986.</p>
        </div>
        <div className="footerHours">
          <h3>HOURS</h3>
          <div>
          <p>Tuesday-sunday</p>
          <h6> Restaurant </h6>
          <p>Tuesday- Saturday 10am- 8pm</p>
          <p>Sundays 2pm-8pm </p>
          <h6> Delivery & Collection:</h6>
          <p>12pm - 6pm, Collection only after 8pm </p>
          </div>
        </div>
      </div>

      <div className="bottomFooter">
        <p>Tasty-byte 2025</p>
      </div>
    </footer>
  );
}
