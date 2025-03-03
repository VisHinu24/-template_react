import './temp.css'
function App() {
  
  return (
    <>
      <div className="header">
            <p className="title">Explor<span className="design">er</span></p>
            <p className="menu">
                <span>Hotels</span>
                <span>Bike Rentals</span>
                <span>Restaurants</span>
            </p>    
    </div>
     <div className="body1">
        <div className="data">  
            <p className="p1">WELCOME TO EXPLORER</p>
            <p className="p2"> 
                <span>Your Adventure</span><br />
                <span>Travel Expert in</span><br />
                <span>the <b>SOUTH</b></span><br />
            </p>
            <form>
                <select className="drop_down">
                    <option value="hotel">Choose</option>
                    <option value="hotel">Pollachi</option>
                    <option value="bike">Thanjavur</option>
                    <option value="restaurant">Chidambaram</option>

                </select>
                <br />
                <button className="exp_but"><b>EXPLORE</b></button>
            </form>

        </div>
        <div className="main_img">
            <img src="images/image1.jpg" />
        </div>
        
    </div>
    <div className="body2">
        <p className="p1"><b>Destinations</b></p>
        <p>Just htmlFor you.Because you and your bike are special to us !!</p>
    </div>
    <div className="card">
        <div className="pic">
            <img src="images/image2.png" />
            <p className="p1">Never Ending Paddy Fields and Narrow Roads</p> 
            <p className="p2">Pollachi</p>
            <p className="p3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
            <button className="read"><b>READ MORE</b></button>
        </div>
    
        <div className="pic">
            <img src="images/image3.png" />
            <p className="p1">Small Ride across town in mid summer heat</p> 
            <p className="p2">Thanjavur</p>
            <p className="p3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
            <button className="read"><b>READ MORE</b></button>
        </div>
    
        <div className="pic">
            <img src="images/image4.png" />
            <p className="p1">Catching a Short Break at the Lotus Pond</p> 
            <p className="p2">Chidambaram</p>
            <p className="p3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
            <button className="read"><b>READ MORE</b></button>
        </div>
    </div>

    <div className="card">
        <div className="pic">
            <img src="images/image5.png" />
            <p className="p1">Road Trip enroute the mountains and forests</p> 
            <p className="p2">Masinagudi</p>
            <p className="p3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
            <button className="read"><b>READ MORE</b></button>
        </div>
    
        <div className="pic">
            <img src="images/image6.png" />
            <p className="p1">Fall in love with the divine agraharams louerm</p> 
            <p className="p2">Kumbakkonam</p>
            <p className="p3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
            <button className="read"><b>READ MORE</b></button>
        </div>
    
        <div className="pic">
            <img src="images/image7.png" />
            <p className="p1">Energy driven drive through the windmills</p> 
            <p className="p2">Tirunelveli</p>
            <p className="p3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
            <button className="read"><b>READ MORE</b></button>
        </div>
    </div>
    
    <div className="footer">
        <p className="p1">Contact Us</p>
        <p className="p2">Our Sales Team will reach out to you ASAP!</p><br />
        <form>
            <label htmlFor="name">Name</label><br />
            <input type="text" />
            <br /><br />
            <label htmlFor="town">Your Home Town</label><br />
            <select>
                <option value="Choose">Choose</option>
                <option value="Pollachi">Pollachi</option>
                <option value="Thanjavur">Thanjavur</option>
                <option value="Kumbakkonam">Kumbakkonam</option>
            </select>
            <br /><br />
            <label htmlFor="desti">Where would you like to go?</label><br />
            <select>
                <option value="Choose">Choose</option>
                <option value="Masinagudi">Masinagudi</option>
                <option value="Tirunelveli">Tirunelveli</option>
                <option value="Chidambaram">Chidambaram</option>
            </select>
            <br /><br />
            <label htmlFor="phn_no">Phone Number</label><br />
            <input type="tel" />
            <br /><br />
            <button><b>SUBMIT</b></button>
        </form>
    </div>
    </>
  )
}

export default App
