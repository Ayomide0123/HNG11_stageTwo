const CartItem = ({ name, price }) => {
  return (
    <div className="flex mb-3 justify-between">
      <h2>{name}</h2>
      <p>Price: ${price}</p>
    </div>
  );
};

export default CartItem;
