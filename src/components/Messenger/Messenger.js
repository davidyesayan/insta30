import './Messenger.css'
import { faHome, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon, } from "@fortawesome/react-fontawesome";
import MessengerPeoplesMessage from '../MessengerPeoplesMessage/MessengerPeoplesMessage';
import MessengerPeoplesMessages from '../MessengerPeoplesMessages/MessengerPeoplesMessages';
import MessengerChatSection from '../MessengerChatSection/MessengerChatSection';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { resetActive, selectMessages } from '../../store/slices/messages/messagesSlice';


function Messenger() {
	const dispatch = useDispatch()
	const {activeUserId} = useSelector(selectMessages)

	useEffect(() => {
		return () => {
			dispatch(resetActive())
		}
	},[])
  return (
	 <div className='Messenger'>
		<div className='Messenger-auto'>
			<div className='Messenger-left-col'>
				<div className='Messenger-left-col-direct'>
					<p>Direct</p>
					<FontAwesomeIcon className='penIcon' icon={faPenToSquare} /> 
				</div>
				<div className='Messenger-left-col-peoples'>
					<div className='Primary-General'>
						<p>Primary</p>
						{/* <p>General</p> */}
					</div>
					<MessengerPeoplesMessages />
				</div>
			</div>
				{activeUserId && <MessengerChatSection />}
		</div>
	 </div>
  )
}

export default Messenger
