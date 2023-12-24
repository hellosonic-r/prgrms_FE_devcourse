import Keyword from "./Keyword.js";

export default function Header({ $target, initialState, onKeywordInput }) {
  const $header = document.createElement("header");
  $header.className = "Header";

  $target.appendChild($header);

  this.state = initialState;

  this.setState = (nextState) => {
    if (this.state.keyword !== nextState.keyword) {
      this.state = nextState;

      keyword.setState({
        keyword: this.state.keyword,
      });
    }
  };

  const $title = document.createElement("h1");

  $title.innerHTML = "🐈‍고양이 사진 검색기🔎";
  $title.style.textAlign = "center";
  $header.appendChild($title);

  const keyword = new Keyword({
    $target: $header,
    initialState: { keyword: this.state.keyword },
    onKeywordInput,
  });
}
