import 'bootstrap/dist/css/bootstrap.min.css';
import {usestate} from 'react';
import logo from './image/logo.svg';
import { Container,Row,Col,Navbar,Nav,NavDropdown,Button,Card,ListGroup,} from 'react-bootstrap';
import { FaAngleDown,FaRegUser } from "react-icons/fa";
import { PiHandbagSimple } from "react-icons/pi";
import { IoColorFill, IoSearchSharp,} from "react-icons/io5";
import { FiArrowRightCircle } from "react-icons/fi";
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import facebook from './image/a1.svg';
import x from './image/a2.svg';
import instra from './image/a3.svg';
import youtube from './image/a4.svg';
import linked from './image/a5.svg';
// import {  } from "react-icons/io5";
import { Routes, Route } from "react-router-dom"
import { GoSearch } from "react-icons/go";
// import boat_truly from './boat_truly';

import './App.css';
import './responsive.css';
const slider1 = {
  responsive:{
    0: {
      items:1,
    },
    400: {
      items:1,
    },
    600: {
      items:2                          , 
        },
    700: {
      items:3,
      cautoWidth:true,
    },
    1000: {
      items:4,
    }                                                 
  }
}


function App() {
  
  return (
    
   
    <div>
      {/* <div className="App">
    <Routes>
      <Route path="/" element={ <App.js/> } /> 
      <Route path="boat_truly" element={ <boat_truly/> } />
    
    </Routes> </div> */}
      <div className='bgblue'>
      <Container>
        <Row className='text-center pt-2 top_header  '>
          <Col className='fs-sm-10px'><p>All new <b>Nirvana ION ANC</b> is out now with up to <b> 32dB noise cancelleation.</b>Attain Nirvana at <b>$2499</b>   </p>  </Col> 
        </Row>
      </Container>
      </div>
      {/* =======header===== */}
      <div className='header  '>
        {/* <Container> */}
        <Navbar expand="xl" className="me-auto p-0">
      <Container fluid className='px-5 shadow-sm py-xl-3 py-xl-4 justify-content-xs-evenly'>
      <Navbar.Toggle aria-controls="basic-navbar-nav "  />

        <Navbar.Brand href="#home"><img className='logo w-50 h-50'  src={logo} ></img></Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav  " className='offcanvas-body ' data-bs-dismiss="offcanvas" >
          <Nav className="me-auto">
            <Nav.Link href="#home" className='fs-6 fw-medium me-3 my-auto' >Catagories < FaAngleDown className='ms-1'></FaAngleDown></Nav.Link>
            <Nav.Link href="#link" className='fs-6 fw-medium me-3 my-auto '>boAt Truly Yours</Nav.Link>
            <Nav.Link href="#home" className='fs-6 fw-medium me-3 my-auto'>Gift With boAt</Nav.Link>
            <Nav.Link href="#link" className='fs-6 fw-medium me-3 my-auto'>Corporate Order</Nav.Link>
            <Nav.Link href="#home" className='fs-6 fw-medium me-3 my-auto' >Catagories < FaAngleDown className='ms-1'></FaAngleDown></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {/* <Navbar.Collapse id=""> */}

       {/* <div className=''> */}
          <nav className='w-lg-100'>
        <div className="ms-auto d-flex">
          <div className='W-100'>
         <div href="#link" className='fs-5 fw-medium d-none d-xl-block  my-auto  '>
            <div className='position-relative'> <input className='rounded-5 bgblue border-0 py-2 px-5 d-none d-lg-block ' type="text" placeholder='search ....**'/>
            <div className='position-absolute ' style={{top:'3px',fontSize:'25px',left:'10px'}}><GoSearch></GoSearch></div></div>
          </div>
         </div>
         <div className='d-flex'>
           <div className='d-lg-none d-block'  style={{fontSize:'25px'}}><GoSearch></GoSearch></div>

            <div href="#link" className='fs-5 fw-medium my-auto ms-3'><FaRegUser></FaRegUser></div>
            
            <div href="#link" className='fs-4 fw-medium my-auto ms-3 '><PiHandbagSimple></PiHandbagSimple></div>
            </div>
        </div >
        
        </nav>
        <div className=' d-none d-lg-block d-xl-none w-100 text-center py-3 searchbar'>
         
           <input className='rounded-5 bgblue border-0 py-2 px-5 ' type="text" placeholder='search ....**'/>
         
            <div className='searchicon' style={{fontSize:'25px'}}><GoSearch></GoSearch></div>
        </div>
        {/* </Navbar.Collapse> */}

        {/* </div> */}

  
      </Container>
    </Navbar>
    </div>
        {/* </Container> */}
    
    <div className=' '>
      <div className='slider_background d-lg-flex '>
        <div className='slider_txt pb-0 pt-0'><h1>True Wireless</h1>
        <h2 className='display-1 fw-bolder py-2 pb-0 '>Earbuds</h2>
        <h3 className='h3 fw-normal pb-xl-4 pb-0'>Starting  from <b>$999*</b></h3>
        <Button className='btn btn-dark '>shop products<FiArrowRightCircle className='ms-2'></FiArrowRightCircle></Button></div>
          <div><img  src={require('./image/asset 29.png')} className='w-100 '  alt="" /></div>
      </div>
    </div>
    <div id='s1'>
      <div className="sec_title"><p>Best <b>Sellers</b></p>
      <div className="red_line"></div>
      </div>
         <OwlCarousel className='owl-theme  px-5 pt-0 'items={4} margin={20} emulateTouch={true} loop  dots={false} {...slider1}>
         <div class='item '>
            <div className='box_bg'>
                <div className='sld_1'>
                     <img src={require('./image/asset 31.jpeg')}></img>
                </div>
                <div className='d-flex justify-content-between pt-3 '>
                                 <div className='fw-bolder'>Airdops 131</div>
                             <div className='d-flex justify-content-between color-type'>

                                      <div className='color2'></div>
                                      <div className='color3'></div>
                                    <div className='color_num'>+3</div>

                               </div>
                  </div>
              <div className='pt-2 ps-4'><p ><b>$899</b> <strike>2990</strike><b style={{color:'green',paddingLeft:'20px'}}>70% off</b></p></div>
              <Button  className='w-75 btn btn-dark mb-3 mt-0 mx-5'>Add To Cart</Button>
              <div className='yellow_div'> 65 Hours Playback</div>
              </div>

             

          </div> 

          <div class='item '>
            <div className='box_bg'>
                <div className='sld_1'>
                     <img src={require('./image/asset 33.jpeg')}></img>
                </div>
                <div className='d-flex justify-content-between pt-3 '>
                                 <div className='fw-bolder'>Airdops 181</div>
                             <div className='d-flex justify-content-between color-type'>

                                      <div className='color2'></div>
                                      <div className='color3'></div>
                                    <div className='color_num'>+3</div>

                               </div>
                  </div>
              <div className='pt-2 ps-4'><p ><b>$899</b> <strike>2990</strike><b style={{color:'green',paddingLeft:'20px'}}>63% off</b></p></div>
              <Button  className='w-75 btn btn-dark mb-3 mt-0 mx-5'>Add To Cart</Button>
              <div className='yellow_div'> 20 Hours Playback</div>
              </div>

             

          </div>  <div class='item '>
            <div className='box_bg'>
                <div className='sld_1'>
                     <img src={require('./image/asset 34.jpeg')}></img>
                </div>
                <div className='d-flex justify-content-between pt-3 '>
                                 <div className='fw-bolder'>Airdops 161</div>
                             <div className='d-flex justify-content-between color-type'>

                                      <div className='color2'></div>
                                      <div className='color3'></div>
                                    <div className='color_num'>+3</div>

                               </div>
                  </div>
              <div className='pt-2 ps-4'><p ><b>$899</b> <strike>2990</strike><b style={{color:'green',paddingLeft:'20px'}}>60% off</b></p></div>
              <Button  className='w-75 btn btn-dark mb-3 mt-0 mx-5'>Add To Cart</Button>
              <div className='yellow_div'> 40 Hours Playback</div>
              </div>

             

          </div>  <div class='item '>
            <div className='box_bg'>
                <div className='sld_1'>
                     <img src={require('./image/asset 35.jpeg')}></img>
                </div>
                <div className='d-flex justify-content-between pt-3'>
                                 <div className='fw-bolder'>Airdops 115</div>
                             <div className='d-flex justify-content-between color-type'>

                                      <div className='color2'></div>
                                      <div className='color3'></div>
                                    <div className='color_num'>+3</div>

                               </div>
                  </div>
              <div className='pt-2 ps-4'><p ><b>$1,229</b> <strike>2990</strike><b style={{color:'green',paddingLeft:'20px'}}>57% off</b></p></div>
              <Button  className='w-75 btn btn-dark mb-3 mt-0 mx-5'>Add To Cart</Button>
              <div className='yellow_div'> Clear calling</div>
              </div>

             

          </div> 
   
</OwlCarousel>;

</div>

      <div className='watch_sec d-lg-flex'>
            <div className='main_img d-none d-lg-block'>
                <img src={require('./image/asset 37.png')} className='' alt="" />
            </div>
      
            <div className='main_title text-lg-end my-auto ms-auto pe-4'>
                  <p>Smart <b>Watches</b></p>
                  <h3 className='h3 fw-normal pb-xl-4 pb-0'>Starting  from <b>$999*</b></h3>
                  <Button className='btn btn-dark main_button '>shop products<FiArrowRightCircle className='ms-2'></FiArrowRightCircle></Button>
            </div>
            <div className='d-lg-none d-block main_img'>
                   <img src={require('./image/asset 37.png')} className='w-100' alt="" />

            </div>


      </div>
      
      {/* dfghjklkjhgfd */}
      <div id='s2'>
      <div className="sec_title"><p>Best <b>Sellers</b></p>
      <div className="red_line"></div>
      </div>
  
         <OwlCarousel className='owl-theme   px-5 'items={4} margin={20} emulateTouch={true} loop  dots={false} {...slider1}>
         <div class='item '>
            <div className='box_bg'>
                <div className='sld_1'>
                     <img src={require('./image/asset 38.jpeg')}></img>
                </div>
                <div className='d-flex justify-content-between pt-3 '>
                                 <div className='fw-bolder'>Strom Call</div>
                             <div className='d-flex justify-content-between color-type'>

                                      <div className='color2'></div>
                                      <div className='color3'></div>
                                    <div className='color_num'>+3</div>

                               </div>
                  </div>
              <div className='pt-2 ps-4'><p ><b>$1499</b> <strike>7990</strike><b style={{color:'green',paddingLeft:'20px'}}>81% off</b></p></div>
              <Button  className='w-75 btn btn-dark mb-3 mt-0 mx-5'>Add To Cart</Button>
              <div className='yellow_div'>Bt calling</div>
              </div>

             

          </div> 

          <div class='item '>
            <div className='box_bg'>
                <div className='sld_1'>
                     <img src={require('./image/asset 39.jpeg')}></img>
                </div>
                <div className='d-flex justify-content-between pt-3 '>
                                 <div className='fw-bolder'>Wave Flex Connect</div>
                             <div className='d-flex justify-content-between color-type'>

                                      <div className='color2'></div>
                                      <div className='color3'></div>
                                    <div className='color_num'>+3</div>

                               </div>
                  </div>
              <div className='pt-2 ps-4'><p ><b>$1499</b> <strike>2990</strike><b style={{color:'green',paddingLeft:'20px'}}>81% off</b></p></div>
              <Button  className='w-75 btn btn-dark mb-3 mt-0 mx-5'>Add To Cart</Button>
              <div className='yellow_div'>bt calling</div>
              </div>

             

          </div>  <div class='item '>
            <div className='box_bg'>
                <div className='sld_1'>
                     <img src={require('./image/asset 40.jpeg')}></img>
                </div>
                <div className='d-flex justify-content-between pt-3 '>
                                 <div className='fw-bolder'>Lunar Connect</div>
                             <div className='d-flex justify-content-between color-type'>

                                      <div className='color2'></div>
                                      <div className='color3'></div>
                                    <div className='color_num'>+3</div>

                               </div>
                  </div>
              <div className='pt-2 ps-4'><p ><b>$1799</b> <strike>2990</strike><b style={{color:'green',paddingLeft:'20px'}}>77% off</b></p></div>
              <Button  className='w-75 btn btn-dark mb-3 mt-0 mx-5'>Add To Cart</Button>
              <div className='yellow_div'> Bt calling</div>
              </div>

             

          </div>  <div class='item '>
            <div className='box_bg'>
                <div className='sld_1'>
                     <img src={require('./image/asset 41.jpeg')}></img>
                </div>
                <div className='d-flex justify-content-between pt-3 '>
                                 <div className='fw-bolder'>Wave Beat Calling</div>
                             <div className='d-flex justify-content-between color-type'>

                                      <div className='color2'></div>
                                      <div className='color3'></div>
                                    <div className='color_num'>+3</div>

                               </div>
                  </div>
              <div className='pt-2 ps-4'><p ><b>$1,429</b> <strike>2990</strike><b style={{color:'green',paddingLeft:'20px'}}>78% off</b></p></div>
              <Button  className='w-75 btn btn-dark mb-3 mt-0 mx-5'>Add To Cart</Button>
              <div className='yellow_div'> Bluetooth calling</div>
              </div>

             

          </div> 
   
</OwlCarousel>;

</div>
<div >
  <div  >
<div className='watch_sec d-lg-flex px-4 w-100 ' id='s3'>
          
            <div className='main_title text-lg-start my-auto ms-auto pe-4'>
                  <p> <b>Neckbands</b></p>
                  <h3 className='h3 fw-normal pb-xl-4 pb-0'>Nirvanaa 751 ANC<b>$999*</b></h3>
                  <Button className='btn btn-dark main_button '>shop products<FiArrowRightCircle className='ms-2'></FiArrowRightCircle></Button>
            </div>
            <div className=' main_img'>
                   <img src={require('./image/asset 43.png')} className='w-100' alt="" />
            </div>
      </div>
      </div>

    </div>
      
      {/* fghjklkjhgfcdx */}
      <div id='s4'>
      <div className="sec_title"><p>Best <b>Sellers</b></p>
      <div className="red_line"></div>
      </div>
         <OwlCarousel className='owl-theme  px-5 pt-0 'items={4} margin={20} emulateTouch={true} loop  dots={false} {...slider1}>
         <div class='item '>
            <div className='box_bg'>
                <div className='sld_1'>
                     <img src={require('./image/asset 44.jpeg')}></img>
                </div>
                <div className='d-flex justify-content-between pt-3 ps-4'>
                                 <div className='fw-bolder'>Rockerz 551ANC</div>
                             <div className='d-flex justify-content-between color-type'>

                                      <div className='color2'></div>
                                      <div className='color3'></div>
                                    <div className='color_num'>+3</div>

                               </div>
                  </div>
              <div className='pt-2 ps-4'><p ><b>$4,499</b> <strike>7990</strike><b style={{color:'green',paddingLeft:'20px'}}>44% off</b></p></div>
              <Button  className='w-75 btn btn-dark mb-3 mt-0 mx-5'>Add To Cart</Button>
              <div className='yellow_div'>65 Hours Playback</div>
              </div>

             

          </div> 

          <div class='item '>
            <div className='box_bg'>
                <div className='sld_1'>
                     <img src={require('./image/asset 100.webp')}></img>
                </div>
                <div className='d-flex justify-content-between pt-3 ps-4'>
                                 <div className='fw-bolder'>Immortal 400</div>
                             <div className='d-flex justify-content-between color-type'>

                                      <div className='color2'></div>
                                      <div className='color3'></div>
                                    <div className='color_num'>+3</div>

                               </div>
                  </div>
              <div className='pt-2 ps-4'><p ><b>$3,299</b> <strike>2990</strike><b style={{color:'green',paddingLeft:'20px'}}>59% off</b></p></div>
              <Button  className='w-75 btn btn-dark mb-3 mt-0 mx-5'>Add To Cart</Button>
              <div className='yellow_div'>100 Hours Playback</div>
              </div>

             

          </div>  <div class='item '>
            <div className='box_bg'>
                <div className='sld_1'>
                     <img src={require('./image/asset 45.gif')}></img>
                </div>
                <div className='d-flex justify-content-between pt-3 ps-4'>
                                 <div className='fw-bolder'>Rockerz 400</div>
                             <div className='d-flex justify-content-between color-type'>

                                      <div className='color2'></div>
                                      <div className='color3'></div>
                                    <div className='color_num'>+3</div>

                               </div>
                  </div>
              <div className='pt-2 ps-4'><p ><b>$1,999</b> <strike>2990</strike><b style={{color:'green',paddingLeft:'20px'}}>70% off</b></p></div>
              <Button  className='w-75 btn btn-dark mb-3 mt-0 mx-5'>Add To Cart</Button>
              <div className='yellow_div'>7.1 Channel Sound</div>
              </div>

             

          </div>  <div class='item '>
            <div className='box_bg'>
                <div className='sld_1'>
                     <img src={require('./image/asset 46.jpeg')}></img>
                </div>
                <div className='d-flex justify-content-between pt-3 ps-4'>
                                 <div className='fw-bolder'>Wave Beat Calling</div>
                             <div className='d-flex justify-content-between color-type'>

                                      <div className='color2'></div>
                                      <div className='color3'></div>
                                    <div className='color_num'>+3</div>

                               </div>
                  </div>
              <div className='pt-2 ps-4'><p ><b>$1,399</b> <strike>2990</strike><b style={{color:'green',paddingLeft:'20px'}}>53% off</b></p></div>
              <Button  className='w-75 btn btn-dark mb-3 mt-0 mx-5'>Add To Cart</Button>
              <div className='yellow_div'> 8 Hours Playback</div>
              </div>

             

          </div> 
   
</OwlCarousel>;

</div>
<div className="headphone">
<div className='watch_sec d-lg-flex mx-auto w-100 ' id='s5'>
            <div className='main_img d-none d-lg-block'>
                <img src={require('./image/asset 49.png')} className='' alt="" />
            </div>
      
            <div className='main_title text-lg-end my-auto ms-auto pe-4'>
                  <p><b>Headphones</b></p>
                  <h3 className='h3 fw-normal pb-xl-4 pb-0'>Starting from<b>$1199*</b></h3>
                  <Button className='btn btn-dark main_button '>shop products<FiArrowRightCircle className='ms-2'></FiArrowRightCircle></Button>
            </div>
            <div className='d-lg-none d-block main_img'>
                   <img src={require('./image/asset 49.png')} className='w-100' alt="" />

            </div>


      </div>
      </div>
      {/* fghjkl */}
      <div id='s6'>
      <div className="sec_title"><p>Best <b>Sellers</b></p>
      <div className="red_line"></div>
      </div>
         <OwlCarousel className='owl-theme  px-5 pt-0 'items={4} margin={20} emulateTouch={true} loop  dots={false} {...slider1}>
         <div class='item '>
            <div className='box_bg'>
                <div className='sld_1'>
                     <img src={require('./image/asset 44.jpeg')}></img>
                </div>
                <div className='d-flex justify-content-between pt-3 ps-4'>
                                 <div className='fw-bolder'>Rockerz 551ANC</div>
                             <div className='d-flex justify-content-between color-type'>

                                      <div className='color2'></div>
                                      <div className='color3'></div>
                                    <div className='color_num'>+3</div>

                               </div>
                  </div>
              <div className='pt-2 ps-4'><p ><b>$4,499</b> <strike>7990</strike><b style={{color:'green',paddingLeft:'20px'}}>44% off</b></p></div>
              <Button  className='w-75 btn btn-dark mb-3 mt-0 mx-5'>Add To Cart</Button>
              <div className='yellow_div'>65 Hours Playback</div>
              </div>

             

          </div> 

          <div class='item '>
            <div className='box_bg'>
                <div className='sld_1'>
                     <img src={require('./image/asset 100.webp')}></img>
                </div>
                <div className='d-flex justify-content-between pt-3 ps-4'>
                                 <div className='fw-bolder'>Immortal 400</div>
                             <div className='d-flex justify-content-between color-type'>

                                      <div className='color2'></div>
                                      <div className='color3'></div>
                                    <div className='color_num'>+3</div>

                               </div>
                  </div>
              <div className='pt-2 ps-4'><p ><b>$3,299</b> <strike>2990</strike><b style={{color:'green',paddingLeft:'20px'}}>59% off</b></p></div>
              <Button  className='w-75 btn btn-dark mb-3 mt-0 mx-5'>Add To Cart</Button>
              <div className='yellow_div'>100 Hours Playback</div>
              </div>

             

          </div>  <div class='item '>
            <div className='box_bg'>
                <div className='sld_1'>
                     <img src={require('./image/asset 45.gif')}></img>
                </div>
                <div className='d-flex justify-content-between pt-3 ps-4'>
                                 <div className='fw-bolder'>Rockerz 400</div>
                             <div className='d-flex justify-content-between color-type'>

                                      <div className='color2'></div>
                                      <div className='color3'></div>
                                    <div className='color_num'>+3</div>

                               </div>
                  </div>
              <div className='pt-2 ps-4'><p ><b>$1,999</b> <strike>2990</strike><b style={{color:'green',paddingLeft:'20px'}}>70% off</b></p></div>
              <Button  className='w-75 btn btn-dark mb-3 mt-0 mx-5'>Add To Cart</Button>
              <div className='yellow_div'>7.1 Channel Sound</div>
              </div>

             

          </div>  <div class='item '>
            <div className='box_bg'>
                <div className='sld_1'>
                     <img src={require('./image/asset 46.jpeg')}></img>
                </div>
                <div className='d-flex justify-content-between pt-3 ps-4'>
                                 <div className='fw-bolder'>Wave Beat Calling</div>
                             <div className='d-flex justify-content-between color-type'>

                                      <div className='color2'></div>
                                      <div className='color3'></div>
                                    <div className='color_num'>+3</div>

                               </div>
                  </div>
              <div className='pt-2 ps-4'><p ><b>$1,399</b> <strike>2990</strike><b style={{color:'green',paddingLeft:'20px'}}>53% off</b></p></div>
              <Button  className='w-75 btn btn-dark mb-3 mt-0 mx-5'>Add To Cart</Button>
              <div className='yellow_div'> 8 Hours Playback</div>
              </div>

             

          </div> 
   
</OwlCarousel>;

</div>
<div >
  <div className='speaker' >
<div className='watch_sec d-lg-flex p-4  w-100 ' id='s7'>
          
            <div className='main_title text-lg-start my-auto ms-auto '>
                  <p>Wireless<b>Speakers</b></p>
                  <h3 className='h3 fw-normal pb-xl-4 pb-0'>Nirvanaa 751 ANC<b>$749*</b></h3>
                  <Button className='btn btn-dark main_button '>shop products<FiArrowRightCircle className='ms-2'></FiArrowRightCircle></Button>
            </div>
            <div className=' main_img'>
                   <img src={require('./image/asset 51.png')} className='w-100' alt="" />
            </div>
      </div>
      </div>

    </div>
    {/* ghjkl; */}
    <div id='s8'>
      <div className="sec_title"><p>Best <b>Sellers</b></p>
      <div className="red_line"></div>
      </div>
         <OwlCarousel className='owl-theme  px-5 pt-0 'items={4} margin={20} emulateTouch={true} loop  dots={false} {...slider1}>
         <div class='item '>
            <div className='box_bg'>
                <div className='sld_1'>
                     <img src={require('./image/asset 52.jpeg')}></img>
                </div>
                <div className='d-flex justify-content-between pt-3 ps-4'>
                                 <div className='fw-bolder'>Stone 350</div>
                             <div className='d-flex justify-content-between color-type'>

                                      <div className='color2'></div>
                                      <div className='color3'></div>
                                    <div className='color_num'>+5</div>

                               </div>
                  </div>
              <div className='pt-2 ps-4'><p ><b>$1,299</b> <strike>7990</strike><b style={{color:'green',paddingLeft:'20px'}}>63% off</b></p></div>
              <Button  className='w-75 btn btn-dark mb-3 mt-0 mx-5'>Add To Cart</Button>
              <div className='yellow_div'>12 Hours Playback</div>
              </div>

             

          </div> 

          <div class='item '>
            <div className='box_bg'>
                <div className='sld_1'>
                     <img src={require('./image/asset 53.jpeg')}></img>
                </div>
                <div className='d-flex justify-content-between pt-3 ps-4'>
                                 <div className='fw-bolder'>Stone 620</div>
                             <div className='d-flex justify-content-between color-type'>

                                      <div className='color2'></div>
                                      <div className='color3'></div>
                                    <div className='color_num'>+3</div>

                               </div>
                  </div>
              <div className='pt-2 ps-4'><p ><b>$1,299</b> <strike>2990</strike><b style={{color:'green',paddingLeft:'20px'}}>50% off</b></p></div>
              <Button  className='w-75 btn btn-dark mb-3 mt-0 mx-5'>Add To Cart</Button>
              <div className='yellow_div'>12W  stereo Sound</div>
              </div>

             

          </div>  <div class='item '>
            <div className='box_bg'>
                <div className='sld_1'>
                     <img src={require('./image/asset 54.jpeg')}></img>
                </div>
                <div className='d-flex justify-content-between pt-3 ps-4'>
                                 <div className='fw-bolder'>Rockerz 400</div>
                             <div className='d-flex justify-content-between color-type'>

                                      <div className='color2'></div>
                                      <div className='color3'></div>
                                    <div className='color_num'>+3</div>

                               </div>
                  </div>
              <div className='pt-2 ps-4'><p ><b>$999</b> <strike>2990</strike><b style={{color:'green',paddingLeft:'20px'}}>60% off</b></p></div>
              <Button  className='w-75 btn btn-dark mb-3 mt-0 mx-5'>Add To Cart</Button>
              <div className='yellow_div'>11 Hours Playback</div>
              </div>

             

          </div>  <div class='item '>
            <div className='box_bg'>
                <div className='sld_1'>
                     <img src={require('./image/asset 55.jpeg')}></img>
                </div>
                <div className='d-flex justify-content-between pt-3 ps-4'>
                                 <div className='fw-bolder'>Wave Beat Calling</div>
                             <div className='d-flex justify-content-between color-type'>

                                      <div className='color2'></div>
                                      <div className='color3'></div>
                                    <div className='color_num'>+3</div>

                               </div>
                  </div>
              <div className='pt-2 ps-4'><p ><b>$2,199</b> <strike>2990</strike><b style={{color:'green',paddingLeft:'20px'}}>63% off</b></p></div>
              <Button  className='w-75 btn btn-dark mb-3 mt-0 mx-5'>Add To Cart</Button>
              <div className='yellow_div'> 12 Hours Playback</div>
              </div>

             

          </div> 
   
</OwlCarousel>;

</div>
<div className="alica">
<div className='watch_sec d-lg-flex mx-auto w-100' id='s9'>
            <div className='main_img d-none d-lg-block'>
                <img src={require('./image/asset 57.png')} className='' alt="" />
            </div>
      
            <div className='main_title text-lg-end my-auto ms-auto pe-4'>
                  <p>Party<b>Speakers</b></p>
                  <h3 className='h3 fw-normal pb-xl-4 pb-0'>Starting  from <b>$1199*</b></h3>
                  <Button className='btn btn-dark main_button '>shop products<FiArrowRightCircle className='ms-2'></FiArrowRightCircle></Button>
            </div>
            <div className='d-lg-none d-block main_img'>
                   <img src={require('./image/asset 57.png')} className='w-100' alt="" />

            </div>
    </div>
    </div>
    <div id='s10'>
      <div className="sec_title"><p>Best <b>Sellers</b></p>
      <div className="red_line"></div>
      </div>
         <OwlCarousel className='owl-theme  px-5 pt-0 'items={4} margin={20} emulateTouch={true} loop  dots={false} {...slider1}>
         <div class='item '>
            <div className='box_bg'>
                <div className='sld_1'>
                     <img src={require('./image/asset 58.jpeg')}></img>
                </div>
                <div className='d-flex justify-content-between pt-3 ps-4'>
                                 <div className='fw-bolder'>Party Pal 200</div>
                             <div className='d-flex justify-content-between color-type'>

                                      <div className='color2'></div>
                                      <div className='color3'></div>
                                    <div className='color_num'>+5</div>

                               </div>
                  </div>
              <div className='pt-2 ps-4'><p ><b>$8,999</b> <strike>7990</strike><b style={{color:'green',paddingLeft:'20px'}}>63% off</b></p></div>
              <Button  className='w-75 btn btn-dark mb-3 mt-0 mx-5'>Add To Cart</Button>
              <div className='yellow_div'>70W Rms Sound</div>
              </div>

             

          </div> 

          <div class='item '>
            <div className='box_bg'>
                <div className='sld_1'>
                     <img src={require('./image/asset 59.jpeg')}></img>
                </div>
                <div className='d-flex justify-content-between pt-3 ps-4'>
                                 <div className='fw-bolder'>Party Pal 400</div>
                             <div className='d-flex justify-content-between color-type'>

                                      <div className='color2'></div>
                                      <div className='color3'></div>
                                    <div className='color_num'>+3</div>

                               </div>
                  </div>
              <div className='pt-2 ps-4'><p ><b>$16,999</b> <strike>2990</strike><b style={{color:'green',paddingLeft:'20px'}}>50% off</b></p></div>
              <Button  className='w-75 btn btn-dark mb-3 mt-0 mx-5'>Add To Cart</Button>
              <div className='yellow_div'>6Hours Playback</div>
              </div>

             

          </div>  <div class='item '>
            <div className='box_bg'>
                <div className='sld_1'>
                     <img src={require('./image/asset 60.jpeg')}></img>
                </div>
                <div className='d-flex justify-content-between pt-3 ps-4'>
                                 <div className='fw-bolder'>Party Pal 195</div>
                             <div className='d-flex justify-content-between color-type'>

                                      <div className='color2'></div>
                                      <div className='color3'></div>
                                    <div className='color_num'>+1</div>

                               </div>
                  </div>
              <div className='pt-2 ps-4'><p ><b>$7,499</b> <strike>2990</strike><b style={{color:'green',paddingLeft:'20px'}}>60% off</b></p></div>
              <Button  className='w-75 btn btn-dark mb-3 mt-0 mx-5'>Add To Cart</Button>
              <div className='yellow_div'>6 Hours Playback</div>
              </div>

             

          </div>  <div class='item '>
            <div className='box_bg'>
                <div className='sld_1'>
                     <img src={require('./image/asset 61.jpeg')}></img>
                </div>
                <div className='d-flex justify-content-between pt-3 ps-4'>
                                 <div className='fw-bolder'>Party Pal 320</div>
                             <div className='d-flex justify-content-between color-type'>

                                      <div className='color2'></div>
                                      <div className='color3'></div>
                                    <div className='color_num'>+3</div>

                               </div>
                  </div>
              <div className='pt-2 ps-4'><p ><b>$12,199</b> <strike>2990</strike><b style={{color:'green',paddingLeft:'20px'}}>63% off</b></p></div>
              <Button  className='w-75 btn btn-dark mb-3 mt-0 mx-5'>Add To Cart</Button>
              <div className='yellow_div'> 6 Hours Playback</div>
              </div>
          </div> 
   
</OwlCarousel>;

</div>
<div className="soundbar">
<div className='watch_sec d-lg-flex w-100 ' id='s11'>
          
          <div className='main_title text-lg-start my-auto ms-auto pe-4'>
                <p> <b>Neckbands</b></p>
                <h3 className='h3 fw-normal pb-xl-4 pb-0'>Starting From <b>$1,599*</b></h3>
                <Button className='btn btn-dark main_button '>shop products<FiArrowRightCircle className='ms-2'></FiArrowRightCircle></Button>
          </div>
          <div className=' main_img d-none d-lg-flex'>
                 <img src={require('./image/asset 63.png')} className='w-100' alt="" />
          </div>
          <div className=' main_img  d-lg-none d-md-block'>
                 <img src={require('./image/asset 62.png')} className='w-100' alt="" />
          </div>
    </div>
    </div>
    <div id='s12'>
      <div className="sec_title"><p>Best <b>Sellers</b></p>
      <div className="red_line"></div>
      </div>
         <OwlCarousel className='owl-theme  px-5 pt-0 'items={4} margin={20} emulateTouch={true} loop  dots={false} {...slider1}>
         <div class='item '>
            <div className='box_bg'>
                <div className='sld_1'>
                     <img src={require('./image/asset 64.png')}></img>
                </div>
                <div className='d-flex justify-content-between pt-3 ps-4'>
                                 <div className='fw-bolder'>Stone 350</div>
                             <div className='d-flex justify-content-between color-type'>

                                      <div className='color2'></div>
                                      <div className='color3'></div>
                                    <div className='color_num'>+5</div>

                               </div>
                  </div>
              <div className='pt-2 ps-4'><p ><b>$1,299</b> <strike>7990</strike><b style={{color:'green',paddingLeft:'20px'}}>63% off</b></p></div>
              <Button  className='w-75 btn btn-dark mb-3 mt-0 mx-5'>Add To Cart</Button>
              <div className='yellow_div'>12 Hours Playback</div>
              </div>

             

          </div> 

          <div class='item '>
            <div className='box_bg'>
                <div className='sld_1'>
                     <img src={require('./image/asset 65.png')}></img>
                </div>
                <div className='d-flex justify-content-between pt-3 ps-4'>
                                 <div className='fw-bolder'>Stone 620</div>
                             <div className='d-flex justify-content-between color-type'>

                                      <div className='color2'></div>
                                      <div className='color3'></div>
                                    <div className='color_num'>+3</div>

                               </div>
                  </div>
              <div className='pt-2 ps-4'><p ><b>$1,299</b> <strike>2990</strike><b style={{color:'green',paddingLeft:'20px'}}>50% off</b></p></div>
              <Button  className='w-75 btn btn-dark mb-3 mt-0 mx-5'>Add To Cart</Button>
              <div className='yellow_div'>12W  stereo Sound</div>
              </div>

             

          </div>  <div class='item '>
            <div className='box_bg'>
                <div className='sld_1'>
                     <img src={require('./image/asset 64.png')}></img>
                </div>
                <div className='d-flex justify-content-between pt-3 ps-4'>
                                 <div className='fw-bolder'>Rockerz 400</div>
                             <div className='d-flex justify-content-between color-type'>

                                      <div className='color2'></div>
                                      <div className='color3'></div>
                                    <div className='color_num'>+3</div>

                               </div>
                  </div>
              <div className='pt-2 ps-4'><p ><b>$999</b> <strike>2990</strike><b style={{color:'green',paddingLeft:'20px'}}>60% off</b></p></div>
              <Button  className='w-75 btn btn-dark mb-3 mt-0 mx-5'>Add To Cart</Button>
              <div className='yellow_div'>11 Hours Playback</div>
              </div>

             

          </div>  <div class='item '>
            <div className='box_bg '>
                <div className='sld_1'>
                     <img src={require('./image/asset 65.png')}></img>
                </div>
                <div className='d-flex justify-content-between pt-5 ps-4'>
                                 <div className='fw-bolder'>Wave Beat Calling</div>
                             <div className='d-flex justify-content-between color-type'>

                                      <div className='color2'></div>
                                      <div className='color3'></div>
                                    <div className='color_num'>+3</div>

                               </div>
                  </div>
              <div className='pt-2 ps-4'><p ><b>$2,199</b> <strike>2990</strike><b style={{color:'green',paddingLeft:'20px'}}>63% off</b></p></div>
              <Button  className='w-75 btn btn-dark mb-3 mt-0 mx-5'>Add To Cart</Button>
              <div className='yellow_div'> 12 Hours Playback</div>
              </div>

             

          </div> 
   
</OwlCarousel>;

</div>
<footer>
      <div className='footer1 d-flex justify-content-between '>
            <div className=' footer_logo'>
                  <img src={logo} alt="" />
                  <h3>Subscribe to our email alerts!</h3>
                  <input type="text" placeholder='Enter you email address' className='rounded-1 py-2 px-5 border-0' />
            </div>
            <div className='d-lg-block d-none' >
                     <h4>Shop</h4>
                     <div  className='d-flex'>
                        <div>
                            
                            <li>Shop True Wireless Earbuds</li>
                            <li>Wired Headphones</li>
                            <li>Home Audio</li>
                            <li>Smart Watches</li>
                            <li>Misfit Trimmers</li>
                    </div>
                    <div className='ps-5'>
                          
                            <li>Wireless Headphones</li>
                            <li>Wireless Speakers</li>
                            <li>Mobile Accessories</li>
                            <li>TRebel</li>
                            <li>Earn ₹100</li>
                    </div>

                     </div>
                  
           </div>
           <div className='d-lg-block d-none'>
                          <h4>HElP</h4>
                           <li>Track Your Order</li>
                            <li>Warranty & Support</li>
                            <li>Return Policy</li>
                            <li>Service centers</li>
                            <li>Bulk orders</li>
                            <li>FAQS</li>
                            <li>Why BUY Directs</li>
            </div>
            <div className='d-lg-block d-none'>
                          <h4>Company flex</h4>
                           <li>Track Your Order</li>
                            <li>Warranty & Support</li>
                            <li>Return Policy</li>
                            <li>Service centers</li>
                            <li>Bulk orders</li>
                            <li>FAQS</li>
                            <li>Why BUY Directs</li>
            </div>




      </div>

</footer>
<footer className='footer_bg'>
    <div className='footer2 d-lg-flex  justify-content-between d-none '>
      <div>
          <h2>True Wireless Earbuds</h2>
          <div>
                <h4>Shop by Features</h4>
                <li>Noise Cancellation</li>
                <li>Earbuds Gaming Earbuds</li>
                <li> Large Playback Earbuds</li>
          </div>
          <div>
                <h4>Shop by Price</h4>
                <li>Earbuds Under 1000</li>
                <li>Earbuds Under 2000</li>
                <li>Earbuds Under 3000</li>
                <li>Earbuds Under 4000</li>
                <li>Earbuds Under 5000</li>
                <li> Earbuds Above 5000</li>
          </div>
          <div>
                <h4>Shop by Price</h4>
                <li>Earbuds Under 1000</li>
                <li>Earbuds Under 2000</li>
                <li>Earbuds Under 3000</li>
                <li>Earbuds Under 4000</li>
                <li>Earbuds Under 5000</li>
                <li> Earbuds Above 5000</li>
          </div>
          <h2>Wired Earphones</h2>
          <div>
              <h4>Shop by Features</h4>
              <li>Wired Earphones with Mic</li>
          </div>
          <div>
              <h4>Shop by Price</h4>
              <li>Earphones Under 500</li> 
                <li>Earphones Under 1000</li>
          </div>
          <h2>Wired Earphones</h2>
          <div>
              <h4>Wired Headphones  </h4>
              <li>Earbuds Under 3000</li>
                <li>Earbuds Under 4000</li>
                <li>Earbuds Under 5000</li>
                <li> Earbuds Above 5000</li>
          </div>
          <div>
              <h4>Shop by Price</h4>
              <li>Earphones Under 500</li> 
                <li>Earphones Under 1000</li>
                <li>Noise Cancellation</li>
                <li>Earbuds Gaming Earbuds</li>
                <li> Large Playback Earbuds</li>
          </div>
      </div>
      <div>
          <h2>True Wireless Earbuds</h2>
          <div>
                <h4>Shop by Features</h4>
                <li>Noise Cancellation</li>
                <li>Earbuds Gaming Earbuds</li>
                <li> Large Playback Earbuds</li>
          </div>
          <div>
                <h4>Shop by Price</h4>
                <li>Earbuds Under 1000</li>
                <li>Earbuds Under 2000</li>
                <li>Earbuds Under 3000</li>
                <li>Earbuds Under 4000</li>
                <li>Earbuds Under 5000</li>
                <li> Earbuds Above 5000</li>
          </div>
          <div>
                <h4>Shop by Price</h4>
                <li>Earbuds Under 1000</li>
                <li>Earbuds Under 2000</li>
                <li>Earbuds Under 3000</li>
                <li>Earbuds Under 4000</li>
                <li>Earbuds Under 5000</li>
                <li> Earbuds Above 5000</li>
          </div>
          <h2>Wired Earphones</h2>
          <div>
              <h4>Wired Headphones  </h4>
              <li>Earbuds Under 3000</li>
                <li>Earbuds Under 4000</li>
                <li>Earbuds Under 5000</li>
                <li> Earbuds Above 5000</li>
          </div>
          <div>
              <h4>Shop by Price</h4>
              <li>Earphones Under 500</li> 
                <li>Earphones Under 1000</li>
                <li>Noise Cancellation</li>
                <li>Earbuds Gaming Earbuds</li>
                <li> Large Playback Earbuds</li>
          </div>
          <h2>Wired Earphones</h2>
          <div>
              <h4>Shop by Features</h4>
              <li>Wired Earphones with Mic</li>
          </div>
          <div>
              <h4>Shop by Price</h4>
              <li>Earphones Under 500</li> 
                <li>Earphones Under 1000</li>
          </div>
          <h2>Wired Earphones</h2>
         
          <div>
              <h4>Shop by Price</h4>
              <li>Earphones Under 500</li> 
                <li>Earphones Under 1000</li>
                <li>Noise Cancellation</li>
                <li>Earbuds Gaming Earbuds</li>
                <li> Large Playback Earbuds</li>
          </div>
      </div>
      <div>
          <h2>True Wireless Earbuds</h2>
          <div>
                <h4>Shop by Features</h4>
                <li>Noise Cancellation</li>
                <li>Earbuds Gaming Earbuds</li>
                <li> Large Playback Earbuds</li>
          </div>
          <div>
                <h4>Shop by Price</h4>
                <li>Earbuds Under 1000</li>
                <li>Earbuds Under 2000</li>
                <li>Earbuds Under 3000</li>
                <li>Earbuds Under 4000</li>
                <li>Earbuds Under 5000</li>
                <li> Earbuds Above 5000</li>
          </div>
          <h2>Wired Earphones</h2>
          <div>
              <h4>Wired Headphones  </h4>
              <li>Earbuds Under 3000</li>
                <li>Earbuds Under 4000</li>
                <li>Earbuds Under 5000</li>
                <li> Earbuds Above 5000</li>
          </div>
          
          <div>
                <h4>Shop by Price</h4>
                <li>Earbuds Under 1000</li>
                <li>Earbuds Under 2000</li>
                <li>Earbuds Under 3000</li>
                <li>Earbuds Under 4000</li>
                <li>Earbuds Under 5000</li>
                <li> Earbuds Above 5000</li>
          </div>
          <h2>Wired Earphones</h2>
          <div>
              <h4>Shop by Features</h4>
              <li>Wired Earphones with Mic</li>
          </div>
          <div>
              <h4>Shop by Price</h4>
              <li>Earphones Under 500</li> 
                <li>Earphones Under 1000</li>
          </div>
          <h2>Wired Earphones</h2>
          <div>
              <h4>Wired Headphones  </h4>
              <li>Earbuds Under 3000</li>
                <li>Earbuds Under 4000</li>
                <li>Earbuds Under 5000</li>
                <li> Earbuds Above 5000</li>
          </div>
          <div>
              <h4>Shop by Price</h4>
              <li>Earphones Under 500</li> 
                <li>Earphones Under 1000</li>
                <li>Noise Cancellation</li>
                <li>Earbuds Gaming Earbuds</li>
                <li> Large Playback Earbuds</li>
          </div>
      </div>
      <div>
          <h2>True Wireless Earbuds</h2>
          <div>
                <h4>Shop by Features</h4>
                <li>Noise Cancellation</li>
                <li>Earbuds Gaming Earbuds</li>
                <li> Large Playback Earbuds</li>
          </div>
          <div>
                <h4>Shop by Price</h4>
                <li>Earbuds Under 1000</li>
                <li>Earbuds Under 2000</li>
                <li>Earbuds Under 3000</li>
                <li>Earbuds Under 4000</li>
                <li>Earbuds Under 5000</li>
                <li> Earbuds Above 5000</li>
          </div>
          <div>
                <h4>Shop by Price</h4>
                <li>Earbuds Under 1000</li>
                <li>Earbuds Under 2000</li>
                <li>Earbuds Under 3000</li>
                <li>Earbuds Under 4000</li>
                <li>Earbuds Under 5000</li>
                <li> Earbuds Above 5000</li>
          </div>
          <h2>Wired Earphones</h2>
          <div>
              <h4>Shop by Features</h4>
              <li>Wired Earphones with Mic</li>
          </div>
          <div>
              <h4>Shop by Price</h4>
              <li>Earphones Under 500</li> 
                <li>Earphones Under 1000</li>
          </div>
          <h2>Wired Earphones</h2>
          <div>
              <h4>Wired Headphones  </h4>
              <li>Earbuds Under 3000</li>
                <li>Earbuds Under 4000</li>
                <li>Earbuds Under 5000</li>
                <li> Earbuds Above 5000</li>
          </div>
          <div>
              <h4>Shop by Price</h4>
              <li>Earphones Under 500</li> 
                <li>Earphones Under 1000</li>
                <li>Noise Cancellation</li>
                <li>Earbuds Gaming Earbuds</li>
                <li> Large Playback Earbuds</li>
          </div>
         
      </div>


    </div>
    <div className='responsive_footer  d-lg-none d-block'>
        <div className='d-flex justify-content-between'>
          <li>True Wireless Earbuds</li>
          <li>+</li>
        </div>
        <div className='d-flex justify-content-between'>
          <li>True Wireless Earbuds</li>
          <li>+</li>
        </div>
        <div className='d-flex justify-content-between'>
          <li>True Wireless Earbuds</li>
          <li>+</li>
        </div>
        <div className='d-flex justify-content-between'>
          <li>True Wireless Earbuds</li>
          <li>+</li>
        </div>
        <div className='d-flex justify-content-between'>
          <li>True Wireless Earbuds</li>
          <li>+</li>
        </div>
        <div className='d-flex justify-content-between'>
          <li>True Wireless Earbuds</li>
          <li>+</li>
        </div>
        <div className='d-flex justify-content-between'>
          <li>True Wireless Earbuds</li>
          <li>+</li>
        </div>
        <div className='d-flex justify-content-between'>
          <li>True Wireless Earbuds</li>
          <li>+</li>
        </div>
        <div className='d-flex justify-content-between'>
          <li>True Wireless Earbuds</li>
          <li>+</li>
        </div>
        <div className='d-flex justify-content-between'>
          <li>True Wireless Earbuds</li>
          <li>+</li>
        </div>

    </div>
</footer>
<footer style={{backgroundColor:'#e7f0f5'}}>
        <div className='d-flex justify-content-center my-auto py-5'>
            <h1  className='fs-5'>Let's get social</h1>
            <img src={facebook} alt="" className='ps-3' />
            <img src={x} alt="" className='ps-3' />
            <img src={instra} alt="" className='ps-3' />
            <img src={youtube} alt="" className='ps-3' />
            <img src={linked} alt="" className='ps-3' />
           
        </div>
        <div className='text-center fs-6'><p>Privacy Policy Terms & Conditions</p></div>
        <div className='text-center pb-3' style={{color:'rgba(0,0,0,.3)', fontSize:'12px',}}>© 2023 Imagine Marketing Limited. All Rights Reserved.</div>
        <div className='mx-auto text-center pb-3' style={{color:'rgba(0,0,0,.3)', fontSize:'15px',width:'50%'}}><p>For queries contact us: Manager, Imagine Marketing Limited Unit no. 204 & 205, 2nd floor, D-wing & E-wing, Corporate Avenue, Andheri Ghatkopar Link Road, Mumbai, Maharashtra-400093, India</p></div>
</footer>
    </div> 
   
  );
}

export default App;
