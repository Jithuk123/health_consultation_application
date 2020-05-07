const uuid = require('uuid/v4');
('use strict');
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    'user',
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      phoneNumber: {
        type: DataTypes.STRING,
      },
      roleId: {
        type: DataTypes.UUID,
        references: {
          model: 'roles',
          key: 'id',
        },
      },
    },
    {
      timestamps: true,
      paranoid: true,
      defaultScope: {
        attributes: { exclude: ['password'] },
      },
    }
  );

  user.associate = function (models) {
    models.user.belongsTo(models.role, {
      foreignKey: 'roleId',
      onDelete: 'CASCADE',
    });
  };
  return user;
};
