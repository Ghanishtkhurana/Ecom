const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Please Enter the product name"] },
  description: {
    type: String,
    required: [true, "Please Enter the description"],
  },
  price: {
    type: Number,
    required: [true, "Please Enter the Price of the product"],
    maxLength: [8, "Price cannot exceed 8 characters"],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category : {
    type : String ,
    required : [true ,"Please Enter Product category"]
  } ,
  stock : {
    type : Number ,
    required : [true , "Please Enter Stock of the products"] ,
    maxLength : [4,"Stock length cannot exceed 4 characters "],
    default : 1
  },
  numOfReviews : {
    type : Number ,
    default : 0
  } ,
  reviews : [
    {
        name : {
            type : String ,
            required : true 
        } ,
        rating : {
            type : Number ,
            required : true
        },
        comment : {
            type : String ,
            required : true
        }
    }
  ] ,
  createdAt : {
    type : Date ,
    default : Date.now
  }
});

const productModel = mongoose.model("product",productSchema)

module.exports = productModel
