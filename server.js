// var path = require("path");
// var app = require('express')();
// var server = require('http').Server(app);
var request = require('request');
var fMgr = require('./fileMgr');
var dbMgr = require('./dbMgr');
// var fs = require('fs');

function start() {
    'use strict';
    var url = 'https://play-entry.org/log/activityList/';
    var fromT = '2016-06-14T00:00:00.000Z/';
    var toT =   '2016-06-14T02:00:00.000Z';

    request(url + fromT + toT, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            // console.log(body); // Print the google web page.
            fMgr.saveJson(body);
            // var jdata = JSON.parse(body);
            // jdata.forEach(function (log) {
            //     // console.log(log._id);
            //     dbMgr.insert(log, "entry_2016", "raw_log");
            // });
        }
    });
}

exports.start = start;