import { Container } from "@mui/material";
import "./style/Pages.css";
import Tracklist from "../Tracklist/Tracklist";

export const Library = () => {
  return (
    <Container className="container">
      <h1 className="about__title">All tracks</h1>
      <Tracklist />
    </Container>
  );
};
