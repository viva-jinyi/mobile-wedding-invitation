import { useEffect, useState } from 'react';
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/style.css';
import images from '@/layout/Gallery/Images.ts';

const PhotoGallery = () => {
  const smallItemStyles: React.CSSProperties = {
    cursor: 'pointer',
    objectFit: 'contain',
    width: '100%',
  };
  const imageStyles: React.CSSProperties = {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  };

  const [imageSizes, setImageSizes] = useState(
    images.map(() => ({ width: 1280, height: 1320 })), // 기본값 설정
  );

  useEffect(() => {
    // 이미지의 실제 크기를 계산하여 설정
    images.forEach((image, index) => {
      const img = new Image();
      img.src = image.source;
      img.onload = () => {
        setImageSizes((sizes) => {
          const newSizes = [...sizes];
          newSizes[index] = { width: img.width, height: img.height };
          return newSizes;
        });
      };
    });
  }, []);

  return (
    <Gallery>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridGap: 2,
        }}>
        {images.map((image, index) => {
          const { width, height } = imageSizes[index];
          return (
            <Item
              key={index}
              cropped
              original={image.source}
              thumbnail={image.source}
              width={width}
              height={height}>
              {({ ref, open }) => (
                <div style={smallItemStyles}>
                  <img
                    alt={image.alt}
                    src={image.source}
                    style={imageStyles}
                    ref={ref as React.MutableRefObject<HTMLImageElement>}
                    onClick={open}
                  />
                </div>
              )}
            </Item>
          );
        })}
      </div>
    </Gallery>
  );
};

export default PhotoGallery;
