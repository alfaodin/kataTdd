import database from "../../testing_utils/database";
import abstractModel from "../model";

import { Schema, model } from 'mongoose';

describe('Model', () => {  
  let mongoogse_model;
  beforeAll(() =>{
    const test_collection_schema = new Schema({
      name:  String
    }, {collection: 'test_collection'});

    mongoogse_model = model('test_collection', test_collection_schema);
  });

  beforeEach((done) => {
    database.clearAndLoad([
      `${__dirname}/../../fixtures/test_collection.js`,
      `${__dirname}/../../fixtures/users_collection.js`
    ], done);
  });

  it('should get all test collections', async () => {
    const model_instance = abstractModel(mongoogse_model);

    expect(model_instance.find).toBeDefined();

    const model_data = await model_instance.find();
    expect(model_data.length).toBe(2);
    expect(model_data[0].name).toEqual('data1');

  });

  it('should return a query test collection', async () => {
    const model_instance = abstractModel(mongoogse_model);

    const model_data = await model_instance.find({name: 'data2'});
    expect(model_data.length).toBe(1);
    expect(model_data[0].name).toEqual('data2');

  });
});
