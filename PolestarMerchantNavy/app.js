
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 9007);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);



// development only

if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/li', routes.li);
app.get('/angular', routes.angular);

app.get('/grid', routes.description);

app.get('/draka', routes.drakaOnFire);

app.get('/ZoomCustomize/{PName}', routes.zoom);

app.get('/testing', routes.test);

app.get('/users', user.list);

app.get('/partials/:filename', routes.partials);








http.createServer(app).listen(app.get('port'), function()
		{
  console.log('Express server listening on port ' + app.get('port'));
});
