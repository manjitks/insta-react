import React from 'react'
import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon
} from '@heroicons/react/solid'

function Post({userImg,img,username,caption}) {
  return (
    <div className="bg-white my-2 border rounded-sm">
        {/*header*/}
        <div className="flex items-center rounded-full p-5">
            <img className="h-12 w-12 p-1 mr-5" 
            src={userImg} alt="user image"/>
            <p className="flex-1 font-bold">{username}</p>
            <DotsHorizontalIcon className="h-5"/>
            </div>

        {/*pic*/}
        <img src={img} className="w-full object-cover"/>
        {/* button */}
        <div className="flex justify-between m-5">
        <div className="flex space-x-4">
            <HeartIcon className="btn"/>
            <PaperAirplaneIcon className="btn"/>
            <ChatIcon className="btn" />
        </div>
        <BookmarkIcon className="btn"/>

        </div>
        {/*caption*/}
        <div className="p-5 truncate">
            <span className="font-bold mr-5">{username}</span>
            {caption}
        </div>
        {/*inputbox*/}
        <form className="flex items-center p-4">
            <EmojiHappyIcon className="h-7 btn"/>
            <input
            type="text"
            placeholder="add a comment......."
            className="border-none flex-1 focus:ring-0 outline-none"
            />
            <button className="font-semibold text-green-900">post</button>
        </form>

    </div>

  )
}

export default Post