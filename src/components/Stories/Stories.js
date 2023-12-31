import React from 'react'
import IMAGES from '../../images'
import Story from '../Story/Story'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

function Stories() {

    const navigate = useNavigate()

    const stories = [
        // {
        //     id: '1',
        //     img: IMAGES.blankImg,
        //     name: 'Your story'
        // },
        {
            id: '2',
            img: IMAGES.cover1,
            name: 'user_1'
        },
        {
            id: '3',
            img: IMAGES.cover2,
            name: 'user_2'
        },
        {
            id: '4',
            img: IMAGES.cover3,
            name: 'user_3'
        },
        {
            id: '5',
            img: IMAGES.cover4,
            name: 'user_4'
        },
        {
            id: '6',
            img: IMAGES.cover5,
            name: 'user_5'
        },
        {
            id: '7',
            img: IMAGES.cover6,
            name: 'user_6'
        },
    ]
  return (
    <div className="status-wrapper">
        <div className='yourStory'>
            <span className='addStory' onClick={() => navigate('/error')}><FontAwesomeIcon icon={faPlusCircle} /></span>
            <Story />
            <img className='storyImg' src={IMAGES.blankImg} alt="" />
            <span className='yourStoryTxt'>Your story</span>
        </div>
        {
            stories.map(el => <Story key={el.id} img={el.img} name={el.name} />)
        }
    </div>
  )
}

export default Stories