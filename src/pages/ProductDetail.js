import { Link, useParams } from "react-router-dom";

const ProductDetail = () =>{
    const params = useParams();
    
    return <>
    <h1>Szczegóły produktu</h1>
    <p>{params.productId}</p>
    <p><Link to=".." relative="path">Wstecz</Link></p>
    </>
}

export default ProductDetail;