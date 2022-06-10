import React from 'react';

export default function Login() {
  return ( 
        <div className="App"> 
		<div className="d-flex flex-column flex-root"> 
			<div style={{backgroundColor: "#ffff"}} className="login login-4 login-signin-on d-flex flex-row-fluid" id="kt_login">
				<div className="d-flex flex-center flex-row-fluid bgi-size-cover bgi-position-top bgi-no-repeat">
					<div className="login-form text-center p-7 position-relative overflow-hidden"> 
						<div className="d-flex flex-center mb-15">
							<a href="#">
								<img src="assets/media/logos/sk.png" className="max-h-100px" alt="" />
							</a>
						</div> 
						<div className="login-signin">
							<div className="mb-20">
								<h3>Barangay Automation</h3>
								<div className="text-muted font-weight-bold">Enter your details to login to your account:</div>
							</div>
							<form className="form" id="kt_login_signin_form">
								<div className="form-group mb-5">
									<input className="form-control h-auto form-control-solid py-4 px-8" type="text" placeholder="Email" name="username" autoComplete="off" />
								</div>
								<div className="form-group mb-5">
									<input className="form-control h-auto form-control-solid py-4 px-8" type="password" placeholder="Password" name="password" />
								</div>
								<div className="form-group d-flex flex-wrap justify-content-between align-items-center">
									<div className="checkbox-inline">
										<label className="checkbox m-0 text-muted">
										<input type="checkbox" name="remember" />
										<span></span>Remember me</label>
									</div>
									<a href="#" id="kt_login_forgot" className="text-muted text-hover-primary">Forget Password ?</a>
								</div>
								<button id="kt_login_signin_submit" className="btn btn-primary font-weight-bold px-9 py-4 my-3 mx-4">Sign In</button>
							</form>
							<div className="mt-10">
								<span className="opacity-70 mr-4">Don't have an account yet?</span>
								<a href="#" id="kt_login_signup" className="text-muted text-hover-primary font-weight-bold">Sign Up!</a>
							</div>
						</div> 
						<div className="login-signup">
							<div className="mb-20">
								<h3>Sign Up</h3>
								<div className="text-muted font-weight-bold">Enter your details to create your account</div>
							</div>
							<form className="form" id="kt_login_signup_form">
								<div className="form-group mb-5">
									<input className="form-control h-auto form-control-solid py-4 px-8" type="text" placeholder="Fullname" name="fullname" />
								</div>
								<div className="form-group mb-5">
									<input className="form-control h-auto form-control-solid py-4 px-8" type="text" placeholder="Email" name="email" autoComplete="off" />
								</div>
								<div className="form-group mb-5">
									<input className="form-control h-auto form-control-solid py-4 px-8" type="password" placeholder="Password" name="password" />
								</div>
								<div className="form-group mb-5">
									<input className="form-control h-auto form-control-solid py-4 px-8" type="password" placeholder="Confirm Password" name="cpassword" />
								</div>
								<div className="form-group mb-5 text-left">
									<div className="checkbox-inline">
										<label className="checkbox m-0">
										<input type="checkbox" name="agree" />
										<span></span>I Agree the
										<a href="#" className="font-weight-bold ml-1">terms and conditions</a>.</label>
									</div>
									<div className="form-text text-muted text-center"></div>
								</div>
								<div className="form-group d-flex flex-wrap flex-center mt-10">
									<button id="kt_login_signup_submit" className="btn btn-primary font-weight-bold px-9 py-4 my-3 mx-2">Sign Up</button>
									<button id="kt_login_signup_cancel" className="btn btn-light-primary font-weight-bold px-9 py-4 my-3 mx-2">Cancel</button>
								</div>
							</form>
						</div> 
						<div className="login-forgot">
							<div className="mb-20">
								<h3>Forgotten Password ?</h3>
								<div className="text-muted font-weight-bold">Enter your email to reset your password</div>
							</div>
							<form className="form" id="kt_login_forgot_form">
								<div className="form-group mb-10">
									<input className="form-control form-control-solid h-auto py-4 px-8" type="text" placeholder="Email" name="email" autoComplete="off" />
								</div>
								<div className="form-group d-flex flex-wrap flex-center mt-10">
									<button id="kt_login_forgot_submit" className="btn btn-primary font-weight-bold px-9 py-4 my-3 mx-2">Request</button>
									<button id="kt_login_forgot_cancel" className="btn btn-light-primary font-weight-bold px-9 py-4 my-3 mx-2">Cancel</button>
								</div>
							</form>
						</div> 
					</div>
				</div>
			</div> 
		</div> 
    </div> 
  );
} 
