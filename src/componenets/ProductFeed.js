import { useEffect, useState } from "react";
import { addProductToTheCart, getCartData, loadTheProducts} from '../apicalls'


export const ProductFeed = () => {
    const [products, setProducts] = useState([]); //all products
    const [cartAddedProducts, setCartAddedProducts] = useState([]); //product id which is added to cart
    const [total, setTotal] = useState(0); //product id which is added to cart
  const [images, setImages]=useState([])


  const handleLogout = () => {
        localStorage.removeItem('userToken');
        window.location.href = "/login"
    }

    const fetchTheProducts = async () => {
        try {
            const response = await loadTheProducts(); //complete
            setProducts(response.data)
           
        } catch (error) {
            
        }
    }

    const loadTheCartData = async () => {
        try {
            const response = await getCartData()
            let ids = [];
            let totalVal = 0;

            response.data.forEach(({id, price}) => {
                totalVal = totalVal+price;
                if(ids.includes(id)){
                } else {
                    ids.push(id)
                }
            })
            setTotal(totalVal)
            setCartAddedProducts(ids)
        } catch (error) {
            
        }
    }

    const handleAddToCart = async (productID) => {
        const cartID = localStorage.getItem("cartId");
        
        try {
            const response = await addProductToTheCart(cartID, productID)
            if(response.data.success){
                setCartAddedProducts([...cartAddedProducts, productID])
                    console.log(productID);
            }
        } catch (error) {
            
        }
    }

    // use effect
    useEffect(() => {
        fetchTheProducts()
        loadTheCartData()
    }, [])


    return(
        <>
            <div style={{backgroundImage: "linear-gradient(120deg, #fccb90 0%, #d57eeb 100%)"}}>
            <div style={{textAlign: 'center'}}>
                <h1>My Shopping Place</h1>
                <button className="btn btn-danger" onClick={handleLogout}>Logout</button>

                
            </div>

            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>

                
                {
                  
                    products.map((product, index) => {
                        const { id, title, price, description, images={}  } = product;
                
                  
                        return(
                            <div className="card" style={{width: 300, margin: 20}} key={index}>
                               
                                            <img className="card-img-top" src={images[0]} alt="Card image cap" style={{width:'auto', height:200}} />
                                       
                              
                               
                             
                                <div className="card-body">
                                    <h5 className="card-title">{title}</h5>
                                    <p className="card-text">{description}</p>
                                    <h5 className="card-text">Price: {price}/-</h5>
                                    {
                                        cartAddedProducts.includes(id) ? (
                                            <button className="btn btn-danger" onClick={() => {}}>Remove</button>
                                        ) : (
                                        <button
                                            className="btn btn-primary"
                                            onClick={() => { 
                                                handleAddToCart(id)
                                            }}
                                        >Buy item </button>
                                        )
                                    }

                                </div>
                            </div>
                        )
                    })
                }
            </div>
            </div>
        </>
    )
}