<template>
  <form action="">
    <h1>Dados Pessoais</h1>
    <div class="form-group">
      <label for="">Nome Completo</label>
      <input type="text" class="form-control" placeholder="Viktor Leite" />
    </div>
    <div class="form-group">
      <label for="">Endereço</label>
      <input
        type="text"
        class="form-control"
        placeholder="R. Street Example, 190"
      />
    </div>
    <div class="form-group">
      <label for="">Tel</label>
      <input type="text" class="form-control" placeholder="(67) 9 9123-4567" />
    </div>
    <div class="form-group">
      <label for="">E-mail</label>
      <input type="text" class="form-control" placeholder="example@email.com" />
    </div>

    <h1>Objetivo Profissional</h1>
    <div class="form-group">
      <textarea name="" id="" cols="100" rows="4"></textarea>
    </div>

    <h1>Formação Academica</h1>
    <div class="form-group">
      <textarea name="" id="" cols="100" rows="4"></textarea>
    </div>

    <h1>Experiencia Profissional</h1>
    <div class="form-group">
      <textarea name="" id="" cols="100" rows="4"></textarea>
    </div>

    <h1>Qualificação Profissional</h1>
    <div class="form-group">
      <textarea name="" id="" rows="4"></textarea>
    </div>
  </form>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
textarea {
  width: 100%;
}
</style>