import { MedicineProvider } from "./contexts";
import AppRoutes from "./routes";

const App = () => {
  return (
    <MedicineProvider>
      <AppRoutes />
    </MedicineProvider>
  );
};

export default App;
