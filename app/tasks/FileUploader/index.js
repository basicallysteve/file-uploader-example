let {uploadFile, isExcelFile, isImageFile} = require("./UploadFile");
let {create} = require("./NewFile")
let {get} = require("./Get");
module.exports = {
    create,
    get,
    uploadFile,
    isExcelFile, isImageFile
}