import React, { useState, useEffect } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import './Dashboard.css';
import './Responsive.css';
import { useDarkMode } from './context/DarkModeContext';

function TermsPage() {
  const { isDarkMode } = useDarkMode();
    const navigate=useNavigate();
  
    
   const handleHomepage = () => {
    navigate('/Dashboard');
   };
    const handlePrivacy = () => {
      navigate('/privacy');
    };
    const handleAbout = () => {
      navigate('/about');
    };
    return (
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
          <a href="#" className={isDarkMode ? 'dark-text' : ''}>&copy; 2023 Copyright claimed. All rights reserved.</a>
          </li>
          <li>
          <a href="#" className={isDarkMode ? 'dark-text' : ''} onClick={handlePrivacy}>Privacy policy</a>
          </li>
          <li>
          <a href="#" className={isDarkMode ? 'dark-text' : ''}>Terms and conditions</a>
          </li>
          
        </ul>
        </nav>
        <div className={`terms ${isDarkMode ? 'dark' : ''}`} >
     <b className={isDarkMode ? 'dark-text' : ''}>Terms and Conditions for Plant Pro Smart Garden System</b>
<br/><br/><p className={isDarkMode ? 'dark-text' : ''}>By using the Plant Pro Smart Garden System App, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use the App.
Your use of the App is also governed by our Privacy Policy, which outlines how we collect, use, and protect your personal information. Please review the Privacy Policy to understand our data practices.
You are responsible for maintaining the confidentiality of your account credentials (username and password).
You must provide accurate and complete information when creating your account.
You are solely responsible for any activity that occurs under your account.
You may use the App for personal, non-commercial purposes.
You agree not to engage in any unlawful or prohibited activities when using the App.
You may not modify, adapt, reverse engineer, decompile, disassemble, or otherwise attempt to derive the source code of the App.
You retain ownership of any data related to your garden that you input into the App.
By using the App, you grant us permission to use, store, and analyze your garden data for the purpose of providing and improving the App's services.
All intellectual property rights in the App, including copyrights, trademarks, and patents, are owned by or licensed to Plant Pro.
You may not use, copy, reproduce, or distribute any part of the App without our prior written consent.
We reserve the right to terminate or suspend your access to the App at our discretion, without notice, for any violation of these Terms and Conditions.
The App is provided "as is" and "as available" without warranties of any kind, either express or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
We do not guarantee the accuracy, completeness, or reliability of any content or information within the App.
To the fullest extent permitted by applicable law, Plant Pro shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.
We may update these Terms and Conditions from time to time. You will be notified of any material changes by posting the revised terms within the App.
These Terms and Conditions shall be governed by and construed in accordance with the laws, without regard to its conflict of law principles.</p>
</div>
</div>

 );
    }
    export default TermsPage;