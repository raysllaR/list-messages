import { Typography } from "@mui/material";
import styled from "styled-components";

export const ContainerHeader = styled.div`
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 15px;
`;

export const ContainerAvatar = styled.div`
    display: flex;
    gap: 16px;
`;

export const ContainerInfos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: self-start;
`;

export const ContainerButton = styled.div`
    display: flex;
`;

export const NameTypography = styled(Typography)`
    && {
        color: #101223;
        font-weight: 600;
        font-size: 20px;
    }
`

export const ToTypography = styled(Typography)`
    && {
        color: #777986;
        font-size: 0.85rem;
        font-weight: 600;
    }
`

export const ContainerProtocol = styled.div`
    display: flex;
    gap: 4px;
    height: fit-content;
    align-items: center;
`;

export const ProtocolTypography = styled(Typography)`
    && {
        color: #1976d2;
        font-size: 12px;
    }
`