import { useState } from "react";
import { useMedicines } from "../../contexts";
import { FormContainer, InputContainer } from "./styles";

const RegisterMedicine = () => {
  const { addMedicine } = useMedicines();
  const [formData, setFormData] = useState({
    nome: "",
    motivo: "",
    frequencia: "",
    primeira: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMedicine(formData);
    setFormData({
      nome: "",
      motivo: "",
      frequencia: "",
      primeira: "",
    });
    alert("Medicamento Cadastrado");
  };

  return (
    <div>
      <h1>Cadastre seu novo Medicamento</h1>

      <FormContainer onSubmit={handleSubmit}>
        <InputContainer>
          <label>Nome</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
          />
        </InputContainer>
        <InputContainer>
          <label>Motivo</label>
          <input
            type="text"
            name="motivo"
            value={formData.motivo}
            onChange={handleChange}
          />
        </InputContainer>
        <InputContainer>
          <label>Frequência</label>
          <input
            type="text"
            name="frequencia"
            value={formData.frequencia}
            onChange={handleChange}
          />
        </InputContainer>
        <InputContainer>
          <label>Primeira Dose</label>
          <input
            type="text"
            name="primeira"
            value={formData.primeira}
            onChange={handleChange}
          />
        </InputContainer>
        <button>Enviar</button>
      </FormContainer>
    </div>
  );
};

export default RegisterMedicine;
