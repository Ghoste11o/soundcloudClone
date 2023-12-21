import "./style/Header.scss";
import { AppBar, Container, Toolbar } from "@mui/material";
import { Auth } from "./Auth";
import { SearchAppBar } from "./Search";
import { Logo } from "./Logo";
import { TopMenu } from "./TopMenu";

export const Header = () => {
  return (
    <AppBar className="header">
      <Container>
        <Toolbar className="header__toolbar">
          <Logo />
          <TopMenu />
          <SearchAppBar />
          <Auth />
        </Toolbar>
      </Container>
    </AppBar>
  );
};