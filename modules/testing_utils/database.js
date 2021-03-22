import mongoose  from 'mongoose';
import { connect } from 'pow-mongodb-fixtures';

export default {
    clearAndLoad: async(path_fixtures, callback) => {
        const fixtures_connection = connect('kataTDDtest');
    
        await mongoose.connect('mongodb://localhost:27017/kataTDDtest');

        let data = {};
        for (const fixture of path_fixtures) {

            const fixture_data = require(fixture);
            // data = {...data, fixture_data};
            Object.assign(data, fixture_data);
        }
        
        fixtures_connection.clearAndLoad(data, (error) => {
            if(!error){
                callback();
            }
        });
        
        callback();
    }
}