import StarRating from "./StarRating";

const Book = ({title, author, rank}) => {
    return (
        <li>
        <p>{rank}</p>
        <p>{title}</p>
        <p>{author}</p>
        <StarRating/>
        </li>
    );
}
export default Book;