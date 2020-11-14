



const INITIAL_STATE = {
    users: [],
    current_user: {},
    userloginconform: false,
    selectedcategory: '',
    categoryitem: '',
    forcheck: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SETUSER":
            return ({
                ...state,
                current_user: action.payload,
                userloginconform: true
            })
        case "setfirebaseusers":
            return ({
                ...state,
                users: action.payload
            })
        case "selectcategory":
            return ({
                ...state,
                selectedcategory: action.payload
            })
        case "categoryitem":
            return ({
                ...state,
                categoryitem: action.payload,
            })
        default:
            return state;
    }

}