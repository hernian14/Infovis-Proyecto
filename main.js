const SVG1 = d3.select("#vis-1").append("svg");
const SVG2 = d3.select("#vis-2").append("svg");

function parseo(d) {
  return {
    titulo: d.Titulo,
    director: d.Director,
    pais: d.Pais,
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

d3.csv("Netflix dataset - ConRandoms.csv", parseo)
    .then((datos) => {
        console.log(datos);
        })