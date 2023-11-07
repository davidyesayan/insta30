import { useSelector } from 'react-redux'
import './MessengerChat.css'
import { selectMessages } from '../../store/slices/messages/messagesSlice'
import { selectUsers } from '../../store/slices/users/usersSlice'
import { useRef } from 'react'
import { useEffect } from 'react'

function MessengerChat() {
  const {currentDialog} = useSelector(selectMessages)
  const {currentUser} = useSelector(selectUsers)

  const divRef = useRef(null)

  useEffect(() => {
    divRef.current.scrollTop = divRef.current.scrollHeight
  },[currentDialog])

  return (
	 <div ref={divRef} className='MessengerChat'>
    {
      currentDialog.map(message => (
        <h1 className={currentUser.id === message.fromId ? 'from' : 'to'} key={message.id}>
          <span className={message.body === '❤️' ? 'heart' : 'spanTxt'}>{message.body}</span>
        </h1>
      ))
    }
	 </div>
  )
}

export default MessengerChat
