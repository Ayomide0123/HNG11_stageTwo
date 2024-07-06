import cartBgImg from "../../assets/img/cartPage--bg-img.png";
import visa from "../../assets/img/visa-card.png";
import mastercard from "../../assets/img/mastercard.png";
import CartItem from "../../components/CartItems/CartItem";
import cartItems from "../../components/CartItems/CartItems.json";
import Recent from "../../components/Recent/Recent";
import recentItems from "../../components/Recent/Recent.json";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";

const CartPage = () => {
  const [current, setCurrent] = useState("cart");
  return (
    <div>
      <header className="relative">
        {/* <img src={cartBgImg} className="absolute -z-10 w-[100vw] h-[40vh]" /> */}
        <img
          src={cartBgImg}
          className="w-[100vw] h-56 object-cover absolute -z-10"
          alt="Description"
        />
        <div className="flex justify-center items-center gap-5 pt-40">
          {/* <h1 className="text-white">Cart</h1> */}
          <h1
            className={`cursor-pointer ${
              current === "cart" ? "text-[#9C5E29]" : "text-white"
            }`}
          >
            Cart
          </h1>
          <hr className="w-56" />
          <h1
            className={`cursor-pointer ${
              current === "address" ? "text-[#9C5E29]" : "text-white"
            }`}
          >
            Address
          </h1>
          <hr className="w-56" />
          <h1
            className={`cursor-pointer ${
              current === "payment" ? "text-[#9C5E29]" : "text-white"
            }`}
          >
            Payment
          </h1>
        </div>
      </header>
      <main className="bg-slate-400">
        {current === "cart" ? (
          <div className="grid grid-cols-2fr-1fr gap-4 mt-9 px-36 py-8">
            <div className="bg-white p-9">
              <div className="flex justify-between">
                <p>Shopping Cart</p>
                <p>4 Items</p>
              </div>
              <hr />
              <div>
                <ul className="flex justify-end gap-48">
                  <li>Product Details</li>
                  <li>Price</li>
                  <li>Quantity</li>
                  <li>Total</li>
                </ul>
              </div>
              <div>
                {cartItems.map((product) => (
                  <CartItem
                    key={product.id}
                    name={product.name}
                    price={product.price}
                  />
                ))}
              </div>
              <div>
                <button>Continue Shopping</button>
              </div>
            </div>

            <div className="bg-white p-9">
              <div className="flex justify-between">
                <p>Shopping Cart</p>
                <p>4 Items</p>
              </div>
              <hr />
              <button
                onClick={() => {
                  setCurrent("address");
                }}
              >
                laaaaaaaaaa
              </button>
            </div>
          </div>
        ) : current === "address" ? (
          <div className="grid grid-cols-2fr-1fr gap-4 mt-9 px-36 py-8">
            <div className="bg-white p-9">
              <h2 className="text-lg font-semibold mb-4">Simple Form</h2>
              <form>
                <div className="flex gap-2 mb-4">
                  <div className="w-[50%]">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      // value={formData.firstName}
                      // onChange={handleChange}
                      className="mt-1 px-3 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                    />
                  </div>

                  <div className="w-[50%]">
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      // value={formData.lastName}
                      // onChange={handleChange}
                      className="mt-1 px-3 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    // value={formData.address}
                    // onChange={handleChange}
                    className="mt-1 px-3 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    // value={formData.phoneNumber}
                    // onChange={handleChange}
                    className="mt-1 px-3 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    // value={formData.message}
                    // onChange={handleChange}
                    rows={4}
                    className="mt-1 px-3 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={() => setCurrent("payment")}
                >
                  Submit
                </button>
              </form>
            </div>

            <div className="bg-white p-9">
              <div className="flex justify-between">
                <p>Shopping Cart</p>
                <p>4 Items</p>
              </div>
              <hr />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2fr-1fr gap-4 mt-9 px-36 py-8">
            <div className="bg-white p-9">
              <h2 className="text-lg font-semibold mb-4 text-center">
                Payment
              </h2>
              <p className="text-lg font-semibold mb-4 text-center">
                All transactions are secure and encrypted
              </p>
              <form>
                <div className="flex justify-between items-center mb-4 bg-slate-500 p-3">
                  <label className="block text-sm font-medium text-gray-700">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="creditCard"
                      className="mr-2"
                    />
                    Credit Card
                  </label>
                  <div className="flex gap-2">
                    <img src={visa} />
                    <img src={mastercard} />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="cardNumber"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Card Number
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    // value={formData.cardNumber}
                    // onChange={handleChange}
                    className="mt-1 px-3 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="expirationDate"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Expiration Date
                  </label>
                  <input
                    type="text"
                    id="expirationDate"
                    name="expirationDate"
                    // value={formData.expirationDate}
                    // onChange={handleChange}
                    className="mt-1 px-3 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                    placeholder="MM/YY"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="cvv"
                    className="block text-sm font-medium text-gray-700"
                  >
                    CVV
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    // value={formData.cvv}
                    // onChange={handleChange}
                    className="mt-1 px-3 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="cardholderName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    id="cardholderName"
                    name="cardholderName"
                    // value={formData.cardholderName}
                    // onChange={handleChange}
                    className="mt-1 px-3 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Submit Payment
                </button>
              </form>
            </div>

            <div className="bg-white p-9">
              <div className="flex justify-between">
                <p>Shopping Cart</p>
                <p>4 Items</p>
              </div>
              <hr />
            </div>
          </div>
        )}
        <hr />
        {current === "payment" ? (
          ""
        ) : (
          <div>
            <p className="">Recently Viewed</p>
            <div className="grid grid-cols-4">
              {recentItems.map((item) => (
                <Recent key={item.id} name={item.name} price={item.price} />
              ))}
            </div>
          </div>
        )}

        {current === "payment" ? "" : <Newsletter />}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default CartPage;
