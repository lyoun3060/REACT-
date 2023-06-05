import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: ${(props) => (props.dark ? "white" : "dark")};
  background: ${(props) => (props.dark ? "green" : "white")};
  border: 1px solid black;
`;

const Sample = (props) => {
  return (
    <div>
      <Button>Normal</Button>
      <br />
      <Button dark>Dark</Button>
    </div>
  );
};

export default Sample;
