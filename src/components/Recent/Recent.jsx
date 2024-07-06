const Recent = ({ name, price }) => {
  return (
    <div className="flex">
      <h2>{name}</h2>
      <p>Price: ${price}</p>
    </div>
  );
};

export default Recent;
