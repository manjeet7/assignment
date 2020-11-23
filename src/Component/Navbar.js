import React from "react";
import "./style.css";
function Navbar() {
  return (
    <div>
      <div id="main">
        <nav>
          <div class="nav-xbootstrap">
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  Auctions
                  <span class="glyphicon glyphicon-chevron-down iconsize"></span>
                </a>
                <ul class="dropdown">
                  <li>
                    <a href="general_auction.html">General Auctions</a>
                  </li>
                  <li>
                    <a href="">Electronic</a>
                  </li>
                  <li>
                    <a href="">Furniture</a>
                  </li>
                  <li>
                    <a href="">Automobile</a>
                  </li>
                  <li>
                    <a href="">General</a>
                  </li>
                  <li>
                    <a href="">Designer Dress</a>
                  </li>
                  <li>
                    <a href="">Property</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0)">
                  Locations
                  <span class="glyphicon glyphicon-chevron-down iconsize"></span>
                </a>
                <ul class="dropdown">
                  <li>
                    <a href="#">Islington</a>
                  </li>
                  <li>
                    <a href="#">Lambeth</a>
                  </li>
                  <li>
                    <a href="#">Hounslow</a>
                  </li>
                  <li>
                    <a href="#">Greenwich</a>
                  </li>
                  <li>
                    <a href="#">Hackney</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="contact.html">Contacts</a>
              </li>
              {/* <!--  <li><a href="https://xbootstrap.com">Premium Themes</a></li>
          <li><a href="https://xbootstrap.com">Business</a></li> --> */}
            </ul>
          </div>
          <div class="nav-bg-xbootstrap">
            <div class="navbar-xbootstrap">
              {" "}
              <span></span> <span></span> <span></span>{" "}
            </div>
            <a href="https://xbootstrap.com" class="title-mobile">
              xBOOTSTRAP.COM
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
