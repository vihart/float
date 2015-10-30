// Setup three.js WebGL renderer
var renderer = new THREE.WebGLRenderer( { antialias: true } );

// Append the canvas element created by the renderer to document body element.
document.body.appendChild( renderer.domElement );

//Create a three.js scene
var scene = new THREE.Scene();

//Create a three.js camera
var camera = new THREE.PerspectiveCamera( 110, window.innerWidth / window.innerHeight, 2, 10000 );
scene.add(camera);

//Apply VR headset positional data to camera.
var controls = new THREE.VRControls( camera );

//Apply VR stereo rendering to renderer
var effect = new THREE.VREffect( renderer );
effect.setSize( window.innerWidth, window.innerHeight );


//skybox
var skyGeometry = new THREE.IcosahedronGeometry(10,4);
var skyMaterial = new THREE.MeshBasicMaterial({
  map: THREE.ImageUtils.loadTexture(
      "media/officeRender.jpg"),
  color:0xffffff
  });
var skybox = new THREE.Mesh( skyGeometry, skyMaterial );
skybox.scale.set(100,100,100);
skybox.material.side = THREE.BackSide;
scene.add(skybox);

//Island 1
var island = [
  new THREE.Object3D(), //0: big U island
  new THREE.Object3D() //1: little U moving island
  ];

var matArray = [
  new THREE.MeshLambertMaterial({color:0xff8800}), //0: brown ground
  new THREE.MeshLambertMaterial({color:0xaaaaaa}), //1: grey rocks
  new THREE.MeshLambertMaterial({color:0x33ff00}) //2: green grass
  ];

var fileName = [
  'media/i1ground.obj', 'media/i1rocks.obj', 'media/i1grass.obj',
  'media/i2ground.obj', 'media/i2rocks.obj', 'media/i2grass.obj'
  ];

  // load the meshes
for (var j = 0; j < 2; j++){
  for (var i=0; i<3; i++){

    var manager = new THREE.LoadingManager();
    var loader = new THREE.OBJLoader(manager);

    loader.load( fileName[i + 3*j], function ( object ) {
    object.scale.set(1,1,1);
    object.position.set(0,0,0);    
    object.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                child.material = matArray[i];
                child.frustumCulled = false;
            }
        });
    var thing = object;
    island[1].add(thing);

    });
  }
}
scene.add( island[0] );
scene.add( island[1] );
island[1].position.y = -3

//lights    
var light = new THREE.PointLight( 0xffffff, 1, 20);
light.position.set( 0,5,0);
light.castShadow = true;
scene.add( light );

var t = 0;
/*
Request animation frame loop function
*/
function animate() {

  t += .001

  island[1].position.z = Math.sin(t);


  //Update VR headset position and apply to camera.
  controls.update();

  // Render the scene through the VREffect.
  effect.render( scene, camera );
  requestAnimationFrame( animate );
}

animate();	// Kick off animation loop



/***************** TODO: Generate Your VR Scene Above *****************/



/*
Listen for click event to enter full-screen mode.
We listen for single click because that works best for mobile for now
*/
document.body.addEventListener( 'click', function(){
  effect.setFullScreen( true );
})

/*
Listen for keyboard events
*/
function onkey(event) {
  event.preventDefault();

  if (event.keyCode == 90) { // z
    controls.resetSensor(); //zero rotation
  } else if (event.keyCode == 70 || event.keyCode == 13) { //f or enter
    effect.setFullScreen(true) //fullscreen
  }
};
window.addEventListener("keydown", onkey, true);

/*
Handle window resizes
*/
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  effect.setSize( window.innerWidth, window.innerHeight );
}
window.addEventListener( 'resize', onWindowResize, false );
