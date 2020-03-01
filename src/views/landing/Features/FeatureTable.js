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
            <td>Track Work Orders</td>
            <td>✔</td>
            <td>✔</td>
            <td>✔</td>
          </tr>
          <tr className="tableRow">
            <td>Accept Payments</td>
            <td />
            <td>✔</td>
            <td>✔</td>
          </tr>
          <tr className="tableRow">
            <td>Document Uploading</td>
            <td />
            <td>✔</td>
            <td>✔</td>
          </tr>
          <tr className="tableRow">
            <td>Messaging Services</td>
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
