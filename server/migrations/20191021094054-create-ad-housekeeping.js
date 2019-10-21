'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('ad_housekeepings', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            ad_client_id: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            ad_org_id: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            ad_table_id: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            backupfolder: {
                allowNull: false,
                type: Sequelize.STRING
            },
            created: {
                allowNull: true,
                type: Sequelize.DATE
            },
            description: {
                type: Sequelize.STRING
            },
            help: {
                allowNull: false,
                type: Sequelize.STRING
            },
            isactive: {
                allowNull: true,
                type: Sequelize.BOOLEAN
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING
            },
            isexportxmlbackup: {
                allowNull: true,
                type: Sequelize.BOOLEAN
            },
            issaveinhistoric: {
                allowNull: true,
                type: Sequelize.BOOLEAN
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('ad_housekeepings');
    }
};