var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
// var ObjectId = require('mongodb').ObjectID;
var url_base = 'mongodb://localhost:27017/';

function insert(data, database, collection) {
    'use strict';
    var url = url_base + database;

    var insertDocument = function (db, callback) {
        db.collection(collection).insertOne(data, function (err, result) {
            assert.equal(err, null);
            console.log("Insert a document into " + database + "." + collection);
            callback(result);
        });
    };

    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);
        insertDocument(db, function () {
            db.close();
        });
    });
}

exports.insert = insert;