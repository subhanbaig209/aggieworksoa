import ActivityButton from './ActivityButton';
import Header from './Header';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

interface IActivity {
  activity: string;
}

const App: React.FC = () => {
  const [activity, setActivity] = useState<IActivity>({activity: ""});
  const [err, setErr] = useState("");

  const handleError = (error:string) => {
    setErr(err);
  }

  const handleClick = async () => {
    try {
      const response = await axios.get('https://www.boredapi.com/api/activity/');
      setActivity({activity: response.data.activity});
      setErr("");
    } catch (e) {
      handleError("There is an error processing your request")
    }
    
  }

  return (
    <div>
        <Header/>
        <ActivityButton handleClick={handleClick} activity={activity} />
        
    </div>
  );
}



export default App;
