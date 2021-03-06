import React from 'react';
import './Choose.css';
import chest from '../../../Image/chest.png';
import circle from '../../../Image/circle.png';
import box from '../../../Image/box.png';

const Choose = () => {
    return (
        <div style={{ marginBottom: '150px' }}>
            <p className="text-highlight"> <span style={{ color: 'yellow' }}>WHY</span> CHOOSE US</p>
            <div className="row">
                <div className="col-md-4">
                    <div className="componentHighlight">
                        <img style={{ paddingBottom: '40px' }} src={chest}></img>

                        <p className="text">FREE FITNESS TRAINING</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint illum tempore velit temporibus ut molestiae exercitationem ex officiis officia explicabo.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="componentHighlight">
                        <img style={{ paddingBottom: '40px' }} src={circle}></img>

                        <p className="text">TONS OF CARDIO & STRENGHT</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint illum tempore velit temporibus ut molestiae exercitationem ex officiis officia explicabo.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="componentHighlight">
                        <img style={{ paddingBottom: '40px' }} src={box}></img>
                        <p className="text">NO COMMITMENT MEMBERSHIPS</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint illum tempore velit temporibus ut molestiae exercitationem ex officiis officia explicabo.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Choose;