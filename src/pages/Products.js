import { Link } from "react-router-dom";

const Products = ()=>{
    const products = [
        {id: 'p1', title: 'Produkt 1'},
        {id: 'p2', title: 'Produkt 2'},
        {id: 'p3', title: 'Produkt 3'},
    ]
    return <>
    <h1>Strona z produktami!</h1>
    <ul>
        {products.map(product => <li key={product.id}><Link to={`/products/${product.id}`}>{product.title}</Link></li>)}

    </ul>
    </>
}

export default Products;

