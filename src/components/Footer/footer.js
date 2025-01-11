import React from 'react';
import './footer.css';



// const sharedClasses = {
//   textBlue: 'text-blue-800',
//   hoverTextBlue: 'hover:text-blue-600',
//   bgBlue: 'bg-blue-600',
//   darkBgBlue: 'dark:bg-blue-700',
//   textWhite: 'text-white',
//   darkTextWhite: 'dark:text-white',
//   borderZinc: 'border border-zinc-300',
//   darkBorderZinc: 'dark:border-zinc-600',
//   p2: 'p-2',
//   wFull: 'w-full',
//   mb4: 'mb-4',
//   roundedLg: 'rounded-lg',
//   hoverBgBlue: 'hover:bg-blue-500',
//   darkHoverBgBlue: 'dark:hover:bg-blue-600',
// };

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
            iconSrc="./imgg/instagram.png" 
          />
          <SocialLink 
            href="#" 
            text="Instagram" 
            alt="Instagram"
            iconSrc="./imgg/facebook.png" 
          />
          <SocialLink 
            href="#" 
            text="LinkedIn" 
            iconSrc="./imgg/gmail.png" 
          />
          <SocialLink 
            href="#" 
            text="GitHub" 
            iconSrc="./imgg/twitter.png" 
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




