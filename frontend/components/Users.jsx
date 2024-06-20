import { useEffect, useState } from "react"
import { Button } from "./Button"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Balance } from "./Balance";


export const Users = () => {
    // Replace with backend call
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");
    const [balance,setBalance]=useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
            .then(response => {
                setUsers(response.data.user)
            })
    }, [filter])

    return <div className="">
       
        <div className={'font-bold mt-6 text-lg'}>
            Users
        </div>
        <div className={'my-2 '}>
            <input onChange={(e) => {
                setFilter(e.target.value) 
            }} type="text" placeholder="Search users..." className={'w-full px-2 py-1 border rounded  bg-green-50 text-black'}></input>
        </div>
        <div className={' h-96 overflow-scroll overflow-x-hidden mt-16 scrollbar-hide shadow-inner p-5 shadow-2xl border-2 border-green-400 '}>
            {users.map(user => <User key={user._id} user={user} />)}
        </div>
    </div>
}

function User({user}) {
    const navigate = useNavigate();

    return <div className={'flex justify-between'}>
        <div className={'flex'}>
            <div className={'rounded-full h-12 w-12 bg-green-500  flex justify-center mt-1 mr-2'}>
                <div className={'flex flex-col justify-center h-full text-xl text-white'}>
                    {user.firstName[0].toUpperCase()}
                </div>
            </div>
            <div className={'flex flex-col justify-center h-full '}>
                <div>
                    {user.firstName} {user.lastName}
                </div>
            </div>
        </div>

        <div className={'flex flex-col justify-center h-full mt-auto'}>
            <Button onClick={(e) => {
                navigate("/send?id=" + user._id + "&name=" + user.firstName);
            }} label={"Send Money"} />
        </div>
    </div>
}