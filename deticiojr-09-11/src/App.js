import React from "react";
import "./App.css";

function App() {
	return (
		<>
      <form className="App">
			<p className="title">Login</p>
			
				<input type="email" placeholder="Email"/>
				<input type="password" placeholder="Password" />
				<p> <a href="https://www.example.com/signup">Forgot Password</a></p>
				<input type={"submit"}
					style={{ backgroundColor: " #3081D0", color: "white"}} />
			<p>Don't have an account? <a href="https://www.example.com/signup">Sign Up</a></p>
			<input placeholder="Login with Facebook" style={{ backgroundColor: "#4267B2", color: "white", textAlign: "center", fontSize: "13px"}}/>
			<input  placeholder="Login with Email" style={{ backgroundColor: "white", color: "white", textAlign: "center", fontSize: "13px"}}/>
			</form>
   
		</>
	);
}

export default App;