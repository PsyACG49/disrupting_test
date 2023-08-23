import "./count.css";

const Count = () => {
  return (
    <div className="details__count">
      <button className="count__btn">-</button>
      <span>0</span>
      <button className="count__btn">+</button>
    </div>
  );
};

export default Count;
