function BasicServer () {
    let stateObjects = [{ondo: "a"}];

    const findStateObject = (stateObject) => {
        let stateObjectIndex;
        const stateObjectKeys = Object.keys(stateObject);
        stateObjectKeys.map((stateName) => {
            stateObjects.find((stateObject, index) => {
                if (Object.keys(stateObject).find((state) => state === stateName)) {
                    stateObjectIndex = index;
                }
            });
        });
        return stateObjectIndex;
    }
    
    this.getRequest = (request, response) => {
        response.status(200).send(stateObjects);
    }
    
    this.postRequest = (request, response) => {
        if ((Object.keys(request.body).length > 0)) {
            stateObjects.push(request.body);
            response.status(201).send(request.body);
        } else {
            response.status(400).send({status : false});
        }
    }
    
    this.putRequest = (request, response) => {
        if ((Object.keys(request.body).length > 0)) {
            const stateObjectIndex = findStateObject(request.body);
            stateObjects[stateObjectIndex] = request.body;
            response.status(201).send(request.body);
        } else {
            response.status(400).send({status : false});
        }
    }
    
    this.deleteRequest = (request, response) => {
        if ((Object.keys(request.body).length > 0)) {
            const stateObjectIndex = findStateObject(request.body);
            stateObjects = stateObjects.filter((stateObject, index) => index !== stateObjectIndex);
            response.status(201).send(stateObjects);
        } else {
            response.status(400).send({status : false});
        }
    }
};

module.exports.BasicServer = BasicServer;