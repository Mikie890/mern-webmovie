// Desc: Options for Mongoose models
const modelOptions = {
    // Add virtuals to JSON and Object
    toJSON: {
        virtuals: true,
        transform: (_, obj) => { // Remove _id from JSON
            delete obj._id;
            return obj;
        }
    },
    toObject: {
        virtuals: true,
        transform: (_, obj) => { 
            delete obj._id;
            return obj;
        }
    },
    versionKey: false,// Remove __v from JSON
    timestamps: true // Add createdAt and updatedAt to schema
}

export default modelOptions;