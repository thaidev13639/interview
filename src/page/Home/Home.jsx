import React, { useEffect, useState } from 'react'
import { pageService } from '../../services/pageService'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const [listPost, setListPost] = useState([])
    const navigate = useNavigate()
    const fetchListPost = async () => {
        const data = await pageService.fetchGetListPostApi()
        setListPost(data.data)
    }
    useEffect(() => {
        fetchListPost()
    }, [])
    return (
        <div className='home-page'>
            <h1>List Post</h1>
            <ul>
                {listPost.map((ele) => {
                    return <li onClick={() => navigate(`/title-home/${ele.id}/${ele.userId}`)} key={ele.id}><span>{ele.id}</span>{ele.title}</li>
                })}
            </ul>

        </div>
    )
}
