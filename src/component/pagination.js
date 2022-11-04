import * as React from "react";
import Pagination from "@mui/material/Pagination";

export default function BasicPagination({ nbPages, handleChange, page }) {
  return (
    <Pagination
      count={nbPages}
      sx={{ display: "flex", justifyContent: "center" }}
      page={page}
      onChange={(event, value) => handleChange(value)}
    />
  );
}
