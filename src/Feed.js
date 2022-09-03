import React from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'

function Feed() {
  return (
    <div className='feed'>
        <StoryReel />
        <MessageSender />
        <Post 
          key={782414}
          profilePic="https://th.bing.com/th/id/R.b6ce6987b12cc32bf8634ce1811184f4?rik=TBlTtZKMSaY%2bkg&pid=ImgRaw&r=0"
          image="https://th.bing.com/th/id/R.554a83fbf7367ad7c4ceb52109913f66?rik=10tNuO8E4WVNEA&pid=ImgRaw&r=0"
          timestamp="24 august at hour 04:44"
          username="George J."
          message="Hello, I'm George"
        />
        <Post 
          key={634534}
          profilePic="https://scontent.fcai21-4.fna.fbcdn.net/v/t1.6435-9/198084428_4013571755402778_5722299692533734374_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=2cI8dMhB2pEAX9ZBB3-&tn=87hZVLF5uJvQ5OLn&_nc_ht=scontent.fcai21-4.fna&oh=00_AT9z56cvt4qbmLYBkBjMhLFRJFEOCMutvRvUyM9rjvUVog&oe=6322A762"
          timestamp="20 august at hour 12:30"
          username="Sebastiano Saad"
          message="Good Morning this is my website"
        />
        <Post 
          key={345349}
          profilePic="https://scontent.fcai21-4.fna.fbcdn.net/v/t1.6435-9/198084428_4013571755402778_5722299692533734374_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=2cI8dMhB2pEAX9ZBB3-&tn=87hZVLF5uJvQ5OLn&_nc_ht=scontent.fcai21-4.fna&oh=00_AT9z56cvt4qbmLYBkBjMhLFRJFEOCMutvRvUyM9rjvUVog&oe=6322A762"
          timestamp="16 august at hour 18:07"
          username="Sebastiano Saad"
          message="How are you?"
        />
    </div>
  )
}

export default Feed