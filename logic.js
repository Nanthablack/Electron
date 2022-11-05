const { Plugin } = require('../controller/plugin');
const axios = require('axios');
class Logic {

    customerLogic = (customer, res) => {
        new Plugin().customerPlugin(customer, res);
    }

    chiropractorLogic = (chiropractor, res) => {
        new Plugin().chiropractorPlugin(chiropractor, res);
    }

}
module.exports = {
    Logic
}