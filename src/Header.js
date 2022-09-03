import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Header() {
  return (
    <div className='header'>
        <div className='header_left'>
            <img alt='' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png' />
            <div className='header_input'>
              <SearchIcon />
              <input placeholder='Search Facebook' type='text' />
            </div>
        </div>

        <div className='header_middle'>
          <div className='header_option header_option--active'>
            <HomeIcon fontSize='large' />
          </div>
          <div className='header_option'>
            <FlagIcon fontSize='large' />
          </div>
          <div className='header_option'>
            <SubscriptionsOutlinedIcon fontSize='large' />
          </div>
          <div className='header_option'>
            <StorefrontOutlinedIcon fontSize='large' />
          </div>
          <div className='header_option'>
            <SupervisedUserCircleIcon fontSize='large' />
          </div>
        </div>

        <div className='header_right'>
          <div className='header_info'>
            <Avatar src="https://scontent.fcai21-4.fna.fbcdn.net/v/t1.6435-9/198084428_4013571755402778_5722299692533734374_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=2cI8dMhB2pEAX9ZBB3-&tn=87hZVLF5uJvQ5OLn&_nc_ht=scontent.fcai21-4.fna&oh=00_AT9z56cvt4qbmLYBkBjMhLFRJFEOCMutvRvUyM9rjvUVog&oe=6322A762" />
            <h4>Sebastiano Saad</h4>
          </div>

          <IconButton>
            <AddIcon />
          </IconButton>
          <IconButton>
            <ForumIcon />
          </IconButton>
          <IconButton>
            <NotificationsActiveIcon />
          </IconButton>
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </div>
    </div>
  )
}

export default Header