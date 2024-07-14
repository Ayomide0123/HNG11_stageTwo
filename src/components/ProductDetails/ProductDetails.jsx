import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { addToCart } = useCart();
  const { id } = useParams();
  const apiKey = import.meta.env.VITE_APP_API_KEY;
  const appId = import.meta.env.VITE_APP_APP_ID;

  const organizationId = import.meta.env.VITE_APP_ORGANIZATION_ID;
  const [product, setProduct] = useState(null);
  const [productDetails, setProductDetails] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(
          `https://timbu-get-single-product.reavdev.workers.dev/${id}?organization_id=${organizationId}&reverse_sort=false&page=1&size=10&Appid=${appId}&Apikey=${apiKey}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setProduct(data);
        setProductDetails(data.extra_infos);
        // console.log(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [id, apiKey, appId, organizationId]);

  const handleAddToCart = () => {
    addToCart({
      name: product.name,
      price:
        product.current_price && product.current_price
          ? `${product.current_price}`
          : "Price not available",
      image: `https://api.timbu.cloud/images/${product.photos[0].url}`,
      quantity: quantity,
      totalPrice:
        product.current_price && product.current_price
          ? `${product.current_price * quantity}`
          : "Price not available",
    });
  };

  if (!product) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="product-details-container">
      <div className="product-details-content">
        <div className="product-details-image">
          <img
            src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
            alt={product.name}
            className="w-full rounded-md shadow-lg"
          />
        </div>
        <div className="product-details-info">
          <h1 className="product-name main--text">{product.name}</h1>
          <p className="product-description poppins-light">
            {product.description}
          </p>
          <h2 className="details-heading main--text">Details</h2>
          {productDetails.length > 0 ? (
            <ul className="details-list list-inside poppins-light list-none capitalize">
              {productDetails.map((detail) => (
                <li key={detail.id} className="mb-2">
                  <span className="font-bold">{detail.key}:</span>{" "}
                  {detail.value}
                </li>
              ))}
            </ul>
          ) : (
            <p>No additional details available.</p>
          )}
          <p className="product-price poppins-light">
            <span className="price-heading main--text">Price: </span>
            {product.current_price && product.current_price
              ? `${product.current_price * quantity} NGN`
              : "Price not available"}
          </p>
          <div className="flex items-center justify-between w-[120px] border border-[#9C5E29] rounded-md px-2 py-1 bg-white shadow-sm m-auto mb-2">
            <button
              onClick={decrement}
              className="text-black bg-[#df9b575c] hover:bg-[#bd783c] px-2 py-1 rounded-md"
            >
              -
            </button>
            <p className="text-[#9C5E29] font-semibold">{quantity}</p>
            <button
              onClick={increment}
              className="text-black bg-[#df9b575c] hover:bg-[#bd783c] px-2 py-1 rounded-md"
            >
              +
            </button>
          </div>

          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
