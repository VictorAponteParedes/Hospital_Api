const Servicios = [
  {
    Enfermedades: {
      Diabetes:
        "Anualmente, revisamos la tasa de diabetes de nuestros condados, junto con la inactividad física y la obesidad.   Compartimos esto con un comité asesor y socios comunitarios que ayudan con la planificación del programa",
      "Programa Ambiental":
        " Recibimos y respondemos a las quejas del público relacionadas con la enfermedad",
      "Clínica/Epidemiologia":
        "Monitoreamos enfermedades y realizamos investigaciones de brotes utilizando vigilancia",
      "Programa Ambientall":
        " Investigamos brotes transmitidos por alimentos y quejas sobre aguas residuales, roedores y otras fuentes de inmundicia",
      Epidemiologia:
        "Nuestra epidemióloga y nuestro Comité de Análisis de Datos analizan los datos de salud para descubrir tendencias negativas de salud, para que se puedan hacer recomendaciones apropiadas.",
    },
  },
];

const Server = Servicios.map((item) => item.Enfermedades);
module.exports = Server;
