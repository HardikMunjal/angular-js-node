

exports.index = function(req, res){
  res.render('MerchantAddForm', { title: 'Express' });
  
};

exports.li = function(req, res){
	  res.render('pageMain', { title: 'Express' });
	  
	};
	
	exports.angular = function(req, res){
		  res.render('NewAngularGrid', { title: 'Express' });
		  
};
exports.description = function(req, res){
	  res.render('DrakulaazWithAjax', { title: 'Express' });
	  
};

exports.drakaOnFire = function(req, res){
	  res.render('Drakulaaz', { title: 'Express' });
	  
};

exports.zoom = function(req, res){
	
	
	  res.render('FinalZoomCustomize', { title: 'Express' });
	  
};

exports.test = function(req, res){
	  res.render('ServiceCallOnButtonClick', { title: 'Express' });
	  
};


exports.partials = function(req, res){
	  var filename = req.params.filename;
	  if(!filename) return;  // might want to change this
	  res.render("partials/" + filename );
	};