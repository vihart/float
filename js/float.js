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

//bg color
renderer.setClearColor( 0xaaddff );

scene.fog = new THREE.FogExp2( 0xaaddff, .02);

var everything = new THREE.Object3D();

//ground
var planeGeometry = new THREE.PlaneGeometry( 200, 100, 100, 100 );
var planeMaterial = new THREE.MeshLambertMaterial( {color: 0x88ff66, side: THREE.DoubleSide, wireframe:false} );
var plane = new THREE.Mesh( planeGeometry, planeMaterial );
plane.rotation.x = 1.58;
plane.position.y = -20;
plane.position.x = 30;
plane.scale.set(2,2,2);
everything.add( plane );

for (var i = 0; i < plane.geometry.vertices.length; i++){
  plane.geometry.vertices[i].z = 2*Math.sin(plane.geometry.vertices[i].y/3) + 2*Math.sin(plane.geometry.vertices[i].x/4) + 5*Math.cos(plane.geometry.vertices[i].y/7) + 3*Math.cos(plane.geometry.vertices[i].x/5);
};

//clouds
var plane2Geometry = new THREE.PlaneGeometry( 200, 100, 100, 100 );
var plane2Material = new THREE.MeshLambertMaterial( {color: 0xffffff, side: THREE.DoubleSide, wireframe:false} );
var plane2 = new THREE.Mesh( plane2Geometry, plane2Material );
plane2.rotation.x = 1.58;
plane2.position.y = 45;
plane2.position.x = 30;
plane2.scale.set(2,2,2);
everything.add( plane2 );

for (var i = 0; i < plane2.geometry.vertices.length; i++){
  plane2.geometry.vertices[i].z = Math.sin(plane.geometry.vertices[i].y/3) + 1.2*Math.sin(plane.geometry.vertices[i].x/2) + 1.1*Math.cos(plane.geometry.vertices[i].y/3) + 1.5*Math.cos(plane.geometry.vertices[i].x/3);
};

//Island 1
var island = [
  new THREE.Object3D(), //0: big U island
  new THREE.Object3D(), //1: little U moving island
  new THREE.Object3D(), //2: L island
  new THREE.Object3D() //3: L subisland
  ];

var matArray = [
  new THREE.MeshLambertMaterial({color:0xff8800}), //0: brown ground
  new THREE.MeshLambertMaterial({color:0xaaaaaa}), //1: grey rocks
  new THREE.MeshLambertMaterial({color:0x33ff00}) //2: green grass
  ];

var fileName = [
  'media/i1ground.obj', 'media/i1rocks.obj', 'media/i1grass.obj',
  'media/i2ground.obj', 'media/i2rocks.obj', 'media/i2grass.obj',
  'media/i3ground.obj', 'media/i3rocks.obj', 'media/i3grass.obj',
  'media/i4ground.obj', 'media/i4rocks.obj', 'media/i4grass.obj'
  ];

//apparently loaders work nonlinearly and I really can't loop this or something??

//island 0:
var manager00 = new THREE.LoadingManager();
var loader00 = new THREE.OBJLoader(manager00);

loader00.load( fileName[0], function ( object ) {
object.scale.set(1,1,1);
object.position.set(0,0,0);    
object.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
            child.material = matArray[0];
            child.frustumCulled = false;
        }
    });
var islandBit = object;
island[0].add(islandBit);
});

var manager01 = new THREE.LoadingManager();
var loader01 = new THREE.OBJLoader(manager01);

loader01.load( fileName[1], function ( object ) {
object.scale.set(1,1,1);
object.position.set(0,0,0);    
object.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
            child.material = matArray[1];
            child.frustumCulled = false;
        }
    });
var islandBit = object;
island[0].add(islandBit);
});

var manager02 = new THREE.LoadingManager();
var loader02 = new THREE.OBJLoader(manager02);

