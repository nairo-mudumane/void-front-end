import React from "react";
import {
    Box,
    Button,
    CircularProgress,
    Modal,
    Typography,
} from "@mui/material";
import { AddBox } from "@mui/icons-material";
import { StyledModal } from "./Styles";
import { createContact } from "../../services";

interface IProps {
    open: boolean;
    onClose: () => void;
}

export function AddContact(props: IProps) {
    const [number, setNumber] = React.useState<number>("" as unknown as number);
    const [name, setName] = React.useState<string>("");
    const [isLoading, setIsLoading] = React.useState(false);
    const [isError, setIsError] = React.useState(false);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setIsLoading(true);
        await createContact({ name, contact: number as unknown as number })
            .then(() => {
                setIsLoading(false);
                setName("");
                setNumber("" as unknown as number);
                props.onClose();
            })
            .catch(() => {
                setIsError(true);
                setIsLoading(false);
            });
    }

    return (
        <Modal
            {...props}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <StyledModal>
                <Box className="container">
                    <Typography variant="h3" className="titlt">
                        Add Contact
                    </Typography>

                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            required
                            value={name}
                            onChange={(e) => setName(e.currentTarget.value)}
                        />

                        <input
                            type="number"
                            name="number"
                            placeholder="Your number"
                            required
                            value={number}
                            onChange={(e) =>
                                setNumber(
                                    e.currentTarget.value as unknown as number
                                )
                            }
                        />

                        <Box className="buttons">
                            <Button
                                sx={{ mr: 2 }}
                                onClick={props.onClose}
                                disabled={isLoading}
                            >
                                Cancel
                            </Button>
                            <Button type="submit" variant="contained">
                                {isLoading ? (
                                    <CircularProgress sx={{ color: "#ffff" }} />
                                ) : (
                                    "Send"
                                )}
                            </Button>
                        </Box>
                    </form>
                </Box>
            </StyledModal>
        </Modal>
    );
}
