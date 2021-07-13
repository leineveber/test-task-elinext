import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interfaces
import IResponse from '../../interfaces/IResponse';
import { IPic } from '../../interfaces/IResponse';
import IImage from '../../interfaces/IImage';
import IApiOptions from '../../interfaces/IApiOptions';

interface ISearchImagesSliceState {
  data: Array<IImage>;
  pages: number | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: ISearchImagesSliceState = {
  data: [],
  pages: null,
  isLoading: false,
  error: null,
};

const searchImagesSlice = createSlice({
  name: 'searchImages',
  initialState,
  reducers: {
    fetchRequested(state, action: PayloadAction<IApiOptions>) {
      state.isLoading = true;
      state.data = [];
      state.error = null;
    },

    fetchSucceeded(state, action: PayloadAction<IResponse>) {
      const {
        photos: { photo, pages },
      } = action.payload;

      const picArray = photo.map((pic: IPic): IImage => {
        const id = pic.id;
        const title = pic.title;
        const imgUrl = `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`;

        return {
          id,
          title,
          imgUrl,
        };
      });

      state.data = picArray;
      state.pages = pages;
      state.isLoading = false;
    },

    fetchFailed(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.isLoading = false;
      state.data = [];
    },
  },
});

export const { fetchRequested, fetchSucceeded, fetchFailed } =
  searchImagesSlice.actions;
export default searchImagesSlice.reducer;
