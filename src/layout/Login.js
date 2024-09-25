function Login() {
    return<div className="auth-wrapper">
	<div className="auth-content text-center">
		<div className="card borderless">
			<div className="row align-items-center ">
				<div className="col-md-12">
					<div className="card-body">
						<h4 className="mb-3 f-w-400">login</h4>
						<hr/>
						<div className="form-group mb-3">
							<input type="text" className="form-control" id="Email" placeholder="Email address"/>
						</div>
						<div className="form-group mb-4">
							<input type="password" className="form-control" id="Password" placeholder="Password"/>
						</div>
						<div className="custom-control custom-checkbox text-left mb-4 mt-2">
							<input type="checkbox" className="custom-control-input" id="customCheck1"/>
							<label className="custom-control-label" for="customCheck1">Save credentials.</label>
						</div>
						<button className="btn btn-block btn-primary mb-4">Login</button>
						<hr/>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
}
export default Login;