<template>
  <form action="">
    <div class="card">
      <div class="card-header">
        <h4>Dados Pessoais</h4>
      </div>
      <div class="card-body">
        <div class="form-group m-top-1">
          <label for="">Nome Completo</label>
          <input
            type="text"
            class="form-control"
            autocomplete="no"
            placeholder="Leona"
            v-model="curriculum_data.fullName"
          />
        </div>
        <div class="form-group m-top-1">
          <label for="">Endereço</label>
          <input
            type="text"
            class="form-control"
            placeholder="R. Street Example, 190"
            autocomplete="no"
             v-model="curriculum_data.address"
          />
        </div>
        <div class="form-group m-top-1">
          <label for="">Tel</label>
          <input
            type="text"
            class="form-control"
            placeholder="(67) 9 9123-4567"
            autocomplete="no"
            v-model="curriculum_data.telephone"
          />
        </div>
        <div class="form-group m-top-1">
          <label for="">E-mail</label>
          <input
            type="text"
            class="form-control"
            placeholder="example@email.com"
            autocomplete="no"
            v-model="curriculum_data.email"
          />
        </div>
      </div>
    </div>

    <div class="card m-top-2">
      <div class="card-header">
        <h4>Objetivo Profissional</h4>
      </div>
      <div class="card-body">
        <div class="form-group">
          <textarea name="" id="" rows="2" v-model="curriculum_data.professionalGoal"></textarea>
        </div>
      </div>
    </div>

    <div class="card m-top-2">
      <div class="card-header">
        <h4>Formação Academica</h4>
      </div>
      <div class="card-body">
        <div class="form-group">
          <textarea name="" id="" rows="2" v-model="curriculum_data.academicFormation"></textarea>
        </div>
      </div>
    </div>

    <div class="card m-top-2">
      <div class="card-header">
        <h4>Experiencia Profissional</h4>
      </div>
      <div class="card-body">
        <div class="form-group">
          <textarea name="" id="" rows="2" v-model="curriculum_data.professionalExperience"></textarea>
        </div>
      </div>
    </div>

    <div class="card m-top-2">
      <div class="card-header">
        <h4>Qualificação Profissional</h4>
      </div>
      <div class="card-body">
        <div class="form-group">
          <textarea name="" id="" rows="2" v-model="curriculum_data.professionalQualification"></textarea>
        </div>
      </div>
    </div>
  </form>

</template>


<script>
export default {
  data() {
    return {
      curriculum_data: []
    }
  },
  computed: {
    setCurriculumData() {
      this.$store.dispatch('setCurriculumData', this.curriculum_data)
      return this.curriculum_data
    }
  },
  updated() {
    this.setCurriculumData
  }
};
</script>