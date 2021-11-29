import ElasticSearchBox from "../components/elastic-search-box";

function ElasticSearch() {
  return (
    <div className="elastic-search">
      <div className="py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">Elastic-V-Store</h1>
        <div className="col-lg-12 mx-auto">
          <p className="lead mb-2">transactions, bills and many more</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <div className="row searchbar-div">
              <div className="col-sm-12">
                <ElasticSearchBox />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ElasticSearch;
