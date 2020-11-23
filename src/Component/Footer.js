import React from "react";
import "./style.css";
import laptop from "../images/latop.jpg";
import sofa from "../images/sofa.jpg";
import car from "../images/car.jpg";
import mobile from "../images/mobile.jpg";
import logowhite from "../images/logo-white.png";
function Footer() {
  return (
    <div>
      <footer class="foot">
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <img src={logowhite} />
              <p>
                Our stress-free finance department that can find financial
                solutions to save you money.
              </p>
            </div>
            <div class="col-md-3 featured">
              <h4>Featured Links</h4>
              <ul>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Products</a>
                </li>
                <li>
                  <a href="">Services</a>
                </li>
                <li>
                  <a href="">Auctions</a>
                </li>
                <li>
                  <a href="">Guide & FAQ</a>
                </li>
                <li>
                  <a href="">Term</a>
                </li>
                <li>
                  <a href="">Privacy</a>
                </li>
                <li>
                  <a href="">Sitemap </a>
                </li>
              </ul>
            </div>

            <div class="col-md-3 gal">
              <h4>Photo Gallery</h4>
              <ul>
                <li>
                  <img src={laptop} />
                </li>
                <li>
                  <img src={mobile} />
                </li>
                <li>
                  <img src={sofa} />
                </li>
                <li>
                  <img src={car} />
                </li>
                <li>
                  <img src={sofa} />
                </li>
                <li>
                  <img src={laptop} />
                </li>
                <li>
                  <img src="img/mobile.jpg" />
                </li>
                <li>
                  <img src="img/car.jpg" />
                </li>
              </ul>
            </div>

            <div class="col-md-3 social">
              <h4>Social Network</h4>
              <ul>
                <li>
                  <a href="">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i class="fa fa-youtube-play" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>

              <div class="row form-group pt-5 subs">
                <div class="col">
                  <h4>Subscribe Newsletter</h4>
                  <input
                    type=""
                    class="form-control mt-3"
                    name=""
                    placeholder="Enter Email Address"
                  />
                  <button>
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="row pt-5 mt-5 copyright">
            <div class="col text-center">
              <h6>© Copyright 2020 </h6>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
