import PhotoList from "./PhotoList.js";
import { request } from "./Api.js";

export default function App({ $target }) {
  const $h1 = document.createElement("h1");
  $h1.innerText = "Cat Photos";
  $target.appendChild($h1);

  this.state = {
    limit: 5,
    start: 0,
    photos: [],
    totalCount: 0,
    isLoading: false,
  };

  const photoListComponent = new PhotoList({
    $target,
    initialState: {
      isLoading: this.state.isLoading,
      photos: this.state.photos,
      totalCount: this.state.totalCount,
    },
    onScrollEnded: async () => {
      await fetchPhotos();
    },
  });

  this.setState = (nextState) => {
    this.state = nextState;
    photoListComponent.setState({
      isLoading: nextState.isLoading,
      photos: nextState.photos,
      totalCount: nextState.totalCount,
    });
  };

  const fetchPhotos = async () => {
    this.setState({
      ...this.state,
      isLoading: true,
    });
    const { limit, start } = this.state;
    const photos = await request(`/cat-photos?_limit=${limit}&_start=${start}`);
    this.setState({
      ...this.state,
      start: start + limit,
      photos: [...this.state.photos, ...photos],
      isLoading: false,
    });
  };

  const initialize = async () => {
    const totalCount = await request("/cat-photos/count");

    this.setState({
      ...this.state,
      totalCount,
    });

    await fetchPhotos();
  };

  initialize();
}
