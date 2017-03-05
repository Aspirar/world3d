var app = { };

app.blocker = document.getElementById( 'blocker' );

app.buttons = { };
app.buttons.start = document.getElementById( 'start-btn' );

app.scene = new THREE.Scene();

app.camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	1,
	1000
);

app.move = { };
app.move.velocity = new THREE.Vector3();
app.move.forward  = false;
app.move.backward = false;
app.move.left     = false;
app.move.right    = false;
app.move.jump     = true;

app.time = performance.now();

app.objects = [];
app.raycaster = { };
app.raycaster.bottom = new THREE.Raycaster( new THREE.Vector3(), new THREE.Vector3( 0, -1, 0 ), 0, 10 );
