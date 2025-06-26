const SinglePage = ({ pageData }) => {
  if (!pageData) return "data tidak ada";

  return (
    <div className="single-page">
      {pageData.thumbnail_url && (
        <div className="page-thumbnail mb-3">
          <img
            src={pageData.thumbnail_url}
            width={200}
            height={100}
            alt={pageData.title}
            className="height-auto"
          />
        </div>
      )}
      {pageData.content && (
        <div className="page-thumbnail mb-3">
          <div dangerouslySetInnerHTML={{ __html: pageData.content }} />
        </div>
      )}
    </div>
  );
};

export default SinglePage;
