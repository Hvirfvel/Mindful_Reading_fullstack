import Book from "./Book";

const BooksSection = ({bestSellers}) => {

    if (!bestSellers || bestSellers.length === 0) {
        return <h2>Loading books...</h2>
    }

    const bestSellerNodes = bestSellers.sort((a, b) => {return a[0].rank - b[0].rank}).map((bestSeller) => {
        return <Book title={bestSeller[0].volumeInfo.title} author={bestSeller[0].volumeInfo.authors} rank={bestSeller[0].rank} key={bestSeller[0].volumeInfo.industryIdentifiers[0].identifier}/>
    })

    return (
        <ul>
            {bestSellerNodes}
        </ul>
    );
}
export default BooksSection;