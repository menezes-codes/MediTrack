import * as Icons from "react-icons/fa";
import { CardContainer } from "./styles";
import { theme } from "../../styles/globalStyles";

const CardsHomePage = ({ title, icon }) => {
  const IconComponent = Icons[icon];

  return (
    <CardContainer>
      <IconComponent size={30} color={theme.colors.secondary} />
      <span>{title}</span>
    </CardContainer>
  );
};

export default CardsHomePage;
