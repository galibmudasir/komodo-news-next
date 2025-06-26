import BottomFooter from "./bottom-footer";
import CopyrightFooter from "./copyright-footer";
import TopFooter from "./top-footer";

const FooterSection = () => {
  return (
    <footer>
      <section className="footer-section bg-dark text-white">
        <div className="container py-4">
          <div className="top-footer">
            <TopFooter />
          </div>
          <div className="bottom-footer py-4">
            <BottomFooter />
          </div>
          <div className="copyright-footer py-4">
            <CopyrightFooter />
          </div>
        </div>
      </section>
    </footer>
  );
};

export default FooterSection;
