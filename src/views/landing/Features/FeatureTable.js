import React from 'react';
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
          <tr className="tableRow">
            <td>Track work orders</td>
            <td>✔</td>
            <td>✔</td>
            <td>✔</td>
          </tr>
          <tr className="tableRow">
            <td>Accept payments</td>
            <td />
            <td>✔</td>
            <td>✔</td>
          </tr>
          <tr className="tableRow">
            <td>Document uploading</td>
            <td />
            <td>✔</td>
            <td>✔</td>
          </tr>
          <tr className="tableRow">
            <td>Messaging services</td>
            <td />
            <td />
            <td>✔</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FeatureTable;
