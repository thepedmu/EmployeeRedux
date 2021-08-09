const defaultState = {
    list: [],
    showEmployeeList: false,
}

const reducer = (state = defaultState, action) => {

    switch(action.type) {
        case 'EMP:ADD': {
            // const data=JSON.parse(action.data);
          const newList = state.list.concat(["Employee Name : "+action.data.Employeename + " ||| Employee Email : " + action.data.EmployeeID + " ||| Joining Date : " + action.data.JoiningDate + " ||| Role : " + action.data.Role + " ||| Status : " + action.data.Status + " ||| Experience : " + action.data.Experience + " year(s) ||| Address : " + action.data.Address]);
          debugger
          return {
            list: newList
          }
        }
          case 'DISPLAY_LIST':{
              debugger
            return {...state, showEmployeeList:action.payload}
        }
        default: return state;
    }    
};

export default reducer;