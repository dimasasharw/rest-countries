import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CollaborationState } from "../../types/state"
import { AppDispatch } from "../../types/declarations";
import { RootState } from "..";


const initialState: CollaborationState = {
  collaboratedCountries: [],
  loadingCollaboration: false
}

const collaborationSlice = createSlice({
  name: 'collaboration',
  initialState,
  reducers: {
    setCollaboratedCountries: (state, action: PayloadAction<any[]>) => {
      state.collaboratedCountries = action.payload;
      state.loadingCollaboration = false;
    },
    setLoadingCollaboration: (state, action: PayloadAction<boolean>) => {
      state.loadingCollaboration = action.payload;
    },
  }
})

export const { setCollaboratedCountries, setLoadingCollaboration } = collaborationSlice.actions;
export default collaborationSlice.reducer;


export const addCollaborationCountryList = (newCollaborator: any) =>
  (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(setLoadingCollaboration(true));

    // 50% chance simulation
    const success = Math.random() < 0.5;

    if (success) {
      // Get the current state
      const currentCountries = getState().collaboration.collaboratedCountries;

      // Add the new collaboration
      dispatch(setCollaboratedCountries([...currentCountries, newCollaborator]));

      console.log(`collaboration with ${newCollaborator.name.common} accepted.`);
    } else {
      // Simulate a failed attempt at collaboration
      console.log(`Sorry, ${newCollaborator.name.common} ignored to collaborate.`);
    }

    // Set loadingCollaboration to false after 1 second(s)
    setTimeout(() => {
      dispatch(setLoadingCollaboration(false));
    }, 1000);
  };
