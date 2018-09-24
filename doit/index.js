const Sequelize = require('sequelize');
const Op = Sequelize.Op
const sequelize = new Sequelize('doit', null, null, {
  host: 'localhost',
  dialect: 'sqlite',
  operatorsAliases: false,
  storage: './doit.sqlite',
  define: {
    timestamps: false // true by default
  }
});

const Test = sequelize.define('test', { name: Sequelize.TEXT})

sequelize.sync()
  .then( () => {

    Test.findAll( {
      where: {
        name: {
          [Op.like]: '%c%'
        }
      }
    })
      .then( rows => {
        rows.forEach(r => {
          console.log(r.name)  
        });
        
      })
  })
