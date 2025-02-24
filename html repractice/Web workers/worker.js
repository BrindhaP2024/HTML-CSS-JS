
self.onmessage = function(e) {
  const number = e.data;
  console.log('Worker received task to work:', number);
  const result = number * 12;  
  self.postMessage(result);    

};



