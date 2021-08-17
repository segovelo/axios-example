import React from "react";
import { useState, useEffect } from 'react';
import axios from "axios";
import useAxios from '../components/useAxios';

const CustomHook = () => {
    const [data, setData] = useState([]);

    const { response, loading, error } =  useAxios({
        method: 'post',
        url: '/posts',
        headers: JSON.stringify({ accept: '*/*' }),
        body: JSON.stringify({
            userId: 1,
            id: 1,
            title: 'New Post',
            body: 'Sample text',
        }),
    });

    useEffect(() => {  
        axios.get('https://jsonplaceholder.typicode.com/posts/1').then((response) => {
            setData(response.data);
            console.log(response.data);
          });
        if (response !== null) {
            setData(response);
        }
    }, [response]);


    return (
        <div className='App'>
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
                    <div>{data && <p>Data Title : {data.title}</p>}</div>
                </div>
            )}
        </div>
    );
};

export default CustomHook;