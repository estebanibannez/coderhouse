async function operacion(numero1: number, numero2: number, operacion: string) {
  try {
    let operador = await import(`./${operacion}`);
    let instancia = new operador.default(numero1, numero2);
    let resultado = instancia.resultado();

    return resultado;
  } catch (error) {

    throw error;
    console.log('Ocurrió un error..')
  }
}

async function operaciones() {
  console.log('resultado operación resta -->',await operacion(10, 6, "resta"));
  console.log('resultado operación suma -->',await operacion(2, 4, "suma"));
}

operaciones();
