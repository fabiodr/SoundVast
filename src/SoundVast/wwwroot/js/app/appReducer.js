export default function (state={}, action) {
    switch (action.type) {
        case "USER_DETAILS_LOADED":
            return {
                isAdmin: action.payload.isAdmin,
                isAuthenticated: action.payload.user ? true : false,
                userName: action.payload.user ? user.userName : null
            }
    }
    return state;
}