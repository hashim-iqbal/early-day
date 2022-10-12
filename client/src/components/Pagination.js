const Pagination = ({ pageInfo, setPage }) => {
  const { count } = pageInfo
  const page = parseInt(pageInfo.page)
  const pages = Math.ceil(count / 5)

  const onPageChange = (type) => {
    if (type === 'next') return page + 1 <= pages && setPage(page + 1)
    if (type === 'prev') return page - 1 > 0 && setPage(page - 1)

    setPage(type)
  };
  
  return (
    <div
      className="d-flex justify-content-center"
      style={{ marginTop: "1rem" }}
    >
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" onClick={() => onPageChange("prev")}>
              Previous
            </a>
          </li>

          {[...Array(pages)].map((el, index) => (
            <li className={`page-item ${index + 1 === page ? "active" : null}`}>
              <a
                className="page-link"
                onClick={() => onPageChange(index + 1)}
              >
                {index + 1}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a className="page-link" onClick={() => onPageChange("next")}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
