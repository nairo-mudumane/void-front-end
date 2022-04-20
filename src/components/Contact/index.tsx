import React from "react";
import { Avatar, Box, Typography, IconButton } from "@mui/material";
import { AddBox } from "@mui/icons-material";
import { StyledContact } from "./styles";

export function Contact() {
  return (
    <StyledContact>
      <Box className="avatar">
        <Avatar src="" alt="nm" />
      </Box>

      <Box className="details">
          <Typography variant="h4" className="title">
              Nome
          </Typography> 

          <Typography variant="body2" className="text-muted">38768788786</Typography>
      </Box>
    </StyledContact>
  );
}
