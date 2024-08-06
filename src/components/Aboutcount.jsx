import React, { useEffect } from 'react';
import './styles/aboutcount.css';
import { FaBath, FaShower, FaTrophy, FaHeart } from 'react-icons/fa'; // Use FaHeart as an example for a new icon

function Aboutcount() {
  useEffect(() => {
    const handleScroll = () => {
      const counterSection = document.querySelector('.counter-wrapper');
      const sectionPosition = counterSection.getBoundingClientRect().top;
      const screenPosition = window.innerHeight;

      if (sectionPosition < screenPosition) {
        startCounting();
        window.removeEventListener('scroll', handleScroll);
      }
    };

    const startCounting = () => {
      function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
          current = start,
          range = end - start,
          increment = end > start ? 1 : -1,
          step = Math.abs(Math.floor(duration / range)),
          timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if (current === end) {
              clearInterval(timer);
            }
          }, step);
      }
      counter('count1', 50, 107, 1000);
      counter('count2', 9911, 10000, 1000);
      counter('count3', 0, 21, 1000);
      // Removed counter for 'count4'
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="counter-wrapper">
      <div className="counter-inner">
        <div className="container">
          <div className="row g-0">
            <div className="col-6 col-lg-3">
              <div className="py-5 text-center">
                <div>
                  <FaBath className="count-icon" />
                </div>
                <div className="py-2 count">
                  <span id="count1">107</span>
                </div>
                <div>Luxury Bath Tubs</div>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="py-5 text-center">
                <div>
                  <FaShower className="count-icon" />
                </div>
                <div className="py-2 count">
                  <span id="count2">1000</span>+
                </div>
                <div>Showers Installed</div>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="py-5 text-center">
                <div>
                  <FaTrophy className="count-icon" />
                </div>
                <div className="py-2 count">
                  <span id="count3">21</span>
                </div>
                <div>Awards Won</div>
              </div>
            </div>
            {/* New statistic section */}
            <div className="col-6 col-lg-3">
              <div className="py-5 text-center">
                <div>
                  <FaHeart className="count-icon" /> {/* Example icon */}
                </div>
                <div className="py-2 count">
                  <span id="count4">150</span> {/* Example count */}
                </div>
                <div>Happy Customers</div> {/* Example label */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutcount;
