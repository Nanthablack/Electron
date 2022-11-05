const express = require("express");
const connection = require('../model/database.connect/connector')
class Plugin {

    customerPlugin = (customer, res) => {
        let sql = `INSERT INTO customer
        (
            customer_id,
            name,
            Request
        )
        VALUES
        (
            ?, ?, ?
        )`
        connection.query(
            sql, [
                customer.customer_id,
                customer.name,
                customer.Request,
            ],
            function(err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("insert A finish");
                    res.redirect('/');
                }
            }
        )
    }

    chiropractorPlugin = (chiropractor, res) => {
        let sql = `INSERT INTO chiropractor
        (
            chiropractor_id,
            name,
            skill
        )
        VALUES
        (
            ?, ?, ?
        )`
        connection.query(
            sql, [
                chiropractor.chiropractor_id,
                chiropractor.name,
                chiropractor.skill,
            ],
            function(err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("insert A finish");
                    res.redirect('/');
                }
            }
        )
    }

}
module.exports = {
    Plugin
}