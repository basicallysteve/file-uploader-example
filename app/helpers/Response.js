class Response {
    constructor(){
        this.data = {

        }
    }

    append(field, value){
        this.data[field] = value;
    }

    remove(field){
        delete this.data[field];
    }
    respond(){
        return {
            data: this.data
        }
    }
}

module.exports = Response