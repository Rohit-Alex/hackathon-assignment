import { Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { columns, demoData } from '../../constants'
import { notificationHandler } from '../../utils'
import { getTodosList } from './ApiCalls'
const EventDetails = () => {
    const { eventId = '' } = useParams()
    const [apiData, setApiData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const mountFunction = async () => {
        notificationHandler({ message: 'Hi, MG', description: 'Leaving so soon', key: 'getTodo' })
        let response = []
        try {
            const data = await getTodosList()
            setApiData(data)
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
        <div className='event-details-container'>
            <h4>{eventId}</h4>
            <Table loading={isLoading} dataSource={demoData} columns={columns} pagination />
        </div>
    )
}
export default EventDetails