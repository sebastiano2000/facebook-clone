import React, { useState } from 'react'
import './MessageSender.css'
import { Avatar } from '@material-ui/core';
import VideoCamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

function MessageSender() {
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        setInput('');
        setImageUrl('');
    };

  return (
    <div className='messageSender'>
        <div className='messageSender_top'>
            <Avatar src="https://scontent.fcai21-4.fna.fbcdn.net/v/t1.6435-9/198084428_4013571755402778_5722299692533734374_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=2cI8dMhB2pEAX9ZBB3-&tn=87hZVLF5uJvQ5OLn&_nc_ht=scontent.fcai21-4.fna&oh=00_AT9z56cvt4qbmLYBkBjMhLFRJFEOCMutvRvUyM9rjvUVog&oe=6322A762" />
            <form>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className='messageSender_input'
                    placeholder="What's on your mind?" 
                />
                <input 
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder='image URL (Optional)' 
                />
                <button onClick={handleSubmit} type='submit'>
                    Hidden Submit
                </button>
            </form>
        </div>

        <div className='messageSender_bottom'>
            <div className='messageSender_option'>
                <VideoCamIcon style={{ color: 'red' }} />
                <h3>Live Video</h3>
            </div>

            <div className='messageSender_option'>
                <PhotoLibraryIcon style={{ color: 'green' }} />
                <h3>Photo/Video</h3>
            </div>

            <div className='messageSender_option'>
                <InsertEmoticonIcon style={{ color: 'orange' }} />
                <h3>Feeling/Activity</h3>
            </div>
        </div>
    </div>
  )
}

export default MessageSender