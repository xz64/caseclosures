import Papa from 'papaparse';

export default {
  parseFile: function parseFile(file) {
    return new Promise(function pParseFile(resolve, reject) {
      let reader = new FileReader();

      reader.onload = function onload() {
        var result = [];
        Papa.parse(reader.result, {
          header: true,
          skipEmptyLines: true,
          step: function step(results, parser) {
            let row = results.data[0];
            result.push({
              number: row['Number'],
              createddate: row['Date Created'],
              closeddate: row['Date Closed'],
              assignedto: row['Assigned To']
            })
          },
          complete: function complete(results, file) {
            resolve(result);
          }
        });
      };

      reader.readAsText(file, 'utf8');
    });
  }
};
