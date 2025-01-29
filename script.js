// Variables para los elementos del DOM
const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const sumarBtn = document.getElementById("sumar");
const restarBtn = document.getElementById("restar");
const multiplicarBtn = document.getElementById("multiplicar");
const dividirBtn = document.getElementById("dividir");
const resultado = document.getElementById("resultado");
const error = document.getElementById("error");

// Función para validar inputs
function validarInputs() {
    // Expresión regular para validar números (enteros o decimales)
    const numeroRegex = /^-?\d*\.?\d+$/;
    
    // Verificar si los campos están vacíos o no son números válidos
    if (!numero1.value || !numero2.value || 
        !numeroRegex.test(numero1.value) || !numeroRegex.test(numero2.value)) {
        error.style.display = 'block';
        return false;
    }
    
    error.style.display = 'none';
    return true;
}

// Función para sumar dos números
function sumar() {
    if (!validarInputs()) return;
    const suma = parseFloat(numero1.value) + parseFloat(numero2.value);
    resultado.textContent = `Resultado: ${suma}`;
}

// Función para restar dos números
function restar() {
    if (!validarInputs()) return;
    const resta = parseFloat(numero1.value) - parseFloat(numero2.value);
    resultado.textContent = `Resultado: ${resta}`;
}

// Función para multiplicar dos números
function multiplicar() {
    if (!validarInputs()) return;
    const multiplicacion = parseFloat(numero1.value) * parseFloat(numero2.value);
    resultado.textContent = `Resultado: ${multiplicacion}`;
}

// Función para dividir dos números
function dividir() {
    if (!validarInputs()) return;
    // Verificar división por cero
    if (parseFloat(numero2.value) === 0) {
        error.textContent = "Error: No se puede dividir por cero";
        error.style.display = 'block';
        return;
    }
    const division = parseFloat(numero1.value) / parseFloat(numero2.value);
    resultado.textContent = `Resultado: ${division}`;
}

// Event Listeners para botones
sumarBtn.addEventListener("click", sumar);
restarBtn.addEventListener("click", restar);
multiplicarBtn.addEventListener("click", multiplicar);
dividirBtn.addEventListener("click", dividir);

// Event Listeners para limpiar mensaje de error cuando el usuario empiece a escribir
numero1.addEventListener("input", () => error.style.display = 'none');
numero2.addEventListener("input", () => error.style.display = 'none');