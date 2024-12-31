let Input = '', display = document.getElementById('display');

function clearDisplay() { Input = ''; display.value = ''; }

function displayResult(value) { if (Math.abs(value) < 1e-14) value = 0; display.value = value; Input = value.toString(); }

function calculateResult() { try { displayResult(eval(Input)); } catch (error) { display.value = 'ERROR'; } }

function appendToDisplay(value) {
  value = value.replace(new RegExp('o_b', 'g'), '(');
  value = value.replace(new RegExp('c_b', 'g'), ')');
  calculate(value);
  value = value.replace(new RegExp('sin', 'g'), 'sin(');
  value = value.replace(new RegExp('cos', 'g'), 'cos(');
  value = value.replace(new RegExp('tan', 'g'), 'tan(');
  value = value.replace(new RegExp('sih', 'g'), 'sinh(');
  value = value.replace(new RegExp('coh', 'g'), 'cosh(');
  value = value.replace(new RegExp('tah', 'g'), 'tanh(');
  value = value.replace(new RegExp('ln', 'g'), 'ln(');
  value = value.replace(new RegExp('log10', 'g'), 'log10(');
  value = value.replace(new RegExp('sqrt', 'g'), 'sqrt(');
  value = value.replace(new RegExp('cbrt', 'g'), 'cbrt(');
  value = value.replace(new RegExp('abs', 'g'), 'abs(');

  display.value += value;
}

function calculate(value) {
  value = value.replace(/\^/g, '**');
  value = value.replace(new RegExp('e', 'g'), 'Math.E');
  value = value.replace(new RegExp('π', 'g'), 'Math.PI');
  value = value.replace(new RegExp('sin', 'g'), 'Math.sin(Math.PI / 180 * ');
  value = value.replace(new RegExp('cos', 'g'), 'Math.cos(Math.PI / 180 * ');
  value = value.replace(new RegExp('tan', 'g'), 'Math.tan(Math.PI / 180 * ');
  value = value.replace(new RegExp('sih', 'g'), 'Math.sin(Math.PI / 180 * ');
  value = value.replace(new RegExp('coh', 'g'), 'Math.cos(Math.PI / 180 * ');
  value = value.replace(new RegExp('tah', 'g'), 'Math.tan(Math.PI / 180 * ');
  value = value.replace(new RegExp('ln', 'g'), 'Math.log( ');
  value = value.replace(new RegExp('log10', 'g'), 'Math.log10( ');
  value = value.replace(new RegExp('sqrt', 'g'), 'Math.sqrt( ');
  value = value.replace(new RegExp('cbrt', 'g'), 'Math.cbrt( ');
  value = value.replace(new RegExp('abs', 'g'), 'Math.abs(');

  Input += value;
}
function Factorial() { Input = factorial(Input); display.value = Input; }
function factorial(n) { return n == 0 || n == 1 ? 1 : n * factorial(n - 1); }

function Rand() { Input = parseInt(Math.random() * 1000); display.value = Input; }