import React from "react";
import { Avatar, Box, Typography, IconButton } from "@mui/material";
import { AddBox } from "@mui/icons-material";
import { StyledContact } from "./styles";
import { IContact } from "../../types";

export function Contact({ contact, name, uid }: IContact) {
    return (
        <StyledContact>
            <Box className="avatar">
                <Avatar alt={name} />
            </Box>

            <Box className="details">
                <Typography variant="h4" className="title">
                    {name}
                </Typography>

                <Typography variant="body2" className="text-muted">
                    {contact}
                </Typography>
            </Box>
        </StyledContact>
    );
}