loader02.load( fileName[2], function ( object ) {
object.scale.set(1,1,1);
object.position.set(0,0,0);    
object.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
            child.material = matArray[2];
            child.frustumCulled = false;
        }
    });
var islandBit = object;
island[0].add(islandBit);
});

everything.add( island[0] );

//island 1:
var manager10 = new THREE.LoadingManager();
var loader10 = new THREE.OBJLoader(manager10);

loader10.load( fileName[3], function ( object ) {
object.scale.set(1,1,1);
object.position.set(0,0,0);    
object.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
            child.material = matArray[0];
            child.frustumCulled = false;
        }
    });
var islandBit = object;
island[1].add(islandBit);
});

var manager11 = new THREE.LoadingManager();
var loader11 = new THREE.OBJLoader(manager11);

loader11.load( fileName[4], function ( object ) {
object.scale.set(1,1,1);
object.position.set(0,0,0);    
object.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
            child.material = matArray[1];
            child.frustumCulled = false;
        }
    });
var islandBit = object;
island[1].add(islandBit);
});

var manager12 = new THREE.LoadingManager();
var loader12 = new THREE.OBJLoader(manager12);

loader12.load( fileName[5], function ( object ) {
object.scale.set(1,1,1);
object.position.set(0,0,0);    
object.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
            child.material = matArray[2];
            child.frustumCulled = false;
        }
    });
var islandBit = object;
island[1].add(islandBit);
});

everything.add( island[1] );

//island 2:
var manager20 = new THREE.LoadingManager();
var loader20 = new THREE.OBJLoader(manager20);

loader20.load( fileName[6], function ( object ) {
object.scale.set(1,1,1);
object.position.set(0,0,0);    
object.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
            child.material = matArray[0];
            child.frustumCulled = false;
        }
    });
var islandBit = object;
island[2].add(islandBit);
});

var manager21 = new THREE.LoadingManager();
var loader21 = new THREE.OBJLoader(manager21);

loader21.load( fileName[7], function ( object ) {
object.scale.set(1,1,1);
object.position.set(0,0,0);    
object.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
            child.material = matArray[1];
            child.frustumCulled = false;
        }
    });
var islandBit = object;
island[2].add(islandBit);
});

var manager22 = new THREE.LoadingManager();
var loader22 = new THREE.OBJLoader(manager22);

loader22.load( fileName[8], function ( object ) {
object.scale.set(1,1,1);
object.position.set(0,0,0);    
object.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
            child.material = matArray[2];
            child.frustumCulled = false;
        }
    });
var islandBit = object;
island[2].add(islandBit);
});

everything.add( island[2] );

//island 3:
var manager30 = new THREE.LoadingManager();
var loader30 = new THREE.OBJLoader(manager30);

loader30.load( fileName[9], function ( object ) {
object.scale.set(1,1,1);
object.position.set(0,0,0);    
object.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
            child.material = matArray[0];
            child.frustumCulled = false;
        }
    });
var islandBit = object;
island[3].add(islandBit);
});

var manager31 = new THREE.LoadingManager();
var loader31 = new THREE.OBJLoader(manager31);

loader31.load( fileName[10], function ( object ) {
object.scale.set(1,1,1);
object.position.set(0,0,0);    
object.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
            child.material = matArray[1];
            child.frustumCulled = false;
        }
    });
var islandBit = object;
island[3].add(islandBit);
});

var manager32 = new THREE.LoadingManager();
var loader32 = new THREE.OBJLoader(manager32);

loader32.load( fileName[11], function ( object ) {
object.scale.set(1,1,1);
object.position.set(0,0,0);    
object.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
            child.material = matArray[2];
            child.frustumCulled = false;
        }
    });
var islandBit = object;
island[3].add(islandBit);
});

everything.add( island[3] );

island[2].position.x = -25;
island[3].position.x = -25;
island[3].position.z = 14;
island[2].position.y = -8.5;
island[3].position.y = -8.5;

