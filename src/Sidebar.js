import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined';

function Sidebar() {
  return (
    <div className='sidebar'>
        <SidebarRow src='https://scontent.fcai21-4.fna.fbcdn.net/v/t1.6435-9/198084428_4013571755402778_5722299692533734374_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=2cI8dMhB2pEAX9ZBB3-&tn=87hZVLF5uJvQ5OLn&_nc_ht=scontent.fcai21-4.fna&oh=00_AT9z56cvt4qbmLYBkBjMhLFRJFEOCMutvRvUyM9rjvUVog&oe=6322A762' title='Sebastiano Saad' />
        <SidebarRow Icon={LocalHospitalIcon} title='Covid-19 Information Center'/>
        <SidebarRow Icon={EmojiFlagsIcon} title='Pages'/>
        <SidebarRow Icon={PeopleIcon} title='Friends'/>
        <SidebarRow Icon={ChatIcon} title='Messenger'/>
        <SidebarRow Icon={StorefrontIcon} title='Marketplace'/>
        <SidebarRow Icon={VideoLibraryIcon} title='Videos'/>
        <SidebarRow Icon={ExpandMoreOutlined} title='Marketplace'/>
    </div>
  )
}

export default Sidebar