import React from 'react';
import '../../Styles/footer.scss';

export default function Footer() {
    return (
        <footer>
            <div className='footer'>
                <div className="footer-container">
                    <h2>About</h2>
                    <button>About LBB</button>
                    <button>Content Guidelines</button>
                    <button>Terms of Service</button>
                    <button>Privacy Policy</button>
                </div>
                <div className="footer-container">
                    <h2>Discover</h2>
                    <button>Long Beach Events</button>
                    <button>Support</button>
                    <button>Talk</button>
                </div>
                <div className="footer-container">
                    <h2>For business owners </h2>
                    <button>Claim your business page</button>
                    <button>Advertise on LBB</button>
                    <button>Business Success Stories</button>
                    <button>Business Support</button>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Copyright &#169; LBB.com | 2020</p>
            </div>
        </footer>
    )
}