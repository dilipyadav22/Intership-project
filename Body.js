import pic from '../logo/body-pic.jpg'

const Body=()=>{
    return(
        <div id="body" >
                <div className="body_pic">
                <img src={pic} alt="IMAGE" className="Image" />
                </div>
                <div className="text" >                
                <h2>BOOK YOUR SERVICES NOW</h2><span><h1>Fine art Services</h1></span>
                
                <h1>ON TIME DELIEVERY</h1>
                <h1>ECONIMICAL PRICE </h1><span> <h1>ZERO DAMAGE POLICY</h1></span>

            </div>
            <div className="body1" >
                <div className="body2" >
                <h2>Delhi </h2>
                </div>
                <div className="tags" >
                    <h3 className='D'>Domestic</h3>
                    <h3 className='I'>InterMational</h3>
                </div>
                <div className='details' > 
                <label for="pick-up-location" >Pick Up Location:<pre>
                <input type='text' id='pick-up-location' placeholder='Enter Pick Up Loaction' /></pre></label>

                <label for="drop-location" >Drop Location:<pre>
                <input type='text' placeholder='Enter Drop loaction' id='drop-location' /></pre></label>

                <label for="Contact" >Contact:<pre>
                <input type='text' placeholder='Enter Contact' id='Contact' /></pre></label>

                <label for="shipping" >Shipping Date: <pre>
                <input type='date' placeholder='Enter Drop loaction' id='shipping' /></pre></label>
                </div>
                <button className='submit' > Get Estimated</button>



            </div>
        </div>
    )
}

export default Body;