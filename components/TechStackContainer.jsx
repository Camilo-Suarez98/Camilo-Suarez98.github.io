import React from 'react';

const TechStackContainer = ({ technologyName, imageUrl }) => {
  return (
    <div className="tooltip projects flex flex-col place-items-center p-8 rounded-3xl cursor-pointer" data-tip={technologyName}>
      <img className="w-48" src={imageUrl} alt={technologyName} />
    </div>
  );
};

export default TechStackContainer;
