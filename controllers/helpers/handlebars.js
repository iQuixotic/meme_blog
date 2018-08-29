var Handlebars = require('handlebars');

Handlebars.registerHelper('list', (arg) => {
    let newList = `<ul>`
    arg.forEach(element => {
        newList = newList + `<li>${element}</li>`
        url = `/${element}`
    });
    newList += '</ul>'
    return newList;
})


// Handlebars.registerHelper('list', function(context, options) {
//     var attrs = Object.keys(options.hash).map(function(key) {
//       return key + '="' + options.hash[key] + '"';
//     }).join(" ");
  
//     return "<ul " + attrs + ">" + context.map(function(item) {
//       return "<li>" + options.fn(item) + "</li>";
//     }).join("\n") + "</ul>";
//   });