function mostrarObjeto(objeto: Function) {
  console.log(objeto.toString());
}

@mostrarObjeto
export class Evento {
  constructor(
    public titulo: string,
    public fecha: string,
    public capacidad: number
  ) {}

  imprimir() {
    console.log(`
    EVEVENTO: ${this.titulo}
    FECHA: ${this.fecha}
    CAPACIDAD: ${this.capacidad}`);
  }
}
