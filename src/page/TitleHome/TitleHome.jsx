import React, { useEffect, useState } from 'react'
import { Collapse, Divider } from 'antd';
import ButtonTitleHome from './components/ButtonTitleHome';
import { pageService } from '../../services/pageService';
import { useParams } from 'react-router-dom';

export default function TitleHome() {
  const param = useParams()
  const [postTitle, setPostTitle] = useState({})
  const [ListPostComent, setpostComent] = useState([])
  const [userPost, setUserPost] = useState({})

  const fetchUserID = async () => {
    const user = await pageService.fetchGetUserIDApi(param.userID)
    setUserPost(user.data)
  }

  const fetchPostTitle = async () => {
    const data = await pageService.fetchGetPostIDApi(param.id)
    setPostTitle(data.data)

  }
  const fetchComentPost = async () => {
    const listComent = await pageService.fetchGetcommentApi(param.id)
    setpostComent(listComent.data)
  }
  useEffect(() => {
    fetchPostTitle();
    fetchComentPost();
    fetchUserID();
  }, [])
  return (
    <div className='post-home'>
      <h1>{postTitle?.title}</h1>
      <div className='user'>
        <div className='left'>
          <h4>Author: {userPost?.name}</h4>
          <p>Create at: Sep 20, 2023</p>
        </div>
        <div className='right'>
          <ButtonTitleHome color={"primary"} />
          <ButtonTitleHome color={"secondary"} />
          <ButtonTitleHome color={"success"} />
          <ButtonTitleHome color={"danger"} />
          <ButtonTitleHome color={"warning"} />
          <ButtonTitleHome color={"info"} />
          <ButtonTitleHome color={"primary"} />
          <ButtonTitleHome color={"secondary"} />
          <ButtonTitleHome color={"success"} />
          <ButtonTitleHome color={"warning"} />
          <ButtonTitleHome color={"dark"} />
          <ButtonTitleHome color={"secondary"} />
        </div>
      </div>
      <div className='content'>
        <p>{postTitle?.body}</p>
      </div>
      <div className='comments'>
        <Divider orientation="left">{ListPostComent.length} replies</Divider>
        <Collapse
          items={[
            {
              key: '1',
              label: 'Open Comments',
              children:
                <div className='comment-container'>
                  {ListPostComent?.map((ele) => {
                    return (
                      <div className='item' key={ele.id}>
                        <div className='left'>
                          <img width={30} src="http://sc04.alicdn.com/kf/Hc3e61591078043e09dba7808a6be5d21n.jpg" alt="avata" />
                        </div>
                        <div className='right'>
                          <div className='top'>
                            <span className='name'>{ele.name}</span>
                            <span className='time'>2 days ago</span>
                          </div>
                          <div className='body'>
                            <p>{ele.body}</p>
                          </div>
                          <div className='bottom'>
                            <span>Reply to</span>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>,
            },
          ]}
        />
      </div>
    </div>
  )
}
