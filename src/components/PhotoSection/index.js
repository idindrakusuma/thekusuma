import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { photos } from './photo-data';

function PhotoSection() {
  const renderImageGalerry = () => {
    return <ImageGallery items={photos} showBullets={false} />;
  };

  return (
    <div id="fh5co-testimonial" className="fh5co-section-gray">
      <div className="container">
        <div className="row">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font">#TheKusuma</h2>
              <p className="sub-title">
                "And of His signs is that He created for you from yourselves mates that you may find tranquility in
                them; and He placed between you affection and mercy. Indeed in that are signs for a people who give
                thought" <br />
                (Ar-Rum 30:21).
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">{renderImageGalerry()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoSection;
