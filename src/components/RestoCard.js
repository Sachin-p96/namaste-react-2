

export const RestoCard = (props) => {
    return (
      <div className="res-card">
        <img
          className="resto-image"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${props.imageId}`}
        />
        <h3>{props.name}</h3>
        <span>3 star</span>
        <p>Highly Rated restaurant in banglore for andhra style biriyani</p>
      </div>
    );
  };