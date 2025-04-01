import * as Icons from "react-icons/fa";
import { CardContainer } from "./styles";
import { theme } from "../../styles/globalStyles";
import { useNavigate } from "react-router-dom";

const CardsHomePage = ({ title, icon, route }) => {
  const IconComponent = Icons[icon];
  const navigate = useNavigate();

  return (
    <CardContainer onClick={() => navigate(`/${route}`)}>
      <IconComponent size={30} color={theme.colors.secondary} />
      <span>{title}</span>
    </CardContainer>
  );
};

export default CardsHomePage;
