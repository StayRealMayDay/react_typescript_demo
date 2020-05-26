import { AnyAction } from "redux";



const initState = {
    name: "hhhh"
}

type IInitState = typeof initState;

const reducer = (state = initState, action: AnyAction) => {
    return state;
}
export default reducer;