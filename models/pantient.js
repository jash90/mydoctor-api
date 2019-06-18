const Sequelize = require('sequelize');
const sequelize = require('../db/index');
const Visit = require('./visit');
class Pantient extends Sequelize.Model { }
Pantient.init(
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstname: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: { notEmpty: true },
        },
        lastname: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: { notEmpty: true },
        },
        postcode: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: { notEmpty: true, len: [6] },
        },
        street: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: { notEmpty: true, },
        },
        city: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: { notEmpty: true, },
        },
        phone: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: { notEmpty: true, len: [9] },
        },
        pesel: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
            validate: { notEmpty: true, len: [11] },
        },
    }, { timestamps: false, sequelize, modelName: 'pantient' });

Pantient.associate = (models) => {
    Pantient.belongsToMany(models.Visit, { as: 'Visit', through: models.Visit, foreignKey: 'idPantient' });
}

module.exports = Pantient;