import styled from "styled-components";
export const CheckBox = styled.input`
  width: 1.1em !important;
  height: 1.1em !important;
  margin-top: 0.25em !important;
  vertical-align: top !important;
  background-color: #fff !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
  background-size: contain !important;
  border-radius: 0.25em !important;
  border: 1px solid rgba(0, 0, 0, 0.25) !important;
  color: #ffffff !important;
  position: relative !important;
  appearance: none !important;
  &:focus {
    border-color: aeeec5# !important;
    outline: 0 !important;
    box-shadow: 0 0 0 0.25rem rgba(92, 221, 139, 0.25) !important;
  }
  &:checked {
    background-color: #5cdd8b !important;
    border-color: #5cdd8b !important;
  }
  &:after {
    content: "0" !important;
    position: absolute !important;
    display: inline-block !important;
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%) !important;
  }
`;
