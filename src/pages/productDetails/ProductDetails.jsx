import React from 'react'
import './ProductDetails.css'
import { useState,useEffect } from 'react'
import { BsStarFill } from 'react-icons/bs'
import NavBar from '../../components/navBar/NavBar'
import Button from '../../components/button/Button'
import Footer from '../../components/footer/Footer'
import battery from '../../assets/battery.png'
import cart from '../../assets/images/cart.png'
import { useParams } from 'react-router-dom'


function ProductDetails() {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);
    const param = useParams()


    const BASE_URL = 'https://jelly-online-api.herokuapp.com'
    
    const fetchData = async () => {
        setLoading(true);
        const res = await fetch(`${BASE_URL}/details/${param.id}`)
        const data = await res.json()
        setProduct(data.data)
        setLoading(false);
    };

    useEffect(() => { 
        fetchData();
    }, [])
    if(loading) return <h1 style={{textAlign:'center'}}>Loading...</h1>;
    if(!loading && !product) return <h1 style={{textAlign:'center'}}>404 error can't find product</h1>;
  return (
    <div>
        <div className='navigation-bar'>
            <NavBar/>
        </div>

            <div className='product-details-container'>
                <div className='product-name'>
                    <div className='product-name-images'>
                        <div className='product-image-big'>
                            <img src={product.img} alt="" />
                        </div>

                        <div className='product-image-small'>
                            <Button content='<' style={{ width: '10%', height: '50px',backgroundColor:'white', color:'black'  }} />
                            <img src={product.img } alt="product"  />
                            <img src={product.img } alt="product" />
                            <img src={product.img } alt="product" />
                            <Button content='>' style={{ width: '10%', height: '50px', backgroundColor:'white',color:'black'  }} />
                        </div>
                    </div>

                    <div className='product-name-content'>
                        <h2>{product.name}</h2>
                        {/* <p> <b> Price Range:</b>   ${product.price} -$500</p> */}
                        {
                            product.price_range.length? 
                            <p><b> Price Range: </b>${product.price_range[0].one} -${product.price_range[0].two}</p>:
                            <p><b>Price: </b> ${product.price}</p> 
                        }

                        <p>Available colors:</p>
                        <div className='available-colors'>
                            <div className='purple'></div>
                            <div className='black'></div>
                            <div className='blue'></div>
                        </div>

                        <div className='add-to-cart'>
                            <img src={cart} alt=""/>
                            <Button type={'submit'} content= 'ADD TO CART' style={{fontWeight:'bold'}} />
                        </div>
                    </div>
               
                </div>





                <div className='product-details'>
                    <div className='product-details-header'>
                        <h2>Product Details</h2>    
                    </div>
                    <div className='product-details-content'>
                        <h3>Key Features:</h3>
                        <li>100% and high quality, durable!</li>
                        <li>{product.product_detail[0].key_features}</li>
                        {/* <li>Light weight and compact, easy to move and clean</li>
                        <li>Simple to assemble and with covers to prevent any dust</li>
                        <li>A nice solution to the shoes and great helper for the housekeeping</li>
                        <li>This shoe rack cover keeps your shoes un-viewable and keeps your room neat.</li>
                    <li>Easy to Assemble</li> */}

                        <h3>Specification:</h3>
                        <li>100% and high quality, durable!</li> 
                        <li>{product.product_detail[0].specifications}</li>
                        {/* <li>Lightweight and compact, easy to move and clean</li>
                        <li>Simple to assemble and with covers to prevent any dust</li>
                        <li>Color: purple.</li> */}
                    </div>
                </div>
          
                <div className='other-products'>
                    <div className='other-products-header'>
                        <h2>Other products you might like</h2>
                    </div> 

                    <div className='other-products-content'>                
                        <div className='other-products box'>
                            <h3>Product Name</h3>
                            <img src={battery} alt=''/>
                            <p>$200</p>
                            <Button type={'submit'} content='GO TO DETAILS' style={{ width: '100%', height: '50px', borderRadius: '0px',padding: '15px', fontWeight:'bold' }} />
                        </div>

                        <div className='other-products box'>
                            <h3>Product Name</h3>
                            <img src={battery} alt=''/>
                            <p>$200</p>
                            <Button type={'submit'} content='GO TO DETAILS'  style={{ width: '100%', height: '50px', borderRadius: '0px',padding: '15px' , fontWeight:'bold' }} />
                        </div>

                        <div className='other-products box'>
                            <h3>Product Name</h3>
                            <img src={battery} alt=''/>
                            <p>$200</p>
                            <Button type={'submit'} content='GO TO DETAILS'  style={{ width: '100%', height: '50px', borderRadius: '0px',padding: '15px' , fontWeight:'bold' }} />
                        </div>

                        <div className='other-products box'>
                            <h3>Product Name</h3>
                            <img src={battery} alt=''/>
                            <p>$200</p>
                            <Button type={'submit'} content='GO TO DETAILS'  style={{ width: '100%', height: '50px', borderRadius: '0px',padding: '15px' , fontWeight:'bold' }} />
                        </div>  

                        <div className='other-products-box-slider'>
                            <Button type={'submit'} content='>' style={{ width: '100%', height: '50px', borderRadius: '100px', backgroundColor:'grey'}} /> 
                        </div>
                        
                    </div>
                </div>





                <div className='verified-customer-fb'>
                    <div className='verified-customer-fb-header'>
                        <h1>Verified Customers Feedback</h1>
                        <span>SEE ALL <Button type={'submit'} content='>' style={{ width: '20%', height: '50px', borderRadius: '100px', backgroundColor:'white', color:'blue'}} />  </span>
                    </div> 
    
                    <div className='verified-ratings-comments1'>

                        <div className='verified-ratings'>
                            <h3>VERIFIED RATINGS</h3>

                            <div className='verified-ratings-box'>
                                <h2>3.5/5</h2>
                                     <BsStarFill style = {{color: 'gold', weight: 'fill', fontSize: '19'}}/>
                                     <BsStarFill style = {{color: 'gold', weight: 'fill', fontSize: '19'}}/>
                                     <BsStarFill style = {{color: 'gold', weight: 'fill', fontSize: '19'}}/>
                                     <BsStarFill style = {{color: 'gold', weight: 'fill', fontSize: '19'}}/>
                                     <BsStarFill style = {{color: '#c9c9c9', weight: 'fill', fontSize: '19'}}/>
                                    
                               
                                <p>245 verified ratings</p>
                            </div>
                        </div>

                        <div className='comments-from-v-purchases1'>
                            <h3>COMMENTS FROM VERIFIED PURCHASES</h3>
                                <BsStarFill style = {{color: 'gold', weight: 'fill', fontSize: '19'}}/>
                                <BsStarFill style = {{color: 'gold', weight: 'fill', fontSize: '19'}}/>
                                <BsStarFill style = {{color: 'gold', weight: 'fill', fontSize: '19'}}/>
                                <BsStarFill style = {{color: 'gold', weight: 'fill', fontSize: '19'}}/>
                                <BsStarFill style = {{color: 'gold', weight: 'fill', fontSize: '19'}}/>
                                <p style={{fontWeight:'bold'}}>I like it</p>
                                <p>Simple</p>
                                <p>15-09-2022</p>
                        </div>
                          
                    </div>


                    <div className='verified-ratings-comments1'>

                        <div className='verified-ratings'>
                                                    
                            <div className='verified-rating-count'>
                                <div className='verified-rating-slider'>
                                    <p> 5
                                        <BsStarFill style = {{color: 'gold', weight: 'fill', fontSize: '19'}}/>
                                        <BsStarFill style = {{color: 'gold', weight: 'fill', fontSize: '19'}}/>
                                        <BsStarFill style = {{color: 'gold', weight: 'fill', fontSize: '19'}}/>
                                        <BsStarFill style = {{color: 'gold', weight: 'fill', fontSize: '19'}}/>
                                        <BsStarFill style = {{color: 'gold', weight: 'fill', fontSize: '19'}}/>
                                    </p>
                                    <input type="range" />

                                </div>

                                <div className='verified-rating-slider'>
                                    <p>4 
                                        <BsStarFill style = {{color: 'gold', weight: 'fill', fontSize: '19'}}/>
                                        <BsStarFill style = {{color: 'gold', weight: 'fill', fontSize: '19'}}/>
                                        <BsStarFill style = {{color: 'gold', weight: 'fill', fontSize: '19'}}/>
                                        <BsStarFill style = {{color: 'gold', weight: 'fill', fontSize: '19'}}/>
                                        <BsStarFill style = {{color: '#c9c9c9', weight: 'fill', fontSize: '19'}}/>
                                    </p> 
                                  
                                   
                                    <input type="range" />

                                </div>

                                <div className='verified-rating-slider'>
                                    <p>3
                                        <BsStarFill style = {{color: 'gold', weight: 'fill', fontSize: '19'}}/>
                                        <BsStarFill style = {{color: 'gold', weight: 'fill', fontSize: '19'}}/>
                                        <BsStarFill style = {{color: 'gold', weight: 'fill', fontSize: '19'}}/>
                                        <BsStarFill style = {{color: '#c9c9c9', weight: 'fill', fontSize: '19'}}/>
                                        <BsStarFill style = {{color: '#c9c9c9', weight: 'fill', fontSize: '19'}}/>
                                    </p>
                                   
                                    <input type="range" />

                                </div>

                                <div className='verified-rating-slider'>
                                    <p>2 
                                        <BsStarFill style = {{color: 'gold', weight: 'fill', fontSize: '19'}}/>
                                        <BsStarFill style = {{color: 'gold', weight: 'fill', fontSize: '19'}}/>
                                        <BsStarFill style = {{color: '#c9c9c9', weight: 'fill', fontSize: '19'}}/>
                                        <BsStarFill style = {{color: '#c9c9c9', weight: 'fill', fontSize: '19'}}/>
                                        <BsStarFill style = {{color: '#c9c9c9', weight: 'fill', fontSize: '19'}}/>    
                                    </p>                
                                   
                                    <input type="range" />

                                </div>

                                <div className='verified-rating-slider'>
                                    <p>1
                                        <BsStarFill style = {{color: 'gold', weight: 'fill', fontSize: '19'}}/>
                                        <BsStarFill style = {{color: '#c9c9c9', weight: 'fill', fontSize: '19'}}/>
                                        <BsStarFill style = {{color: '#c9c9c9', weight: 'fill', fontSize: '19'}}/>
                                        <BsStarFill style = {{color: '#c9c9c9', weight: 'fill', fontSize: '19'}}/>
                                        <BsStarFill style = {{color: '#c9c9c9', weight: 'fill', fontSize: '19'}}/>
                                    </p>
                                   
                                    
                                    <input type="range" />

                                </div>
                               
                            </div>
                        </div>

                        <div className='comments-from-v-purchases2'>
                            <BsStarFill style = {{color: 'gold', weight: 'fill', fontSize: '19'}}/>
                            <BsStarFill style = {{color: 'gold', weight: 'fill', fontSize: '19'}}/>
                            <BsStarFill style = {{color: 'gold', weight: 'fill', fontSize: '19'}}/>
                            <BsStarFill style = {{color: 'gold', weight: 'fill', fontSize: '19'}}/>
                            <BsStarFill style = {{color: '#c9c9c9', weight: 'fill', fontSize: '19'}}/>   
                            <p style={{fontWeight:'bold'}}>I like it</p>
                            <p>Simple</p>
                            <p>15-09-2022</p>
                        </div>
                          
                    </div>                                                           
                </div>
           
            </div>
        
        <div className='footer'>
            <Footer/>
        </div>

    </div>
   
  )
}

export default ProductDetails