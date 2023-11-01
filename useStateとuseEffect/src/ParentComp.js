import React, { useState } from 'react';
import ChildComp from './ChildComp';


function ParentComp() {
    const [userData, setUserData] = useState({ name: 'John', age: 30 });
    const updateUser = () => {
        setUserData({ name: 'Alice', age: 25 });
    };
    return (
        <div>
            <ChildComp data={userData} />
            <button onClick={updateUser}>Update User</button>
        </div>
    );
}

export default ParentComp;