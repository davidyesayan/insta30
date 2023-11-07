import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { bigNumberConvertor } from "../../../helpers/convertors";

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        const { data: usersData } = await axios.get('https://jsonplaceholder.typicode.com/users')

        const { data: postsData } = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=500')

        const data = usersData.map(user => ({
            id: user.id.toString(),
            name: user.name,
            username: user.username.toLowerCase(),
            followers: bigNumberConvertor(Math.round(Math.random() * 800 + 700)),
            following: bigNumberConvertor(Math.round(Math.random() * 800 + 700)),
            email: user.email.toLowerCase(),
            password: user.address.city.toLowerCase(),
            bio: Object.values(user.company).join('. '),
            posts: postsData.filter(post => post.albumId === user.id)
                .map(post => ({
                    id: post.id + '_' + user.id,
                    img: post.url,
                    name: user.username.toLowerCase(),
                    postText: post.title.split(' ').slice(1).join(' '),
                    likesCount: bigNumberConvertor(Math.round(Math.random() * 800 + 700)),
                    timeAgo: `${Math.round(Math.random() * 7 + 2)} Minutes ago`,
                    comments: []
                }))
        }))
        return data
    }
)