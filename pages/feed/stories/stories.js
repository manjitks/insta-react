import React, { useEffect,useState } from 'react'
import faker from "faker"
import Story from './story/story';

function Stories() {
    const [suggestion,setSuggestion] = useState([]);

    useEffect(()=>{
        const suggestion = [...Array(20)].map((_,i)=>({
            ...faker.helpers.contextualCard(),
            id:i
        }))
        console.log(suggestion)
        setSuggestion(suggestion)
    },[])
    return (
        <div className="flex space-x-2 p-6 bg-white mt-5 border-gray-200 border
        rounded-sm overflow-x-scroll">
            {
                suggestion.map((profile=>{
                    console.log(profile)
                    return<Story key={profile.id} 
                    img={profile.avatar} 
                    username={profile.username}/>
                }))
            }
        
        </div>
    )
}

export default Stories