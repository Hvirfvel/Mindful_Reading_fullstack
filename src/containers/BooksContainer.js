import { useState, useEffect } from "react";
import BooksSection from "../components/BooksSection";

const BooksContainer = () => {

    const [bestSellers, setBestSellers] = useState([]);

    useEffect(() => {
        getBestSellers();
    }, [])

    const getBestSellers = () => {
        fetch(`https://api.nytimes.com/svc/books/v3/lists.json?list=hardcover-fiction&api-key=${process.env.REACT_APP_NEW_YORK_TIMES_BOOKS_API_KEY}`, {
            method: "GET",
            headers: {
              "Accept": "application/json"
            },
          })
        .then(res => res.json())
        .then(nytBestSellers => {
            console.log(nytBestSellers.results)
            setBestSellers(nytBestSellers.results);
        })
    }

    return (
        <>
            <BooksSection bestSellers={bestSellers}/>
        </>
    );
}

export default BooksContainer;