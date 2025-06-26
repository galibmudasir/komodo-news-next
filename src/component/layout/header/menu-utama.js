import Link from "next/link";

const MenuUtama = () => {
  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link href="/" className="nav-link" aria-current="page">
          Beranda
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="/category/headline">
          Headline
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="/category/nasional">
          Nasional
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="/category/internasional">
          Internasional
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="/category/sepak-bola">
          Sepak Bola
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="/category/pemilu">
          Pemilu
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="/category/otomotif">
          Otomotif
        </Link>
      </li>
    </ul>
  );
};
export default MenuUtama;
