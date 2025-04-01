import CardsHomePage from "../../components/cardsHomePage";
import { Container, Options } from "./styles";

const Homepage = () => {
  const options = [
    { title: "Novo Medicamento", icon: "FaPlus", route: "register" },
    { title: "Verificar Existentes", icon: "FaSearch", route: "list" },
  ];

  return (
    <Container>
      <h1>Seja bem-vindo!</h1>
      <Options>
        {options.map((option, id) => (
          <CardsHomePage
            title={option.title}
            icon={option.icon}
            route={option.route}
            key={id}
          />
        ))}
      </Options>
    </Container>
  );
};

export default Homepage;
