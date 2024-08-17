"use client";
import Image from "next/image";
import ImageGallery from "react-image-gallery";
import styles from "./styles.module.scss";

const imagesCount = 4;

const images = Array.from({ length: imagesCount }, (_, i) => ({
  original: `/images/${i + 1}.jpg`,
}));

export const ImageSlider = () => {
  return (
    <div className={styles.galleryContainer}>
      <ImageGallery
        items={images}
        showPlayButton={false}
        showThumbnails={false}
        showFullscreenButton={false}
        additionalClass={styles.gallery}
        renderItem={(item) => (
          <img src={item.original} className={styles.image} alt="" />
        )}
      />
    </div>
  );
};
