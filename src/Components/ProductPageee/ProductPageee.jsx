import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';
import $ from 'jquery';
import AddToCart from '../AddToCart/AddToCart';

const ProductPageee = ({addToCart}) => {

  const basePrice = 125023;
  const [purity, setPurity] = useState('14kt');
  const [ringSize, setRingSize] = useState(20);
  const [price, setPrice] = useState(basePrice);
  const [images, setImages] = useState([]);
  const [selectedColor, setSelectedColor] = useState("Pink");
  const [selectedImage, setSelectedImage] = useState("");

  const productImages = {
    Pink: [
      "https://d322s37z6qhrgo.cloudfront.net/wp-content/uploads/2024/07/WRI1566-frontRG.jpg",
      "https://d322s37z6qhrgo.cloudfront.net/wp-content/uploads/2024/07/WRI1566-topRG.jpg",
      "https://d322s37z6qhrgo.cloudfront.net/wp-content/uploads/2024/07/WRI1566-sideRG.jpg",
      "https://d322s37z6qhrgo.cloudfront.net/wp-content/uploads/2024/07/WRI1566-backRG.jpg",
      "https://d322s37z6qhrgo.cloudfront.net/wp-content/uploads/2024/07/WRI1566.jpg",
      "https://d322s37z6qhrgo.cloudfront.net/wp-content/uploads/2024/01/PRI0623-1.jpg",
    ],
    Gold: [
      "https://d322s37z6qhrgo.cloudfront.net/wp-content/uploads/2024/07/WRI1566-frontYG.jpg",
      "https://d322s37z6qhrgo.cloudfront.net/wp-content/uploads/2024/07/WRI1566-topYG.jpg",
      "https://d322s37z6qhrgo.cloudfront.net/wp-content/uploads/2024/07/WRI1566-sideYG.jpg",
      "https://d322s37z6qhrgo.cloudfront.net/wp-content/uploads/2024/07/WRI1566-backYG.jpg",
      "https://d322s37z6qhrgo.cloudfront.net/wp-content/uploads/2024/07/WRI1566.jpg",
      "https://d322s37z6qhrgo.cloudfront.net/wp-content/uploads/2024/01/PRI0623-1.jpg",
    ],
    Silver: [
      "https://d322s37z6qhrgo.cloudfront.net/wp-content/uploads/2024/07/WRI1566-frontWG.jpg",
      "https://d322s37z6qhrgo.cloudfront.net/wp-content/uploads/2024/07/WRI1566-topWG.jpg",
      "https://d322s37z6qhrgo.cloudfront.net/wp-content/uploads/2024/07/WRI1566-sideWG.jpg",
      "https://d322s37z6qhrgo.cloudfront.net/wp-content/uploads/2024/07/WRI1566-backWG.jpg",
      "https://d322s37z6qhrgo.cloudfront.net/wp-content/uploads/2024/07/WRI1566.jpg",
      "https://d322s37z6qhrgo.cloudfront.net/wp-content/uploads/2024/01/PRI0623-1.jpg",
    ],
  };

  const handleRingSize = (e) => {
    setRingSize(Number(e.target.value));
    changeProduct();
  }

  const handlePurity = (newPurity) => {
    setPurity(newPurity);
  }

  const changeProduct = () => {
    let newPrice = basePrice;

    if (ringSize < 11) {
      newPrice = newPrice + (ringSize - 11) * 400;
    }
    else if (ringSize < 15) {
      newPrice = newPrice + (ringSize - 11) * 500;
    }
    else if (ringSize < 20) {
      newPrice = newPrice + (ringSize - 15) * 600;
    }
    else if (ringSize < 23) {
      newPrice = newPrice + (ringSize - 20) * 700;
    }
    else if (ringSize < 26) {
      newPrice = newPrice + (ringSize - 23) * 1000;
    }

    if (purity === '18kt') {
      newPrice += 15000;
    }
    else if (purity === '14pt') {
      newPrice += 10000;
    }

    setPrice(newPrice);
    setImages(productImages[selectedColor]);
  }

  useEffect(() => {
    changeProduct();
  }, [purity])

  useEffect(() => {
    if (productImages[selectedColor] && productImages[selectedColor].length > 0) {
      setSelectedImage(productImages[selectedColor][0]);
    }
  }, [selectedColor]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  useEffect(() => {
    $('.buttons button').on('click', function () {
      $('.buttons button').removeClass('active');
      $(this).addClass('active');
    })
  }, [])

  return (
    <div className="container">
      <div className="row">
        {/* small img */}
        <div className="product-gallery col-1 d-block">
          {productImages[selectedColor].map((image, index) => (
            <div className='product-imagess' key={index}>
              <img
                src={image}
                className={`img-fluid ${selectedImage === image ? 'active' : ''}`}
                onClick={() => handleImageClick(image)}
              />
            </div>
          ))}
        </div>
        {/* big img */}
        <div className="col-6 p-0">
          <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {productImages[selectedColor].map((image, index) => (
                <div key={index} className={`carousel-item ${selectedImage === image ? 'active' : ''}`}>
                  <img src={image} className="d-block w-100 img-fluid" />
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        {/* details */}
        <div className="col-5 ps-5">
          <h6 style={{ fontSize: '16px', color: '#060606', fontFamily: 'Jost' }}>Home » <span style={{ color: '#212529' }}>Unwavering Devotion Diamond Band Ring</span></h6>
          <p style={{ fontSize: '12px', fontFamily: 'Jost', color: '#7D7D7D' }}>SKU: <span style={{ color: '#000000' }} className='fw-medium'>WRI156614YG20</span></p>
          <h1 style={{ fontFamily: 'Manrope', fontSize: '24px' }}>Unwavering Devotion Diamond Band Ring</h1>
          <p className="price">₹{price.toLocaleString()}</p>
          <p className='dis m-0'>Price inclusive of taxes. See the full <Link to={'/'} style={{ textDecoration: 'none', color: '#3D8DBE' }}>price breakup</Link></p>
          <div className='coupon-titel'>
            <span>Loyalty Special offer for you</span>
          </div>
          <div className="option mt-3">
            <span className="me-5">COLOR</span>
            <div className="color-options d-inline">
              {Object.keys(productImages).map((color) => (
                <button onClick={() => setSelectedColor(color)} style={{ borderRadius: '50%', width: '18px', height: '18px', cursor: 'pointer', backgroundColor: color.toLowerCase() }} className='me-2 border-0'></button>
              ))}
            </div><br />
          </div>
          <div className="option mt-3">
            <span className="me-5">PURITY</span>
            <div className='d-inline buttons'>
              <button onClick={() => { handlePurity('14kt'); changeProduct() }} className='active'>14kt</button>
              <button onClick={() => { handlePurity('18kt'); changeProduct() }}>18kt</button>
            </div>
          </div>
          <div className="option mt-3">
            <span className="me-4">RING SIZE</span>
            <input type="number" value={ringSize} onChange={handleRingSize} min="6" max="26" />
          </div>
          <div className="actions mt-3">
           <AddToCart addToCart={addToCart} />
            <div className="delivery mt-3 ">
              <div className="delivery-icon d-flex ">
                <i class="bi bi-truck "></i>
                <p className='ms-2 text-uppercase'>Delivery & Cancellation</p>
              </div>
              <span className='fw-semibold' style={{ fontSize: "14px", textDecoration: "underline" }}>Estimated Delivery By 22nd Dec 2024</span>
            </div>
            <div className="pincode mt-3">
              <div className="col-md-6">
                <label for="pincode" className="form-label fw-semibold" style={{ fontSize: "14px", color: "#7A7A7A" }}>Your Pincode</label>
                <input type="number" className="form-control p-0 m-0" id="pincode" />
              </div>
            </div>
            <div className="view-stock mt-2">
              <button className='btn fw-medium text-uppercase'>View in Stock</button>
              <p className='mt-2' style={{ fontSize: "14px", color: "#7A7A7A", fontFamily: "'jost', sans-serif" }}>Click to view available variants</p>
            </div>
            <div className="cate-tages mt-1">
              <h6 style={{ fontSize: "14px", color: "#7A7A7A" }}>CATEGORIES : <spna style={{ color: "#000000", fontSize: "12px" }}>Engagement, Rings, Solitaire</spna></h6>
              <h6 style={{ fontSize: "14px", color: "#7A7A7A" }}>TAGES : <spna style={{ color: "#000000", fontSize: "12px" }}> Emerald,Engagement,Solitaire</spna></h6>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ProductPageee