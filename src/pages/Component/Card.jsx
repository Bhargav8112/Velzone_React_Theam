import React from 'react';

const Card = ({ title, iconClass, counterValue, additionalClass }) => {
  return (
    <div className={`card crm-widget ${additionalClass}`} style={{ width: "65%" }}>
      <div className="card-body p-0 ">
        <div className="row row-cols-md-3 row-cols-1">
          <div className="col col-lg">
            <div className="py-4 px-3">
              <h5 className="text-muted text-uppercase fs-13">
                {title}{" "}
                <i className="ri-arrow-up-circle-line text-success fs-18 float-end align-middle" />
              </h5>
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <i className={`${iconClass} display-6 text-muted`} />
                </div>
                <div className="flex-grow-1 ms-3"> 
                  <h2 className="mb-0">
                    <span className="counter-value">{counterValue}</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end row */}
      </div>
      {/* end card body */}
    </div>
  );
};

export default Card;
