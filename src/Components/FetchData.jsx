import React from 'react';
import { useState, useEffect } from 'react';
import Card from './Cards';

function FetchData(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=31f8e59d72dd4b3681ef2ff3dd1eb5d9`)
            .then(response => response.json())
            .then(catchData => {
                console.log(catchData.articles);
                setData(catchData.articles);
            })
            .catch(error => console.log("Error in fetching data..." + error));
    }, [props.category]);

    return (

        <>
        <Card data= {data} />
        </>
    );
}

export default FetchData;