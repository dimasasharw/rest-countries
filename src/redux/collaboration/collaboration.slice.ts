import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CollaborationState } from "../../types/state";
import { AppDispatch } from "../../types/declarations";
import { RootState } from "..";
import toast from "react-hot-toast";

const initialState: CollaborationState = {
  collaboratedCountries: [],
  loadingCollaboration: false,
};

const collaborationSlice = createSlice({
  name: "collaboration",
  initialState,
  reducers: {
    setCollaboratedCountries: (state, action: PayloadAction<any[]>) => {
      state.collaboratedCountries = action.payload;
      state.loadingCollaboration = false;
    },
    setLoadingCollaboration: (state, action: PayloadAction<boolean>) => {
      state.loadingCollaboration = action.payload;
    },
  },
});

export const { setCollaboratedCountries, setLoadingCollaboration } =
  collaborationSlice.actions;
export default collaborationSlice.reducer;

export const addCollaborationCountryList =
  (newCollaborator: any) =>
  (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(setLoadingCollaboration(true));

    // 50% chance simulation
    const success = Math.random() < 0.5;

    if (success) {
      // Get the current state
      const currentCountries = getState().collaboration.collaboratedCountries;

      // Add the new collaboration
      dispatch(
        setCollaboratedCountries([...currentCountries, newCollaborator])
      );
      toast.success(
        `collaboration with ${newCollaborator.name.common} accepted.`
      );
      // console.log(`collaboration with ${newCollaborator.name.common} accepted.`);
    } else {
      // Simulate a failed attempt at collaboration
      toast.error(
        `Sorry, ${newCollaborator.name.common} ignored to collaborate.`
      );
      // console.log(
      //   `Sorry, ${newCollaborator.name.common} ignored to collaborate.`
      // );
    }

    setTimeout(() => {
      dispatch(setLoadingCollaboration(false));
    }, 1000);
  };

export const removeCollaborator =
  (collaboratorName: string) =>
  (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(setLoadingCollaboration(true));
    const currentCountries = getState().collaboration.collaboratedCountries;

    const collaborators = currentCountries?.filter(
      (country: any) => country?.name?.common !== collaboratorName
    );
    dispatch(setCollaboratedCountries(collaborators));
    toast.success(`${collaboratorName} has been removed from the list`);
  };
