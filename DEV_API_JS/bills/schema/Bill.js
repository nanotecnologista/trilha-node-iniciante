import mongoose  from 'mongoose' 

const Bill = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category:{
        type: mongoose.Schema.Types.ObjectID,
        ref: 'Category',
        required: true
    },
    cep:{
        type:String
    },
    status: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model('Bill', Bill)