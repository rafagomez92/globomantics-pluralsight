import React ,{ Component } from 'react'
import "./house.css"
import emailIcon from './Email.png';
import Inquiry from './Inquiry';

class House extends Component {
    state = { inquiryShow: false }

    inquiryToggle = () => {
        this.setState({ inquiryShow: !this.state.inquiryShow })
    }

    render() {
        const house = this.props.house
        const { country, address, photo, price, description} = house;
        const inquiry = this.state.inquiryShow ?
            <Inquiry  house={house} /> : null;
        
        return (
            <div>
                <div className="row mt-2">
                <h5 className="col-md-12">{country}</h5>                
                </div>
                <div className="row">
                <h3 className="col-md-12">{address}</h3>                
                </div>
                <div className="row">
                <div className="col-md-7">
                    <img src={`https://images.pexels.com/photos/${photo}/pexels-photo-${photo}.jpeg?w=600&h=400&auto=compress&cs=tintysrgb`} alt="house" />
                </div>
                <div className="col-md-5">
                    <p className="price">${price}</p>
                    <p>{description}</p>
                    <img src={emailIcon} height="50" alt="inquiry" 
                        onClick={this.inquiryToggle} />
                    {inquiry}
                </div>
                </div>

            </div>
        )
    };
}
export default House;