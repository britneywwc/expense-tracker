import "./Card.css";

function Card(props) {
  // Composition: appending children classes to custom components
  const classes = 'card ' + props.className;
  
  return <div className={classes}>{props.children}</div>;
}

export default Card;
