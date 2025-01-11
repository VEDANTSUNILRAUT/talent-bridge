import React from 'react';
import './footer.css';
import instagram from '../../assets/images/Social_Media/instagram.png';
import facebook from '../../assets/images/Social_Media/facebook.png';
import gmail from '../../assets/images/Social_Media/gmail.png';
import twitter from '../../assets/images/Social_Media/twitter.png';

const ContactInfo = () => {
  return (
    <div className="md:w-1/2 m-block">
      <h1 className="text-xl font-bold">Contact Info</h1>
      <p className="mt-2">TalentBridge@gmail.com</p>
      <p className="mt-2">No. (+91) 7024588587</p>
      <p className="mt-2">At xyz Street, Dist. City-5447xx</p>
    </div>
  );
};

const SocialLink = ({ href, text, iconSrc, alt }) => {
  return (
    <a href={href} className="text-blue-800 hover:text-blue-600">
      <img src={iconSrc} alt={alt || text} width="50" height="50" />
    </a>
  );
};

const Contactmedia = () => {
  return (
    <div className="md:w-1/2">
        <h1 className="text-xl font-bold m-block">Social media </h1>
     <div className="flex space-x-4 mt-6">
          <SocialLink 
            href="#" 
            text="WhatsApp" 
            iconSrc={instagram} 
          />
          <SocialLink 
            href="#" 
            text="Instagram" 
            alt="Instagram"
            iconSrc={facebook} 
          />
          <SocialLink 
            href="#" 
            text="LinkedIn" 
            iconSrc={gmail} 
          />
          <SocialLink 
            href="#" 
            text="GitHub" 
            iconSrc={twitter} 
          />
        </div>
    </div>
  );
};

const ContactComponent = () => {
  return (
    <div className="flex flex-col md:flex-row p-8 bg-white dark:bg-zinc-800 text-blue-800 dark:text-blue-200">
      <div className="md:w-1/2">
        <h1 className="text-xl font-bold">Talent Bridge</h1>
        <p className="mt-4">
          There is no passion to be found playing small,
          <br /> in settling for a life that is less than the one
          <br /> you are capable of living.
        </p>
      </div>
      <ContactInfo />
      <Contactmedia />
    </div>
  );
};

export default ContactComponent;
