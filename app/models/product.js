module.exports = mongoose => {
  var schema =
    mongoose.Schema(
      {
        name: String,
        brand: String,
        price: Number,
        category: String,
        description: String,
        image: String,
      }
    );
    
  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Product = mongoose.model("product", schema);
  return Product;
};