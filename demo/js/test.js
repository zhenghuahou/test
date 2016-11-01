function* sleep() {
  return new Promise(function(resolve) {
   
    console.info(" sleep:");

    setTimeout(resolve, 12000);
  });
}


temp = [];
co(function*() {
  console.log("++++++++++++++++++++++++++++++++++++++");

  for(var i = 0; i<3; ++i) {
       console.log(" <--------------------i:",i)
      // console.time("a");
      temp.push(yield sleep());
      // console.timeEnd("a");

    // if (i % 10 === 0) {
      // global.gc();
      // console.log(process.memoryUsage());
      // heapdump.writeSnapshot();
      console.log(" ------------------------>i:",i)
    // }

  }

}).then(function() {
  console.log('finished')
}, function(err) {
  console.log('caught error: ', err.stack);
});