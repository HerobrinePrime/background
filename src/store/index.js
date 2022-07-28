import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//namespaces
import testStore from './test/test.js'

const store =new Vuex.Store({
    modules:{
        testStore
    }
});

export default store