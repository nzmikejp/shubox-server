var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorySchema = new Schema(
    {
        id: Number,
        name: String,
        color: String,
    },
    {
        timestamps: true,
        toJSON: {virtuals: true}
    }
)

categorySchema.virtual('listings', {
    ref:'Listing',
    localField: 'id',
    foreignField: 'category_id',
    justOne: false,
})

module.exports = mongoose.model('Category', categorySchema)