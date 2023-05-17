/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
const FoodItem = (props) => {
  return (
    <div className="--foodItem">
      {/* image, name of food, description, restaurant */}
      <img
        className="--food-picture"
        src={`/images/${props.entry.foodImage}`}
      ></img>
      <div className="--food-info">
        <h1 className="--food-name">{props.entry.foodName}</h1>
        <div className="--food-rating-container">
          <img className="--food-thumbs-up" src="/assets/thumbs-up.png"></img>
          <span className="--food-rating">
            {props.entry.foodRating} / 10
          </span>{" "}
          <br />
        </div>
        <div className="--food-location-container">
          <img className="--food-pushpin" src="/assets/pushpin.png"></img>
          <span className="--food-location">
            {props.entry.restaurantLocation.name}{" "}
            {props.entry.restaurantLocation.state && (
              <span className="state">
                ({props.entry.restaurantLocation.state})
              </span>
            )}
          </span>
        </div>
        <p className="--food-review">{props.entry.foodReview}</p>
      </div>
    </div>
  );
};
export default FoodItem;
