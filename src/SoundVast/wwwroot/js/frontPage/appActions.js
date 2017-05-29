import reqwest from "reqwest";

export const loadUserDetails = () => (dispatch) => {
    return reqwest({
        url: "account/userdetails",
        method: "post",
        success: (data) => {
            dispatch({
                type: "USER_DETAILS_LOADED",
                payload: data
            });
        }
    });
}