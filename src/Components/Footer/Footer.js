import React from "react";
import "../../Styles/footer.scss";

export default function Footer() {
    return (
        <>
            <div className='footer'>
                <div className='footer-container'>
                    <div className='footer-links'>
                        <h2>About</h2>
                        <button>About LBO</button>
                        <button>Content Guidelines</button>
                        <button>Terms of Service</button>
                        <button>Privacy Policy</button>
                    </div>
                    <div className='footer-links'>
                        <h2>Discover</h2>
                        <button>Long Beach Events</button>
                        <button>Support</button>
                        <button>Talk</button>
                    </div>
                    <div className='footer-links'>
                        <h2>For Business Owners </h2>
                        <button>Claim Your Business Page</button>
                        <button>Advertise On LBO</button>
                        <button>Business Success Stories</button>
                        <button>Business Support</button>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <p>Copyright &#169; www.longbeachoffers.com | 2020</p>
            </div>
        </>
    );
}
