<script setup>
import { computed } from 'vue';

const peso = defineModel('peso');
const agua = defineModel('agua', { default: 500 });

const tempo = computed(() => {
  return formatarTempo(((peso.value * 7) / 100) * 60); // 7 min para cada 100 gramas
})
const sal = computed(() => {
  return agua.value * 0.1; // Salmoura 10%
})

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
    <p>Esta calculadora ajuda a determinar a quantidade de sal necessária para preparar uma salmoura 10%.</p>
    <form class="formulario">
      <label for="peso">Peso do alimento</label>
      <input type="number" id="peso" v-model="peso">
      <label for="agua">Quantidade de água</label>
      <input type="number" id="agua" v-model="agua">
    </form>
    <div class="resultado">
      <p>Tempo de salmoura: {{ tempo }}</p>
      <p>Quantidade de sal: {{ sal }}g</p>
    </div>
  </div>
</template>

<style scoped></style>
