import React from 'react'
import Post from './post/post'

const posts = [
    {
        id:1,
        username:"manjit",
        userImg:"https://cdn.cdnlogo.com/logos/i/32/instagram-icon.svg",
        Img:"https://cdn.cdnlogo.com/logos/i/32/instagram-icon.svg",
        caption:"dont stop"
    },
    {
        id:2,
        username:"manjit",
        userImg:"https://cdn.cdnlogo.com/logos/i/32/instagram-icon.svg",
        Img:"https://cdn.cdnlogo.com/logos/i/32/instagram-icon.svg",
        caption:"dont stop"
    },
    {
        id:3,
        username:"manjit",
        userImg:"https://cdn.cdnlogo.com/logos/i/32/instagram-icon.svg",
        Img:"https://cdn.cdnlogo.com/logos/i/32/instagram-icon.svg",
        caption:"dont stop"
    },
    
]

function Posts() {
      return (
    <div>
        {
            posts.map((post)=>{
                return <Post
                key={post.id}
                username={post.username}
                img={post.Img}
                userImg={post.userImg}
                caption={post.caption}
                />
            })
        }

    </div>
  )
}

export default Posts