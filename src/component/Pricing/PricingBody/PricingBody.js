import { faCheck, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Footer from '../../HomePage/Footer/Footer';
import PricingBodyPartital from '../PricingBodyPartital/PricingBodyPartital';
import PricingHeader from '../PricingHeader/PricingHeader';
import './PricingBody.css';

const PricingBody = () => {
 
    const [Pricing, setPricing] = useState("PRICING PLANS");
    const [StateMangement, setStateMangement] = useState(true);

    const btnHandle = (props) => {
        setPricing(props);
        setStateMangement(false);
    }
    
    return (
        <div>
            <PricingHeader titleOfClass={Pricing}></PricingHeader>
            {
                StateMangement && <div style={{marginBottom:'100px'}}>
                    <p className="textHighlight"><span style={{ color: 'yellow' }}>CHOOSE THE OFFERS</span> THAT SUITS YOU</p>
                    <center> <p>you can choose thats offer which is suitable for you. it is also ready for those who are agree to attend in the gym.</p></center>
                    <div style={{ marginTop: '50px' }} className="row">
                        <div className="col-md-4">
                            <div style={{ paddingTop: '30px' }} id="pysco-female" className="bg-highlight">
                                <p style={{ color: 'yellow', fontWeight: '600' }}>BILLED MONTHLY</p>
                                <h2 style={{ color: 'white', fontWeight: '600' }}>ADVANCE PLAN</h2>
                                <h1 style={{ color: 'yellow', fontWeight: '700' }}><FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon>140</h1>
                                <p style={{ color: 'white' }}><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>Mobile-Optimized</p>
                                <p style={{ color: 'white' }}><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>Best Hosting</p>
                                <p style={{ color: 'white' }}><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>Free custom</p>
                                <p style={{ color: 'white' }}><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>Outstanding</p>
                                <p style={{ color: 'white' }}><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>Happy Customers</p>
                                <button onClick={() => btnHandle('YOUR GYM MEMBERSHIP')} id="btn-highlight">PURCHASE</button>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div style={{ paddingTop: '30px' }} id="work-out" className="bg-highlight">
                                <p style={{ color: 'yellow', fontWeight: '600' }}>BILLED MONTHLY</p>
                                <h2 style={{ color: 'white', fontWeight: '600' }}>BASIC PLAN</h2>
                                <h1 style={{ color: 'yellow', fontWeight: '700' }}><FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon>120</h1>
                                <p style={{ color: 'white' }}><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>Mobile-Optimized</p>
                                <p style={{ color: 'white' }}><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>Best Hosting</p>
                                <p style={{ color: 'white' }}><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>Free custom</p>
                                <p style={{ color: 'white' }}><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>Outstanding</p>
                                <p style={{ color: 'white' }}><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>Happy Customers</p>
                                <button onClick={() => btnHandle('YOUR GYM MEMBERSHIP')} id="btn-highlight">PURCHASE</button>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div style={{ paddingTop: '30px' }} id="nutriton" className="bg-highlight">
                                <p style={{ color: 'yellow', fontWeight: '600' }}>BILLED MONTHLY</p>
                                <h2 style={{ color: 'white', fontWeight: '600' }}>BEGINERS</h2>
                                <h1 style={{ color: 'yellow', fontWeight: '700' }}><FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon>90</h1>
                                <p style={{ color: 'white' }}><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>Mobile-Optimized</p>
                                <p style={{ color: 'white' }}><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>Best Hosting</p>
                                <p style={{ color: 'white' }}><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>Free custom</p>
                                <p style={{ color: 'white' }}><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>Outstanding</p>
                                <p style={{ color: 'white' }}><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>Happy Customers</p>
                                <button onClick={() => btnHandle('YOUR GYM MEMBERSHIP')} id="btn-highlight">PURCHASE</button>
                            </div>
                        </div>

                    </div>
                </div>
            }
            {
                !StateMangement && <PricingBodyPartital></PricingBodyPartital>
            }
            <Footer></Footer>
        </div>
    )
}
export default PricingBody;