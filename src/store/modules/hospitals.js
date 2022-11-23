import axios from 'axios'

const state = () => ({
    hospitals:[]
});
 
const getters = {
    allHospitals(state){
        return state.hospitals;
    }
};
 
const actions = {
    async fetchHospitals({commit}){
       var response =  await axios.get("http://hospitalcmr.herokuapp.com/fdata");
       console.log(response.data);
       commit('saveAllHospitals', response.data);
       
    }
};
 
const mutations = {
    saveAllHospitals(state, payload){
        state.hospitals = payload;
    }
};
 
export default{
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}