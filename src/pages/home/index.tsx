import React from "react";
import { useQuery } from "react-query";
import { Box, CircularProgress, Typography } from "@mui/material";
import { AddBox } from "@mui/icons-material";
import { Contact, Container } from "../../components";
import { StyledHome } from "./styles";
import { getAllContacts } from "../../services";

export function Home() {
    const {
        data: contacts,
        isLoading,
        isError,
    } = useQuery("/contacts", getAllContacts);

    if (isLoading) {
        return (
            <Container>
                <StyledHome>
                    <Box className="container isLoading">
                        <CircularProgress color="inherit" className="spinner" />
                        <Typography variant="h4">Loading...</Typography>
                    </Box>
                </StyledHome>
            </Container>
        );
    }

    if (isError) {
        return (
            <Container>
                <StyledHome>
                    <Box className="container">
                        <Typography variant="h4">
                            Error while fetching contacts
                        </Typography>
                    </Box>
                </StyledHome>
            </Container>
        );
    }

    return (
        <Container>
            <StyledHome>
                <Box className="container">
                    {contacts &&
                        contacts!.map((contact) => (
                            <Contact key={contact.uid} {...contact} />
                        ))}
                </Box>
            </StyledHome>
        </Container>
    );
}
