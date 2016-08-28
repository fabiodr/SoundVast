export default function (state={}, action) {
    switch (action.type) {
        case "FILESTREAMS_LOADED":
            return action.payload;
    }
    return state;
}