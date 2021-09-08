const { Op } = require("sequelize");

function query(queryString = ""){
    let url = new URL(`http://fakeurl?${queryString}`);
    let params = url.searchParams;

    let query = {
        where: {

        },
        limit: 20
    }

    params.forEach(param => {
        let filterOption = param.substring(0, param.indexOf('['));
        let filterColumn = param.substring(param.indexOf('[')+1, param.indexOf(']'));
        switch(filterOption){
            case "filter":
                query.where[filterColumn] = {
                    [Op.eq]: params.get(param)
                }
            break;
            case "filter_not":
                query.where[filterColumn] = {
                    [Op.not]: params.get(param)
                }
            break;
            case "filter_like":
                query.where[filterColumn] = {
                    [Op.like]: params.get(param)
                }
            break;
            case "filter_not_like":
                query.where[filterColumn] = {
                    [Op.notLike]: params.get(param)
                }
            break;
            default:
                break;
        }
    })

    return query;
}



module.exports = query