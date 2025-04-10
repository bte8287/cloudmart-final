const { BigQuery } = require('@google-cloud/bigquery');

exports.handler = async (event) => {
  const bigquery = new BigQuery();
  
  // Your BigQuery code here
  // ...
  
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Data added to BigQuery successfully' })
  };
};
