import React from "react";
import styled from "styled-components";

const TextArea = ({ width, height, margin, border, placeholder,background}) => {
  return (
    <StTextArea
      width={width}
      height={height}
      margin={margin}
      border={border}
      placeholder={placeholder}
      background= {background}

    ></StTextArea>
  );
};

export default TextArea;

const StTextArea = styled.textarea`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  border: ${({ border }) => border};
  ::placeholder {
    ${({ placeholder }) => placeholder};
  }
  resize: none;
  overflow: hidden;
`;
