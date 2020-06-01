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
              <span>Our Memories</span>
              <h2 className="main-font">Photo Gallery</h2>
              <p className="sub-title">
                "Marriage is a gift from God, the quality of marriage is our gift to God" <br /> - L.W. Clayton -
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
