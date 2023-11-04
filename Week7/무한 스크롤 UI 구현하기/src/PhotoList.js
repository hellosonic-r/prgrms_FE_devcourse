export default function PhotoList({ $target, initialState, onScrollEnded }) {
  let isInitialize = false;

  const $photoList = document.createElement("div");
  $target.appendChild($photoList);
  this.state = initialState;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !this.state.isLoading) {
          console.log("화면 끝", entry);
          onScrollEnded();
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  let $lastLi = null;

  this.setState = (nextState) => {
    if (nextState) {
      this.state = nextState;
      this.render();
    }
  };

  this.render = () => {
    if (!isInitialize) {
      $photoList.innerHTML = `
        <ul class="PhotoList__photos"></ul>
        <button class="PhotoList__loadMore" style="width:100%; height: 200px; font-size:20px">Load More</button>
         `;
      isInitialize = true;
    }

    const { photos } = this.state;

    const $photos = $photoList.querySelector(".PhotoList__photos");

    photos.forEach((photo) => {
      if ($photos.querySelector(`li[data-id="${photo.id}"]`) === null) {
        const $li = document.createElement("li");
        $li.setAttribute("data-id", photo.id);
        $li.style = "list-style : none; min-height: 800px";
        $li.innerHTML = `<img width="100%" src="${photo.imagePath}" />`;
        $photos.appendChild($li);
      }
    });

    const $nextLi = $photos.querySelector("li:last-child");

    if ($nextLi !== null) {
      if ($lastLi !== null) {
        observer.unobserve($lastLi);
        console.log("check");
      }
      $lastLi = $nextLi;
      observer.observe($lastLi);
    }
  };

  this.render();

  $photoList.addEventListener("click", (e) => {
    if (e.target.className === "PhotoList__loadMore" && !this.state.isLoading) {
      onScrollEnded();
    }
  });

  //   window.addEventListener("scroll", () => {
  //     const isScrollEnded =
  //       window.innerHeight + window.scrollY + 100 >= document.body.offsetHeight;
  //     // document.body.offsetHeight : 전체 렌더링된 높이
  //     // window.innerHeight + window.scrollY : 현재 스크롤이 얼마나 되었는지 높이
  //     // console.log(isScrollEnded);
  //     if (
  //       isScrollEnded &&
  //       !this.state.isLoading &&
  //       this.state.photos.length < this.state.totalCount
  //     ) {
  //       onScrollEnded();
  //     }
  //   });
}
