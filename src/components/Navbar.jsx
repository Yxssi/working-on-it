import React from "react";

import { Navbar } from "flowbite-react";

export default function NavbarApp() {
  return (
    <>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/home" active={true}>
            Home
          </Navbar.Link>

          <Navbar.Link href="/profil">Profil</Navbar.Link>
          <Navbar.Link href="/categories">Categories</Navbar.Link>
          <Navbar.Link href="/contact">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
