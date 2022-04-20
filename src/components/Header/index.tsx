import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { AddBox, Iso, ReplayOutlined } from "@mui/icons-material";
import { StyledHeader } from "./styles";
import { AddContact, Container } from "..";
import { getAllContacts } from "../../services";

export function Header() {
    const [showModal, setShowModal] = React.useState(false);

    function handleClose() {
        setShowModal(false);
    }

    return (
        <Container>
            <AddContact open={showModal} onClose={handleClose} />

            <StyledHeader>
                <Box className="header" component="header">
                    <Typography variant="body1" className="title">
                        Contacts
                    </Typography>

                    <Box className="actions">
                        <IconButton
                            className="link"
                            onClick={() => setShowModal(!showModal)}
                        >
                            <AddBox color="inherit" />
                        </IconButton>

                        {/* <IconButton className="link" onClick={getAllContacts}>
                            <ReplayOutlined color="inherit" />
                        </IconButton> */}
                    </Box>
                </Box>
            </StyledHeader>
        </Container>
    );
}
