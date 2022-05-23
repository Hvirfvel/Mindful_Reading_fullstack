import { useState, useEffect } from "react";
import BooksSection from "../components/BooksSection";

const BooksContainer = () => {

    const [bestSellersIsbn, setBestSellersIsbn] = useState([]);

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
            const bestSellersIsbn = nytBestSellers.results.map((bestseller) => {
                // const rank = bestseller.rank;
                //const isbn = bestseller.book_details[0].primary_isbn10
                return {[bestseller.rank]: [bestseller.book_details[0].primary_isbn10]}
            });
            setBestSellersIsbn(bestSellersIsbn);
        })
    }

    return (
        <>
            <BooksSection/>
        </>
    );
}

export default BooksContainer;