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

var island = [
  new THREE.Object3D(), //0: big U island
  new THREE.Object3D(), //1: little U moving island
  new THREE.Object3D(), //2: L island
  new THREE.Object3D() //3: L subisland
  ];


var matArray = [
  new THREE.MeshLambertMaterial({color:"rgb(20%, 20%, 20%)"}), //0: brown ground
  new THREE.MeshLambertMaterial({color:"rgb(20%, 20%, 20%)"}), //1: grey rocks
  new THREE.MeshLambertMaterial({color:"rgb(20%, 20%, 20%)"}) //2: green grass
  ];

var fileName = [
  'media/i1ground.obj', 'media/i1rocks.obj', 'media/i1grass.obj',
  'media/i2ground.obj', 'media/i2rocks.obj', 'media/i2grass.obj',
  'media/i3ground.obj', 'media/i3rocks.obj', 'media/i3grass.obj',
  'media/i4ground.obj', 'media/i4rocks.obj', 'media/i4grass.obj'
  ];

//apparently loaders work nonlinearly and I really can't loop this or something??



//island5:
var island5 = new THREE.Object3D();
var i5ground = new THREE.Object3D();
var i5rocks = new THREE.Object3D();
var i5grass = new THREE.Object3D();

var manager50 = new THREE.LoadingManager();
var loader50 = new THREE.OBJLoader(manager50);
loader50.load( fileName[3], function ( object ) {
object.scale.set(1,1,1);
object.position.set(0,0,0);    
object.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
            child.material = new THREE.MeshLambertMaterial({color:0x666666});
            child.frustumCulled = false;
        }
    });
i5ground.add(object);
island5.add(i5ground);
});
var manager51 = new THREE.LoadingManager();
var loader51 = new THREE.OBJLoader(manager51);
loader51.load( fileName[4], function ( object ) {
object.scale.set(1,1,1);
object.position.set(0,0,0);    
object.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
            child.material = new THREE.MeshLambertMaterial({color:0x666666});
            child.frustumCulled = false;
        }
    });
i5rocks.add(object);
island5.add(i5rocks);
});
var manager52 = new THREE.LoadingManager();
var loader52 = new THREE.OBJLoader(manager52);
loader52.load( fileName[5], function ( object ) {
object.scale.set(1,1,1);
object.position.set(0,0,0);    
object.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
            child.material = new THREE.MeshLambertMaterial({color:0x666666});
            child.frustumCulled = false;
        }
    });
i5grass.add(object);
island5.add(i5grass);
});
island5.position.x = -30;
island5.position.y = 5;
everything.add(island5);

//island6:
var island6 = new THREE.Object3D();
var i6ground = new THREE.Object3D();
var i6rocks = new THREE.Object3D();
var i6grass = new THREE.Object3D();

var manager60 = new THREE.LoadingManager();
var loader60 = new THREE.OBJLoader(manager60);
loader60.load( fileName[3], function ( object ) {
object.scale.set(1,1,1);
object.position.set(0,0,0);    
object.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
            child.material = new THREE.MeshLambertMaterial({color:0x666666});
            child.frustumCulled = false;
        }
    });
i6ground.add(object);
island6.add(i6ground);
});
var manager61 = new THREE.LoadingManager();
var loader61 = new THREE.OBJLoader(manager61);
loader61.load( fileName[4], function ( object ) {
object.scale.set(1,1,1);
object.position.set(0,0,0);    
object.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
            child.material = new THREE.MeshLambertMaterial({color:0x666666});
            child.frustumCulled = false;
        }
    });
i6rocks.add(object);
island6.add(i6rocks);
});
var manager62 = new THREE.LoadingManager();
var loader62 = new THREE.OBJLoader(manager62);
loader62.load( fileName[5], function ( object ) {
object.scale.set(1,1,1);
object.position.set(0,0,0);    
object.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
            child.material = new THREE.MeshLambertMaterial({color:0x666666});
            child.frustumCulled = false;
        }
    });
i6grass.add(object);
island6.add(i6grass);
});
island6.position.x = -20;
island6.position.z = -18;
island6.position.y = 10;
everything.add(island6);



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
var i0ground = object;
island[0].add(i0ground);
});

var manager01 = new THREE.LoadingManager();
var loader01 = new THREE.OBJLoader(manager01);

loader01.load( fileName[1], function ( object ) {
object.scale.set(1,1,1);
object.position.set(0,0,0);    
object.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
            child.material = new THREE.MeshLambertMaterial({color:"rgb(20%, 20%, 20%)"});
            child.frustumCulled = false;
        }
    });
var i0rocks = object;
island[0].add(i0rocks);
});

var manager02 = new THREE.LoadingManager();
var loader02 = new THREE.OBJLoader(manager02);

