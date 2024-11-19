import React from "react";
import "../../Assets/Styles/AdminLogin.css";
import blog_logo1 from "../../Assets/Images/blog-logo.jpg";

function AdminLogin() {
  return (
    <>
      {/* <!-- Main Content --> */}
      <div class="container-fluid  ">
        <div class="row main-content bg-success text-center  ">
          <div class="col-md-4 text-center company__info">
            <img src={blog_logo1} className="logo" />
          </div>
          <div class="col-md-8 col-xs-12 col-sm-12 login_form ">
            <div class="container-fluid">
              <div class="row">
                <h2>Log In</h2>
              </div>
              <div class="row">
                <form control="" class="form-group">
                  <div class="row">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      class="form__input"
                      placeholder="Username"
                    />
                  </div>
                  <div class="row">
                    {/* <!-- <span class="fa fa-lock"></span> --> */}
                    <input
                      type="password"
                      name="password"
                      id="password"
                      class="form__input"
                      placeholder="Password"
                    />
                  </div>
                  <div class="d-flex ">
                    <input
                      type="checkbox"
                      name="remember_me"
                      id="remember_me"
                      className="AdminLogin_check"
                    />
                    <label for="remember_me" className="AdminLogin_check mx-5">
                      Remember Me!
                    </label>
                  </div>
                  <div class="row">
                    <input type="submit" value="Submit" class="btn" />
                  </div>
                </form>
              </div>
              <div class="row my-2">
                <p>
                  <a href="#">Forgot Password?</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
