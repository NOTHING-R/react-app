import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getProductsById } from "../data/products"
import { useCart } from "../contex/CartContex"

function Products() {
	const { id } = useParams()
	const [product, setProduct] = useState(null)
	const navigate = useNavigate()


	const { cartItem, addToCart } = useCart()

	useEffect(() => {

		const foundProduct = getProductsById(id);

		if (!foundProduct) {
			navigate('/');
			return;
		}
		setProduct(foundProduct)
	}, [id])

	if (!product) {
		return <h1>Loading</h1>
	}

	const productInCart = cartItem.find(item => item.id === product.id);
	const productQuantitiyLabel = productInCart ? `(${productInCart.quantity})` : "";


	return (
		<div className="page">
			<div className="container">
				<div className="product-detail">
					<div className="product-detail-image">
						<img src={product.image} alt={product.name} />
					</div>
					<div className="product-detail-content">
						<h1 className="product-detail-name">{product.name}</h1>
						<p className="product-detail-price">${product.price}</p>
						<p className="product-detail-description">{product.description}</p>
						<button onClick={() => addToCart(product.id)} className="btn btn-primary">Add to cart {productQuantitiyLabel}</button>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Products 
