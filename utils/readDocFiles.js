const WordExtractor = require("word-extractor");
const extractor = new WordExtractor();

const mammoth = require("mammoth");

const _readFile = () => {
  const extracted = extractor.extract("uploads/timeTable.docx");
  extracted.then(function(doc) { 
    const body = doc.getBody();
    const textBoxes = doc.getTextboxes({includeHeadersAndFooters: false});
    console.log("textBoxes", textBoxes);
  });

  // mammoth.convertToHtml({path: "uploads/timeTable.docx"})
  //   .then(function(result){
  //       var html = result.value; // The generated HTML
  //       var messages = result.messages; // Any messages, such as warnings during conversion
  //   })
  //   .catch(function(error) {
  //       console.error(error);
  //   });

  // mammoth.extractRawText({path: "uploads/timeTable.docx"})
  //   .then(function(result){
  //       var text = result.value; // The raw text
  //       var messages = result.messages;
  //   })
  //   .catch(function(error) {
  //       console.error(error);
  //   });
}


module.exports = _readFile;