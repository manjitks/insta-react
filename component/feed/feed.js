import React from 'react'
import MiniProfile from './miniProfile/miniprofile'
import Posts from './posts/posts'
import Stories from './stories/stories'
import Suggestions from './suggestions/suggestions'

function Feed() {
  return (
        <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl 
        xl:grid-cols-3 xl:max-w-6xl mx-auto">
        <section className="col-span-2">
        <Stories/>
        <Posts/>
        </section>
        <section className="hidden xl:inline-grid md:col-span-1">

        {/* mini profile */}
        <div className="fixed top-20">

        <MiniProfile/>
        <Suggestions/>
        {/* suggestion */}
        </div>
        </section>
        </main>

    
  )
}

export default Feed