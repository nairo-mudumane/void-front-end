import React from "react";
import styled from "styled-components";

interface IProps {
    children: React.ReactNode;
}

const StyledContainer = styled.div`
    max-width: 650px;
    margin: 0 auto;
`;

export function Container(props: IProps) {
    return <StyledContainer>{props.children}</StyledContainer>;
}
