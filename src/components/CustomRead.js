import { Table, Button } from 'semantic-ui-react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useAxios from '../components/useAxios';

 const CustomRead = () =>{
    const [APIData, setAPIData] = useState([]);
    const { response, loading, error } =  useAxios({
        method: 'get',
        url: '/fakeData',
        //headers: JSON.stringify({ accept: '*/*' }),
        // body: JSON.stringify({
        //     firstName: 'Carlos',
        //     lastName: 'Fernandez',
        //     checkbox: false, 
        // }),
    });

    useEffect(() => {
                setAPIData(response);      
    }, [response])

    const onDelete = (id) => {
        axios.delete(`https://61004cc6bca46600171cf84a.mockapi.io/api-crud/v1/fakeData/${id}`)
     .then(() => {
        getData();
    })
}
const getData = () => {
    axios.get(`https://61004cc6bca46600171cf84a.mockapi.io/api-crud/v1/fakeData`)
        .then((getData) => {
             setAPIData(getData.data);
         })
}
    return (
        <div>            
            <h1>Posts</h1>

        {loading ? (
            <p>loading...</p>
        ) : (
            <div>
            {error && (
                <div>
                    <p>Error Message: {error.message}</p>
                </div>
            )}   
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                    <Table.HeaderCell>id</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.id}</Table.Cell>
                                <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>{data.lastName}</Table.Cell>
                                <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                                <Table.Cell>
                                <Button onClick={() => onDelete(data.id)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
            </div>
        </div>
        )}
        </div>
    );
};
export default CustomRead;