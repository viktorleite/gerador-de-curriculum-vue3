<template>
  <div class="cv-content card">
    <div class="center-text">
      <h3>{{ getCurriculumData.fullName }}</h3>
      <p>{{ getCurriculumData.address }}</p>
      <p>{{ getCurriculumData.telephone }}</p>
      <p>{{ getCurriculumData.email }}</p>
    </div>

    <div class="center-text m-top-2">
      <h5>Objetivo Profissional</h5>
      <div class="left-text">
        <p>{{ getCurriculumData.professionalGoal }}</p>
      </div>
    </div>

    <div class="center-text m-top-2">
      <h5>Formação Academica</h5>
      <div class="left-text">
        {{ getCurriculumData.academicFormation }}
      </div>
    </div>

    <div class="center-text m-top-2">
      <h5>Experiencia Profissional</h5>
      <div class="left-text">
        {{ getCurriculumData.professionalExperience }}
      </div>
    </div>

    <div class="center-text m-top-2">
      <h5>Qualificação Profissional</h5>
      <div class="left-text">
        {{ getCurriculumData.professionalQualification }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters(["getCurriculumData"]),
}
</script>
