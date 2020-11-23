import React from "react";
import "./style.css";
import msgalert from "../images/msg.png";
function Header() {
  return (
    <div>
      <header class="tophead" />
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="social">
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
                  <a href=""></a>
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                </li>
                <li>
                  <a href=""></a>
                  <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </li>
                <li>
                  <a href="">
                    <i class="fa fa-rss" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-md-2 offset-4">
            <h5>
              Call us: <span>570-694-4002</span>
            </h5>
          </div>
          <div class="col-md-1" data-toggle="modal" data-target="#myModal1">
            <img src={msgalert} width="25px" />
          </div>
          <div class="col-md-1" data-toggle="modal" data-target="#myModal2">
            <button>Vendor</button>
          </div>
          <div class="col-md-1" data-toggle="modal" data-target="#myModal2">
            <button>Bidder</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
