

exports.index = function(req, res){
  res.render('MerchantAddForm', { title: 'Express' });
  
};

exports.li = function(req, res){
	  res.render('HardikAtulCollabrateView', { title: 'Express' });
	  
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
	  res.render('ZoomCustomize', { title: 'Express' });
	  
};
