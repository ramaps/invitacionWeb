var días = document.getElementById('días');
var horas = document.getElementById('horas');
var minutos = document.getElementById('minutos');
var segundos = document.getElementById('segundos');

function cronometro() {
    const cuentaRegresivaDatos = new Date('11/30/2024 22:00').getTime(); // Fecha de fin

    // Conversiones a milisegundos
    const segundosMilisegundos = 1000;
    const minutosMilisegundos = segundosMilisegundos * 60;
    const horasMilisegundos = minutosMilisegundos * 60;
    const díasMilisegundos = horasMilisegundos * 24;

    // Intervalo que se ejecuta cada segundo
    const intervalos = setInterval(() => {

        // Tiempo actual
        const now = new Date().getTime();
        const distancia = cuentaRegresivaDatos - now;

        // Cálculos
        const díasRestantes = Math.floor(distancia / díasMilisegundos);
        const horasRestantes = Math.floor((distancia % díasMilisegundos) / horasMilisegundos);
        const minutosRestantes = Math.floor((distancia % horasMilisegundos) / minutosMilisegundos);
        const segundosRestantes = Math.floor((distancia % minutosMilisegundos) / segundosMilisegundos);

        // Actualizar los valores en el HTML
        días.innerText = formatoDeNumero(díasRestantes);
        horas.innerText = formatoDeNumero(horasRestantes);
        minutos.innerText = formatoDeNumero(minutosRestantes);
        segundos.innerText = formatoDeNumero(segundosRestantes);

        // Si la cuenta regresiva llega a 0
        if (distancia < 0) {
            clearInterval(intervalos); // Detener el intervalo
            document.getElementById('headline').innerText = '¡Llegó el momento!';
            document.querySelector('.cronometro').style.display = 'none'; // Ocultar cronómetro
        }

    }, 1000); // Intervalo de 1 segundo
}

// Función para formatear los números (añadir un 0 si es menor de 10)
function formatoDeNumero(numero) {
    return numero < 10 ? '0' + numero : numero;
}

// Ejecutar la función cronómetro
cronometro();