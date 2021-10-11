const express = require('express');
const router = new express.Router();

router.get('/metadata/:id', (req, res, next) => {
  var metaDataId = req.params['id'];

  // metadataFilter.name = metaDataId;
  // pinata.pinList(pinataFilter).then((result) => {
  //   //handle successful authentication here
  //   // console.log(JSON.stringify(result.rows[metaDataId]));
  //   // console.log("pinataUrl ", pinataUrl);
  //   // console.log("result.rows[metaDataId].ipfs_pin_hash ", result.rows[metaDataId].ipfs_pin_hash);
  //   // const imgUrl = pinataUrl + result.rows[metaDataId].ipfs_pin_hash;
  //   // console.log("imgUrl ", imgUrl)
  //   res.send(imgUrl);
  //   next();
  // }).catch((err) => {
  //   //handle error here
  //   console.log(err);
  // });


  const metaData = {
    "description": "The dome is ......",
    "image": "https://media.nature.com/lw800/magazine-assets/d41586-018-07513-8/d41586-018-07513-8_16288156.jpg",
    "name": "The Dome #"+metaDataId,
    "attributes": [
    ]
  }

    res.send(metaData);
    next();

});




module.exports = router;