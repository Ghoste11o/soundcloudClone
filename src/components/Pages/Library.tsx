import { Container } from "@mui/material";
import { Tracklist } from "../Tracklist/Tracklist"
import "./style/Pages.scss";

export const Library = () => {
  return (
    <Container className="container">
      <h1 className="about__title">All tracks</h1>
      <Tracklist track={[]} />
    </Container>
  );
};
