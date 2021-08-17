import React from "react";
import useAxios from '../components/useAxios';

const CustomHook = () => {
    const { response, loading, error } =  useAxios({
        method: 'post',
        url: '/fakeData',
        //headers: JSON.stringify({ accept: '*/*' }),
        body: JSON.stringify({
            firstName: 'Carlos',
            lastName: 'Fernandez',
            checkbox: false, 
        }),
    });
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
                    <div><p> Response id: {response.id} </p> </div>
                    <div><p> Response First Name: {response.firstName} </p> </div>
                    <div><p> Response Last Name: {response.lastName} </p> </div>
                    <div><p> Response checkBox: {response.checkbox.toString()}</p> </div>
                </div>
            )}
        </div>
    );
};

export default CustomHook;