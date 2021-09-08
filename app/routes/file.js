let express = require("express");
let router = express.Router();
let {create, uploadFile, get, isExcelFile, isImageFile} = require("../tasks/FileUploader");
let TaskRunner = require("../helpers/TaskRunner");
let PayloadResponse = require("../helpers/Response");

router.post('/upload', function(req, res) {
    let file;
    if (!req.files || Object.keys(req.files).length === 0) {
      let errorPayload = new PayloadResponse();
      errorPayload.append('message', 'No files were uploaded.')
      return res.status(400).send(errorPayload.respond());
    }
  
    // The name of the input field (i.e. "file") is used to retrieve the uploaded file
    file = req.files.file;
    let payload = new PayloadResponse();
    payload.append('file', file);
    let runner = new TaskRunner(payload,[uploadFile, create]);
    let promisedResponse = runner.run();

    promisedResponse.then(response=>{
      if(response.respond().data instanceof Error){
        res.status(500).send(response.respond());
        return;
      }
      res.status(200).send(response.respond());
    })  
   
});

router.get("/files/:path", function(req, res){
  let filePath = req.params.path;
  let path = require("path");
  const DIR = isImageFile(filePath) ? process.env.IMAGE_DIR : isExcelFile(filePath) ? process.env.EXCEL_DIR : null
  console.log
  res.status(200).sendFile(path.join(__dirname, '..','..', DIR, filePath));
})


router.get("/files", async function(req, res){
  let payload = new PayloadResponse();
  payload.append('url', req.originalUrl);
  let runner = new TaskRunner(payload, [get]);
  let response = await runner.run();

  res.status(200).send(response.respond().data);
})
module.exports = router;