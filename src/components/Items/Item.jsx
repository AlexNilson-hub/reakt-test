import React from 'react';
import useFetch from "react-fetch-hook";
import UserProfiler from "../UserProfiler";

const Item = () => {
    const {error, data} = useFetch('https://api.publicapis.org/entries')
    if (error) return <p>Error.......!</p>
    if (!data) return <p>Loading...</p>
    return <>
        {data && data.entries.map(({Description, Link, Category}, index) =>
            <UserProfiler key={index} categiry={Category} description={Description} link={Link}/>
        )}
    </>

    // <UserProfiler id={data[0].id} body={data[0].body}/>
    // if (isLoading) return "Loading..."
    // if (error) return "Error..."

};

export default Item;
