const express = require('express');
const router = express.Router();
const faker = require('faker');
const Product = require('../../models/Product');
const Category = require('../../models/Category');

router.get('/', function (req, res, next) {
	const categories = ["liquid", "accessory", "Mod", "Meca", "RTA","RTDA", "Dripper"];
	const brands = ["Vaporesso", "DotMod", "Swiss Vape", "Twelve Monkeys", "Aspire"];
    
    for (let i = 0; i < 35; i++) {
        let product = new Product({
            name : faker.commerce.productName(),
            brand : brands[Math.floor(Math.random() * categories.length)],
            price : faker.commerce.price(),
            category: categories[Math.floor(Math.random() * categories.length)],
            description : faker.lorem.paragraph(),
            image: i++ + ".jpg"
        });
        
        product.save();
    }
    for (let i = 0; i < categories.length; i++) {
        let cat = new Category({
            title: categories[i]
        });
        cat.save();
    }
    res.redirect('/')
});


module.exports = router;
