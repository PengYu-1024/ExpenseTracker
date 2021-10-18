import './Card.css';

const Card = (props) => {
  //props.className =>anything we recive as a class name from outside,
  //so we wont miss style from other componet
  const classes = 'card ' + props.className;
  //prop.children is all the content between the closing and openning class
  //so for <Card> tag, in between the tag, all are props.children
  return <div className={classes}>{props.children}</div>;
};

export default Card;
