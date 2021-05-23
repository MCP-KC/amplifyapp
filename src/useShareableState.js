import React, { useState } from 'react';
import { Auth } from 'aws-amplify';

const useShareableState = () => {
    const [username, setUsername] = useState('nobody');
    const [count, setCount] = useState(0);

    //alert("Hallo in use shareable state")
    /*
    Auth.currentAuthenticatedUser()
        .then(user1 => setUsername(user1.username))
        .catch(err => console.log(err));
*/
    return {
        username,
        setUsername,
        count,
        setCount
    };
};
export { useShareableState };