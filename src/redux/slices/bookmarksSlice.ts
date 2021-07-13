import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interfaces
import IBookmark from '../../interfaces/IBookmark';

interface IBookmarksSliceState {
  data: Array<IBookmark>;
}

const initialState: IBookmarksSliceState = {
  data: [],
};

const bookmarksSlice = createSlice({
  name: 'bookmarks',
  initialState,
  reducers: {
    addToBookmarks(state, action: PayloadAction<IBookmark>) {
      state.data.push(action.payload);
    },

    removeFromBookmarks(state, action: PayloadAction<string>) {
      const currentBookmark = state.data.findIndex(
        (el: IBookmark) => el.id === action.payload
      );

      state.data.splice(currentBookmark, 1);
    },
  },
});

export const { addToBookmarks, removeFromBookmarks } = bookmarksSlice.actions;
export default bookmarksSlice.reducer;
