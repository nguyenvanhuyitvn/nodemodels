'use strict';
export default (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        name: {
            type: DataTypes.STRING,
            allowNull: {
                agrs: false,
                msg: 'Please enter your name'
            }
        },
        username: {
            type: DataTypes.STRING,
            allowNull: {
                agrs: false,
                msg: "Please enter your username"
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: {
                agrs: false,
                msg: "Please enter your email address"
            },
            unique: {
                agrs: true,
                msg: "Email address exists"
            },
            validate: {
                isEmail: {
                    agrs: true,
                    msg: "Please enter a valid email address"
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: {
                agrs: false,
                msg: "Please enter your password",
                validate: {
                    inNotShort: (value) => {
                        if (value.length < 8) {
                            throw new Error('Password should be at least 8 characters');
                        }
                    }
                }
            }
        },
    }, {});
    User.associate = (models) => {
        // associations can be defined here
        User.hasMany(models.Book, {
            foreignKey: 'userId',
        });
    };
    return User;
};