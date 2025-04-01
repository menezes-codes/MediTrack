import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */

  gap: 100px;

  height: 100%;
  margin-top: 50px;

  h1 {
    font-size: 20px;
    font-weight: 700;
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
`;
