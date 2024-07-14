import cartBgImg from "../../assets/img/cartPage--bg-img.png";
import visa from "../../assets/img/visa-card.png";
import mastercard from "../../assets/img/mastercard.png";
import shopping_cart from "../../assets/img/shopping--cart.svg";
import CartItem from "../../components/CartItems/CartItem";
// import Recent from "../../components/Recent/Recent";
// import recent_viewed from "../../components/Recent/RecentlyViewed";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useCart } from "../../context/CartContext";
import { useParams } from "react-router-dom";
// import createSale from "../../api/salesApi";

const CartPage = () => {
  // const apiKey = import.meta.env.VITE_APP_API_KEY;
  // const appId = import.meta.env.VITE_APP_APP_ID;
  // const organizationId = import.meta.env.VITE_APP_ORGANIZATION_ID;
  const [current, setCurrent] = useState("cart");
  const [selectedOption, setSelectedOption] = useState("");
  const { cart, removeFromCart, updateCartItem } = useCart();
  const [subtotal, setSubtotal] = useState(0);
  const [notification, setNotification] = useState(false);

  useEffect(() => {
    if (cart && cart.length > 0) {
      // console.log(cart);
      let total = 0;
      cart.forEach((item) => {
        total += item.price * item.quantity;
      });
      setSubtotal(total);
    } else {
      setSubtotal(0);
    }
  }, [cart]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleCheckoutClick = () => {
    if (cart.length === 0) {
      setNotification(true);
      setTimeout(() => setNotification(false), 3000); // Hide notification after 3 seconds
    } else {
      setCurrent("address");
    }
  };

  // FORM LOGIC:
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const fullName = firstName + " " + lastName;

  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !address || !phone) {
      // console.log("fill");
    } else {
      // console.log("Form submitted:", { firstName, lastName, phone, address });
      setCurrent("payment");
    }
  };
  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    if (!cardName || !cardNumber || !expirationDate || !cvv) {
      // console.log("fill");
    } else {
      setCurrent("confirm");
    }
  };

  return (
    <div>
      <header className="relative">
        <img
          src={cartBgImg}
          className="w-full h-56 object-cover absolute -z-10"
          alt="Description"
        />
        <div className="flex flex-wrap justify-center items-center gap-5 pt-40">
          <h1
            className={`cursor-pointer ${
              current === "cart" ? "text-[#9C5E29]" : "text-white"
            }`}
            onClick={() => setCurrent("cart")}
          >
            Cart
          </h1>
          <hr className="w-16 sm:w-56" />
          <h1
            className={`cursor-pointer ${
              current === "address" ? "text-[#9C5E29]" : "text-white"
            }`}
            onClick={() => setCurrent("address")}
          >
            Address
          </h1>
          <hr className="w-16 sm:w-56" />
          <h1
            className={`cursor-pointer ${
              current === "payment" ? "text-[#9C5E29]" : "text-white"
            }`}
            onClick={() => setCurrent("payment")}
          >
            Payment
          </h1>
        </div>
      </header>
      <main className="bg-[#C7CCD9]">
        {current === "cart" ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-9 px-4 sm:px-8 md:px-12 lg:px-16 py-8">
            <div className="lg:col-span-2 bg-white p-4 sm:p-6 md:p-8 rounded-lg">
              <div className="flex justify-between px-2 pb-3">
                <div className="flex items-center gap-2">
                  <img src={shopping_cart} className="w-6 sm:w-8 md:w-10" />
                  <h1 className="text-[#9C5E29] font-bold text-lg sm:text-xl md:text-2xl">
                    Shopping Cart
                  </h1>
                </div>
                <h1 className="text-[#9C5E29] font-bold text-lg sm:text-xl md:text-2xl">
                  {cart.length} Items
                </h1>
              </div>
              <hr />
              <div className="hidden sm:grid grid-cols-4 py-5 pr-3 text-[#BDBDBD]">
                <div className="mb-2 sm:mb-0 text-center">Product Details</div>
                <div className="mb-2 sm:mb-0 text-center">Price</div>
                <div className="mb-2 sm:mb-0 text-center">Quantity</div>
                <div className="mb-2 sm:mb-0 text-center">Total</div>
              </div>

              <div className="-mt-4">
                {cart.map((product) => (
                  <CartItem
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    quantity={product.quantity}
                    image={product.image}
                    removeFromCart={removeFromCart}
                    updateCartItem={updateCartItem}
                  />
                ))}
              </div>
              <div className="flex justify-center">
                <button className="px-4 py-2 w-full sm:w-1/2 bg-[#9C5E29] text-white hover:bg-[#bd783c] transition-colors main--text rounded-md text-sm font-medium tracking-wider mt-9">
                  <Link to="/">CONTINUE SHOPPING</Link>
                </button>
              </div>
            </div>

            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg border-[#9C5E29] border-y-[20px] sm:border-x-[60px] border-x-[20px] lg:border-x-0">
              <div className="flex justify-center gap-2 my-4">
                <img src={shopping_cart} className="w-6" />
                <p className="text-[#9C5E29] font-bold text-lg">
                  Order Summary
                </p>
              </div>
              <hr />

              <div className="flex flex-col gap-6 mt-6 mb-16">
                <div>
                  <h1 className="flex items-center font-bold tracking-wide">
                    Price Details (4)
                  </h1>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#BDBDBD]">Sub Total</p>
                  <p className="font-bold tracking-wide text-black">
                    NGN {subtotal}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#BDBDBD]">Item Discount</p>
                  <p className="font-bold tracking-wide text-black">NGN 0.00</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#BDBDBD]">Coupon Discount</p>
                  <p className="font-bold tracking-wide text-black">NGN 0.00</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#BDBDBD]">Shipping fee</p>
                  <p className="font-bold tracking-wide text-black">NGN 0.00</p>
                </div>
              </div>

              <hr />
              <div className="flex justify-between my-6">
                <p className="font-bold tracking-wide">Total Amount</p>
                <p className="font-bold tracking-wide text-[#9C5E29]">
                  NGN {subtotal}
                </p>
              </div>
              <button
                className="mb-6 px-4 py-2 w-full bg-[#9C5E29] text-white hover:bg-[#bd783c] transition-colors main--text rounded-md text-sm font-medium tracking-wider"
                onClick={handleCheckoutClick}
              >
                <Link>CHECKOUT</Link>
              </button>
              {notification && (
                <div className="text-red-500 text-sm mt-2 text-center">
                  Your cart is empty. Please add items to your cart before
                  proceeding to checkout.
                </div>
              )}

              <hr />

              <div className="mt-6">
                <h1 className="flex items-center font-bold tracking-wide text-green-500">
                  NGN 500 OFF your next ORDER
                </h1>
              </div>
            </div>
          </div>
        ) : current === "address" ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-9 px-4 sm:px-16 lg:px-36 py-8">
            <div className="lg:col-span-2 bg-white p-6 sm:p-9 rounded-lg">
              <div className="flex text-[#9C5E29] justify-center items-center gap-2 my-4 mb-6">
                <Icon icon="fa-solid:shipping-fast" />
                <p className="font-bold text-lg">Shipping Details</p>
              </div>

              <form onSubmit={handleAddressSubmit}>
                <div className="flex flex-nowrapwrap gap-3 mb-4">
                  <div className="w-full sm:w-[50%]">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First Name *
                    </label>
                    <input
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="First name"
                      className="mt-1 px-3 py-3 w-full border-gray-300 border-solid border-2 rounded-md sm:text-sm text-black"
                      required
                    />
                  </div>

                  <div className="w-full sm:w-[50%]">
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last Name *
                    </label>
                    <input
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Last name"
                      className="mt-1 px-3 py-3 border-gray-300 border-solid border-2 w-full rounded-md shadow-sm sm:text-sm text-black"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address *
                  </label>
                  <input
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Street address"
                    className="mt-1 px-3 py-3 w-full border-gray-300 border-solid border-2 rounded-md shadow-sm sm:text-sm text-black"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone *
                  </label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+234"
                    className="mt-1 px-3 py-3 w-full border-gray-300 border-solid border-2 rounded-md shadow-sm sm:text-sm text-black"
                    required
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Order notes
                  </label>
                  <input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    type="text"
                    id="message"
                    name="message"
                    placeholder="Type your message here..."
                    className="mt-1 px-3 py-3 w-full border-gray-300 border-solid border-2 rounded-md shadow-sm sm:text-sm text-black"
                  />
                </div>

                <div className="flex justify-between -mb-6 mt-5">
                  <button
                    className="mb-6 py-2 w-[37%] poppins-light text-sm tracking-wider"
                    onClick={() => setCurrent("cart")}
                  >
                    <Link className="flex justify-start items-center gap-2 font-semibold">
                      <Icon icon="ant-design:left-outlined" /> RETURN TO CART
                    </Link>
                  </button>

                  <button
                    className="mb-6 py-2 w-[37%] bg-[#9C5E29] text-white hover:bg-[#bd783c] transition-colors main--text rounded-md text-sm font-medium tracking-wider"
                    // onClick={() => setCurrent("payment")}
                    type="submit"
                  >
                    PROCEED TO PAYMENT
                  </button>
                </div>
              </form>
            </div>

            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg border-[#9C5E29] border-y-[20px] sm:border-x-[60px] border-x-[20px] lg:border-x-0">
              <div className="flex justify-center gap-2 my-4">
                <img src={shopping_cart} className="w-6" />
                <p className="text-[#9C5E29] font-bold text-lg">
                  Order Summary
                </p>
              </div>
              <hr />

              <div className="flex flex-col gap-6 mt-6 mb-16">
                <div>
                  <h1 className="flex items-center font-bold tracking-wide">
                    Price Details (4)
                  </h1>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#BDBDBD]">Sub Total</p>
                  <p className="font-bold tracking-wide text-black">
                    NGN {subtotal}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#BDBDBD]">Item Discount</p>
                  <p className="font-bold tracking-wide text-black">NGN 0.00</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#BDBDBD]">Coupon Discount</p>
                  <p className="font-bold tracking-wide text-black">NGN 0.00</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#BDBDBD]">Shipping fee</p>
                  <p className="font-bold tracking-wide text-black">NGN 0.00</p>
                </div>
              </div>

              <hr />
              <div className="flex justify-between my-6">
                <p className="font-bold tracking-wide">Total Amount</p>
                <p className="font-bold tracking-wide text-[#9C5E29]">
                  NGN {subtotal}
                </p>
              </div>

              <hr />

              <div className="mt-6">
                <h1 className="flex items-center font-bold tracking-wide text-green-500">
                  NGN 200 OFF your next ORDER
                </h1>
              </div>
            </div>
          </div>
        ) : current === "payment" ? (
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 mt-9 px-4 sm:px-16 lg:px-36 py-8">
            <div className="bg-white p-6 sm:p-9 rounded-lg">
              <div className="flex justify-center gap-2">
                <div className="bg-white px-4 sm:px-6 lg:px-12 py-10 rounded-lg w-full lg:max-w-screen-lg mx-auto">
                  <h2 className="text-2xl font-bold mb-4 text-center text-[#9C5E29]">
                    Payment
                  </h2>
                  <p className="text-lg font-medium mb-8 text-center text-black">
                    All transactions are secure and encrypted
                  </p>
                  <form onSubmit={handlePaymentSubmit}>
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-6 bg-[#abcbf59e] p-4 rounded-t-lg">
                      <div className="mb-4 sm:mb-0">
                        <label className="flex items-center space-x-2 text-xl font-medium cursor-pointer">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="creditCard"
                            className="hidden"
                            checked={selectedOption === "creditCard"}
                            onChange={handleOptionChange}
                            required
                          />
                          <div className="w-6 h-6 flex items-center justify-center border-2 rounded-full border-black">
                            {selectedOption === "creditCard" && (
                              <div className="w-3 h-3 rounded-full bg-black"></div>
                            )}
                          </div>
                          <span>Credit Card</span>
                        </label>
                      </div>
                      <div className="flex gap-2">
                        <img src={visa} alt="Visa" />
                        <img src={mastercard} alt="Mastercard" />
                      </div>
                    </div>
                    <div className="mb-6">
                      <input
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        placeholder="Card number"
                        className="mt-2 px-3 py-3 w-full border-gray-300 border-solid border-2 rounded-md sm:text-sm text-black"
                        required
                      />
                    </div>

                    <div className="mb-6">
                      <input
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        type="text"
                        id="CardName"
                        name="cardName"
                        placeholder={fullName ? fullName : "Enter your Name"}
                        className="mt-2 px-3 py-3 w-full border-gray-300 border-solid border-2 rounded-md sm:text-sm text-black"
                        required
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row mb-6 gap-4">
                      <div className="w-full">
                        <input
                          value={expirationDate}
                          onChange={(e) => setExpirationDate(e.target.value)}
                          type="text"
                          id="expirationDate"
                          name="expirationDate"
                          placeholder="Exp. Date (MM/YY)"
                          className="mt-2 px-3 py-3 border-gray-300 border-solid border-2 rounded-md sm:text-sm w-full text-black"
                          required
                        />
                      </div>

                      <div className="w-full">
                        <input
                          value={cvv}
                          onChange={(e) => setCvv(e.target.value)}
                          type="text"
                          id="cvv"
                          name="cvv"
                          placeholder="CVV"
                          className="mt-2 px-3 py-3 border-gray-300 border-solid border-2 rounded-md sm:text-sm w-full text-black"
                          required
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="mt-6 px-4 py-3 bg-[#9C5E29] hover:bg-[#bd783c] transition-colors text-white rounded-md w-full tracking-wide poppins-light"
                    >
                      PAY NOW
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg border-[#9C5E29] border-y-[20px] sm:border-x-[60px] border-x-[20px] lg:border-x-0">
              <div className="flex justify-center gap-2 my-4">
                <img src={shopping_cart} className="w-6" />
                <p className="text-[#9C5E29] font-bold text-lg">
                  Order Summary
                </p>
              </div>
              <hr />

              <div className="flex flex-col gap-6 mt-6 mb-16">
                <div>
                  <h1 className="flex items-center font-bold tracking-wide">
                    Price Details (4)
                  </h1>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#BDBDBD]">Sub Total</p>
                  <p className="font-bold tracking-wide text-black">
                    NGN {subtotal}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#BDBDBD]">Item Discount</p>
                  <p className="font-bold tracking-wide text-black">NGN 0.00</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#BDBDBD]">Coupon Discount</p>
                  <p className="font-bold tracking-wide text-black">NGN 0.00</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#BDBDBD]">Shipping fee</p>
                  <p className="font-bold tracking-wide text-black">NGN 0.00</p>
                </div>
              </div>

              <hr />
              <div className="flex justify-between my-6">
                <p className="font-bold tracking-wide">Total Amount</p>
                <p className="font-bold tracking-wide text-[#9C5E29]">
                  NGN {subtotal}
                </p>
              </div>

              <hr />

              <div className="mt-6">
                <h1 className="flex items-center font-bold tracking-wide text-green-500">
                  NGN 500 OFF your next ORDER
                </h1>
              </div>
            </div>
          </div>
        ) : current === "confirm" ? (
          <div className="flex justify-center items-center mt-9 px-4 sm:px-16 lg:px-36 py-8">
            <div className="bg-white p-6 sm:p-9 rounded-lg">
              <div className="flex text-[#9C5E29] justify-center items-center gap-2 my-4 mb-6">
                <Icon icon="fa-solid:check-circle" className="text-green-500" />
                <p className="font-bold text-2xl main--text">
                  Payment Confirmed
                </p>
              </div>

              <div className="mb-6">
                <p className="text-[#9C5E29] text-center poppins-light">
                  Your payment has been successfully confirmed. Thank you for
                  your purchase!
                </p>
              </div>

              <div className="text-[#9C5E29] flex justify-center">
                <button
                  className=" text-white
                  w-[80%] px-2 py-1 sm:px-5 sm:py-2 bg-[#9C5E29] hover:bg-[#bd783c] transition-colors text-sm sm:text-lg rounded-md font-bold"
                  onClick={() => setCurrent("cart")}
                >
                  <Link to="#">Back to Cart</Link>
                </button>
              </div>
            </div>
          </div>
        ) : null}
        <hr />

        {/* <div className="pb-7 sm:pb-1 md:pl-7 md:py-7">
          <div className="text-center text-[#9C5E29] font-bold text-xl  md:text-left md:pl-[5%] py-7">
            Recently Viewed
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 sm:mt-[100px] place-items-center -mb-10">
            {recent_viewed.map((item) => (
              <Recent
                key={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        </div> */}
        <Newsletter />
        <Footer />
      </main>
    </div>
  );
};

export default CartPage;
