export default function (mongoose_model) {
    return{
        find: (params) => {
            return mongoose_model.find(params);
        }
    }
};
