/*
 * Created Date: Wednesday August 2nd 2023 1:50:52 pm CEST
 * Author: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>
 * -----
 * Last Modified: Wednesday August 2nd 2023 1:50:53 pm CEST
 * Modified By: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>
 */
import Rodux, { combineReducers } from "@rbxts/rodux";
import infoSlice, { infoReducer } from "./InfoSlice";

const reducer = combineReducers({
	info: infoReducer,
});

const clientStore = new Rodux.Store(reducer); // { counter: { value: 0 }, timer: { value: 0 } }

export default clientStore;
