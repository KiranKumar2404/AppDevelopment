import React, { useState, useEffect } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import './Dashboard.css';
import './Responsive.css';
import { useDarkMode } from './context/DarkModeContext';

function Privacypolicy() {
  const { isDarkMode } = useDarkMode();
    const navigate=useNavigate();
    
    const handleHomepage = () => {
      navigate('/dashboard');
    };
    const handleAbout = () => {
      navigate('/about');
    };
    const handleTerms = () => {
      navigate('/terms');
    };

    return (
      <div className='privacybody'>
        <div className={`dashboard ${isDarkMode ? 'dark' : ''}`}>
          <nav className={`top-navbar ${isDarkMode ? 'dark' : ''}`}>
            <ul>
            <button className="home-buttond" onClick={handleHomepage}>Home</button>
              <li>
              <a href="#" className={isDarkMode ? 'dark-text' : ''} onClick={handleAbout}>About Us</a>
              </li>
              <li>
              <a href="#" className={isDarkMode ? 'dark-text' : ''}>Contact Us</a>
              </li>
            </ul>
          </nav>
          <nav className={`down-navbar ${isDarkMode ? 'dark' : ''}`}>
        <ul>
        <li className="copyright">
          <a href="#" className={isDarkMode ? 'dark-text' : ''}>&copy; 2023 Copyrights claimed. All rights reserved.</a>
          </li>
          
          <li>
          <a href="#" className={isDarkMode ? 'dark-text' : '' }>Privacy policy</a>
          </li>
          <li>
          <a href="#" className={isDarkMode ? 'dark-text' : ''} onClick={handleTerms}>Terms and conditions</a>
          </li>
          
        </ul>
      </nav>
        <div className={`policy ${isDarkMode ? 'dark' : ''}`}>
     <h1 className={isDarkMode ? 'dark-text' : ''}>Privacy Policy for Plant Pro Smart Garden System</h1>
<br/><br/><p className={isDarkMode ? 'dark-text' : ''}>Welcome to Smart Home Garden System, the innovative platform provided by PLANT PRO.
Our commitment to your privacy is unwavering, and this Privacy Policy is intended to provide a comprehensive understanding of how we collect, use, share, and safeguard your personal information when you interact with our system. 
By accessing or utilizing the Smart Home Garden System, you signify your consent to the practices outlined in this Privacy Policy.
To offer you a seamless and personalized experience, we collect various types of personal information:
When you register for an account, we gather essential details such as your name and your email address. 
As you engage with our system, we record data related to your garden, including plant varieties, growth parameters, and custom settings for elements like lighting and irrigation. 
To furnish you with localized weather forecasts, our system may request access to your device's location data. Furthermore, we monitor your interactions with our system, tracking usage patterns, preferences, and activity logs.
Your personal information serves as the cornerstone of enhancing your user experience:
We tailor our services to suit your specific needs, providing features like real-time weather updates, comprehensive plant growth tracking, and efficient timer management. 
To keep you informed and engaged, we may employ your email address to relay essential notifications, updates, and pertinent information pertaining to your garden. 
In our quest for continuous improvement, we aggregate and anonymize user data for statistical analysis, ensuring that your individual privacy remains safeguarded throughout this process.
At Smart Home Garden System, we firmly uphold the principle of safeguarding your personal information. Rest assured, we neither sell, trade, nor rent your personal data to third parties. Nevertheless, to enhance the operation and support of our system, we engage third-party service providers who are bound by stringent confidentiality agreements. These providers are explicitly prohibited from utilizing your information for any purposes beyond those directly related to our services.
We place the utmost priority on securing your personal information and employ a range of reasonable safeguards. It is vital to acknowledge that while we diligently implement security measures, no method of online transmission or electronic storage can guarantee absolute security. We maintain an ongoing commitment to evaluating and enhancing our security protocols to proactively address emerging threats.
The Smart Home Garden System is not designed for users under the age of 13. We do not knowingly collect or retain personal information from individuals under the age of 13. In the event we become aware of inadvertently collected information from such individuals, we will promptly delete it from our records.
You retain full control over your account information and can review or update it by logging into your account within our system. Additionally, should you wish to opt out of receiving promotional emails, you have the freedom to do so at any time by following the simple instructions provided in the emails.
It is possible that we will periodically update this Privacy Policy to align with evolving practices and legal requirements. Any revisions to the Privacy Policy will be communicated by posting the updated version on this page. We highly recommend periodically reviewing this Privacy Policy to stay informed about any modifications.
If you have any questions, concerns, or inquiries regarding this Privacy Policy or our data practices, please do not hesitate to reach out to us at contact@smarthomegardensystem. At Plantpro, we remain unwavering in our commitment to safeguarding your privacy and securing your personal information. 
Thank you for selecting the Smart Home Garden System as your trusted gardening companay.
For comprehensive details regarding our data collection, storage, and processing practices, as well as your rights and choices concerning your personal information, please consult our Data Protection Policy, accessible.
This Privacy Policy is effective and supersedes all prior versions.
</p>
</div>
</div>
</div>
      );
    }
    export default Privacypolicy;