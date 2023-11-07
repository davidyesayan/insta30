import { bigNumberConvertor } from "../../helpers/convertors"

const ignoreEmptyComment = (store) => (next) => (action) => {
    if (action.type === 'posts/addComment' && !action.payload.body.trim()) {
        return
    }
    next(action)
}

const addPostLogic = (store) => (next) => (action) => {
    if (action.type === 'addPost') {
        const post = {
            ...action.payload,
            // img: action.payload.img,
            // postText: action.payload.postText,
            id: new Date().getTime().toString(),
            name: store.getState().users.currentUser.username,
            likesCount: bigNumberConvertor(Math.round(Math.random() * 800 + 700)),
            timeAgo: `${Math.round(Math.random() * 7 + 2)} Minutes ago`,
            comments: []
            }

        store.dispatch({type: 'posts/addPost', payload:post})    
        store.dispatch({type: 'users/addPost', payload:post})    

        return
    }

        next(action)
    }


    export const addPost  = (payload) => ({
        type:'addPost',
        payload
    })

    const deletePostLogic = (store) => (next) => (action) => {
        if (action.type === 'deletePost') {

            store.dispatch({type: 'posts/deletePost', payload: action.payload})
            store.dispatch({type: 'users/deletePost', payload: action.payload})

            return
        }
        next(action)
    }

   export const deletePost = (payload) => ({
        type: 'deletePost',
        payload
    })

    export default function getPostsMiddlewares() {
        return [
            ignoreEmptyComment,addPostLogic,deletePostLogic
        ]
    }