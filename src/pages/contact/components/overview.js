import React from 'react';

const OverviewComponent = ({ connectWithUs, embarkJourney, virtualDoorsOpen, exploreWonders, sharedCuriosity }) => {
  return (
    <div className="flex-shrink-0 lg:w-1/2">
      <div className="text-center ltr:lg:text-left rtl:lg:text-right lg:w-1/2 mx-auto">
        <h1 className="text-xl font-bold text-cBlack">{connectWithUs}</h1>
        <br/>
        <p>{embarkJourney}</p>
        <br />
        <p>{virtualDoorsOpen}</p>
        <br />
        <p>{exploreWonders}</p>
        <br />
        <p className="font-bold italic">{sharedCuriosity}</p>

        <br/>
        <br/>
        <img src="assets/contact/illustrations.svg" alt="illustration" style={{ maxHeight: "250px", maxWidth: "250px", width: "100%", height: "auto" }}/>
      </div>
    </div>
  );
};

export default OverviewComponent;
