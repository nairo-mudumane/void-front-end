import React from "react";
import {
    Avatar,
    Box,
    Typography,
    IconButton,
    Alert,
    CircularProgress,
    Button,
} from "@mui/material";
import { AddBox, Delete, Edit, Cancel, Done } from "@mui/icons-material";
import { StyledContact } from "./styles";
import { IContact } from "../../types";
import { baseUrl, deleteContactById, updateContact } from "../../services";

export function Contact({ contact, name, uid }: IContact) {
    const [isLoading, setIsLoading] = React.useState(false);
    const [isError, setIsError] = React.useState(false);
    const [isUpdate, setIsUpdate] = React.useState(false);
    const [number, setNumber] = React.useState<number>(contact);
    const [updateName, setUpdateName] = React.useState<string>(name);

    async function deleteContact(contactId: string) {
        setIsLoading(true);
        await deleteContactById(contactId)
            .then(() => {
                setIsLoading(false);
            })
            .catch(() => {
                setIsLoading(false);
                setIsError(true);
            });
    }

    async function handleUpdate({ contact, name, uid }: IContact) {
        setIsLoading(true);

        await updateContact({ contact, name, uid })
            .then(() => {
                setIsLoading(false);
                setIsUpdate(false);
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

            {isUpdate ? (
                <Box className="details">
                    <Box className="heading">
                        <form
                            onSubmit={(event) => {
                                event.preventDefault();
                                return handleUpdate({
                                    contact,
                                    name,
                                    uid,
                                });
                            }}
                        >
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name"
                                required
                                value={updateName}
                                onChange={(e) =>
                                    setUpdateName(e.currentTarget.value)
                                }
                            />

                            <input
                                type="number"
                                name="number"
                                placeholder="Your number"
                                required
                                value={number}
                                onChange={(e) =>
                                    setNumber(
                                        e.currentTarget
                                            .value as unknown as number
                                    )
                                }
                            />

                            <Box className="buttons">
                                <IconButton
                                    sx={{ mr: 2 }}
                                    onClick={() => setIsUpdate(false)}
                                    disabled={isLoading}
                                >
                                    <Cancel />
                                </IconButton>
                                {isError ? (
                                    <Alert severity="error">Error</Alert>
                                ) : (
                                    <Button type="submit">
                                        {isLoading ? (
                                            <CircularProgress
                                                sx={{ color: "#ffff" }}
                                            />
                                        ) : (
                                            <Done />
                                        )}
                                    </Button>
                                )}
                            </Box>
                        </form>

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
                </Box>
            ) : (
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

                                <IconButton
                                    className="update"
                                    onClick={() => setIsUpdate(true)}
                                >
                                    <Edit />
                                </IconButton>
                            </Box>
                        )}
                    </Box>

                    <Typography variant="body2" className="text-muted">
                        {contact}
                    </Typography>
                </Box>
            )}
        </StyledContact>
    );
}
