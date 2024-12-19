import Button from "@mui/material/Button";
import styled from "styled-components";

export const ButtonLinkDesktop = styled(Button)`
  margin: 0 8px;
  font-weight: 600;
  border-radius: 0;
  :hover {
    background: unset;
    border-bottom: 1px solid ${({ theme }) => theme?.palette?.primary?.main};
  }
`;
