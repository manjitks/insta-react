import React from 'react'

function Story({img,username}) {
  return (
    <div >
        <img className="h-12 w-14 rounded-full p-1 border-red-500 border-2
        object-contain hover:scale-125 transition transform duration-100 ease-out"
         src="https://cdn.cdnlogo.com/logos/i/32/instagram-icon.svg" alt="imgage"/>
        <p className="text-xs w-14 text-center truncate">{username}</p>
    </div>
  )
}

export default Story