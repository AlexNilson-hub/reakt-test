import React from 'react';

const UserProfiler = ({description, link, categiry}) => {
    return (
        <div>
            <h1>UserProfiler</h1>
            <h3>{categiry}</h3>
            <p>{description}</p>
            <a href={link}>Ссылка юзера</a>
        </div>
    );
};

export default UserProfiler;
