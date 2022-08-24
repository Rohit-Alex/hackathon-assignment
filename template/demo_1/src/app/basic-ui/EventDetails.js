import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { notificationHandler } from '../../utils'
import { getTodosList } from './ApiCalls'
const EventDetails = () => {
    const { eventId = '' } = useParams()
    const [apiData, setApiData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const mountFunction = async() => {
        notificationHandler({message: 'Hi, MG', description: 'Leaving so soon', key: 'getTodo'})
        let response = []
        try {
            const data = await getTodosList()
            response[0] = data
        } catch (err) {
            response[1] = err
        } finally {
            setApiData(response)
            setIsLoading(false)
            return response
        }
    }
    useEffect(() => {
        mountFunction()
    }, [])
    return (
        <div>{eventId}</div>
    )
}
export default EventDetails