export const Footer=()=> {



    
    return (
<div className="container">

      <div className="section">
        <h3>Privacy Policy</h3>
        <ul>
          <li>Terms And Conditon</li>
          <li> Privacy</li>
          <li>Disclaimer</li>
          <li>Copyright</li>
         
        </ul>
      </div>

      <div className="section">
        <h3>LINKS</h3>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Youtube</li>
          <li>About Us</li>
          <li>Products & Services</li>
          <li>Careers</li>
          <li>Events</li>
          <li>Downloads</li>
         
        </ul>
      </div>

      <div className="section contact-us">
        <h3>CONTACT US</h3>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.1678129202395!2d73.79153097486634!3d18.565860368142837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf387b324d85%3A0x8670c56229415a72!2sCentre%20for%20Development%20of%20Advanced%20Computing%20(C-DAC)%20Innovation%20Park!5e0!3m2!1sen!2sin!4v1701977717467!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <strong>LOVELY MOHIT THAKUR </strong><br />
        <strong>MOVIES PORTAL</strong><br />
        Himachal Pradesh  (Himachal)<br />
        Phone: +91-20-25503100<br />
        Fax: +91-20-25503131
      </div>

      <footer className="footer">
        <div className="footer-links">
          <a href="#">Help</a> |
          <a href="#">Website Policies</a> |
          <a href="#">Copyright Policy</a> |
          <a href="#">Terms & Conditions</a> |
          <a href="#">Reach Us</a>
        </div>
        <p>Website owned & maintained by: LOVELY MOHIT THAKUR </p>
        <p>© 2025 LOVELY MOHIT THAKUR . All rights reserved.</p>
      </footer>

      <button className="scroll-to-top">TOP</button>

    </div>

    );
};