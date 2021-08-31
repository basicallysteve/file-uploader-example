function isImageFile(fileName = ''){
    return process.env.ACCEPTED_IMAGE_TYPES.split(',').some(extension => fileName.toLowerCase().endsWith(extension));
}

function isExcelFile(fileName = ''){
    return process.env.ACCEPTED_EXCEL_TYPES.split(',').some(extension => fileName.toLowerCase().endsWith(extension));
}

function uploadFile(payload){
    let {file} = payload?.data;
    let path = require("path");
    const DIR = isImageFile(file.name) ? process.env.IMAGE_DIR : isExcelFile ? process.env.EXCEL_DIR : null
    if(DIR){
    let test = file.mv(path.join(DIR, file.name), function(err){
        if(err){
            return err
        }
      
    })
        payload.append('path', path.join(DIR, file.name));
        payload.remove('file');
        return payload;
    }else{
        throw new Error('Invalid file type');
    }
}

module.exports = {
    uploadFile
}