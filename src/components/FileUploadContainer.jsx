import React from 'react';
import FileUploadDialog from './FileUploadDialog.jsx';
import csvReader from '../csv-reader';

export default React.createClass({
  render: function render() {
    return (
      <FileUploadDialog submit={(file) => {
        csvReader.parseFile(file)
        .then(function(res) {
          console.dir(res);
        });
      }}/>
    );
  }
});
