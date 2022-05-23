import StarRating from "./StarRating";

const Book = ({title, author}) => {
    return (
        <>
        <p>{title}</p>
        <p>{author}</p>
        <StarRating/>
        </>
    );
}
export default Book;