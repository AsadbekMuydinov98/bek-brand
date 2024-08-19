import { baseUrl } from "../../../../constants";

const CardImage = ({image}) => {
  const imageSrc = Array.isArray(image) ? image[0] : image;

  const src = `${baseUrl}/${imageSrc}`;
  return (
    <div className="horizontal-image">
      <img
        src={src}
        alt={src}
      />
    </div>
  )
}

export default CardImage
