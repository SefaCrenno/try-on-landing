const TryOnPreview = ({ resultImage }: { resultImage: string }) => {
  if (!resultImage) return null;

  return (
    <div>
      <h2>Try-On Result</h2>
      <img src={`data:image/png;base64,${resultImage}`} alt="Try-On Result" />
    </div>
  );
};

export default TryOnPreview;
