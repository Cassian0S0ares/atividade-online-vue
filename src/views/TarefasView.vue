<template>
  <section>
    <h1>Minhas tarefas</h1>

    <input v-model="novaTarefa" type="text" @keyup.enter="adicionar" />
    <button @click="adicionar">Adicionar</button>

    <ul>
      <li v-for="(tarefa, indice) in tarefas" :key="indice">{{ tarefa }}</li>
    </ul>

    <RouterLink to="/">Voltar ao início</RouterLink>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const novaTarefa = ref('')
const tarefas = ref([])

function adicionar() {
  const texto = novaTarefa.value.trim()
  if (!texto) return
  tarefas.value.push(texto)
  novaTarefa.value = ''
}
</script>
<style scoped>
input {
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  padding: 6px 12px;
  margin-left: 6px;
  border: none;
  border-radius: 4px;
  background: #2f6b45;
  color: #fff;
  cursor: pointer;
}
li {
  padding: 4px 0;
}
</style>