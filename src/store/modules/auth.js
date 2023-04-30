import axios from 'axios'

export default ({
    namespaced: true,
    state: {
        formData: null
    },
    getters: {
    },
    mutations: {
        SET_FORM_DATA(state, formData) {
            state.formData = formData
        }
    },
    actions: {
        async SUBMIT_FORM({ commit }, formData) {
            try {
                const response = await axios.post('http://localhost:3000/register', formData);
                commit('SET_FORM_DATA', response.data)

            } catch (error) {
                alert("Error", error)
            }
        }
    },
})