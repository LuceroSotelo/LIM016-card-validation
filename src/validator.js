const validator = {

  isValid: function (numero) {
    console.log("este es el número: " + numero)
    //convirtiendo input en un array
    let arrayGuardar = numero.split("");
    //inviertiendo el array
    let arrayInvertido = arrayGuardar.reverse("");
    //capturando elementos con indices inpares 
    for (let i = 0; i < arrayInvertido.length; i++) {
      if (i % 2 !== 0) {
        arrayInvertido[i] = arrayInvertido[i] * 2;
        if (arrayInvertido[i] >= 10) {
          arrayInvertido[i] = arrayInvertido[i].toString().split("").map(Number);
          arrayInvertido[i] = arrayInvertido[i].reduce((a, b) => {
            return a + b;
          });
        }
      }
    }
    arrayInvertido = arrayInvertido.map(Number).reduce((a, b) => {
      return a + b;
    });
    console.log("Resultado de Luhn es:", arrayInvertido)
    if (arrayInvertido % 10 === 0) {
      console.log("Tarjeta válida")
      return true
    }
    else {
      console.log("Tarjeta inválida")   
      return false        
    }
  },

  maskify: function (numero) {
    const enmascararN = (numero) => {
      return numero.slice(0, -4).replace(/[0-9||a-z]/g, "#").concat(numero.slice(-4, numero.length));
    }
    return enmascararN(numero)
  }
};
export default validator;




