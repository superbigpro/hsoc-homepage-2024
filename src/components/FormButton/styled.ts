import styled from 'styled-components';
import Button from '@mui/material/Button';

export const ButtonDiv = styled.div`
  display: block;
  width: 100%;
  margin-top: 30px;
`;

export const ButtonUi = styled(Button)`
  display: block;
  text-align: center;
  width: 100%;
  height: 46px;
  border: none;
  padding: 6px 0;
  border-radius: 10px !important;
  font-size: 18px !important;
  font-weight: 550 !important;
  color: var(--color-white);
  background-color: var(--color-button) !important;
  .MuiTouchRipple-root {
    filter: blur(5px) !important;
  }
  @media screen and (max-width: 575px) and (min-width: 300px) {
    font-size: 16px !important;
    padding: 6px 0;
  }
`;
