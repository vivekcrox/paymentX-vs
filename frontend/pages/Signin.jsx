import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/Subheading"
import TopBar from "../components/TopBar"
import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const Signin = () => {
    const [errorMessage, setErrorMessage] = useState(""); // State for error message
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [balance,setbalance]=useState("")
    const navigate = useNavigate();
    
    return <div className={' bg-green-50 overflow-y-hidden '}>
      
      <div className={'bg-green-50 mt-[0px] flex justify-center overflow-x-hidden'}>
      
      <div className={'flex flex-col h-screen justify-center'}>
      
        <div className={'shadow-2xl border rounded-lg bg-white/5 xl:w-80 min-[400px]:w-60  min-[320px]:w-60 min-[280px]:w-40 text-center p-2 h-max px-4'}>
          <Heading label={"Sign in"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox onChange={e => {
          setUsername(e.target.value);
        }} placeholder="abc@gmail.com" label={"Email"} />
          <InputBox onChange={e => {
          setPassword(e.target.value);
        }} placeholder="123456" label={"Password"} />
          <div className={'pt-4'}>
            <Button
              onClick={async ()=>{
                try {
                  const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
                    username,
                    password,
                  });
                  
                  const userId = response.data.userId;
                  
                  if (userId) { 

                    const firstName=response.data.firstName;
                    const token=response.data.token;
                    const balanceResponse = await axios.get("http://localhost:3000/api/v1/account/balance", {
                        headers: { Authorization: `Bearer ${token}` }, 
                    });

                    const balance = balanceResponse.data.balance;

                    localStorage.setItem("token", response.data.token);
                    navigate("/dashboard?name=" + firstName + "&balance=" + balance); 
                  } else {
                    console.error("User ID not found in response"); 
                  }

                } catch (error) {
                  console.error("Error during login:", error); 
                  setErrorMessage(error.response?.data?.message);
                }
              }}
            
            label={"Sign in"} />
          </div>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
          <BottomWarning label={"Or go back to home"} buttonText={"Home"} to={"/"} />
        </div>
      </div>
    </div>
    </div>
}

export default Signin