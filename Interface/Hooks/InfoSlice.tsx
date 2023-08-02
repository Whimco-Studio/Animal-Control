/*
 * Created Date: Wednesday August 2nd 2023 1:51:11 pm CEST
 * Author: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>
 * -----
 * Last Modified: Wednesday August 2nd 2023 1:52:03 pm CEST
 * Modified By: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>
 */
import { PayloadAction, createSlice } from "@rbxts/create-slice";

const currentDate = os.date("*t");
const currentDateStr = string.format(
	"%d-%02d-%02d",
	currentDate.year,
	currentDate.month,
	currentDate.day
);

const infoSlice = createSlice({
	name: "counter",
	initialState: {
		Name: "Input A Name",
		Title: "Input A Title",
		Quirkymal: "Input A Title",
		Pronouns: "Input your Pronouns",
		JoinDate: currentDateStr,
	},
	reducers: {
		setName(state, action: PayloadAction<string>) {
			return {
				...state,
				Name: action.payload,
			};
		},
		setTitle(state, action: PayloadAction<string>) {
			return {
				...state,
				Title: action.payload,
			};
		},
		setQuirkymal(state, action: PayloadAction<string>) {
			return {
				...state,
				Quirkymal: action.payload,
			};
		},
		setPronouns(state, action: PayloadAction<string>) {
			return {
				...state,
				Pronouns: action.payload,
			};
		},
	},
});

export const { actions: infoActions, reducer: infoReducer } = infoSlice;
export default infoSlice;
