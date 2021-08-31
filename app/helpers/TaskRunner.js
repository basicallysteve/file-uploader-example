class TaskRunner {
    constructor(payload = {},tasks = []){
        this.payload = payload;
        this.tasks = tasks
    }


    run(){
        let payload = this.payload
        for(let task of this.tasks){
            payload = task(payload);
        }

        return payload;
    }
}

module.exports = TaskRunner;