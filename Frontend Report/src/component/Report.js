import React, { useState, useEffect } from 'react';
const Report = () => {
    const [records, setRecords] = useState([])

    const fetchData = () => {
        fetch("http://localhost:8080/report/csv")
            .then(response => {
                return response.json()

            })

            .then(data => {

                setRecords(data)

            })

    }
    useEffect(() => {

        fetchData()

    }, [])

    return (

        <div>
            <h1 className='page-title-pt5'>List wise info</h1>
            <table className="table table-striped table-hover">
                <thead className='table-dark'>
                    <tr>

                        <th scope="col">Segment</th>
                        <th scope="col">City</th>
                        <th scope="col">Country</th>
                        <th scope="col">Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        records.map(
                            record =>
                                <tr key={record.id}>
                                    <td>{record.segment}</td>
                                    <td>{record.city}</td>
                                    <td>{record.country}</td>
                                    <td>{record.quantity}</td>
                                </tr>
                        )

                    }
                </tbody>
            </table>

        </div>

    )

}
export default Report;