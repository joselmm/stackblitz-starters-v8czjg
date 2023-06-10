import React, { useRef, useEffect, useState } from 'react';
import etiquetarNumero from '../../models/etiquetarNumero.function';
import VideoCardInfo from '../../models/VideoCardInfo.class';
import SuggestionsComponent from './SuggestionsComponent.jsx';

const SearchVideoComponent = ({ setVideos }) => {
  /* suggestion list state */

  const [suggestionList, setSuggestionList] = useState([]);

  const inputSearchRef = useRef();
  /* functiion to search videos */
  async function searchVideos(e) {
    e.preventDefault();
    console.log('ff');
    var query = inputSearchRef.current.value;
    var encodedQuery = encodeURIComponent(query);
    var searchResults = await fetch(
      `https://yt-info-1y11.onrender.com/buscarVideo/${encodedQuery}`
    )
      .then((res) => res.json())
      .then((res) => res);
    const tempArray = [];
    for (let videoItem of searchResults.items) {
      if (videoItem.type != 'video') continue;
      const videoCardInfo = new VideoCardInfo({
        title: videoItem.title,
        poster: `https://i.ytimg.com/vi/${videoItem.id}/0.jpg`,
        addedToPlayList: false,
        videoId: videoItem.id,
        duration: videoItem.duration,
        views: etiquetarNumero(videoItem.views),
      });
      tempArray.push(videoCardInfo);
    }
    console.log(tempArray.slice(0, 5));
    setVideos(tempArray);
  }

  /* Function that retrieves and renders search suggestions.*/

  return (
    <div className="col-6">
      <form onSubmit={(e) => searchVideos(e)} className="input-group mb-3 ">
        <input
          id="search-input"
          onChange={() => {
            /* console.log('valor input search ' + inputSearchRef.current.value); */
          }}
          ref={inputSearchRef}
          type="search"
          className="form-control"
          /* placeholder="Search a video" */
        />
        <div className="input-group-append">
          <button
            type="submit"
            className="input-group-text bg-success text-light cursor-pointer"
            id="basic-addon2"
          >
            Search
          </button>
        </div>
      </form>

      <SuggestionsComponent suggestionList={suggestionList} />
    </div>
  );
};

export default SearchVideoComponent;
