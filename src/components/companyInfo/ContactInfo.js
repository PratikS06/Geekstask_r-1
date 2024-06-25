import React,{useState} from 'react';
import "./CompanyInfo.css"
const ContactInfo = () => {

    const [showPopup, setShowPopup] = useState(false);

    const handleButtonClick = () => {
      setShowPopup(!showPopup);
    };
     

    return (
        <div className="popup-container">
      <button className="popup-button" onClick={handleButtonClick}>
        Company Information
      </button>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Company Information</h3>
            <p><strong>Name:</strong> Geeksynergy Technologies Pvt Ltd</p>
            <p><strong>Address:</strong>Sanjayanagar, Bengaluru-56</p>
            <p><strong>Email:</strong> XXXXXXXXX09</p>
            <p><strong>Phone:</strong> XXXXXX@gmail.com</p>
            <button className="close-button" onClick={handleButtonClick}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
    );
}

export default ContactInfo;
