const { model, Schema } = require('../connection');

const mySchema = new Schema({
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: String,
    msg: { type: String, require: true },
    createdAt: { type: Date, default: Date.now }
})
model.exports = model('feedback', mySchema);