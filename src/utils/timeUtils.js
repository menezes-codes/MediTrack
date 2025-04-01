export function calcularProximasDoses(horaInicial, frequencia) {
  const [hours, minutes] = horaInicial.split(":").map(Number);
  const intervalo = parseInt(frequencia);

  const horarios = [];
  let date = new Date();
  date.setHours(hours);
  date.setMinutes(minutes);

  horarios.push(
    date.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })
  );

  for (let i = 1; i < 24 / frequencia; i++) {
    date.setHours(date.getHours() + intervalo);
    const proximaDose = date.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });

    horarios.push(proximaDose);
  }

  return horarios;
}
