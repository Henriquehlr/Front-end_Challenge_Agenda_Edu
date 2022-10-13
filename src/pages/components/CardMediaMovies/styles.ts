import styled from "styled-components";
import Card from "@mui/material/Card";
import { Box } from "@mui/material";

export const Container = styled.div`
  margin-top: 1rem;

  h1 {
    font-variant-caps: titling-caps;
    text-align: center;
    font-size: 40px;
  }
`;

export const ContainerItem = styled.div`
  margin: 6px;
`;

export const CardItem = styled(Card)`
  display: list-item;
  width: 405px;
  height: 650px;
  max-width: 405px;
  max-height: 500px;
  margin: 10px 0 10px;
`;

export const BoxItem = styled(Box)`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  overflow-x: scroll;
  white-space: nowrap;
  margin: 8px;

  text-align: "justify";
`;
