import React, { Component } from "react";

class ReleaseCard extends Component {
  // Component logic and methods

  render() {
    const { data } = this.props;
    const { link } = `https://www.discogs.com/release/${data.id}`;
    return (
      <div className="release-card">
        <a
          className="thumb"
          key={data.id}
          href={`https://www.discogs.com/release/${data.id}`}
        >
          <img src={data.thumb} alt="Image" />
        </a>
        <div className="release-title">
          {/* <span className="release-title">{data.title}</span> */}
          <a className="" href={`https://www.discogs.com/release/${data.id}`}>
            {data.title}
          </a>
        </div>
        <div className="release-artist">
          <span className="release-artist">{data.artist}</span>
        </div>
      </div>
    );
  }
}

export default ReleaseCard;
