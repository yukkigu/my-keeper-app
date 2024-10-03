import React from "react";

function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <footer>
      <p>
        Copyright {"\u00A9"} {currentYear}
      </p>
    </footer>
  );
}
export default Footer;
