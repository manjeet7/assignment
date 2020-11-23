import React from 'react'
import "./style.css"

function Login() {
    var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
}
    function nextPrev(n) {
        // This function will figure out which tab to display
        var x = document.getElementsByClassName("tab");
        // Exit the function if any field in the current tab is invalid:
        if (n == 1 && !validateForm()) return false;
        // Hide the current tab:
        x[currentTab].style.display = "none";
        // Increase or decrease the current tab by 1:
        currentTab = currentTab + n;
        // if you have reached the end of the form...
        if (currentTab >= x.length) {
          // ... the form gets submitted:
          document.getElementById("regForm").submit();
          return false;
        }
        // Otherwise, display the correct tab:
        showTab(currentTab);
      }
      function validateForm() {
        // This function deals with validation of the form fields
        var x, y, i, valid = true;
        x = document.getElementsByClassName("tab");
        y = x[currentTab].getElementsByTagName("input");
        // A loop that checks every input field in the current tab:
        for (i = 0; i < y.length; i++) {
          // If a field is empty...
          if (y[i].value == "") {
            // add an "invalid" class to the field:
            y[i].className += " invalid";
            // and set the current valid status to false
            valid = false;
          }
        }
        // If the valid status is true, mark the step as finished and valid:
        if (valid) {
          document.getElementsByClassName("step")[currentTab].className += " finish";
        }
        return valid; // return the valid status
      }
      
function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class on the current step:
    x[n].className += " active";
  }
    return (
        <div>
            <div class="container login-form">
<div class="modal fade" id="myModal1">
    <div class="modal-dialog">
      <div class="modal-content">
      
        {/* <!-- Modal Header --> */}
        <div class="modal-header">
          <div class="modal-title text-center">Auction Email Alerts Sign Up ? </div>
          <button type="button" class="close" data-dismiss="modal">×</button>
        </div>
        
        {/* <!-- Modal body --> */}
        <div class="modal-body">
          <div class="row login-top">
            <div class="col">
        <form>
               

                  <div class="row form-group">
                 <div class="col-md-6 pt-4">
                  <input type="Password" id="fname" class="form-control"  placeholder="First Name " required />
                </div>
                <div class="col-md-6 pt-4">
                  <input type="Password" id="fname" class="form-control" placeholder="Last Name " required />
                </div>
              </div>
                
                <div class="row form-group">
                <div class="col-md-12 pt-4">
                  <input type="text" id="fname" class="form-control" placeholder="Enter Email Adress" required />
                </div>
                </div>
                <div class="row form-group  pt-2">
                <div class="col-md-12 text-center">
                  <input type="submit" class="ban-btn" value="Submit" />
                </div>
              </div>
           </form>
           </div>
          </div>
  </div>
  </div>
    </div>
  </div>
  </div>



            <div class="container login-form">
<div class="modal fade" id="myModal2">
    <div class="modal-dialog">
      <div class="modal-content">
{/*       
        <!-- Modal Header --> */}
        <div class="modal-header">
          <div class="modal-title text-center">Register Form </div>
          <button type="button" class="close" data-dismiss="modal">×</button>
        </div>
        
        {/* <!-- Modal body --> */}
        <div class="modal-body">
          <div class="row login-top">
            <div class="col">
        <form id="regForm">
  <div class="tab regis-form">
    <div class="row form-group">
      <div class="col-md-6">
        <input type="text" class="form-control" name="" oninput="this.className = ''" placeholder="First Name" required="" />
      </div>
       <div class="col-md-6">
        <input type="text" class="form-control" name="" oninput="this.className = ''" placeholder="Last Name" />
      </div>
    </div>

    <div class="row form-group pt-3">
      <div class="col-md-6">
        <input type="text" class="form-control" name="" oninput="this.className = ''" placeholder="Email Address" />
      </div>
       <div class="col-md-6">
        <input type="text" class="form-control" name="" oninput="this.className = ''" placeholder="Comfirm Email Address" />
      </div>
    </div>

    <div class="row form-group pt-3">
      <div class="col-md-6">
        <input type="password" class="form-control" oninput="this.className = ''" name="" placeholder="Password" />
      </div>
       <div class="col-md-6">
        <input type="password" class="form-control" oninput="this.className = ''" name="" placeholder="Confirm Password" />
      </div>
    </div>
  </div>
 <div class="tab regis-form">
   <div class="row form-group">
      <div class="col-md-12">
        <input type="text" class="form-control" name="" oninput="this.className = ''" placeholder="Company Name" />
      </div>
       
    </div>

     <div class="row form-group pt-3">
      <div class="col-md-6">
        <input type="number" class="form-control" name="" oninput="this.className = ''"placeholder="Mobile No" required="" />
      </div>
       <div class="col-md-6">
        <input type="number" class="form-control" name="" oninput="this.className = ''" placeholder="Telephone" />
      </div>
    </div>

    <div class="row form-group pt-3">
      <div class="col-md-6">
        <input type="text" class="form-control" name="" oninput="this.className = ''" placeholder="Address Lane 1" />
      </div>
       <div class="col-md-6">
        <input type="text" class="form-control" name=""  oninput="this.className = ''" placeholder="Address Lane 2" />
      </div>
    </div>

    <div class="row form-group pt-3">
      <div class="col-md-6">
        <input type="text" class="form-control" name="" oninput="this.className = ''" placeholder="City" />
      </div>
       <div class="col-md-6">
        <input type="number" class="form-control" name="" oninput="this.className = ''" placeholder="Postal Zip" />
      </div>
    </div>

    <div class="row form-group pt-3">
      <div class="col-md-6">
        <select class="form-control">
          <option>---Country----</option>
          <option>America</option>
          <option>Germany</option>
          <option>Australia</option>
          <option>France</option>
        </select>
      </div>
       <div class="col-md-6">
        <input type="password" class="form-control" oninput="this.className = ''" name="" placeholder="State" />
      </div>
    </div>

    
  </div>



 
  <div style="overflow:auto;" class="pt-5">
    <div class="reg-btn">
      <button type="button" id="prevBtn" onclick="nextPrev(-1)">Previous</button>
      <button type="button" id="nextBtn" onclick="nextPrev(1)">Next</button>
    </div>
  </div>
  {/* <!-- Circles which indicates the steps of the form: --> */}
  <div style="text-align:center;margin-top:40px;">
    <span class="step"></span>
    <span class="step"></span>
    <span class="step"></span>
    <span class="step"></span>
  </div>
</form>
           </div>
          </div>
</div>
 </div>
    </div>
  </div>
  </div>
        </div>
    )
}

export default Login
