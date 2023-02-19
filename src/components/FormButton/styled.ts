import styled from "styled-components";
import Button from '@mui/material/Button';

export const ButtonDiv = styled.div`
    display: block;
    width: 100%;
    border-radius: 10px;
    margin-top: 30px;
`;

export const ButtonUi = styled(Button)`
    display: block;
    text-align: center;
    width: 100%;
    border-radius: 10px;
    border: none;
    padding: 13px 0;
    font-size: 18px;
    font-weight: 550;
    color: var(--color-white);
    background-color: var(--color-button) !important;
    .MuiTouchRipple-root{
        filter: blur(5px);
    }
`;
