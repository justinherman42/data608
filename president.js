d3.csv('presidents.csv')
  .then(function(data) {
  	console.log(data);
      // data is now whole data set
      // draw chart in here!
  })
  .catch(function(error){
     // handle error   
  })