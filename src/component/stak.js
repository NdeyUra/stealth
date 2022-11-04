import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicStack({ title, url, tags }) {
  let navigate = useNavigate();
  const clickHandler = (tags) => {
    console.log(tags);
    navigate(`/contact/${tags}`);
  };
  return (
    <Box sx={{ width: "100%", padding: "1vh", position: "relative" }}>
      <Stack spacing={2}>
        <Item
          sx={{ textAlign: "left", width: "100%" }}
          onClick={tags ? () => clickHandler(tags) : null}
        >
          <h3>{title}</h3> soucre: <a href={url}>{url} </a>
        </Item>
      </Stack>
    </Box>
  );
}
