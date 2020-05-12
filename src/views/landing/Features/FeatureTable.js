import React from 'react';
import features from './FeatureList';
import FeatureButtons from './FeatureButtons';
import './features.scss';

const FeatureTable = () => {
  return (
    <div className="featureTableWrapper">
      <table className="featureTable">
        <thead className="featureTiersWrapper">
          <tr className="featureTiers">
            <th />
            <th>Free</th>
            <th>$49/mo</th>
            <th>$99/mo</th>
          </tr>
        </thead>
        <tbody className="featureTableBodyWrapper">
          {features.map(({ feature, free, middle, premium }) => (
            <tr key={feature} className="tableRow">
              <td className="featureName">{feature}</td>
              <td>{free === true ? '✔' : ''}</td>
              <td>{middle === true ? '✔' : ''}</td>
              <td>{premium === true ? '✔' : ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <FeatureButtons />
    </div>
  );
};

export default FeatureTable;
