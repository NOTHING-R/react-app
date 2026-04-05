import { Link } from "react-router-dom"
import { useCart } from "../contex/CartContex"

export default function ProductCard({ product }) {

    const {cartItem, addToCart } = useCart()
    const productInCart = cartItem.find(item => item.id === product.id);
    const productQuantitiyLabel = productInCart ? `(${productInCart.quantity})`: "";
    return <div className="product-card">
        <img src={product.image} alt={product.name} className="product-card-image" />

        <div className="product-card-content">

            <h3 className="product-card-name">{product.name}</h3>
            <p className="product-card-price">${product.price.toFixed(2)}</p>

            <div className="product-card-actions">
                <Link to={`/products/${product.id}`} className="btn btn-secondary">View Details</Link>
                <button className="btn btn-primary" onClick={() => addToCart(product.id)}>Add to Cart {productQuantitiyLabel}</button>
            </div>
        </div>
    </div>
}