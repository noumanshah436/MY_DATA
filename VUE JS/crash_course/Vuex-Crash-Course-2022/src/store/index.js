import {createStore} from 'vuex'
import counterModule from "@/store/modules/counter.module";
import employeeModule from "@/store/modules/employee.module";
import usersModule from "@/store/modules/users.module";

export default createStore({
    state: {
        counterState: counterModule.state,
        employeeState: employeeModule.state,
        usersState: usersModule.state
    },
    mutations: {},
    actions: {},
    modules: {
        counterModule,
        employeeModule,
        usersModule
    },
    getters: {
        // components will access state through these getter functions
        
        getCounterState: function (state) {
            return state.counterState.counter;
        },
        getEmployeeState: function (state) {
            return state.employeeState.employeeList;
        },
        getUsersState: function (state) {
            return state.usersState.userList;
        }
    }
})

// mutations are like reducers in react


// 1) vue component will dispatch an action
// 2) action will commit mutation
// 3) mutation will update the state
// 4) state will render on the view

