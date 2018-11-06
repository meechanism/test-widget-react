import styled from "styled-components";

export default styled.button`
  background: ${props => (props.inverse ? "transparent" : "#4286f4")};
  font-size: 1rem;
  color: ${props => (props.inverse ? "#4286f4" : "#fff")};
  padding: 0.5rem 1rem;
  border: 0;
  outline: none;
  &:hover {
    opacity: 0.75;
    cursor: pointer;
  }
`;
