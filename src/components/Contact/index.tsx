import React from "react";
import {
    Avatar,
    Box,
    Typography,
    IconButton,
    Alert,
    CircularProgress,
} from "@mui/material";
import { AddBox, Delete } from "@mui/icons-material";
import { StyledContact } from "./styles";
import { IContact } from "../../types";
import { baseUrl, deleteContactById } from "../../services";

export function Contact({ contact, name, uid }: IContact) {
    const [isLoading, setIsLoading] = React.useState(false);
    const [isError, setIsError] = React.useState(false);

    async function deleteContact(contactId: string) {
        setIsLoading(true);
        console.log(contactId);
        await deleteContactById(contactId)
            .then(() => {
                setIsLoading(false);
            })
            .catch(() => {
                setIsLoading(false);
                setIsError(true);
            });
    }

    return (
        <StyledContact>
            <Box className="avatar">
                <Avatar alt={name} />
            </Box>

            <Box className="details">
                <Box className="heading">
                    <Typography variant="h4" className="title">
                        {name}
                    </Typography>

                    {isError ? (
                        <Alert severity="error">Error</Alert>
                    ) : isLoading ? (
                        <CircularProgress />
                    ) : (
                        <Box className="actions">
                            <IconButton
                                className="delete"
                                onClick={() => deleteContact(uid as string)}
                            >
                                <Delete />
                            </IconButton>
                        </Box>
                    )}
                </Box>

                <Typography variant="body2" className="text-muted">
                    {contact}
                </Typography>
            </Box>
        </StyledContact>
    );
}
