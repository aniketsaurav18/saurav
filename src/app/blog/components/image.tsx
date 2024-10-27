import { Caption } from "./caption";

export function Image({
  src,
  alt = "",
  width,
  height,
}: {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}) {
  return (
    <span className="my-5 flex flex-col items-center">
      <img
        src={src}
        alt={alt}
        width={width} // Use provided width
        height={height} // Use provided height
        style={{ objectFit: "cover" }} // Optional: for better control over the image display
        className="py-0 my-0"
      />
      {alt && <Caption>{alt}</Caption>}
    </span>
  );
}
