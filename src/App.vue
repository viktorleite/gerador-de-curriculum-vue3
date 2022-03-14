<script>
import "./assets/style.css";
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
  <div class="container">
    <div class="main">
      <div class="side-left">
        <Form />
        <button class="btn btn-outline-success btn-lg btn-block m-top-2">
          Gerar Curriculum
        </button>
      </div>
      <div class="side-right">
        <div class="fixed">
          <Curriculum />
        </div>
      </div>
    </div>
  </div>
</template>
