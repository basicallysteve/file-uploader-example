let File = require("../../database/models/File");

async function create(payload){
    let {data} = payload.respond();
    let record = {
        record_type: data.record_type ?? "File",
        record_id: data.record_id,
        path: data.path
    }


    let file = await File.create(record);
    file = file.toJSON()
    for(let field in file){
        payload.append(field, file[field]);
    }
    return payload;
}


module.exports = {create};