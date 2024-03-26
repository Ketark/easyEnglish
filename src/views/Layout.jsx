const React = require('react');


module.exports = function Layout ({ children }){
return(
<html lang="en">
<head>
    <meta charSet="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link type="image/x-icon" href="/assets/flower.png" rel="shortcut icon" />
    
    <link rel="stylesheet" href="/stylesheets/normalize.css" />
    <link rel="stylesheet" href="/stylesheets/style.css" />
    <title>Easy English</title>
</head>
<body>
<h1>Выучить английские слова - легко!</h1>

{children}

</body>
</html>
);
};
  
