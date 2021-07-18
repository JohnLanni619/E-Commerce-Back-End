// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'id',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'id'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, { through: 'Product_Tag', foreignKey: 'id'});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, { through: 'Product_Tag', foreignKey: 'id'});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
