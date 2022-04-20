import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { AddBox } from "@mui/icons-material";
import { StyledHeader } from "./styles";

export function Header() {
  return (
    <StyledHeader>
      <Box className="header" component="header">
        <Typography variant="body1" className="title">
          Contacts
        </Typography>

        <IconButton className="link">
          <AddBox color="inherit" />
        </IconButton>
      </Box>
    </StyledHeader>
  );
}
