import "./style.css";

const TotalPriceRender = ({ fruits }) => {

  const totalPrice = fruits.reduce((x, y) => x + y.price, 0);

  return (
    <div className="total-price">
      <span>Total price: US${totalPrice}.00</span>
    </div>
  );
};

export default TotalPriceRender;
