import { Link, useNavigate } from "react-router-dom";


const Home = ()=>{
    const navigate = useNavigate();
    const navHandler = () =>{
        navigate('/products');
    }
    return <>
     <h1>Moja strona domowa!</h1>
     <p>Przejdź do <Link to="/products">listy produktów!</Link></p>
     <p><button onClick={navHandler}>Nawiguj</button></p>
    </>
   
}

export default Home;

