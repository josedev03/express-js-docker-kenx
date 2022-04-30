
module.exports.server = function(config = {}){
  const express = require('express');
  const app = express();

  app.use(express.json());

  const port = process.env.PORT || 3000;

  app.get('/', (req, res)=>{
    res.json({
      status: 'Ok'
    })
  })

  app.listen(port, ()=>{
    console.log(`Serer running on port: ${port}`)
  })

  return app;
}