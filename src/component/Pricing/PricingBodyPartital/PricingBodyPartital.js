import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { PayPalButton } from "react-paypal-button-v2";
import { useHistory } from 'react-router';

const PricingBodyPartital = () => {
    const [PersonalDetails, setPersonalDetails] = useState(1);
    const [person, setPerson] = useState({});

    const formHandle = (e) => {
        e.preventDefault();
        const { firstName, email, address, lastName, gendar, country, PostCode } = e.target.elements;
        console.log(firstName.value, email.value, address.value, lastName.value, gendar.value, country.value, PostCode.value);
        let personOb = { firsName: firstName.value, lastName: lastName.value, email: email.value, address: address.value, gendar: gendar.value, counrty: country.value, PostCode: PostCode.value };
        setPerson(personOb);
        setPersonalDetails(2);
    }
    let history=useHistory();
    const homePage=()=>{
history.push("/Home");
    }
    return (
        <div style={{marginBottom:'100px'}}>
            {
                PersonalDetails == 1 && <div>
                    <center><h3>Personal Information</h3></center>
                    <form onSubmit={formHandle}>
                        <div className="row">

                            <div style={{ paddingLeft: '150px' }} className="col-md-6">
                                <span>First Name</span>
                                <input style={{ width: '550px', height: '60px', marginBottom: '10px' }} type="text" id="firstName"></input>
                                <span>Email</span>
                                <input style={{ width: '550px', height: '60px', marginBottom: '10px' }} type="text" id="email"></input>
                                <span>Date of Birth</span>
                                <input style={{ width: '550px', height: '60px', marginBottom: '10px' }} type="date" id="date"></input>
                                <span>Address Line 1</span>
                                <input style={{ width: '550px', height: '60px', marginBottom: '10px' }} type="text" id="address"></input>
                                <span>City</span>
                                <input style={{ width: '550px', height: '60px' }} type="text" id="city"></input>

                            </div>
                            <div style={{ paddingRight: '150px' }} className="col-md-6">
                                <span>Last Name</span>
                                <input style={{ width: '550px', height: '60px', marginBottom: '10px' }} type="text" id="lastName"></input>
                                <span>Mobile Number</span>
                                <input style={{ width: '550px', height: '60px', marginBottom: '10px' }} type="text" id="mobileNumber"></input>
                                <span>Gender</span>
                                <select style={{ width: '550px', height: '60px', marginBottom: '10px' }} name="gendar" id="gendar">
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Others">Others</option>
                                </select>
                                <span>Country</span>
                                <input style={{ width: '550px', height: '60px', marginBottom: '10px' }} type="text" id="country"></input>
                                <span>Post Code</span>
                                <input style={{ width: '550px', height: '60px', marginBottom: '10px' }} type="text" id="PostCode"></input>
                                
                            </div>
                           
                        </div>
                        <div style={{textAlign:'end'}}>
                                <input id="btnhighlight" type='submit' value="Next"></input>
                                </div>
                    </form>
                </div>
            }

            {
                PersonalDetails == 2 && <div>
                    <center><h3 style={{ marginBottom: '50px' }}>Payment Process</h3></center>
                    <center>
                        <PayPalButton
                            amount="0.01"
                            // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                            onSuccess={(details, data) => {
                                alert("Transaction completed by " + details.payer.name.given_name);

                                // OPTIONAL: Call your server to save the transaction
                                return fetch("/paypal-transaction-complete", {
                                    method: "post",
                                    body: JSON.stringify({
                                        orderID: data.orderID
                                    })
                                });
                            }}
                        />
                    </center>
                   <div style={{textAlign:'end'}}>
                   <button onClick={homePage} id="btnhighlight">Submit</button>
                   </div>
                </div>
            }
        </div>
    )
}
export default PricingBodyPartital;