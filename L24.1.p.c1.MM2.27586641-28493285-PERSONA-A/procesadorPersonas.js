import { Persona } from './persona.js';

export class ProcesadorPersonas {
  constructor() {
    this.cantidadMujeres = 0;
    this.cantidadHombres = 0;
  }

  procesarPersona(persona) {
    if (persona.sexo === 'F') {
      this.cantidadMujeres++;
    } else if (persona.sexo === 'M') {
      this.cantidadHombres++;
    }
  }

  obtenerPorcentajeMujeres() {
    const totalPersonas = this.cantidadMujeres + this.cantidadHombres;
    return (this.cantidadMujeres / totalPersonas) * 100;
  }

  obtenerComparacion() {
    if (this.cantidadMujeres > this.cantidadHombres) {
      return 'Hay más mujeres';
    } else if (this.cantidadHombres > this.cantidadMujeres) {
      return 'Hay más hombres';
    } else {
      return 'Hay la misma cantidad de hombres y mujeres';
    }
  }
}