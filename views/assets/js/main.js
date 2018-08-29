// console.log('hoppie');

const windowHref = window.location.href;
// console.log(windowHref)

const myPath = windowHref.substr(21)
// console.log(myPath)

const root = document.getElementById('root');
// console.log(root)

if (myPath==='/') {
    console.log('it does')
}

const myArr = '[1, 2, 3]'

$(root).append(myPath)

// $(document).ready(function() {
// Handlebars.registerPartial('navbarPartial', $('#Navbar').html());
// })