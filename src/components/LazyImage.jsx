import { useState, useEffect, useRef } from "react";

export default function LazyImage({
  src,
  alt,
  className = "",
  objectFit = "cover",
  width,
  height,
  onLoad = () => {},
}) {
  const [imageSrc, setImageSrc] = useState(null);
  const [imageRef, setImageRef] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let observer;
    let img;

    if (imageRef) {
      // Create a new image element to preload
      img = new Image();

      // Intersection Observer for lazy loading
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Load the image
              setImageSrc(src);
              observer.unobserve(imageRef);
            }
          });
        },
        {
          rootMargin: "50px", // Start loading 50px before the image comes into view
        }
      );

      observer.observe(imageRef);
    }

    return () => {
      if (observer && imageRef) {
        observer.unobserve(imageRef);
      }
    };
  }, [imageRef, src]);

  const handleImageLoad = () => {
    setIsLoaded(true);
    onLoad();
  };

  return (
    <img
      ref={setImageRef}
      src={imageSrc}
      alt={alt}
      className={`transition-opacity duration-500 ${
        isLoaded ? "opacity-100" : "opacity-0"
      } ${className}`}
      style={{
        objectFit,
        width,
        height,
      }}
      onLoad={handleImageLoad}
      loading="lazy"
    />
  );
}