loader02.load( fileName[2], function ( object ) {
object.scale.set(1,1,1);
object.position.set(0,0,0);    
object.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
            child.material = new THREE.MeshLambertMaterial({color:"rgb(20%, 20%, 20%)"});
            child.frustumCulled = false;
        }
    });
var i0grass = object;
island[0].add(i0grass);
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
            child.material = new THREE.MeshLambertMaterial({color:"rgb(20%, 20%, 20%)"});
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
            child.material = new THREE.MeshLambertMaterial({color:"rgb(20%, 20%, 20%)"});
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
            child.material = new THREE.MeshLambertMaterial({color:"rgb(20%, 20%, 20%)"});
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
            child.material = new THREE.MeshLambertMaterial({color:"rgb(20%, 20%, 20%)"});
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
            child.material = new THREE.MeshLambertMaterial({color:"rgb(20%, 20%, 20%)"});
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
            child.material = new THREE.MeshLambertMaterial({color:"rgb(20%, 20%, 20%)"});
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
            child.material = new THREE.MeshLambertMaterial({color:"rgb(20%, 20%, 20%)"});
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
            child.material = new THREE.MeshLambertMaterial({color:"rgb(20%, 20%, 20%)"});
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
            child.material = new THREE.MeshLambertMaterial({color:"rgb(20%, 20%, 20%)"});
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

var i0t = 0;
var i1t = 0;
var i2t = 0;
var i3t = 0;
var i4t = 0;
var i5t = 0;
var i6t = 0;

var relative1 = 0;
var relative2 = 0;
var relative3 = 0;

var relative5 = 0;
var relative6 = 0;

/*
Request animation frame loop function
*/
function animate() {

  t += 1;

  pos.set(camera.position.x, camera.position.z);

  relative5 = new THREE.Vector2(island5.position.x + everything.position.x, island5.position.z + everything.position.z);
  if (pos.distanceTo(relative5) < 10){
    i5t += .001;
    if (i5t > .2){
      island5.children[2].children[0].children[0].material.color.setRGB(0.4-i5t,i5t,0.4-i5t); //this will break everything if objs aren't loaded yet
      if (i5t < .4){
        island5.children[0].children[0].children[0].material.color.setRGB(i5t,0.3-i5t/2,0.4-i5t);
      };
    };
  };

  relative6 = new THREE.Vector2(island6.position.x + everything.position.x, island6.position.z + everything.position.z);
  if (pos.distanceTo(relative6) < 10){
    i6t += .001;
    if (i6t > .2){
      island6.children[2].children[0].children[0].material.color.setRGB(0.4-i6t,i6t,0.4-i6t); //this will break everything if objs aren't loaded yet
      if (i6t < .4){
        island6.children[0].children[0].children[0].material.color.setRGB(i6t,0.3-i6t/2,0.4-i6t);
      };
    };
  };

  if (pos.distanceTo(island[0].position) < 15){
    i0t += .001;
    if (i0t > .2){
      island[0].children[2].children[0].material.color.setRGB(0.4-i0t,i0t,0.4-i0t); //this will break everything if objs aren't loaded yet
      if (i0t < .4){
      island[0].children[0].children[0].material.color.setRGB(i0t,0.3-i0t/2,0.4-i0t);
      }
    };
  };

  relative1 = new THREE.Vector2(0 - everything.position.x - island[1].position, 0 - everything.position.z - island[1].position);
  if (pos.distanceTo(relative1) < 10){
    i1t += .001;
    if (i1t > .2){
      island[1].children[2].children[0].material.color.setRGB(0.4-i1t,i1t,0.4-i1t); //this will break everything if objs aren't loaded yet
      if (i1t < .4){
      island[1].children[0].children[0].material.color.setRGB(i1t,0.3-i1t/2,0.4-i1t);
      };
    };
  };
  relative2 = new THREE.Vector2(65 + everything.position.x, - 15 + everything.position.z);
  if (pos.distanceTo(relative2) < 10){
    i2t += .001;
    if (i2t > .2){
      island[2].children[2].children[0].material.color.setRGB(0.4-i2t,i2t,0.4-i2t); //this will break everything if objs aren't loaded yet
      if (i2t < .4){
      island[2].children[0].children[0].material.color.setRGB(i2t,0.3-i2t/2,0.4-i2t);
      };
    };
  };

  relative3 = new THREE.Vector2(65 + everything.position.x, 10 + everything.position.z);
  if (pos.distanceTo(relative3) < 10){
    i3t += .001;
    if (i3t > .2){
      island[3].children[2].children[0].material.color.setRGB(0.4-i3t,i3t,0.4-i3t); //this will break everything if objs aren't loaded yet
      if (i3t < .4){
      island[3].children[0].children[0].material.color.setRGB(i3t,0.3-i3t/2,0.4-i3t);
      };
    };
  };

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
