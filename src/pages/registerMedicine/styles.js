import styled from "styled-components";

export const FormContainer = styled.form`
  width: 350px;
  height: 400px;
  margin-top: 20px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  /* justify-content: center; */

  gap: 20px;

  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 20px;

  button {
    width: 30%;
    margin: 0 auto;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;
