const mongoose = require('mongoose')
// Get the schema from the mongoose object
// The schema defines the structure of teh documents that we store
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, {timestamps: true })

// Create a modal based on the above blogSchema to communicate with the database
const Blog = mongoose.model


('Blog', blogSchema)

module.exports = Blog