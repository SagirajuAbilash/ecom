import { useEffect, useState } from "react";
import { addProductToTheCart, getCartData, loadTheProducts} from '../apicalls'


export const ProductFeed = () => {
    const [products, setProducts] = useState([]); //all products
    const [cartAddedProducts, setCartAddedProducts] = useState([]); //product id which is added to cart
    const [total, setTotal] = useState(0); //product id which is added to cart
  const [images, setImages]=useState([])


  setImages(['https://dummyjson.com/image/i/products/1/4.jpg',
 'https://dummyjson.com/image/i/products/2/2.jpg ',
 'https://dummyjson.com/image/i/products/3/1.jpg',
 'https://dummyjson.com/image/i/products/4/4.jpg',
 'https://dummyjson.com/image/i/products/5/2.jpg',
 'https://dummyjson.com/image/i/products/6/1.png',
 'https://dummyjson.com/image/i/products/7/1.jpg','https://dummyjson.com/image/i/products/8/thumbnail.jpg',
 'https://dummyjson.com/image/i/products/9/2.png','GATXUWWYDFFHN4SK64F6H3X6UVUCRGMR6BXJ4JAPT2MMG5QI5VRQLQNE',
 'https://dummyjson.com/image/i/products/11/thumbnail.jpg','https://dummyjson.com/image/i/products/12/3.png',
 'https://dummyjson.com/image/i/products/13/3.jpg','https://dummyjson.com/image/i/products/14/3.jpg',
 'https://dummyjson.com/image/i/products/15/1.jpg','https://dummyjson.com/image/i/products/16/1.png',
 'https://dummyjson.com/image/i/products/17/3.jpg' ,
 'https://dummyjson.com/image/i/products/18/3.jpg',
 'https://dummyjson.com/image/i/products/19/2.jpg',
 'https://dummyjson.com/image/i/products/20/2.jpg',
 'https://dummyjson.com/image/i/products/21/3.jpg',
' https://dummyjson.com/image/i/products/22/3.jpg',
 
 'https://dummyjson.com/image/i/products/23/thumbnail.jpg',  
 'https://dummyjson.com/image/i/products/24/1.jpg', 

 'https://dummyjson.com/image/i/products/25/2.jpg', 

 'https://dummyjson.com/image/i/products/26/thumbnail.jpg',
 'https://dummyjson.com/image/i/products/27/2.jpg', 

 'https://dummyjson.com/image/i/products/28/thumbnail.jpg', 
'https://dummyjson.com/image/i/products/29/3.webp', 

 'https://dummyjson.com/image/i/products/30/thumbnail.jpg', 
 'https://dummyjson.com/image/i/products/31/1.jpg', 

 'https://dummyjson.com/image/i/products/32/thumbnail.jpg', 

 'https://dummyjson.com/image/i/products/33/thumbnail.jpg',
 'https://dummyjson.com/image/i/products/34/thumbnail.jpg', 
 'https://dummyjson.com/image/i/products/35/thumbnail.jpg', 

 'https://dummyjson.com/image/i/products/36/thumbnail.jpg', 
, 'https://dummyjson.com/image/i/products/37/thumbnail.jpg', 
 'https://dummyjson.com/image/i/products/38/1.png', 

 'https://dummyjson.com/image/i/products/39/1.jpg', 
 'https://dummyjson.com/image/i/products/40/1.jpg', 

'https://dummyjson.com/image/i/products/41/1.jpg',
 'https://dummyjson.com/image/i/products/42/thumbnail.jpg', 
 'https://dummyjson.com/image/i/products/43/thumbnail.jpg', 

 'https://dummyjson.com/image/i/products/45/thumbnail.jpg', 
'https://dummyjson.com/image/i/products/46/thumbnail.jpg', 
 'https://dummyjson.com/image/i/products/47/thumbnail.jpeg',


 'https://dummyjson.com/image/i/products/49/thumbnail.jpg', 
 'https://dummyjson.com/image/i/products/50/3.jpg',

'https://dummyjson.com/image/i/products/51/thumbnail.jpg', 

 'https://dummyjson.com/image/i/products/52/thumbnail.jpg', 
 
 'https://dummyjson.com/image/i/products/54/1.jpg', 
 
 'https://dummyjson.com/image/i/products/55/1.jpg',

 'https://dummyjson.com/image/i/products/56/1.jpg',

 'https://dummyjson.com/image/i/products/57/1.jpg', 
 'https://dummyjson.com/image/i/products/58/1.jpg', 
 'https://dummyjson.com/image/i/products/59/1.jpg', 

 'https://dummyjson.com/image/i/products/60/1.jpg',

 'https://dummyjson.com/image/i/products/61/1.jpg', 
 'https://dummyjson.com/image/i/products/62/2.jpg', 
 'https://dummyjson.com/image/i/products/63/4.jpeg', 
'https://dummyjson.com/image/i/products/64/1.jpg',
 
 'https://dummyjson.com/image/i/products/65/2.webp',

 'https://dummyjson.com/image/i/products/66/2.jpg', 
 'https://dummyjson.com/image/i/products/67/1.jpg', 
 
 'https://dummyjson.com/image/i/products/68/2.jpg',
 'https://dummyjson.com/image/i/products/69/4.jpg', 
 'https://dummyjson.com/image/i/products/70/1.jpg', 
 'https://dummyjson.com/image/i/products/71/1.jpg', 

'https://dummyjson.com/image/i/products/72/1.jpg', 

 'https://dummyjson.com/image/i/products/73/1.jpg', 

'https://dummyjson.com/image/i/products/74/1.jpg', 


 'https://dummyjson.com/image/i/products/75/1.jpg', 
 'https://dummyjson.com/image/i/products/76/2.jpg', 

 'https://dummyjson.com/image/i/products/77/1.jpg', 

 'https://dummyjson.com/image/i/products/78/thumbnail.jpg', 
 'https://dummyjson.com/image/i/products/79/1.jpg', 
'https://dummyjson.com/image/i/products/80/1.jpg', 

 'https://dummyjson.com/image/i/products/81/1.jpg', 

 'https://dummyjson.com/image/i/products/82/1.jpg', 

 'https://dummyjson.com/image/i/products/83/1.jpg', 

 'https://dummyjson.com/image/i/products/84/1.jpg', 

 'https://dummyjson.com/image/i/products/85/1.jpg', 

 'https://dummyjson.com/image/i/products/86/1.jpg', 

'https://dummyjson.com/image/i/products/87/1.jpg', 

'https://dummyjson.com/image/i/products/88/1.jpg', 
 'https://dummyjson.com/image/i/products/89/1.jpg', 
'https://dummyjson.com/image/i/products/89/thumbnail.jpg',
 'https://dummyjson.com/image/i/products/90/1.jpg', 
 'https://dummyjson.com/image/i/products/90/thumbnail.jpg',
'https://dummyjson.com/image/i/products/91/1.jpg', 
'https://dummyjson.com/image/i/products/91/thumbnail.jpg', 
 'https://dummyjson.com/image/i/products/92/1.jpg', 
 'https://dummyjson.com/image/i/products/92/4.jpg', 
 'https://dummyjson.com/image/i/products/93/1.jpg', 
'https://dummyjson.com/image/i/products/93/thumbnail.jpg', 
'https://dummyjson.com/image/i/products/94/1.webp', 
 'https://dummyjson.com/image/i/products/95/thumbnail.jpg',


])
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

                <div style={{
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    with: 300,
                    height: 150,
                    padding: 20,
                    margin: 20,
                    border: "1px solid",
                    zIndex: 999,
                    backgroundColor: '#fff'
                }}>
                    <h5>Total Products - {cartAddedProducts.length}</h5>
                    <p>Total - {total}</p>
                    <button className="btn btn-primary">Checkout</button>
                </div>
            </div>

            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>

                
                {
                  
                    products.map((product, index) => {
                        const { id, title, price, description,   } = product;
                
                  
                        return(
                            <div className="card" style={{width: 300, margin: 20}} key={index}>
                                {
                                    images.map((image,index)=>{
                                        return(
                                            <img className="card-img-top" src={images} alt="Card image cap" style={{width: 'auto', height: 'auto'}} />
                                        )
                                    })
                                }
                               
                             
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
                                        >Add to cart</button>
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