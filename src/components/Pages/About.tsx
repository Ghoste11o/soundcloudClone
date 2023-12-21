import { Container } from "@mui/material";
import "./style/Pages.scss";

export const About = () => {
  return (
    <Container className="container">
      <h1 className="about__title">Welcome to my Soundcloud App!</h1>
      <p className="about__text">I love listening to music, this was the reason for creating this application. </p>
      <p className="about__text">This project is the result of my programming skills.</p>
    </Container>
  );
};
