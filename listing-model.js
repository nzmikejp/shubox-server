var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var listingSchema = new Schema(
    {
        id: Number,
        name: String,
        description: String,
        price: Number,
        gender: String,
        photo: String,
        type_id: Number,
        user_id: Number,
        brand:String
    },
    {
        timestamps: true,
        toJSON: {virtuals: true}
    }
)

listingSchema.virtual('type', {
    ref: 'Type',
    localField: 'type_id',
    foreignField: 'id',
    justOne: true,
})

module.exports = mongoose.model('Listing', listingSchema)