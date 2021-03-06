import React from 'react';

const ProgressBarInfo = () => (
  <div className="container-fluid progress-nav text-uppercase d-flex justify-content-center">
    <div className="container d-none d-md-block" align="center">
      <div className="row mx-4">
        <div className="col my-3" align="center">
          <div className="circle current-circle large-circle inline-block">1</div>
          <p className="lg-progress-text current-text">businnes info</p>
        </div>
        <div className="col my-3" align="center">
          <div className="circle incomplete-circle large-circle inline-block">2</div>
          <p className="lg-progress-text incomplete-text">operations</p>
        </div>
        <div className="col my-3" align="center">
          <div className="circle incomplete-circle large-circle inline-block">3</div>
          <p className="lg-progress-text incomplete-text">data management</p>
        </div>
        <div className="col my-3" align="center">
          <div className="circle incomplete-circle large-circle inline-block">4</div>
          <p className="lg-progress-text incomplete-text">contact info</p>
        </div>
      </div>
    </div>

    <div className="container d-block d-md-none d-lg-none d-xl-none" align="center">
      <div className="row mx-0">
        <div className="col px-0 my-3" align="center">
          <div className="circle current-circle small-circle inline-block">1</div>
          <p className="sm-progress-text current-text">info</p>
        </div>
        <div className="col px-0 my-3" align="center">
          <div className="circle incomplete-circle small-circle inline-block">2</div>
          <p className="sm-progress-text incomplete-text">operations</p>
        </div>
        <div className="col px-0 my-3" align="center">
          <div className="circle incomplete-circle small-circle inline-block">3</div>
          <p className="sm-progress-text incomplete-text">data</p>
        </div>
        <div className="col px-0 my-3" align="center">
          <div className="circle incomplete-circle small-circle inline-block">4</div>
          <p className="sm-progress-text incomplete-text">contact</p>
        </div>
      </div>
    </div>
  </div>
);

export default ProgressBarInfo;
