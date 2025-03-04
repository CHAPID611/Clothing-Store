import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import NavBar from "../components/navBar";
import "../styles/cart.css"

const Cart = () => {
  const { cart, removeFromCart, clearCart, getTotalPrice } = useContext(CartContext);

  return (
    <div>
      <NavBar/>
      <header className="cart-container">
      <h2>🛒 Carrito de Compras</h2>
      </header>
      <section>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={product.imagen} alt={product.nombre} width="50" />
              <h4>{product.nombre}</h4>
              <p>Precio: ${product.precio} x {product.cantidad}</p>
              <button onClick={() => removeFromCart(product.id)}>Eliminar</button>
            </div>
          ))}
          <h3 className="cart-total">Total: ${getTotalPrice()}</h3>
          <button onClick={clearCart} className="clear-cart-btn">Vaciar Carrito</button>
        </div>
      )}

      </section>
      
    </div>
  );
};

export default Cart;
