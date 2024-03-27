const React = require('react');
const Navbar = require('./Navbar');


module.exports = function Layout ({ children, login }){
return(
<html lang="en">
<head>
    <meta charSet="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link type="image/x-icon" href="/assets/flower.png" rel="shortcut icon" />
    
    <link rel="stylesheet" href="/stylesheets/normalize.css" />
    <link rel="stylesheet" href="/stylesheets/style.css" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Philosopher:wght@400;700&display=swap" rel="stylesheet" />  
    <title>Easy English</title>
</head>
<body>
<Navbar login={login} />
{children}
</body>
</html>
);
};
  
