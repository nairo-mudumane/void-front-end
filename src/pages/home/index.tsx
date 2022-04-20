import React from "react";
import { Container } from "@mui/material";
import { AddBox } from "@mui/icons-material";
import { Contact } from "../../components";
import { StyledHome } from "./styles";

export function Home() {
  return (
    <StyledHome>
      <Container className="container">
        <Contact />
      </Container>
    </StyledHome>
  );
}
