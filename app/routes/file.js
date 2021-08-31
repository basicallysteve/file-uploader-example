let express = require("express");
let router = express.Router();
let {uploadFile} = require("../tasks/FileUploader");
let TaskRunner = require("../helpers/TaskRunner");
let PayloadResponse = require("../helpers/Response");
router.post('/upload', function(req, res) {
    let file;
    
  
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }
  
    // The name of the input field (i.e. "file") is used to retrieve the uploaded file
    file = req.files.file;
    let payload = new PayloadResponse();
    payload.append('file', file);
    let runner = new TaskRunner(payload,[uploadFile]);
    let response = runner.run();
    if(response.respond().data instanceof Error){
        res.status(500).send(response.respond());
        return;
    }
    res.status(200).send(response.respond());
});


module.exports = router;