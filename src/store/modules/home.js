import mockRequest from '@/utils/mockRequest'
const state = {
    list:[]
};

const mutations = {
    GETSTATUS(state,list){
        state.list=list;
    }
};

const actions = {
    async getStatus({commit}){
        let result=await mockRequest.get('/home/list')
        if(result.code==20000){
            commit("GETSTATUS",result.data)
        }
    }
};

const getters = {};


export default {
    state,
    mutations,
    actions,
    getters,
}