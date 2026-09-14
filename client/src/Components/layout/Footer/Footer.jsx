import "./style.css";

export default function Footer() {
  return (
    <>
      <div className="root-footer">
        <div className="backToTop" onClick={() => window.scrollTo(0, 0)}>
          back to top
        </div>
        <div className="footer-container">
          <div className="footer-boxes">
            <div className="box-heading">Get to Know Us</div>
            <div className="box-items">
              <div className="box-item">Careers</div>
              <div className="box-item">XMART Science</div>
              <div className="box-item"> About XMART</div>
              <div className="box-item"> Press Releases</div>
            </div>
          </div>
          <div className="footer-boxes">
            <div className="box-heading">Connect with Us</div>
            <div className="box-items">
              <div className="box-item">FaceBook</div>
              <div className="box-item">Twitter</div>
              <div className="box-item">Instagram</div>
            </div>
          </div>
          <div className="footer-boxes">
            <div className="box-heading">Make Money with Us</div>
            <div className="box-items">
              <div className="box-item">Sell on XMART</div>
              <div className="box-item">Sell under XMART Accelerator</div>
              <div className="box-item">Protect and Build Your Brand</div>
              <div className="box-item">XMART Global Selling</div>
              <div className="box-item">Supply to XMART</div>
              <div className="box-item">Become an Affiliate</div>
              <div className="box-item">Fulfilment by XMART</div>
              <div className="box-item">Advertise Your Products</div>
              <div className="box-item">XMART Pay on Merchants</div>
            </div>
          </div>
          <div className="footer-boxes">
            <div className="box-heading">Let Us Help You</div>
            <div className="box-items">
              <div className="box-item">Your Account</div>
              <div className="box-item">Returns Centre</div>
              <div className="box-item">Recalls and Product Safety Alerts</div>
              <div className="box-item">100% Purchase Protection</div>
              <div className="box-item">Amazon App Download</div>
              <div className="box-item">Help</div>
            </div>
          </div>
        </div>
        <div className="disclaimer-text">
          All website content, including text, images, logos, and graphics, is
          protected by <br /> @copyright and may not be reproduced without
          permission.
        </div>
      </div>
    </>
  );
}
