import React from 'react'
import { Appbar } from '../components/Appbar'
import { Balance } from '../components/Balance'
import { Users } from '../components/Users'
import { useSearchParams ,useParams} from 'react-router-dom';

const Dashboard = () => {
    const [searchParams] = useSearchParams();
    const name = searchParams.get("name");
    const balance=searchParams.get("balance")
    const roundOff=Math.round(balance*100)/100;
  return <div className={'h-screen bg-green-50'}>
        <Appbar name={name}/>
    <div className={'m-8'}>
            <Balance value={roundOff}/>
            <Users />
        </div>
    </div>
}

export default Dashboard