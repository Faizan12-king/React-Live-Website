import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="bg-light text-center">
        <p>© {year} Technohut. AllRights Reserved | Terms and Condtion</p>
      </footer>
    </>
  );
}

export default Footer;
