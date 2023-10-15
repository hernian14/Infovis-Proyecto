const SVG1 = d3.select("#vis-1").append("svg");
const SVG2 = d3.select("#vis-2").append("svg");

function parseo(d) {
  return {
    titulo: d["Título"],
    director: d.Director,
    pais: d["País"],
    estreno_fecha: d["Año estreno (Fecha)"],
    estreno_ano: parseInt(d["Año estreno (Número)"]),
    adicion: d["Fecha adición"],
    calificacion: +d["Calificación"],
    duracion: +d["Duración"],
    categoria_duracion: d["Categoría Duración"],
    latitud_random: +d["Latitud Random"],
    longitud_random: +d["Longitud Random"],
  };
}

function joinDeDatos(datos) {
    const data2020 = datos.filter((d) => d.estreno_ano >= 2020);
    console.log(data2020);
}




d3.csv("Netflix dataset - ConRandoms.csv", parseo)
    .then((datos) => {
        joinDeDatos(datos);
        })