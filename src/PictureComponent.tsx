import "./PictureComponent.css";

const PictureComponent = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="picture-frame">
      <img
        className="picture-img"
        src={src}
        alt={alt || "Framed Picture"}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};

export default PictureComponent;
