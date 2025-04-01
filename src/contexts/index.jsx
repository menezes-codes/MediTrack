import { createContext, useContext, useState } from "react";
import { calcularProximasDoses } from "../utils/timeUtils";

const MedicinesContext = createContext();

export const MedicineProvider = ({ children }) => {
  const [medicines, setMedicines] = useState([]);

  const addMedicine = (medicine) => {
    const medicineData = { ...medicine };

    medicineData.schedule = calcularProximasDoses(
      medicine.primeira,
      medicine.frequencia
    );
    // setMedicines((prev) => [...prev, medicine]);
    console.log(medicine);
    console.log(medicineData);
  };

  return (
    <MedicinesContext.Provider value={{ medicines, addMedicine }}>
      {children}
    </MedicinesContext.Provider>
  );
};

export const useMedicines = () => useContext(MedicinesContext);
