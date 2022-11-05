const { Logic } = require('./logic');
const models = require('../model/model');

class Endpoint {

    constructor() {
         
        this.datacustomer = models.datacustomerModel;
        this.datachiropractor = models.datachiropractorModel;
    }

    customerEndpoint = (req, res) => {   
        this.datacustomer.customer_id = req.body.customer_id;
        this.datacustomer.name = req.body.name;
        this.datacustomer.Request = req.body.Request;
        new Logic().customerLogic(this.datacustomer, res);
    }

    chiropractorEndpoint = (req, res) => {   
        this.datachiropractor.chiropractor_id = req.body.chiropractor_id;
        this.datachiropractor.name = req.body.name;
        this.datachiropractor.Request = req.body.skill;
        new Logic().chiropractorLogic(this.datachiropractor, res);
    }

}
module.exports = {
    Endpoint
}