/** @format */
import Container from "@mui/material/Container";
import BrandName from "./BrandName";
import NavItems from "./NavItems";

const Header = () => {
  return (
    <header>
      <Container className="navbar-section">
        <BrandName />
        <NavItems />
      </Container>
    </header>
  );
};

export default Header;
