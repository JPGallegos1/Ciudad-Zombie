/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
  /* el sprite contiene la ruta de la imagen
  */
 
  sprite: 'imagenes/auto_rojo_abajo.png',

  sprites: {
    arriba: {
      src: 'imagenes/auto_rojo_arriba.png',
      ancho: 15,
      alto: 30,
    },
    abajo: {
      src: 'imagenes/auto_rojo_abajo.png',
      ancho: 15,
      alto: 30,
    },
    izq: {
      src: 'imagenes/auto_rojo_izquierda.png',
      ancho: 30,
      alto: 15,
    },
    der: {
      src: 'imagenes/auto_rojo_derecha.png',
      ancho: 30,
      alto: 15,
    },
  },

  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 5,

  mover(x, y){
    this.x = x;
    this.y = y;
  },
  
  girar(direccion){
    if (this.sprites[direccion]) {
      const nuevoSprite = this.sprites[direccion];
      this.sprite = nuevoSprite.src;
      this.ancho = nuevoSprite.ancho;
      this.alto = nuevoSprite.alto;
    }
  }
  // Hay que agregar lo que falte al jugador: movimientos, perdida de vidas,
  // y todo lo que haga falta para que cumpla con sus responsabilidades

}