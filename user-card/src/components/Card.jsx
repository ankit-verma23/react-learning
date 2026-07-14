function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <div className="tag">{props.status}</div>
        <h3>${props.price}/hr</h3>
      </div>
      <div className="center">
        <img src={props.image} alt="eren" />
        <h2>{props.name}</h2>
        <p className="role">{props.role}</p>
        <p className="intro">
          {props.intro}
        </p>
      </div>
      <div className="bottom">
        <button>View Profile</button>
      </div>
    </div>
  );
}

export default Card;
