/* The belly button data exists in JSON format. In order to be 
able to visualize it with Plotly, she must be able to read the data into
her script file. She will use the D3.js library to do this.*/

const url = "https://api.spacexdata.com/v2/launchpads";

/* Using a promise with the then() method ensures that all the data 
requested from the API is received before executing the next part of code.  */

d3.json(url).then(receivedData => console.log(receivedData));

/* She would use indexing to retrieve only the first element in the array 
returned from the API call. */

d3.json(url).then(spaceXResults =>
console.log(spaceXResults[0]));

/* The code to retrieve the full_nameof the Vandenberg Air Force Base would 
look like this: */

d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

// access the latitude of the Vandenberg Airforce Base

d3.json(url).then(spaceXResults =>
    console.log(spaceXResults[0].location.latitude));

// The syntax used to retrieve data from an external data file, instead of a web API, is the same:

d3.json("samples.json").then(function(data){
    console.log("hello");
});

d3.json("samples.json").then(function(data){
    console.log(data);
});

// we can display the metadata of any individual from the dataset:

d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});