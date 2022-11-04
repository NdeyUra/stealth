import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function SelectSmall1({ handleChange, age }) {
  return (
    <FormControl sx={{ m: 1, minWidth: 70 }} size="small">
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        onChange={(event) => handleChange(event.target.value)}
      >
        <MenuItem value={"all"}>All</MenuItem>
        <MenuItem value={"story"}>Stories</MenuItem>
        <MenuItem value={"comment"}>Comment</MenuItem>
      </Select>
    </FormControl>
  );
}

function SelectSmall2({ handleChange, age }) {
  return (
    <FormControl sx={{ m: 1, minWidth: 70 }} size="small">
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        onChange={(event) => handleChange(event.target.value)}
      >
        <MenuItem value={"byPopularity"}>Popularity</MenuItem>
        <MenuItem value={"byDate"}>Date</MenuItem>
      </Select>
    </FormControl>
  );
}
function SelectSmall3() {
  const [age, setAge] = React.useState("all");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 70 }} size="small">
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        onChange={handleChange}
      >
        <MenuItem value={"all"}>All Time</MenuItem>
        <MenuItem value={"last24h"}>Last 24h</MenuItem>
        <MenuItem value={"pastWeek"}>Past Week</MenuItem>
        <MenuItem value={"pastMonth"}>Past Month</MenuItem>
      </Select>
    </FormControl>
  );
}
export { SelectSmall1, SelectSmall2, SelectSmall3 };
