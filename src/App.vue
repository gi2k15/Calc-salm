<script setup>
import { computed } from 'vue';

const peso = defineModel('peso');
const agua = defineModel('agua', { default: 500 });
const tipo = defineModel('tipo', { default: 7 });
const salmoura = defineModel('salmoura', { default: 0.1 });

const tempo = computed(() => {
  return formatarTempo(((peso.value * tipo.value) / 100) * 60);
});
const sal = computed(() => {
  return agua.value * salmoura.value;
});
const tipoObj = [
  { text: 'Frango', value: 7 }
];
const salmouraObj = [
  { text: '10%', value: 0.1 },
  { text: '5%', value: 0.05 }
]

function formatarTempo(segundos) {
  const horas = Math.floor(segundos / 3600);
  const minutos = Math.floor((segundos % 3600) / 60);
  const segundosRestantes = (segundos % 60).toFixed(0);

  const partes = [];
  if (horas > 0) partes.push(`${horas} horas`);
  if (minutos > 0) partes.push(`${minutos} minutos`);
  if (segundosRestantes > 0) partes.push(`${segundosRestantes} segundos`);

  return partes.join(", ").replace(/,([^,]*)$/, " e$1");
}
</script>

<template>
  <div class="container">
    <h1>Calculadora de salmoura</h1>
    <p>Esta calculadora ajuda a determinar a quantidade de sal necessária para preparar uma salmoura.</p>
    <div class="entradas">
      <form>
        <label for="tipo">Tipo de proteína</label>
        <select id="tipo" v-model="tipo">
          <option v-for="t in tipoObj" :value="t.value">
            {{ t.text }}
          </option>
        </select>
  <label for="salmoura">Concentração da salmoura</label>
  <select id="salmoura" v-model="salmoura">
          <option v-for="s in salmouraObj" :value="s.value">
            {{ s.text }}
          </option>
        </select>
        <label for="peso">Peso do alimento (g)</label>
        <input type="number" id="peso" v-model="peso">
        <label for="agua">Quantidade de água (mL)</label>
        <input type="number" id="agua" v-model="agua">
      </form>
      <div class="resultado" v-if="peso && agua">
        <p>Tempo de salmoura: {{ tempo }}</p>
        <p>Quantidade de sal: {{ sal }} gramas</p>
      </div>
    </div>
    <p style="text-align: center;"><a href="https://github.com/gi2k15/Calc-salm" target="_blank" noreferrer
        noopener>GitHub</a></p>
  </div>
</template>

<style>
body {
  background-color: #1A3636;
  font-family: sans-serif;
  color: white;
}

h1 {
  text-align: center;
}

input, select {
  padding: 5px;
  box-sizing: border-box;
}

form {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}

a {
  color: white;
  text-align: center;
  font-size: 0.9em;
}

.container {
  margin: 0 auto;
  width: 500px;
  max-width: 90vw;
}

.entradas {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  border: solid 2px white;
  border-radius: 10px;
  padding: 10px;
}
</style>
