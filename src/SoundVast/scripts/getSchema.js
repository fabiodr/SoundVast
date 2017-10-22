/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */

require('isomorphic-fetch');
const getArgs = require('get-args');
const FormData = require('form-data');
const fs = require('fs');
const {
  buildClientSchema,
  introspectionQuery,
  printSchema,
} = require('graphql/utilities');
const path = require('path');

const schemaPath = path.join(__dirname, '../schema/schema');
const formData = new FormData();

formData.append('query', introspectionQuery);
const args = getArgs();
const url = args.options.url;

let intervalId = null;

// Save JSON of full schema introspection for Babel Relay Plugin to use
const setSchema = () => {
  fetch(url, {
    method: 'post',
    body: formData,
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(res.statusText);
    })
    .then((schemaJSON) => {
      fs.writeFileSync(
        `${schemaPath}.json`,
        JSON.stringify(schemaJSON, null, 2),
      );

      // Save user readable type system shorthand of schema
      const graphQLSchema = buildClientSchema(schemaJSON.data);

      fs.writeFileSync(
        `${schemaPath}.graphql`,
        printSchema(graphQLSchema),
      );

      clearInterval(intervalId);
      console.log('Successfuly updated schema.');
    })
    .catch(() => {
      console.log('Cannot connect to server... Retrying.');
    });
};

intervalId = setInterval(setSchema, 1000);
