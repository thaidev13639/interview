import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import { pageService } from '../services/pageService'
import { useDispatch } from 'react-redux'
import { pageAction } from '../redux-toolkit/reducer/pageReducer'

export default function HomeLayout() {
    const dispatch = useDispatch()

    const fetchGetListUser = async () => {
        const data = await pageService.fetchGetListUserApi()
        dispatch(pageAction.SET_LIST_USER(data.data))
        localStorage.setItem("LIST_USER", JSON.stringify(data.data))
    }

    useEffect(() => {
        fetchGetListUser()
    }, [])
    return (
        <div>
            <Header />

            <Outlet />

            <Footer />
        </div>
    )
}
