var jsonfile = require('jsonfile');
var fs = require('fs');

var file = './log/';

function saveJson(data) {
    'use strict';
    // console.log(data.userId);
    //json does not support concatenation of two json without any other method
    //which is obvious
    //so it would be better to save json data in a text file

    // file = file + data.userId;
    file = file + (Date.now() / 1000 | 0)
    // jsonfile.writeFile(file + '.json', data, function (err) {
    //     console.error(err);
    // });

    // fs.appendFile(file + '.txt', JSON.stringify(data), function (err) {
    fs.appendFile(file + '.txt', data, function (err) {    
        console.error(err);
    });

    console.log('raw log is saved to file');
    // console.log(data);
    file = './log/';
}

exports.saveJson = saveJson;