'use client'
import React, { useState } from 'react'

type ProductGalleryProps = {
  images: string[];
  title: string;
};

export default function ProductGallery({ images, title }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex flex-col gap-3">

      {/* main image */}
      <div className="w-full p-3 pb-0">
        <img
          src={images[selectedImage]}
          alt={title}
          className="w-full rounded-lg object-cover"
        />
      </div>

      {/* thumbnails */}
      <div className="flex gap-3 px-3 pb-3">
        {images.slice(0, 4).map((img, i) => (
          <div
            key={i}
            onClick={() => setSelectedImage(i)}
            className={`w-30 h-auto cursor-pointer overflow-hidden border-4 transition-all duration-200
              ${
                selectedImage === i
                  ? "border-[#337AB7] "
                  : "border-transparent hover:border-[#337AB7]"
              }`}
          >
            <img
              src={img}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

    </div>
  );
}