"use client";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function renderLeftNav(onClick, disabled) {
  return (
    <button
      type="button"
      style={{ left: "55px", zIndex: "10" }}
      className="image-gallery-left-nav absolute sm:hidden"
      aria-label="Prev Slide"
      disabled={disabled}
      onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2.5rem"
        height="2.5rem"
        fill="currentColor"
        className="bi bi-arrow-left-short"
        viewBox="0 0 16 16">
        <path
          fillRule="evenodd"
          d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
        />
      </svg>
    </button>
  );
}

function renderRightNav(onClick, disabled) {
  return (
    <button
      type="button"
      className="image-gallery-right-nav absolute sm:hidden"
      aria-label="Next Slide"
      disabled={disabled}
      onClick={onClick}
      style={{ right: "55px", zIndex: "10" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2.5rem"
        height="2.5rem"
        fill="currentColor"
        className="bi bi-arrow-right-short"
        viewBox="0 0 16 16">
        <path
          fillRule="evenodd"
          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
        />
      </svg>
    </button>
  );
}

export default function Slider() {
  const Image_Urls = [
    {
      original: "https://shopdunk.com/images/uploaded/banner/banner_thang10/banner%20kv%2020.10%20T10_Banner%20PC.jpg",
    },
    {
      original:
        "https://shopdunk.com/images/uploaded/banner/banner_thang10/banner%20ipad%20gen%209%20T10_Banner%20PC%20(1).jpg",
    },
    {
      original:
        "https://shopdunk.com/images/uploaded/banner/banner%20thang%2011/banner%20iphone%2015%20pro%20max%20T11_PC.jpg",
    },
    {
      original: "https://shopdunk.com/images/uploaded/banner/banner%20thang%2011/banner%20iphone%2015%20T11_PC.jpg",
    },
    {
      original:
        "https://shopdunk.com/images/uploaded/banner/banner_thang10/banner%20macbook%20air%20t10_Banner%20PC%20(1).jpg",
    },
  ];
  return (
    <div className="slider relative">
      <ImageGallery
        items={Image_Urls}
        renderLeftNav={renderLeftNav}
        renderRightNav={renderRightNav}
        showPlayButton={false}
        autoPlay={true}
        showBullets={true}
        showFullscreenButton={false}
        showThumbnails={false}
        slideDuration={1000}
        slideInterval={1000000}
      />
    </div>
  );
}
