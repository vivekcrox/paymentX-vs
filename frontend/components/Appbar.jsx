import { Button } from "./Button"
import { useNavigate } from "react-router-dom";
export const Appbar = ({name}) => {
    const navigate = useNavigate();
  return <div className={'shadow-md rounded-lg h-14 flex justify-between bg-green-50 text-white'}>
      <div className={'flex flex-col justify-center h-full ml-4 text-black font-bold'}>
          Payment X
      </div>
      <div className={'flex'}>
          <div className={'flex flex-col justify-center h-full mr-4 text-black font-bold mt-auto pl-4 pr-4 pb-2 shadow-2xl rounded-xl'}>
              {name}
          </div>
          <div className={'text-black flex flex-col justify-center h-full mr-4 font-bold'}>
            <Button label={"Logout"} 
                onClick={()=>{
                    navigate("/")
                    localStorage.removeItem("token")
                }}
            >Logout </Button>
          </div>
      </div>
  </div>
}