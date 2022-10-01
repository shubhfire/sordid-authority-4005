import { Select } from "@chakra-ui/react";
import React, { useState } from "react";

const SelectDrop = ({ changeVal }) => {
  return (
    <div className="dropSort">
      <Select size="xs" focusBorderColor="gray" onChange={changeVal}>
        <option value="popularity">Popularity</option>
        <option value="pending">Pending amount</option>
        <option value="rates">Interest rate</option>
      </Select>
    </div>
  );
};

export default SelectDrop;
