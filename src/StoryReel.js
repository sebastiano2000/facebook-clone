import React from 'react'
import Story from './Story'
import './StoryReel.css'

function StoryReel() {
  return (
    <div className='storyReel'>
        <Story 
            image="https://th.bing.com/th/id/R.0c2abab76a7d913fef3de0ca17ff46af?rik=ipdZnP31Mq6rtg&pid=ImgRaw&r=0" 
            profileSrc="https://th.bing.com/th/id/R.f1616dbb878e42f0cd156735261d1b8f?rik=kKdrjHSNm%2fQHBg&pid=ImgRaw&r=0" 
            title="Clara Jones"
        />
        <Story 
            image="https://th.bing.com/th/id/OIP.TM1GkIhtCbZb8FTHgAIh4QHaFs?pid=ImgDet&rs=1" 
            profileSrc="https://th.bing.com/th/id/R.b6ce6987b12cc32bf8634ce1811184f4?rik=TBlTtZKMSaY%2bkg&pid=ImgRaw&r=0" 
            title="George J."
        />
        <Story 
            image="https://www.wallpics.net/wp-content/uploads/2020/02/Cambridge-images-scaled.jpg" 
            profileSrc="https://th.bing.com/th/id/R.67ec60d5a5f1eaf6e867bc59350b5314?rik=ABO6A%2bzZA0252w&pid=ImgRaw&r=0" 
            title="John Mike"
        />
        <Story 
            image="https://ww1.prweb.com/prfiles/2010/06/17/4161594/2_Getty04.jpg" 
            profileSrc="https://th.bing.com/th/id/OIP.OaCEx6eqBIl_26YEFvqhQAHaLG?w=186&h=279&c=7&r=0&o=5&pid=1.7" 
            title="Laura Paul"
        />
        <Story 
            image="https://th.bing.com/th/id/R.d485e7c5ed8b712b19f163243c511478?rik=g9QOnSmAh0RZwA&pid=ImgRaw&r=0" 
            profileSrc="https://th.bing.com/th/id/R.5f6cb39535bdbea38dd64fd6c3e3b052?rik=xEUYhcnFcZG7dA&pid=ImgRaw&r=0" 
            title="Sara Alber"
        />
    </div>
  )
}

export default StoryReel