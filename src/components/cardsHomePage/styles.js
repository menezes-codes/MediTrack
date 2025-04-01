import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;

  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 20px;
  width: 200px;
  height: 300px;

  transition: transform 0.2s ease;

  background-color: ${(props) => props.theme.colors.cardBackground};

  &:hover {
    transform: scale(1.05);
  }

  cursor: pointer;
`;
