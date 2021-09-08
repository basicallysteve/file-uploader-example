let File = require("../../database/models/File");
let QueryBuilder = require('../../helpers/QueryBuilder');
let { Op } = require("sequelize");
async function get(payload){
    let query = QueryBuilder(payload.data.url)
    if(payload.data.url.includes("filter[is_image]")) query.where = {
        ...query.where,
        [Op.or]: process.env.ACCEPTED_IMAGE_TYPES.split(",").map(extension => {
            return {
                path: {
                    [Op.endsWith]: extension
                }
            }
        })
    }

    if(payload.data.url.includes("filter[is_excel]")) query.where = {
        ...query.where,
        [Op.or]: process.env.ACCEPTED_EXCEL_TYPES.split(",").map(extension => {
            return {
                path: {
                    [Op.endsWith]: extension
                }
            }
        })
    }

    let files = await File.findAll(query);
    files = JSON.parse(JSON.stringify(files));
    for(let file of files){
        let filePath = file.path.split("/")
        file.name = file.path.split("/")[filePath.length -1];
    }
    payload.remove("url")
    payload.append("data", files);
    return payload;
}

module.exports = {
    get
}