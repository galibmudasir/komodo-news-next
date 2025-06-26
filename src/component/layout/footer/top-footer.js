import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faWhatsapp,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const TopFooter = () => {
  return (
    <div className="row align-items-center">
      <div className="col-md-6">
        <div className="text-center text-md-start">
          <Image
            src={"/images/logo.png"}
            width={220}
            height={110}
            alt={"logo komodo"}
            className="invert-image"
            priority
          />
        </div>
      </div>
      <div className="col-md-6">
        <div className="social-media-wrapper d-flex flex-wrap gap-3 justify-content-center justify-content-md-end">
          <div className="social-icon social-icon-instagram">
            <Link href="https://instagram.com">
              <FontAwesomeIcon icon={faInstagram} size="xl" />
            </Link>
          </div>
          <div className="social-icon social-icon-facebook">
            <Link href="https://facebook.com">
              <FontAwesomeIcon icon={faFacebook} size="xl" />
            </Link>
          </div>
          <div className="social-icon social-icon-whatsapp">
            <Link href="https://wa.me/62123456789">
              <FontAwesomeIcon icon={faWhatsapp} size="xl" />
            </Link>
          </div>
          <div className="social-icon social-icon-twitter">
            <Link href="https://twitter.com">
              <FontAwesomeIcon icon={faTwitter} size="xl" />
            </Link>
          </div>
          <div className="social-icon social-icon-youtube">
            <Link href="https://youtube.com">
              <FontAwesomeIcon icon={faYoutube} size="xl" />
            </Link>
          </div>
          <div className="social-icon social-icon-tiktok">
            <Link href="https://tiktok.com">
              <FontAwesomeIcon icon={faTiktok} size="xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
