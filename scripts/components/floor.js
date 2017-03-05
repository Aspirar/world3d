(function () {
	var geometry, mesh, material;

	geometry = new THREE.PlaneGeometry( 2000, 2000, 100, 100 );
	geometry.rotateX( - Math.PI / 2 );

	material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );

	var mesh = new THREE.Mesh( geometry, material );
	app.scene.add( mesh );
}());
