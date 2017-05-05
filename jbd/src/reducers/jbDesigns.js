const initialState = {
    form: [{
        firstname:'',
        lastname:'',
    }],
    
    
}

export default function Reducer(state=initialState, action) {
    switch (action.type) {
        case 'POST_FORM':
            return {...state, form: [...state.form, action.form]}
        case 'ADD_USER':
            return {...state, users: [...state.users, action.user]}
        default:
            return state
    }
}
