const id = require('mongoose').Types.ObjectId;

exports.test_collection = [
    {
        _id: id(),
        name: 'data1'
    },
    {
        _id: id(),
        name: 'data2'
    }
]