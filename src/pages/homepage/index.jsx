import CardsHomePage from "../../components/cardsHomePage";
import { Container, Options } from "./styles";

const Homepage = () => {
  const options = [
    { title: "Novo Medicamento", icon: "FaPlus" },
    { title: "Verificar Existentes", icon: "FaSearch" },
  ];

  return (
    <Container>
      <h1>Seja bem-vindo!</h1>
      <Options>
        {options.map((option) => (
          <CardsHomePage title={option.title} icon={option.icon} />
        ))}
      </Options>
    </Container>
  );
};

export default Homepage;
