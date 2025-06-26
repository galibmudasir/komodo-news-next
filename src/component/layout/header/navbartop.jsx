import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faWhatsapp,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

import Link from "next/link";

const NavbarTop = () => {
  return (
    <div className="row align-items-center">
      <div className="col-md-9">
        <div className="navbar-top">
          <ul className="d-flex gap-3 ps-2">
            <li className="nav-item">
              <Link className="nav-link" href="/tentang-kami">
                Tantang Kami
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/category/terkini">
                Terkini
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/category/terkini">
                Terpopuler
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/category/terkini">
                Top
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/category/terkini">
                Pilihan Editor
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/pedoman-media-siber">
                Pedoman Media Siber
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/kontak">
                Kontak
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-3">
        <div className="icon-wrapper d-flex gap-3 justify-content-end">
          <div className="social-icon">
            <Link href="https://instagram.com">
              <FontAwesomeIcon icon={faInstagram} size="xl" />
            </Link>
          </div>
          <div className="social-icon">
            <Link href="https://facebook.com">
              <FontAwesomeIcon icon={faFacebook} size="xl" />
            </Link>
          </div>
          <div className="social-icon">
            <Link href="https://wa.me/62123456789">
              <FontAwesomeIcon icon={faWhatsapp} size="xl" />
            </Link>
          </div>
          <div className="social-icon">
            <Link href="https://twitter.com">
              <FontAwesomeIcon icon={faTwitter} size="xl" />
            </Link>
          </div>
          <div className="social-icon">
            <Link href="https://youtube.com">
              <FontAwesomeIcon icon={faYoutube} size="xl" />
            </Link>
          </div>
          <div className="social-icon">
            <Link href="https://tiktok.com">
              <FontAwesomeIcon icon={faTiktok} size="xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
