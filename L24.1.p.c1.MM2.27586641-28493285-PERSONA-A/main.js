import { Persona } from './persona.js';
import { ProcesadorPersonas } from './procesadorPersonas.js';

// Crear objetos Persona
const luisa = new Persona('Luisa', 'F');
const ana = new Persona('Ana', 'F');
const jose1 = new Persona('José', 'M');
const carmen = new Persona('Carmen', 'F');
const rosa = new Persona('Rosa', 'F');
const jose2 = new Persona('José', 'M');
const maria = new Persona('María', 'F');
const luz = new Persona('Luz', 'F');
const rafael = new Persona('Rafael', 'M');
const liz = new Persona('Liz', 'F');
const marcos = new Persona('Marcos', 'M');
const leo = new Persona('Leo', 'M');

// Crear objeto ProcesadorPersonas
const procesador = new ProcesadorPersonas();

// Procesar las personas
procesador.procesarPersona(luisa);
procesador.procesarPersona(ana);
procesador.procesarPersona(jose1);
procesador.procesarPersona(carmen);
procesador.procesarPersona(rosa);
procesador.procesarPersona(jose2);
procesador.procesarPersona(maria);
procesador.procesarPersona(luz);
procesador.procesarPersona(rafael);
procesador.procesarPersona(liz);
procesador.procesarPersona(marcos);
procesador.procesarPersona(leo);

// Imprimir los resultados
document.getElementById('salida').innerHTML = `
  <h2>Resultados</h2>
  <p>Porcentaje de mujeres procesadas: ${procesador.obtenerPorcentajeMujeres().toFixed(2)}%</p>
  <p>${procesador.obtenerComparacion()}</p>
`;