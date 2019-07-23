export default (state = {}, action) => {    
    switch (action.type) {
        case 'LOGIN':            
        case 'REGISTER':
            return {
                ...state,
                inProgress: false,
                user: null,
                password: null,
                errors: action.error ? action.payload.errors : null                
            };
        case 'DELETE_ARTICLE':
                return { ...state, redirectTo: '/' };            
        case 'UPDATE_FIELD_AUTH':
                return { ...state, [action.key]: action.value };
        case 'LOGIN_PAGE_UNLOADED':
            return {   };
        case 'ASYNC_START':
                if(action.subtype === 'LOGIN'){
                    return {
                        ...state, inProgress: true
                    };
                }
            return state;
    }
    return state;
};