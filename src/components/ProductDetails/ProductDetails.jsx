import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./ProductDetails.css"; // Import the CSS file for styling

const ProductDetails = () => {
  const { addToCart } = useCart();
  const { id } = useParams(); // Get the product ID from the URL
  const apiKey = import.meta.env.VITE_APP_API_KEY;
  const appId = import.meta.env.VITE_APP_APP_ID;
  const apiBaseURL = import.meta.env.VITE_APP_BASE_URL;
  const organizationId = import.meta.env.VITE_APP_ORGANIZATION_ID;
  const [product, setProduct] = useState(null);
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(
          `${apiBaseURL}/extrainfo/products/${id}?organization_id=${organizationId}&Appid=${appId}&Apikey=${apiKey}`,
          {
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setProduct(data);
        setProductDetails(data.extra_infos);
        console.log(data);
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
        product.current_price && product.current_price.NGN
          ? product.current_price.NGN[0]
          : "Price not available",
      image: `https://api.timbu.cloud/images/${product.photos[0].url}`,
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
              ? `${product.current_price} NGN`
              : "Price not available"}
          </p>

          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
