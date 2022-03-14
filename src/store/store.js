import { createApp } from 'vue'
import { createStore } from 'vuex'



export const store = createStore({
    state: {
        curriculumData:
        {
            fullName: "",
            address: "",
            telephone: "",
            email: "",
            professionalGoal: "",
            academicFormation: "",
            professionalExperience: "",
            professionalQualification: ""
        }

    },
    getters: {
        getCurriculumData(state) {
            return state.curriculumData
        }
    },

    mutations: {
        setCurriculumData(state, payload) {
            state.curriculumData = payload
        }
    },

    actions: {
        setCurriculumData: ({ commit }, payload) => commit("setCurriculumData", payload)
    }

})