import React from "react";

function SearchBox(props) {
  return (
    <div>
      <input
        value={props.value}
        onChange={(event) => {
          props.setKeyword(event.target.value);
          props.setHome(false);
        }}
        placeholder="Type to search..."
      ></input>
    </div>
  );
}

export default SearchBox;
