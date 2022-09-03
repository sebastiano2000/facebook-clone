import React from 'react'
import './Widgets.css'
import MoreHorizIcon from '@material-ui/icons//MoreHoriz';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';

function Widgets() {
  return (
    <div className='widgets'>
      <div className="widgets_bar">
        <h4>Contacts</h4>

        <div className="widgets_bar_icons">
          <VideoCallIcon />
          <SearchIcon />
          <MoreHorizIcon />
        </div>
      </div>

      <div className="contacts_row">
        <div className="contact">
          <Avatar src="https://th.bing.com/th/id/R.f1616dbb878e42f0cd156735261d1b8f?rik=kKdrjHSNm%2fQHBg&pid=ImgRaw&r=0" />
          <h4>Clara Jones</h4>
        </div>
        <div className="contact">
          <Avatar src="https://th.bing.com/th/id/R.b6ce6987b12cc32bf8634ce1811184f4?rik=TBlTtZKMSaY%2bkg&pid=ImgRaw&r=0" />
          <h4>George J.</h4>
        </div>
        <div className="contact">
          <Avatar src="https://th.bing.com/th/id/R.67ec60d5a5f1eaf6e867bc59350b5314?rik=ABO6A%2bzZA0252w&pid=ImgRaw&r=0" />
          <h4>John Mike</h4>
        </div>
        <div className="contact">
          <Avatar src="https://th.bing.com/th/id/OIP.OaCEx6eqBIl_26YEFvqhQAHaLG?w=186&h=279&c=7&r=0&o=5&pid=1.7" />
          <h4>Laura Paul</h4>
        </div>
        <div className="contact">
          <Avatar src="https://th.bing.com/th/id/R.5f6cb39535bdbea38dd64fd6c3e3b052?rik=xEUYhcnFcZG7dA&pid=ImgRaw&r=0" />
          <h4>Sara Alber</h4>
        </div>
      </div>

    </div>
  )
}

export default Widgets