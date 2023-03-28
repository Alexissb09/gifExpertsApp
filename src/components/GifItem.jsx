export const GifItem = ({ title, url }) => {
  return (
    <div className="card animate__animated animate__zoomInUp">
      <br />
      <img src={url} alt={`gif-${title}`} />
      <p>{title}</p>
    </div>
  );
};