//lights    
var light = new THREE.PointLight( 0xffffff, 1, 40);
light.position.set( 0,4,0);
light.castShadow = true;
everything.add( light );

var light2 = new THREE.PointLight( 0xffffff, 1, 100);
light2.position.set( 30,10,20);
light2.castShadow = true;
everything.add( light2 );

var p1 = -1;
var t = 0;
var pos = new THREE.Vector2(0,0);

island[1].position.z = -1;
  island[1].position.x = 35 + (35 * Math.sin(p1));
  everything.position.x = -35 - (35 * Math.sin(p1));

//bird
var bird = [];
var birdseed = [];
var birdNumber = 20;

for (var i = 0; i < birdNumber; i++){
  bird[i] = new THREE.Mesh(
      new THREE.OctahedronGeometry(1),
      new THREE.MeshLambertMaterial()
      );

  bird[i].geometry.vertices[0].set(1,0,0);
  bird[i].geometry.vertices[1].set(-1,0,0);
  bird[i].geometry.vertices[2].set(0,0.02,1);
  bird[i].geometry.vertices[3].set(0,-0.02,-1);
  bird[i].geometry.vertices[4].set(0,-0.02,1);
  bird[i].geometry.vertices[5].set(0,0.02,-1);

  birdseed[i] = Math.random();
  var birdscale = 2*Math.random()*Math.random() + .5;
  bird[i].scale.set(birdscale,birdscale,birdscale);
  bird[i].material.color.setRGB(Math.random(), Math.random(), Math.random());

  everything.add(bird[i]);
};

scene.add(everything);

/*
Request animation frame loop function
*/
function animate() {

  t += 1;

  pos.set(camera.position.x, camera.position.z);

  if (pos.distanceTo(island[0].position) < 4){
  p1 += .002
  var move = 35 + (35 * Math.sin(p1));
  island[1].position.x = move;
  everything.position.x = -move;
  };

  //bird flapping
  for (var i = 0; i < birdNumber; i++){
    var flappy = Math.sin(t/(5-(2*birdseed[i])));
    bird[i].geometry.vertices[0].set(1,flappy,0);
    bird[i].geometry.vertices[1].set(-1,flappy,0);
    bird[i].geometry.verticesNeedUpdate = true;
    bird[i].position.x = 57*birdseed[i] + 20 * Math.sin((t+200*birdseed[i])/57) + 5*Math.sin(t*birdseed[i]/51) + 8*Math.sin(t*birdseed[i]/67) + 10*birdseed[i]*Math.sin(t*birdseed[i]/79);
    bird[i].position.z = 20 * Math.cos((t+200*birdseed[i])/57) + 7*Math.sin(t*birdseed[i]/51) + 6*Math.sin(t*birdseed[i]/67) + 11*birdseed[i]*Math.cos(t*birdseed[i]/73);
    bird[i].position.y = 15 + 5*Math.sin((t+333*birdseed[i])/(39 - 20000*(birdseed[i]/2432)));
  };

  //rolling clouds
  for (var i = 0; i < plane2.geometry.vertices.length; i++){
  plane2.geometry.vertices[i].z = Math.sin((plane.geometry.vertices[i].y + t/89)/3) + 2*Math.sin((plane.geometry.vertices[i].y + t/99)/17) + 1.2*Math.sin((plane.geometry.vertices[i].x + t/123)/2) + 1.1*Math.cos((plane.geometry.vertices[i].y + t/197)/3.6) + 1.5*Math.cos((plane.geometry.vertices[i].x + t/111)/3);
  };
  plane2.geometry.verticesNeedUpdate=true;

  //Update VR headset position and apply to camera.
  controls.update();

  // Render the scene through the VREffect.
  effect.render( scene, camera );
  requestAnimationFrame( animate );
}

animate();	// Kick off animation loop




/*
Listen for click event to enter full-screen mode.
We listen for single click because that works best for mobile for now
*/
// document.body.addEventListener( 'click', function(){
//   effect.setFullScreen( true );
// })

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
