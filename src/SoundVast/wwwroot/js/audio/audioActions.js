import reqwest from "reqwest";

export const loadAudios = () => (dispatch) => {
    return (
        reqwest("filestream/filestreams", (data) => {
            dispatch({
                type: "FILESTREAMS_LOADED",
                payload: data
            });
        })
    );
}