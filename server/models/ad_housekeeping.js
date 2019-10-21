'use strict';
module.exports = (sequelize, DataTypes) => {
    const ad_housekeeping = sequelize.define('ad_housekeeping', {
        ad_client_id: {
            type: DataTypes.INTEGER,
            allowNull: {
                args: false,
                msg: "Please enter client_id"
            }
        },
        ad_org_id: {
            type: DataTypes.INTEGER,
            allowNull: {
                args: false,
                msg: "Please enter org_id"
            }
        },
        ad_table_id: {
            type: DataTypes.INTEGER,
            allowNull: {
                args: false,
                msg: "Please enter table_id"
            }
        },
        backupfolder: {
            type: DataTypes.STRING,
            allowNull: {
                args: false,
                msg: "Please enter backupfolder"
            }
        },
        created: {
            type: DataTypes.DATE,
            allowNull: {
                args: false,
                msg: "Please enter date"
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: {
                args: true
            }
        },
        help: {
            type: DataTypes.STRING,
            allowNull: {
                args: true
            }
        },
        isactive: {
            type: DataTypes.BOOLEAN,
            allowNull: {
                args: true
            }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: {
                args: true
            }
        },
        isexportxmlbackup: {
            type: DataTypes.BOOLEAN,
            allowNull: {
                args: true
            }
        },
        issaveinhistoric: {
            type: DataTypes.BOOLEAN,
            allowNull: {
                args: true
            }
        }
    }, { timestamps: false });
    ad_housekeeping.associate = function(models) {
        // associations can be defined here
    };
    return ad_housekeeping;
};