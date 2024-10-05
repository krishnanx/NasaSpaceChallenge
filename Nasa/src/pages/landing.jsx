import './landing.css';

const Landing = () => {
  
  return (
    
    <div className="cont">
      <section id="features" className="features-section">
        <div className="container">
          <h2>Features</h2>
          <div className="features">
            <div className="feature-box">
              <h3>Carbon Calculator</h3>
              <p>Easily calculate your carbon footprint based on your daily activities.</p>
            </div>
            <div className="feature-box">
              <h3>Track Progress</h3>
              <p>Monitor your emissions over time and see how your habits impact the environment.</p>
            </div>
            <div className="feature-box">
              <h3>Eco-friendly Tips</h3>
              <p>Receive personalized suggestions to reduce your carbon footprint.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="container">
          <h2 >About CarbonTally</h2>
          <p>
            CarbonTally is a platform designed to help individuals understand their impact on the
            environment and take actionable steps toward reducing their carbon footprint. Together,
            we can create a more sustainable world.
          </p>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container">
          <h2>Contact Us</h2>
          <p>
            If you have any questions or would like to learn more about CarbonTally, feel free to
            reach out!
          </p>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2024 CarbonTally. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;