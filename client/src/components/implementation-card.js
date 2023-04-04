export default function ImplementationCard() {
  return (
    <>
      <article className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Implementation name</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            vulputate nisi sit amet nunc mollis, ut placerat enim tincidunt.
            Vivamus a elementum lectus.
          </p>
          <div
            className="progress mb-3"
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-bar" style={{ width: '25%' }}>
              25%
            </div>
          </div>
          <div className="row">
            <div className="col-4 d-flex text-info">
              <span className="material-symbols-outlined me-1">apartment</span>
              Wells
            </div>
            <div className="col-4 d-flex text-info">
              <span className="material-symbols-outlined me-1">fact_check</span>
              24 / 25
            </div>
            <div className="col-4 d-flex justify-content-end text-danger">
              <span className="material-symbols-outlined">ecg_heart</span>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
