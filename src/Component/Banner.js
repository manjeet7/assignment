import React from "react";
import "./style.css";
import auction1 from "../images/auction1.jpg";
import auction2 from "../images/auction-ban-2.jpg";
import prod1 from "../images/prod-icon-1.png";
import prod2 from "../images/prod-icon-2.png";
import prod3 from "../images/prod-icon-3.png";
import prod4 from "../images/prod-icon-4.png";
import prod5 from "../images/prod-icon-5.png";
import prod6 from "../images/prod-icon-6.png";
import prod7 from "../images/prod-icon-7.png";
function Banner() {
  return (
    <div>
      <div class="hero-banner">
        {/* <!--   <div class="shape-top"><img src="img/shape-top.png"></div> --> */}
        <div
          class=" ct-header ct-header--slider ct-slick-custom-dots"
          id="home"
        >
          <div
            class="ct-slick-homepage"
            data-arrows="true"
            data-autoplay="true"
          >
            <div
              class="bgcolor ct-header tablex item"
              data-background={auction1}
            >
              <div class="ct-u-display-tablex">
                <div class="inner">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-6 slider-inner m-auto">
                        <h1 class="big animated text-center">
                          Welcome to <span>AUCTION SITE</span>
                        </h1>
                        <h4 class="animated text-center">
                          Find your dream products
                        </h4>
                        {/* <br><br><br><br> */}
                        {/* <!--    <p class="animated"> <span>Rapid, high throughput isolation of viral RNA and viral DNA from serum, swabs, plasma, saliva, and other body fluids</span></p> -->
                <!-- <div class="ban-btn pt-3">
                <a class="btn btn-lg animated" href="">Read More</a>
                </div> --> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="bgcolor ct-header tablex item"
              data-background={auction2}
            >
              <div class="ct-u-display-tablex">
                <div class="inner">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-6 slider-inner m-auto">
                        <h1 class="big animated text-center">
                          Amazing Products Waiting for you
                        </h1>
                        {/* <!-- <h4 class="animated text-center">Find your dream products</h4>  -->
                 <br><br><br><br> */}
                        {/* <!--    <p class="animated"> <span>Rapid, high throughput isolation of viral RNA and viral DNA from serum, swabs, plasma, saliva, and other body fluids</span></p> -->
                <!-- <div class="ban-btn pt-3">
                <a class="btn btn-lg animated" href="">Read More</a>
                </div> --> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--   <div class="bgcolor ct-header tablex item" data-background="img/ban3.jpg">
      <div class="ct-u-display-tablex">
        <div class="inner">
          <div class="container">
            <div class="row">
              <div class="col-md-8 col-lg-8 slider-inner">
                <h1 class="big animated">VIRAL DNA/RNA EXTRACTION</h1>
                 <h4 class="animated"><strong>Mag-Bind® Viral DNA/RNA 96 Kit</strong></h4>
                <p class="animated"> <span>Rapid, high throughput isolation of viral RNA and viral DNA from serum, swabs, plasma, saliva, and other body fluids</span></p>
                <div class="ban-btn pt-3">
                <a class="btn btn-lg animated" href="">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> --> */}
          </div>
        </div>
      </div>

      <div class="about">
        <div class="container-fluid">
          <div class="row owlslider">
            <div class="col-md-10 m-auto owlbg">
              <div id="carousel-1" class="loop owl-carousel owl-theme">
                <div class="item">
                  <div class="prod-in">
                    <img src={prod1} />
                    <h4>Electronics</h4>
                  </div>
                </div>
                <div class="item">
                  <div class="prod-in">
                    <img src={prod2} />
                    <h4>Furniture</h4>
                  </div>
                </div>

                <div class="item">
                  <div class="prod-in">
                    <img src={prod3} />
                    <h4>Automobiles</h4>
                  </div>
                </div>

                <div class="item">
                  <div class="prod-in">
                    <img src={prod5} />
                    <h4>Arts</h4>
                  </div>
                </div>

                <div class="item">
                  <div class="prod-in">
                    <img src={prod7} />
                    <h4>Property</h4>
                  </div>
                </div>
                <div class="item">
                  <div class="prod-in">
                    <img src={prod4} />
                    <h4>Instrument</h4>
                  </div>
                </div>
                <div class="item">
                  <div class="prod-in">
                    <img src="img/prod-icon-8.png" />
                    <h4>General</h4>
                  </div>
                </div>
                <div class="item">
                  <div class="prod-in">
                    <img src={prod6} />
                    <h4>Cloths</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
