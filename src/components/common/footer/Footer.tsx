import React from "react";
import Container from "../ui/Container";
import Logo from "../Logo";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-solid border-border">
      <Container className="py-10 grid grid-cols-2 gap-6 sm:gap-0 sm:grid-cols-4 place-items-center">
        <div>
            <Logo />
            <p className="mt-4 xs:text-sm text-dark-0 leading-[1.6] text-xs">Welcome to Tourigo, your gateway to unforgettable adventures and immersive travel experiences. Explore with us and let your journey begin!</p>
        </div>
        <div>
            <p className="text-base xs:text-lg text-dark-1 font-bold">Company</p>
            <div className="mt-4 flex flex-col gap-3 text-xs xs:text-sm text-dark-0">
                <p>About Us</p>
                <p>Careers</p>
                <p>Travel Guides</p>
                <p>Destinations</p>
                <p>Contact Now</p>
            </div>
        </div>
        <div>
            <p className="text-base xs:text-lg text-dark-1 font-bold">Services</p>
            <div className="mt-4 flex flex-col gap-3 text-xs xs:text-sm text-dark-0">
                <p>Tour Listing</p>
                <p>Tour Booking</p>
                <p>Traveler Reviews</p>
                <p>Travel Agents</p>
                <p>Help</p>
            </div>
        </div>
        <div>
            <p className="text-base xs:text-lg text-dark-1 font-bold">Services</p>
            <div className="mt-4 flex flex-col gap-3 text-xs xs:text-sm text-dark-0">
                <p>Terms and Conditions</p>
                <p>Privacy Policy</p>
                <p>Sitemap</p>
                <p>Legal Notice</p>
                <p>Promotions</p>
            </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
