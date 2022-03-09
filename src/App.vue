<script>
import Form from "./components/Form/Form.vue";
import Curriculum from "./components/CV/Curriculum.vue";

export default {
  components: {
    Form,
    Curriculum,
  },
};
</script>
<template>
  <!--
  DADOS PESSOAIS
    Nome Completo
    Endereço 
    telefone pra contato
    email pra contato
  OBJETIVO

  FORMAÇÂO ACADEMICA

  EXPERIENCIA PROFISSIONAL

  QUALIFICAÇÂO PROFISSIONAL

-->
  <div class="container main">
    <div class="side-left">
      <Form />
    </div>
    <div class="side-right">
      <Curriculum />
      <button class="btn btn-primary btn-lg btn-block">
        Salvar Curriculum
      </button>
    </div>
  </div>
</template>

<style>
.side-left {
  width: 100%;
  padding: 3rem;
}
.side-right {
  width: 100%;
  height: 100vh;
  padding: 3rem;
}
.main {
  display: flex;
  justify-content: space-between;
}
button {
  width: 100%;
}
</style>