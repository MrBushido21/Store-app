function Rating(props) {

    const ratingStars = Array.from({ length: props.rating }, (_, index) => (
        <span key={index} className="rating-star">★</span>
    ))
    return (
        <div className="rating">
            <span className="rating-num">{props.rating}</span>
            <div className="rating-stars">
                {ratingStars}
            </div>
        </div>

    );
}
export default Rating;