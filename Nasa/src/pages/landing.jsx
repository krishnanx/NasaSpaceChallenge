import './landing.css';
import { Button } from '@chakra-ui/react';
import { useContext } from 'react';
import { Authentication } from '../Components/contexts/AuthContext';
import Charts from '../Components/charts/Charts';
import CarbonDoughnutChart from '../Components/charts/CarbonDoughnutChart';
import CO2BubbleChart from '../Components/charts/CO2BubbleChart';

import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const [user,setUser] = useContext(Authentication)
  const navigate = useNavigate();
  const HandleGetStarted = () =>{

    if(user){
      setTimeout(() => {
        navigate('/Dashboard')
      }, 2000);
    }
    else{
      console.log("sign in ")
      
    }
  }
 
 return (
    
    <div className="cont">
      <section id="features" className="features-section">
        <div className="container">
          
<div id='slogan_con'>
  <h1 id='slogan'>" Track Today , <br />Sustain Tomorrow "</h1>
</div><br /><br /><br /><br />

          <div className="features">
            <div className="feature-box">
              <h3>Carbon Calculator</h3>
              <p>Easily calculate your carbon footprint based on your daily activities.</p>
              {<Button
                  colorScheme='teal'
                  size = "md"
                  onClick={()=>{
                HandleGetStarted()
                }}
                m="10px"
              >
                Get Started
              </Button>}
            </div>
            <div className="feature-box" >
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

      <section id='chart-section'>
        <div id='chart-bar-1'>
          <Charts/>
        </div>
        <div id='chart-bar-2'>
          <CarbonDoughnutChart/>
        </div>
        <div id='chart-bar-1'>
          <CO2BubbleChart/>
        </div>
        
      </section><br /><br /><br /><br />

      <section id="about" className="about-section">
        <div className="container" id='about'>
          <h2 id='cc'>About CarbonTally</h2><br /><br />
          <p id='content'>
            CarbonTally is a platform designed to help individuals understand their impact on the
            environment and take actionable steps toward reducing their carbon footprint. Together,
            we can create a more sustainable world.
          </p>
        </div>
      </section><br /><br />

      <section id="contact" className="contact-section">
      <div class="container">
        <h2>Contact Us</h2>
        <p>
          ㅤ
        </p>
        <form>
          <ul class="example-2">
            <li class="icon-content">
              <a
                href="https://linkedin.com/"
                aria-label="LinkedIn"
                data-social="linkedin"
              >
                <div class="filled"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-linkedin"
                  viewBox="0 0 16 16"
                  xml:space="preserve"
                >
                  <path
                    d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              <div class="tooltip">LinkedIn</div>
            </li>
            <li class="icon-content">
              <a href="https://www.github.com/" aria-label="GitHub" data-social="github">
                <div class="filled"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-github"
                  viewBox="0 0 16 16"
                  xml:space="preserve"
                >
                  <path
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              <div class="tooltip">GitHub</div>
            </li>
            <li class="icon-content">
              <a
                href="https://www.x.com/"
                aria-label="X"
                data-social="X"
              >
                <div class="filled"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-instagram"
                  viewBox="0 0 24 25"
                  xml:space="preserve"
                >
                  <path
                    d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              <div class="tooltip">X</div>
            </li>
          
            <li class="icon-content">
              <a
                href="https://telegram.org/"
                aria-label="Telegram"
                data-social="telegram"
              >
                <div class="filled"></div>
                <svg version="1.1" viewBox="0 0 100 100">
                  <path
                    d="M95,9.9c-1.3-1.1-3.4-1.2-7-0.1c0,0,0,0,0,0c-2.5,0.8-24.7,9.2-44.3,17.3c-17.6,7.3-31.9,13.7-33.6,14.5  c-1.9,0.6-6,2.4-6.2,5.2c-0.1,1.8,1.4,3.4,4.3,4.7c3.1,1.6,16.8,6.2,19.7,7.1c1,3.4,6.9,23.3,7.2,24.5c0.4,1.8,1.6,2.8,2.2,3.2  c0.1,0.1,0.3,0.3,0.5,0.4c0.3,0.2,0.7,0.3,1.2,0.3c0.7,0,1.5-0.3,2.2-0.8c3.7-3,10.1-9.7,11.9-11.6c7.9,6.2,16.5,13.1,17.3,13.9  c0,0,0.1,0.1,0.1,0.1c1.9,1.6,3.9,2.5,5.7,2.5c0.6,0,1.2-0.1,1.8-0.3c2.1-0.7,3.6-2.7,4.1-5.4c0-0.1,0.1-0.5,0.3-1.2  c3.4-14.8,6.1-27.8,8.3-38.7c2.1-10.7,3.8-21.2,4.8-26.8c0.2-1.4,0.4-2.5,0.5-3.2C96.3,13.5,96.5,11.2,95,9.9z M30,58.3l47.7-31.6  c0.1-0.1,0.3-0.2,0.4-0.3c0,0,0,0,0,0c0.1,0,0.1-0.1,0.2-0.1c0.1,0,0.1,0,0.2-0.1c-0.1,0.1-0.2,0.4-0.4,0.6L66,38.1  c-8.4,7.7-19.4,17.8-26.7,24.4c0,0,0,0,0,0.1c0,0-0.1,0.1-0.1,0.1c0,0,0,0.1-0.1,0.1c0,0.1,0,0.1-0.1,0.2c0,0,0,0.1,0,0.1  c0,0,0,0,0,0.1c-0.5,5.6-1.4,15.2-1.8,19.5c0,0,0,0,0-0.1C36.8,81.4,31.2,62.3,30,58.3z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              <div class="tooltip">Telegram</div>
            </li>
          </ul>
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
