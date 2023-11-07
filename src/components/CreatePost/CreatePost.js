import React, { useRef } from 'react';
import IMAGES from '../../images';
import './CreatePost.css'
import { convertFileToBase64 } from '../../helpers/convertors';
import { useDispatch } from 'react-redux';
import { addPost } from '../../store/middlewares/posts';
import { useNavigate } from 'react-router-dom';
import { withSelectImg } from '../../hoc/withSelectImg';
const CreatePost = ({ myImg, toggleMyImg }) => {
    const formRef = useRef(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const [{ value: postText }] = formRef.current

        const img = myImg
        // const [{files: [file]},{value: postText}] = formRef.current

        // const img = await convertFileToBase64(file)

        dispatch(addPost({ img, postText }))

        navigate('/')
    }


    const handleChange = async (e) => {
        const img = await convertFileToBase64(e.target.files[0])

        toggleMyImg(img)
    }

    return (
        <div style={{ marginTop: '120px', textAlign: 'center' }} className='container'>
            <h1 style={{ fontSize: '40px' }}>Create Post !</h1>
            <br />
            <img className='postIcon' width={myImg ? 300 : 80} src={myImg || IMAGES.createPost} alt="" />
            <br />
                <label className="input-file">
                    <span>Choose File</span>
                    <input type="file" name="file" onChange={handleChange} />
                </label><br /><br />
            <form ref={formRef} onSubmit={handleSubmit} className='formHolder'>
                <input type="text" placeholder='write down caption' /><br /><br />
                <button className='addBtn'>Add</button>
            </form>
        </div>
    );
}

export default withSelectImg(CreatePost);
