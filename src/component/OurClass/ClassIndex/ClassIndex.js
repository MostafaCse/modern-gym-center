import { faCheckSquare, faLeaf, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Form, FormControl, Nav, Navbar, NavDropdown, Button, Image } from 'react-bootstrap';
import Footer from '../../HomePage/Footer/Footer';
import classComponent from '../../../Image/class-component.jpg';
import './ClassIndex.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router';

const ClassIndex = () => {
  const [titleSet, settitleSet] = useState("OUR CLASSES");
  const [showComponent, setShowComponent] = useState(true);

  const btnHandle = (props) => {
    settitleSet(props);
    setShowComponent(false);
  }
 let history=useHistory();
 const joinUsHandle=()=>{
   history.push("/joinUs");
 }
  return (
    <div>
      <div style={{ marginBottom: '100px' }} className="hederHighlight">
        <Navbar bg="black" variant="dark" expand="lg">
          <Navbar.Brand href="/Home"><span style={{ fontSize: '30px' }}>POWER <span style={{ color: 'yellow' }}>X</span></span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/OurClass">Services</Nav.Link>
            <Nav.Link href="/OurClass">Our Classes</Nav.Link>
            <Nav.Link href="/AboutUs">About us</Nav.Link>
            <Nav.Link href="/Home">Blog</Nav.Link>
            <Nav.Link href="/Pricing">Pricing</Nav.Link>
            <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <p className="titleHighlight">{titleSet}</p>
      </div>
      {
        showComponent && <div>
          <div style={{ marginBottom: '150px' }} className="row">
            <div className="col-md-4">
              <div className="image-position" id="pysco">
                <button onClick={() => btnHandle("PSYCHO TRAINING")} className="btn-position">PSYCHO TRAINING</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="image-position" id="self">
                <button onClick={() => btnHandle("SELF-DEFENSE")} className="btn-position">SELF-DEFENSE</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="image-position" id="advance">
                <button onClick={() => btnHandle("ADVANCED GYM")} className="btn-position">ADVANCED GYM</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="image-position" id="cardio-male">
                <button onClick={() => btnHandle("CARDIO TRAINING")} className="btn-position">CARDIO TRAINING</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="image-position" id="strength">
                <button onClick={() => btnHandle("STRENGTH TRAINING")} className="btn-position">STRENGTH TRAINING</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="image-position" id="pysco-female">
                <button onClick={() => btnHandle("PSYCHO TRAINING")} className="btn-position">PSYCHO TRAINING</button>
              </div>
            </div>
          </div>
        </div>
      }
      {
        !showComponent && <div style={{marginBottom:'100px'}}>
          <div className="row">
            <div style={{marginBottom:'40px'}} className="col-md-7 img-highlight">
              <Image src={classComponent}></Image>
            </div>
            <div className="col-md-5">
              <p style={{ fontSize: '30px', fontWeight: 'bold' }}><span style={{ color: 'yellow' }}>CLASS</span> SCHEDULE</p>
              <div className="row">
                <div className="col-md-5 schedule">
                  <h4>Monday</h4>
                  <p style={{ color: 'yellow' }}>8:00 AM - 9:00 AM</p>
                </div>
                <div className="col-md-5 schedule">
                  <h4>Tuesday</h4>
                  <p style={{ color: 'yellow' }}>9:00 AM - 10:00 AM</p>
                </div>
                <div className="col-md-5 schedule">
                  <h4>Wednesday</h4>
                  <p style={{ color: 'yellow' }}>10:00 AM - 11:00 AM</p>
                </div>
                <div className="col-md-5 schedule">
                  <h4>Thursday</h4>
                  <p style={{ color: 'yellow' }}>11:00 AM - 12:00 AM</p>
                </div>
                <div className="col-md-5 schedule">
                  <h4>Friday</h4>
                  <p style={{ color: 'yellow' }}>6:00 AM - 7:00 AM</p>
                </div>
                <div className="col-md-5 schedule">
                  <h4>Saturday</h4>
                  <p style={{ color: 'yellow' }}>7:00 AM - 8:00 AM</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-7">
                <p>As the largest Wikipedia edition, and because English is such a widely used language, the English Wikipedia draws many users and editors whose native language is not English. Such users may seek information from the English Wikipedia rather than the Wikipedia of their native language because the English Wikipedia tends to contain more information about general subjects. Often bringing in new perspectives, a strong motivation to contribute for them is to increase the coverage of topics outside the English world for an international audience and to enrich existing topics with missing information from non-English countries, thereby helping to reduce systemic bias. Successful collaborations have been developed between non-native English speakers who successfully add content to the English Wikipedia and native English speakers who act as copy editors for them.</p>
              </div>
            </div>
         
          </div>
         <div className="row">
           <div className="col-md-10">
           <FontAwesomeIcon style={{color:'yellow'}} values="this is coo" icon={faCheckSquare}></FontAwesomeIcon>
            <span className="tips-highlight">Having Slimmer Shapely Thighs</span><br/>
            <FontAwesomeIcon style={{color:'yellow'}} values="this is coo" icon={faCheckSquare}></FontAwesomeIcon>
            <span className="tips-highlight">Getting Stronger Body</span><br/>
            <FontAwesomeIcon style={{color:'yellow'}} values="this is coo" icon={faCheckSquare}></FontAwesomeIcon>
            <span className="tips-highlight">Increased Metabolism</span><br/>
            <FontAwesomeIcon style={{color:'yellow'}} values="this is coo" icon={faCheckSquare}></FontAwesomeIcon>
            <span className="tips-highlight">Increased Muscular Endurance</span><br/>
            <FontAwesomeIcon style={{color:'yellow'}} values="this is coo" icon={faCheckSquare}></FontAwesomeIcon>
            <span className="tips-highlight">Maximums Results in Less Time</span><br/>
            <FontAwesomeIcon style={{color:'yellow'}} values="this is coo" icon={faCheckSquare}></FontAwesomeIcon>
            <span className="tips-highlight">Firms Hips and Tummy</span><br/>
           </div>
           <div className="col-md-2">
            <button onClick={joinUsHandle} className="btnHighlight">JOIN US</button>
           </div>
           </div>
        
        </div>

      }
      <Footer></Footer>
    </div>
  )
}
export default ClassIndex;