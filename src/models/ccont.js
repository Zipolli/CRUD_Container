//Define a utilização Sequelize
const Sequelize = require('sequelize');

//Obtem os dados de conexão
const sequelize = require('../database/database.js');

//Cria tabela no BD e seus campos
const ccont = sequelize.define("ccont", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    cliente: {
        allowNull: false,
        type: Sequelize.STRING(250),
        validate: {
            len: [3, 250]
        }
    },
    n_cont: {
        allowNull: false,
        type: Sequelize.STRING(4),
        
    },
    l_cont: {
        allowNull: false,
        type: Sequelize.INTEGER(7),
    },

    tipo: {
        allowNull: false,
        type: Sequelize.BOOLEAN(),
        defaultValue: true
    },

    sts: {
        allowNull: false,
        type: Sequelize.BOOLEAN(),
        defaltValue: true
    },
    categ: {
        allowNull: false,
        type: Sequelize.BOOLEAN(),
        defaultValue: true
    },

});

module.exports = ccont;
