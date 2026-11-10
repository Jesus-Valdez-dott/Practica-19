import * as obj from "./Saludo.js";

console.log(obj.saludar("Jesus"));

console.log("Eeste es el valor de pi: ", obj.PI)

console.log(obj.config.url_api)

import Estudiante from "./Estudiante.js";
import persona from "./Persona.js";

let est = new Estudiante();
est.nombre = "Jesus"
est.carrera = "ISW";

console.log(est.saludar());
console.log(est.estudiar());
console.log(est.verPromedio());

let Per = new persona("Jesus", 21);

console.log(Per.saludar());