import hospitalModule from './modules/hospitals';
import {createStore} from 'vuex';

 
const store = createStore({
    modules:{
        hospitals: hospitalModule
    }
});
export default store;