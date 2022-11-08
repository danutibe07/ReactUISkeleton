import React from 'react'
import { useState, useEffect} from 'react'
import SkeletonUser from '../Skeletons/SkeletonUser';
const User = () => {
const [profile, setProfile] = useState(null);
useEffect(() => {
    setTimeout(async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const data = await res.json();
        setProfile(data)
    },5000)
});
  return (
    <div className='user'>
        <h2>User Details</h2>
       ` {profile && (
        <div className="profile">
        <h3>{profile.username}</h3>
        <p>{profile.email}</p>
        <a href={profile.website}>Site</a>
        </div>
    )}
    {!profile && [1,2,3,4,5].map((index)=><SkeletonUser key={index}/>)}`
    </div>
  )
}

export default User