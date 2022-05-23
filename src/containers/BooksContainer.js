import { useEffect } from "react";
import BooksSection from "../components/BooksSection";

const BooksContainer = () => {

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
        .then(data => console.log(data.results))
    }

    return (
        <>
            <BooksSection/>
        </>
    );
}

export default BooksContainer;