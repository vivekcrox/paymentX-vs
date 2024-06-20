import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BottomWarning } from "/components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/Subheading";
import { Link } from "react-router-dom";
const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(""); // State for error message

  const handleSignup = async () => {
    try {
      const signupData = {
        username,
        firstName,
        lastName,
        password 
      };
      
      const response = await axios.post("http://localhost:3000/api/v1/user/signup", signupData);

      const token = response.data.token;
      localStorage.setItem("token", token);
      navigate("/signin")
    } catch (error) {
      console.error("Signup error:", error);
      setErrorMessage(error.response?.data?.message || "Signup failed. Please try again.");
    }
  };
  return (
    <div>
      <div className="bg-green-50 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="shadow-2xl rounded-lg border bg-white/50 w-80 text-center p-1 h-max px-4">
            <Heading label="Sign Up" />
            <SubHeading label="Enter your information to create an account" />
            <InputBox
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="John"
              label="First Name"
            />
            <InputBox
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Doe"
              label="Last Name"
            />
            <InputBox
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Doe@gmail.com"
              label="Email"
            />
            <InputBox
              onChange={(e) => setPassword(e.target.value)}
              placeholder="123456"
              label="Password"
              type="password" 
            />
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <div className="pt-2">
              <Button onClick={()=>{
                setTimeout(handleSignup,1500)
              }} label="Sign Up"
              
              />
            </div>
            <BottomWarning label="Already have an account?" buttonText="Sign In" to="/signin" />
            <BottomWarning label="Or go back to home" buttonText="Home" to="/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;