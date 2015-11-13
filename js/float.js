var c = 1/15; //scale factor

// Setup three.js WebGL renderer
var renderer = new THREE.WebGLRenderer( { antialias: true } );

// Append the canvas element created by the renderer to document body element.
document.body.appendChild( renderer.domElement );

//Create a three.js scene
var scene = new THREE.Scene();

//Create a three.js camera
var camera = new THREE.PerspectiveCamera( 110, window.innerWidth / window.innerHeight, .01, 10 );
scene.add(camera);

//Apply VR headset positional data to camera.
var controls = new THREE.VRControls( camera );

//Apply VR stereo rendering to renderer
var effect = new THREE.VREffect( renderer );
effect.setSize( window.innerWidth, window.innerHeight );

//bg color
renderer.setClearColor( 0xaaddff );

scene.fog = new THREE.FogExp2( 0xaaddff, .02/c);


var music1 = document.querySelector('#child3');
var go1 = document.querySelector('#cube1');
var fishNoise = document.querySelector('#fishNoise');

var everything = new THREE.Object3D();

//ground
var planeGeometry = new THREE.PlaneGeometry( 200, 170, 100, 100 );
var planeMaterial = new THREE.MeshLambertMaterial( {color: 0x88ff66, side: THREE.DoubleSide, wireframe:false} );
var plane = new THREE.Mesh( planeGeometry, planeMaterial );
plane.rotation.x = 1.58;
plane.position.y = -25;
plane.position.x = 30;
plane.scale.set(2,2,2);
everything.add( plane );

for (var i = 0; i < plane.geometry.vertices.length; i++){
  plane.geometry.vertices[i].z = 2*Math.sin(plane.geometry.vertices[i].y/3) + 2*Math.sin(plane.geometry.vertices[i].x/4) + 5*Math.cos(plane.geometry.vertices[i].y/7) + 3*Math.cos(plane.geometry.vertices[i].x/5);
};

//clouds
var plane2Geometry = new THREE.PlaneGeometry( 200, 170, 100, 100 );
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

// var island = [
//   new THREE.Object3D(), //0: big U island
//   new THREE.Object3D(), //1: little U moving island
//   new THREE.Object3D(), //2: L island
//   new THREE.Object3D() //3: L subisland
//   ];


// var matArray = [
//   new THREE.MeshLambertMaterial({color:"rgb(20%, 20%, 20%)"}), //0: brown ground
//   new THREE.MeshLambertMaterial({color:"rgb(20%, 20%, 20%)"}), //1: grey rocks
//   new THREE.MeshLambertMaterial({color:"rgb(20%, 20%, 20%)"}) //2: green grass
//   ];

var fileName = [
  'media/i1ground.obj', 'media/i1rocks.obj', 'media/i1grass.obj',
  'media/i2ground.obj', 'media/i2rocks.obj', 'media/i2grass.obj',
  'media/i3ground.obj', 'media/i3rocks.obj', 'media/i3grass.obj',
  'media/i4ground.obj', 'media/i4rocks.obj', 'media/i4grass.obj'
  ];

//apparently loaders work nonlinearly and I really can't loop this or something??


//island8: outer destination
var island8 = new THREE.Object3D();
var i8ground = new THREE.Object3D();
var i8rocks = new THREE.Object3D();
var i8grass = new THREE.Object3D();

var manager80 = new THREE.LoadingManager();
var loader80 = new THREE.OBJLoader(manager80);
loader80.load( fileName[3], function ( object ) {
object.scale.set(1,1,1);
object.position.set(0,0,0);    
object.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
            child.material = new THREE.MeshLambertMaterial({color:"rgb(20%, 20%, 20%)"});
            child.frustumCulled = false;
        }
    });
i8ground.add(object);
island8.add(i8ground);
});
var manager81 = new THREE.LoadingManager();
var loader81 = new THREE.OBJLoader(manager81);
loader81.load( fileName[4], function ( object ) {
object.scale.set(1,1,1);
object.position.set(0,0,0);    
object.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
            child.material = new THREE.MeshLambertMaterial({color:"rgb(20%, 20%, 20%)"});
            child.frustumCulled = false;
        }
    });
i8rocks.add(object);
island8.add(i8rocks);
});
var manager82 = new THREE.LoadingManager();
var loader82 = new THREE.OBJLoader(manager82);
loader82.load( fileName[5], function ( object ) {
object.scale.set(1,1,1);
object.position.set(0,0,0);    
object.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
            child.material = new THREE.MeshLambertMaterial({color:"rgb(20%, 20%, 20%)"});
            child.frustumCulled = false;
        }
    });
i8grass.add(object);
island8.add(i8grass);
});
island8.position.x = 150;
island8.rotation.y = -1.5;
island8.scale.set(3,2,2);
everything.add(island8);

//island7, double secret float to main
var island7 = new THREE.Object3D();
var i7ground = new THREE.Object3D();
var i7rocks = new THREE.Object3D();
var i7grass = new THREE.Object3D();

var manager70 = new THREE.LoadingManager();
var loader70 = new THREE.OBJLoader(manager70);
loader70.load( fileName[3], function ( object ) {
object.scale.set(1,1,1);
object.position.set(0,0,0);    
object.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
            child.material = new THREE.MeshLambertMaterial({color:"rgb(20%, 20%, 20%)"});
            child.frustumCulled = false;
        }
    });
i7ground.add(object);
island7.add(i7ground);
});
var manager71 = new THREE.LoadingManager();
var loader71 = new THREE.OBJLoader(manager71);
loader71.load( fileName[4], function ( object ) {
object.scale.set(1,1,1);
object.position.set(0,0,0);    
object.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
            child.material = new THREE.MeshLambertMaterial({color:"rgb(20%, 20%, 20%)"});
            child.frustumCulled = false;
        }
    });
i7rocks.add(object);
island7.add(i7rocks);
});
var manager72 = new THREE.LoadingManager();
var loader72 = new THREE.OBJLoader(manager72);
loader72.load( fileName[5], function ( object ) {
object.scale.set(1,1,1);
object.position.set(0,0,0);    
object.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
            child.material = new THREE.MeshLambertMaterial({color:"rgb(20%, 20%, 20%)"});
            child.frustumCulled = false;
        }
    });
i7grass.add(object);
island7.add(i7grass);
});
island7.position.x = -5;
island7.position.z = 90;
island7.scale.set(2.4,1,1);
everything.add(island7);

//island4: moving secret main island
var island4 = new THREE.Object3D();
var i4ground = new THREE.Object3D();
var i4rocks = new THREE.Object3D();
var i4grass = new THREE.Object3D();

var manager40 = new THREE.LoadingManager();
var loader40 = new THREE.OBJLoader(manager40);
loader40.load( fileName[3], function ( object ) {
object.scale.set(1,1,1);
object.position.set(0,0,0);    
object.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
            child.material = new THREE.MeshLambertMaterial({color:"rgb(20%, 20%, 20%)"});
            child.frustumCulled = false;
        }
    });
i4ground.add(object);
island4.add(i4ground);
});
var manager41 = new THREE.LoadingManager();
var loader41 = new THREE.OBJLoader(manager41);
loader41.load( fileName[4], function ( object ) {
object.scale.set(1,1,1);
object.position.set(0,0,0);    
object.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
            child.material = new THREE.MeshLambertMaterial({color:"rgb(20%, 20%, 20%)"});
            child.frustumCulled = false;
        }
    });
i4rocks.add(object);
island4.add(i4rocks);
});
var manager42 = new THREE.LoadingManager();
var loader42 = new THREE.OBJLoader(manager42);
loader42.load( fileName[5], function ( object ) {
object.scale.set(1,1,1);
object.position.set(0,0,0);    
object.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
            child.material = new THREE.MeshLambertMaterial({color:"rgb(20%, 20%, 20%)"});
            child.frustumCulled = false;
        }
    });
i4grass.add(object);
island4.add(i4grass);
});
island4.position.x = -27;
everything.add(island4);

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
            child.material = new THREE.MeshLambertMaterial({color:"rgb(20%, 20%, 20%)"});
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
            child.material = new THREE.MeshLambertMaterial({color:"rgb(20%, 20%, 20%)"});
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
            child.material = new THREE.MeshLambertMaterial({color:"rgb(20%, 20%, 20%)"});
            child.frustumCulled = false;
        }
    });
i5grass.add(object);
island5.add(i5grass);
});
island5.position.x = -30;
island5.position.y = 15;
island5.scale.set(.8,1,.8);
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
            child.material = new THREE.MeshLambertMaterial({color:"rgb(20%, 20%, 20%)"});
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
            child.material = new THREE.MeshLambertMaterial({color:"rgb(20%, 20%, 20%)"});
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
            child.material = new THREE.MeshLambertMaterial({color:"rgb(20%, 20%, 20%)"});
            child.frustumCulled = false;
        }
    });
i6grass.add(object);
island6.add(i6grass);
});
island6.position.x = -20;
island6.position.z = -18;
island6.position.y = 20;
island6.scale.set(.6,.5,.6);
everything.add(island6);



//island 0:
var island0 = new THREE.Object3D();
var i0ground = new THREE.Object3D();
var i0rocks = new THREE.Object3D();
var i0grass = new THREE.Object3D();

var manager00 = new THREE.LoadingManager();
var loader00 = new THREE.OBJLoader(manager00);

loader00.load( fileName[0], function ( object ) {
object.scale.set(1,1,1);
object.position.set(0,0,0);    
object.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
            child.material = new THREE.MeshLambertMaterial({color:"rgb(20%, 20%, 20%)"});
            child.frustumCulled = false;
        }
    });
i0ground.add(object);
island0.add(i0ground);
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

i0rocks.add(object);
island0.add(i0rocks);
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

i0grass.add(object);
island0.add(i0grass);
});

everything.add( island0 );

//island 1:
var island1 = new THREE.Object3D();
var i1ground = new THREE.Object3D();
var i1rocks = new THREE.Object3D();
var i1grass = new THREE.Object3D();

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
i1ground.add(object);
island1.add(i1ground);
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

i1rocks.add(object);
island1.add(i1rocks);
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

i1grass.add(object);
island1.add(i1grass);
});

everything.add( island1 );

//island 2:
var island2 = new THREE.Object3D();
var i2ground = new THREE.Object3D();
var i2rocks = new THREE.Object3D();
var i2grass = new THREE.Object3D();

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

i2ground.add(object);
island2.add(i2ground);
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

i2rocks.add(object);
island2.add(i2rocks);
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
i2grass.add(object);
island2.add(i2grass);
});

everything.add( island2 );

//island 3:
var island3 = new THREE.Object3D();
var i3ground = new THREE.Object3D();
var i3rocks = new THREE.Object3D();
var i3grass = new THREE.Object3D();

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

i3ground.add(object);
island3.add(i3ground);
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

i3rocks.add(object);
island3.add(i3rocks);
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
i3grass.add(object);
island3.add(i3grass);
});

everything.add( island3 );

island2.position.x = -25;
island3.position.x = -25;
island3.position.z = 17;
island2.position.y = -8.5;
island3.position.y = -8.5;

//lights    
var light = new THREE.PointLight( 0xffffff, 1, 40*c);
light.position.set( -10,25,-25);
light.castShadow = true;
everything.add( light );

var light2 = new THREE.PointLight( 0xffffff, 1, 100*c);
light2.position.set( 50,10,20);
light2.castShadow = true;
everything.add( light2 );

var light3 = new THREE.PointLight( 0xffffff, 1, 100*c);
light3.position.set( 0,10,80);
light3.castShadow = true;
everything.add( light3 );

var p1 = -1;
var p2 = 6.2;
var p4 = 0;
var p7 = 0;
var p8 = 0;
var move = 35 + (35 * Math.sin(p1));
var move2 = (30 * Math.sin(p2));
var move4 = -(40 * Math.cos(p4)) + 40 + 15;
var move7 = -(39 * -Math.cos(p7)) + 39 + 10;
var move7x = 43*Math.cos((move7-20)/53) - 10;  
var move8z = 50*Math.sin(p8/100);
var move8x = 125*Math.cos(p8/100)+25;

var g1 = 0;

var t = 0;
var pos = new THREE.Vector2(0,0);

island1.position.z = -1;
island1.position.x = move;
island3.position.x = move2;
island4.position.z = move4;
island7.position.z = move7;
island7.position.x = 35*Math.cos((move7-20)/53)-8;
island8.position.z = move8z;
island8.position.x = move8x;
// everything.position.x = -(move + move2);
// everything.position.z = -move4 + 15;

//bird
var bird = [];
var birdseed = [];
var birdNumber = 15;
var flock = new THREE.Object3D();

for (var i = 0; i < birdNumber; i++){
  bird[i] = new THREE.Mesh(
      new THREE.OctahedronGeometry(1),
      new THREE.MeshLambertMaterial()
      );

  bird[i].geometry.vertices[0].set(2,0,0);
  bird[i].geometry.vertices[1].set(-2,0,0);
  bird[i].geometry.vertices[2].set(0,0.02,0.5);
  bird[i].geometry.vertices[3].set(0,-0.02,-0.5);
  bird[i].geometry.vertices[4].set(0,-0.02,0.5);
  bird[i].geometry.vertices[5].set(0,0.02,-0.5);

  birdseed[i] = Math.random();
  var birdscale = 2*Math.random()*Math.random() + .5;
  bird[i].scale.set(birdscale,birdscale,birdscale);
  var birdBrightness = 0.25 + (3*Math.random())/4;
  bird[i].material.color.setRGB(birdBrightness, birdBrightness, birdBrightness + Math.random()/2);

  flock.add(bird[i]);
};
everything.add(flock);

//glowbird
glowbird = new THREE.Mesh(
    new THREE.OctahedronGeometry(1),
    new THREE.MeshLambertMaterial()
    );

glowbird.geometry.vertices[0].set(1,0,0);
glowbird.geometry.vertices[1].set(-1,0,0);
glowbird.geometry.vertices[2].set(0,0.02,1);
glowbird.geometry.vertices[3].set(0,-0.02,-1);
glowbird.geometry.vertices[4].set(0,-0.02,1);
glowbird.geometry.vertices[5].set(0,0.02,-1);

glowbird.scale.set(2,2,2);
glowbird.material.color.setRGB(1,1,0.8);
    glowbird.position.z = move8z + 10*Math.sin(p8);
    glowbird.position.x = move8x + 15*Math.cos(p8);
everything.add(glowbird);

var birdglow = new THREE.PointLight( 0xffffaa, 0, 200*c);
birdglow.castShadow = true;
everything.add( birdglow );

//butterfly
var bufflock = new THREE.Object3D();
var bufflock2 = new THREE.Object3D();
var bufflock5 = new THREE.Object3D();
var bufflock6 = new THREE.Object3D();
var butterfly = [];
var butCount = 30;
for (var i = 0; i < butCount; i++){
  butterfly[i] = new THREE.Object3D();
  var overlap = Math.random();
  var pointy = 3*Math.random();
  var pointy2 = 3*Math.random();
  var outa = .4 + Math.random()/2;
  var outb = .6 + Math.random()/2;
  var scale = Math.random()*Math.random();

  //top pair of wings
  buffly = new THREE.Mesh(
      new THREE.OctahedronGeometry(1),
      new THREE.MeshBasicMaterial({ color: 0xffffff, vertexColors: THREE.VertexColors })
      );

  buffly.geometry.vertices[0].set(outa,0,pointy);
  buffly.geometry.vertices[1].set(-outa,0,pointy);
  buffly.geometry.vertices[2].set(0,0.02,1);
  buffly.geometry.vertices[3].set(0,-0.02,-1+overlap);
  buffly.geometry.vertices[4].set(0,-0.02,1);
  buffly.geometry.vertices[5].set(0,0.02,-1+overlap);

  var bufA = new THREE.Color(Math.random(),Math.random(),2*Math.random());
  var bufB = new THREE.Color(Math.random(),Math.random()/2,Math.random());
  var bufT = new THREE.Color(2*Math.random(),Math.random(),Math.random());

  buffly.geometry.faces[1].vertexColors[0] = bufA;//back of left wing, in-up
  buffly.geometry.faces[1].vertexColors[1] = bufB;// in-down
  buffly.geometry.faces[1].vertexColors[2] = bufT;// tip
  buffly.geometry.faces[2].vertexColors[0] = bufB;//bottom of left wing
  buffly.geometry.faces[2].vertexColors[1] = bufB;
  buffly.geometry.faces[2].vertexColors[2] = bufT;
  buffly.geometry.faces[3].vertexColors[0] = bufB;//left front wing, in-down
  buffly.geometry.faces[3].vertexColors[1] = bufA;//left front, in-up
  buffly.geometry.faces[3].vertexColors[2] = bufT;//left front, tip
  buffly.geometry.faces[4].vertexColors[0] = bufA;//right front, in-up
  buffly.geometry.faces[4].vertexColors[1] = bufB;//right front, in-down
  buffly.geometry.faces[4].vertexColors[2] = bufT;//right front, tip
  buffly.geometry.faces[5].vertexColors[0] = bufB;//underside of right wing
  buffly.geometry.faces[5].vertexColors[1] = bufB;
  buffly.geometry.faces[5].vertexColors[2] = bufT;
  buffly.geometry.faces[6].vertexColors[0] = bufB;//back of right wing, bottom
  buffly.geometry.faces[6].vertexColors[1] = bufA;//back of right wing, top
  buffly.geometry.faces[6].vertexColors[2] = bufT;//back of right wing, tip
  buffly.geometry.faces[7].vertexColors[0] = bufA;//top of right wing
  buffly.geometry.faces[7].vertexColors[1] = bufA;//
  buffly.geometry.faces[7].vertexColors[2] = bufT;//
  buffly.geometry.faces[0].vertexColors[0] = bufA;//top of left wing
  buffly.geometry.faces[0].vertexColors[1] = bufA;//
  buffly.geometry.faces[0].vertexColors[2] = bufT;//

  butterfly[i].add(buffly);

  //bottom pair of wings
  buffly2 = new THREE.Mesh(
      new THREE.OctahedronGeometry(1),
      new THREE.MeshBasicMaterial({ color: 0xffff00, vertexColors: THREE.VertexColors })
      );

  buffly2.geometry.vertices[0].set(outb,0,-pointy2);
  buffly2.geometry.vertices[1].set(-outb,0,-pointy2);
  buffly2.geometry.vertices[2].set(0,0.02,1);
  buffly2.geometry.vertices[3].set(0,-0.02,-1);
  buffly2.geometry.vertices[4].set(0,-0.02,1);
  buffly2.geometry.vertices[5].set(0,0.02,-1);

  var buf2T = new THREE.Color(2*Math.random(),Math.random(),2*Math.random());
  // var buf2Ab = new THREE.Color(.5,0.25,0.25);
  // var buf2Bb = new THREE.Color(.5,0.25,0.25);
  // var buf2Tb = new THREE.Color(.5,.5,0.25);

  buffly2.geometry.faces[1].vertexColors[0] = bufA;//back of left wing, in-up
  buffly2.geometry.faces[1].vertexColors[1] = bufB;// in-down
  buffly2.geometry.faces[1].vertexColors[2] = buf2T;// tip
  buffly2.geometry.faces[2].vertexColors[0] = bufB;//bottom of left wing
  buffly2.geometry.faces[2].vertexColors[1] = bufB;
  buffly2.geometry.faces[2].vertexColors[2] = buf2T;
  buffly2.geometry.faces[3].vertexColors[0] = bufB;//left front wing, in-down
  buffly2.geometry.faces[3].vertexColors[1] = bufA;//left front, in-up
  buffly2.geometry.faces[3].vertexColors[2] = buf2T;//left front, tip
  buffly2.geometry.faces[4].vertexColors[0] = bufA;//right front, in-up
  buffly2.geometry.faces[4].vertexColors[1] = bufB;//right front, in-down
  buffly2.geometry.faces[4].vertexColors[2] = buf2T;//right front, tip
  buffly2.geometry.faces[5].vertexColors[0] = bufB;//underside of right wing
  buffly2.geometry.faces[5].vertexColors[1] = bufB;
  buffly2.geometry.faces[5].vertexColors[2] = buf2T;
  buffly2.geometry.faces[6].vertexColors[0] = bufB;//back of right wing, bottom
  buffly2.geometry.faces[6].vertexColors[1] = bufA;//back of right wing, top
  buffly2.geometry.faces[6].vertexColors[2] = buf2T;//back of right wing, tip
  buffly2.geometry.faces[7].vertexColors[0] = bufA;//top of right wing
  buffly2.geometry.faces[7].vertexColors[1] = bufA;//
  buffly2.geometry.faces[7].vertexColors[2] = buf2T;//
  buffly2.geometry.faces[0].vertexColors[0] = bufA;//top of left wing
  buffly2.geometry.faces[0].vertexColors[1] = bufA;//
  buffly2.geometry.faces[0].vertexColors[2] = buf2T;//

  buffly2.position.y = -.01;

  butterfly[i].add(buffly2);

  butterfly[i].scale.set(scale,scale,scale);
  butterfly[i].position.y = 5 + Math.random();
  butterfly[i].position.x = 5*Math.random();
  butterfly[i].position.z = 5*Math.random();
  butterfly[i].rotation.x = -.5;
  butterfly[i].rotation.y = i;

  if (i < 5){
    bufflock5.add(butterfly[i]);
  } else if (i < 10){
    bufflock6.add(butterfly[i]);
  } else if (i < 19){
    bufflock2.add(butterfly[i]);
  } else {
    bufflock.add(butterfly[i]);
  }
}
everything.add(bufflock);
everything.add(bufflock2);
everything.add(bufflock5);
everything.add(bufflock6);

//plants:
var phi = 1.618033988749894848;
var pi = 3.14159265359;

//flowerpatch
var pet = [];
var flower = [];
var flowerPatch = new THREE.Object3D();
var flowerNumber = 8;
var petNumber = [];
var bloomness = [];
var spiky = [];
var poky = [];
var tally = [];
var colorG = [];
var colorB = [];
var colorR = [];
var fwidth = [];
var fheight = [];

for (var i = 0; i < flowerNumber; i++){

  flower[i]= new THREE.Object3D();

  pet[i] = [];
  petNumber[i] = 10 + 15*Math.random();
  bloomness[i] = 3 * Math.random();
  spiky[i] = Math.random();
  poky[i] = 400*Math.random()+8;
  tally[i] = 20+40*Math.random();
  colorG[i] = Math.random();
  colorB[i] = Math.random();
  colorR[i] = Math.random();
  fwidth[i] = 2 + 2*Math.random()+Math.random();
  fheight[i] = 1 + 2*Math.random()+Math.random();

  for (var j = 0; j < petNumber[i]; j++){
    pet[i][j] = new THREE.Mesh(
        new THREE.OctahedronGeometry(1),
        new THREE.MeshLambertMaterial()
        );

    pet[i][j].geometry.vertices[0].set(1,bloomness[i],0);
    pet[i][j].geometry.vertices[1].set(-1,bloomness[i],0);
    pet[i][j].geometry.vertices[2].set(0,0.05,spiky[i]);
    pet[i][j].geometry.vertices[3].set(0,-0.8,-spiky[i]);
    pet[i][j].geometry.vertices[4].set(0,-0.8,spiky[i]);
    pet[i][j].geometry.vertices[5].set(0,0.05,-spiky[i]);

    var petalScale1 = (petNumber[i] - j + 1)/tally[i];
    pet[i][j].scale.set(petalScale1,petalScale1,petalScale1);
    pet[i][j].material.color.setRGB(colorR[i], j*colorG[i]/petNumber[i], j*colorB[i]/petNumber[i]);
    pet[i][j].position.y = j/poky[i];
    pet[i][j].rotation.y = j*pi*phi;
    flower[i].add(pet[i][j]);
  };

  flower[i].scale.set(fwidth[i],fheight[i],fwidth[i]);
  if (i > 2){
    flower[i].position.set(14*Math.random(),0,(1.5*i)-5.5);
    flowerPatch.add(flower[i]);
  };
};
flower[0].position.set(island7.position.x + 16, island7.position.y, island7.position.z - 1);//flowerpatch island
flower[1].position.set(4,0.1,-12);//on main, near
flower[2].scale.set(6,4,6);
flower[2].position.set(7,0.1,-18);// on main, far
everything.add(flower[0]);
everything.add(flower[1]);
everything.add(flower[2]);
flowerPatch.position.set(island7.position.x,.1,island7.position.z - 2);
everything.add(flowerPatch);
bufflock2.position.set(flowerPatch.position.x + 10, flowerPatch.position.y, flowerPatch.position.z);


//big plant tree
var petal = [];
var petalNumber = 20;
var plant1 = new THREE.Object3D();
var bloom1 = 3;

for (var i = 0; i < petalNumber; i++){
  petal[i] = new THREE.Mesh(
      new THREE.OctahedronGeometry(1),
      new THREE.MeshLambertMaterial()
      );

  petal[i].geometry.vertices[0].set(1,bloom1,0);
  petal[i].geometry.vertices[1].set(-1,bloom1,0);
  petal[i].geometry.vertices[2].set(0,0.05,0.1);
  petal[i].geometry.vertices[3].set(0,-0.8,-0.1);
  petal[i].geometry.vertices[4].set(0,-0.8,0.1);
  petal[i].geometry.vertices[5].set(0,0.05,-0.1);

  var petalScale = (petalNumber - i + 1) / 50;
  petal[i].scale.set(petalScale,petalScale,petalScale);
  petal[i].material.color.setRGB(1,i/10,0);
  petal[i].position.y = i/25;
  petal[i].rotation.y = i*pi*phi;
  plant1.add(petal[i]);
};
plant1.scale.set(3,8,3);
plant1.position.set(88,0,-15)
everything.add(plant1);

//smaller plant
var petal2 = [];
var petal2Number = 10;
var plant2 = new THREE.Object3D();
var bloom2 = .5;

for (var i = 0; i < petal2Number; i++){
  petal2[i] = new THREE.Mesh(
      new THREE.OctahedronGeometry(1),
      new THREE.MeshLambertMaterial()
      );

  petal2[i].geometry.vertices[0].set(0.8,bloom2,0);
  petal2[i].geometry.vertices[1].set(-0.8,bloom2,0);
  petal2[i].geometry.vertices[2].set(0,0.05,0.5);
  petal2[i].geometry.vertices[3].set(0,-0.3,-0.5);
  petal2[i].geometry.vertices[4].set(0,-0.3,0.5);
  petal2[i].geometry.vertices[5].set(0,0.05,-0.5);

  var petal2Scale = (petal2Number - i + 1) / 50;
  petal2[i].scale.set(petal2Scale,petal2Scale,petal2Scale);
  petal2[i].material.color.setRGB(i/10,1,0);
  petal2[i].position.y = i/100;
  petal2[i].rotation.y = i*pi*phi;
  plant2.add(petal2[i]);
};
plant2.scale.set(10,10,10);
plant2.position.set(84,0,-19)
everything.add(plant2);

//blooming flowers
//Big island 
var g3 = pi;
var petal3 = [];
var petal3Number = 15;
var bufflower = new THREE.Object3D();
var bloom3 = .5;

for (var i = 0; i < petal3Number; i++){
  petal3[i] = new THREE.Mesh(
      new THREE.OctahedronGeometry(1),
      new THREE.MeshLambertMaterial()
      );

  petal3[i].geometry.vertices[0].set(Math.cos(g3)/2 + 0.51, 2*bloom3 - 6*Math.cos(g3)/10, 0);
  petal3[i].geometry.vertices[1].set(-Math.cos(g3)/2 - 0.51, 2*bloom3 - 6*Math.cos(g3)/10, 0);
  petal3[i].geometry.vertices[2].set(0,-Math.cos(g3)/3 + 0.2,Math.cos(g3)/8 + 0.5);
  petal3[i].geometry.vertices[3].set(0,-0.3,- 0.1);
  petal3[i].geometry.vertices[4].set(0,-0.3,0.1);
  petal3[i].geometry.vertices[5].set(0,-Math.cos(g3)/3 + 0.2,-Math.cos(g3)/8 - 0.5);

  var petal3Scale = (petal3Number - i + 1) / 50;
  petal3[i].scale.set(petal3Scale,petal3Scale,petal3Scale);
  petal3[i].material.color.setRGB(1, 0.4 - (i/petal3Number), 0.6 - (i/petal3Number));
  petal3[i].position.y = i/200;
  petal3[i].rotation.y = i*pi*phi;
  bufflower.add(petal3[i]);
};
bufflower.scale.set(20,20,20);
bufflower.position.set(-4,0,-17);
bufflock.position.set(bufflower.position.x + 5,bufflower.position.y,bufflower.position.z-150);
everything.add(bufflower);

//lower floating subisland bloomflower
var g5 = pi;
var petal5 = [];
var petal5Number = 15;
var bufflower5 = new THREE.Object3D();
var bloom5 = .8;

for (var i = 0; i < petal5Number; i++){
  petal5[i] = new THREE.Mesh(
      new THREE.OctahedronGeometry(1),
      new THREE.MeshLambertMaterial()
      );

  petal5[i].geometry.vertices[0].set(Math.cos(g5)/2 + 0.51, 2*bloom5 - 6*Math.cos(g5)/10, 0);
  petal5[i].geometry.vertices[1].set(-Math.cos(g5)/2 - 0.51, 2*bloom5 - 6*Math.cos(g5)/10, 0);
  petal5[i].geometry.vertices[2].set(0,-Math.cos(g5)/3 + 0.2,Math.cos(g5)/8 + 0.5);
  petal5[i].geometry.vertices[3].set(0,-0.3,- 0.1);
  petal5[i].geometry.vertices[4].set(0,-0.3,0.1);
  petal5[i].geometry.vertices[5].set(0,-Math.cos(g5)/3 + 0.2,-Math.cos(g5)/8 - 0.5);

  var petal5Scale = (petal5Number - i + 1) / 50;
  petal5[i].scale.set(petal5Scale,petal5Scale,petal5Scale);
  petal5[i].material.color.setRGB(.2, 0 + (i/petal5Number), 0.8 + (i/petal5Number));
  petal5[i].position.y = i/400;
  petal5[i].rotation.y = i*pi*phi;
  bufflower5.add(petal5[i]);
};
bufflower5.scale.set(15,15,15);
bufflower5.position.set(island5.position.x, island5.position.y, island5.position.z);
bufflock5.position.set(island5.position.x, island5.position.y, island5.position.z - 150);
everything.add(bufflower5);

//higher floating subisland bloomflower 
var g6 = pi;
var petal6 = [];
var petal6Number = 20;
var bufflower6 = new THREE.Object3D();
var bloom6 = .4;

for (var i = 0; i < petal6Number; i++){
  petal6[i] = new THREE.Mesh(
      new THREE.OctahedronGeometry(1),
      new THREE.MeshLambertMaterial()
      );

  petal6[i].geometry.vertices[0].set(Math.cos(g6)/2 + 0.51, 2*bloom6 - 6*Math.cos(g6)/10, 0);
  petal6[i].geometry.vertices[1].set(-Math.cos(g6)/2 - 0.51, 2*bloom6 - 6*Math.cos(g6)/10, 0);
  petal6[i].geometry.vertices[2].set(0,-Math.cos(g6)/3 + 0.2,Math.cos(g6)/8 + 0.5);
  petal6[i].geometry.vertices[3].set(0,-0.3,- 0.1);
  petal6[i].geometry.vertices[4].set(0,-0.3,0.1);
  petal6[i].geometry.vertices[5].set(0,-Math.cos(g6)/3 + 0.2,-Math.cos(g6)/8 - 0.5);

  var petal6Scale = (petal6Number - i + 1) / 50;
  petal6[i].scale.set(petal6Scale,petal6Scale,petal6Scale);
  petal6[i].material.color.setRGB(0.9, 1 - (i/petal6Number), 0.4 - (i/petal6Number));
  petal6[i].position.y = i/100;
  petal6[i].rotation.y = i*pi*phi;
  bufflower6.add(petal6[i]);
};
bufflower6.scale.set(10,10,10);
bufflower6.position.set(island6.position.x, island6.position.y, island6.position.z);
bufflock6.position.set(island6.position.x, island6.position.y, island6.position.z - 150);
everything.add(bufflower6);



everything.scale.set(c,c,c);
everything.position.y = -0.1;
scene.add(everything);

var i0t = 0; //island timers
var i1t = 0;
var i2t = 0;
var i3t = 0;
var i4t = 0;
var i5t = 0;
var i6t = 0;
var i7t = 0;
var i8t = 0;

var b5 = 0; //butterfly timers
var b6 = 0;
var b0 = 0;


var relative1 = 0;
var relative2 = 0;
var relative3 = 0;
var relative4 = 0;
var relative5 = 0;
var relative6 = 0;
var relative7 = 0;
var relative8 = 0;
var  relativePlant1 = 0;

var crouchHeight = 15*c;

/*
Request animation frame loop function
*/
function animate() {

  t += 1;

  pos.set(camera.position.x, camera.position.z);

  relative7 = new THREE.Vector2(island7.position.x*c + everything.position.x, island7.position.z*c + everything.position.z);
  if (pos.distanceTo(relative7) < 10*c){
    i7t = Math.min(i7t + 0.002, 1);
    if (i7t > .2){
      i7grass.children[0].children[0].material.color.setRGB(0.4-i7t,i7t,0.4-i7t); //this will break everything if objs aren't loaded yet
      if (i7t < .4){
        i7ground.children[0].children[0].material.color.setRGB(i7t,0.3-i7t/2,0.4-i7t);
      };
    };
  };

  relative8 = new THREE.Vector2(island8.position.x*c + everything.position.x, island8.position.z*c + everything.position.z);
  if (pos.distanceTo(relative8) < 10*c){
    i8t = Math.min(i8t + 0.002, 1);
    birdglow.intensity = Math.min(5*i8t, 1.6);
    if (i8t > .2){
      i8grass.children[0].children[0].material.color.setRGB(0.4-i8t,i8t,0.4-i8t); //this will break everything if objs aren't loaded yet
      if (i8t < .4){
        i8ground.children[0].children[0].material.color.setRGB(i8t,0.3-i8t/2,0.4-i8t);
      };
    };
  };

  relative4 = new THREE.Vector2(island4.position.x*c + everything.position.x, island4.position.z*c + everything.position.z);
  if (pos.distanceTo(relative4) < 10*c){
    i4t = Math.min(i4t + 0.002, 1);
    if (i4t > .2){
      i4grass.children[0].children[0].material.color.setRGB(0.4-i4t,i4t,0.4-i4t); //this will break everything if objs aren't loaded yet
      if (i4t < .4){
        i4ground.children[0].children[0].material.color.setRGB(i4t,0.3-i4t/2,0.4-i4t);
      };
    };
  };

  relative5 = new THREE.Vector2(island5.position.x*c + everything.position.x, island5.position.z*c + everything.position.z);
  if (pos.distanceTo(relative5) < 10*c){
    i5t = Math.min(i5t + 0.002, 1);
    if (i5t > .2){
      i5grass.children[0].children[0].material.color.setRGB(0.4-i5t,i5t,0.4-i5t); //this will break everything if objs aren't loaded yet
      if (i5t < .4){
        i5ground.children[0].children[0].material.color.setRGB(i5t,0.3-i5t/2,0.4-i5t);
      };
    };
  };

  relative6 = new THREE.Vector2(island6.position.x*c + everything.position.x, island6.position.z*c + everything.position.z);
  if (pos.distanceTo(relative6) < 10*c){
    i6t = Math.min(i6t + 0.002, 1);
    if (i6t > .2){
      i6grass.children[0].children[0].material.color.setRGB(0.4-i6t,i6t,0.4-i6t); //this will break everything if objs aren't loaded yet
      if (i6t < .4){
        i6ground.children[0].children[0].material.color.setRGB(i6t,0.3-i6t/2,0.4-i6t);
      };
    };
  };

  if (pos.distanceTo(island0.position) < 15*c){
    i0t = Math.min(i0t + 0.002, 1);
    if (i0t > .2){
      i0grass.children[0].children[0].material.color.setRGB(0.4-i0t,i0t,0.4-i0t); //this will break everything if objs aren't loaded yet
      if (i0t < .4){
        i0ground.children[0].children[0].material.color.setRGB(i0t,0.3-i0t/2,0.4-i0t);
      }
    };
  };

  relative1 = new THREE.Vector2(everything.position.x + island1.position.x*c, everything.position.z + island1.position.z*c);
  if (pos.distanceTo(relative1) < 10*c){
    i1t = Math.min(i1t + 0.002, 1);
    if (i1t > .2){
      i1grass.children[0].children[0].material.color.setRGB(0.4-i1t,i1t,0.4-i1t); //this will break everything if objs aren't loaded yet
      if (i1t < .4){
        i1ground.children[0].children[0].material.color.setRGB(i1t,0.3-i1t/2,0.4-i1t);
      };
    };
  };
  relative2 = new THREE.Vector2(65*c + everything.position.x, - 15*c + everything.position.z);
  if (pos.distanceTo(relative2) < 10*c){
    i2t = Math.min(i2t + 0.002, 1);
    if (i2t > .2){
      i2grass.children[0].children[0].material.color.setRGB(0.4-i2t,i2t,0.4-i2t); //this will break everything if objs aren't loaded yet
      if (i2t < .4){
        i2ground.children[0].children[0].material.color.setRGB(i2t,0.3-i2t/2,0.4-i2t);
      };
    };
  };

  relative3 = new THREE.Vector2(90*c + everything.position.x + island3.position.x*c, 2*c + everything.position.z + island3.position.z*c);
  if (pos.distanceTo(relative3) < 10*c){
    i3t = Math.min(i3t + 0.002, 1);
    if (i3t > .2){
      i3grass.children[0].children[0].material.color.setRGB(0.4-i3t,i3t,0.4-i3t); //this will break everything if objs aren't loaded yet
      if (i3t < .4){
        i3ground.children[0].children[0].material.color.setRGB(i3t,0.3-i3t/2,0.4-i3t);
      };
    };
  };

  //main island's moving platform
  if ((pos.distanceTo(relative1) < 4*c) && (camera.position.y < crouchHeight) && (camera.position.y > 0)){
    p1 += (0.002*crouchHeight)/camera.position.y;
    move = 35 + (35 * Math.sin(p1));
    island1.position.x = move;
    go1.play();
    // everything.position.x = -(move + move2);
  };

  //L island's moving platform
  if ((pos.distanceTo(relative3) < 10*c) && (camera.position.y < crouchHeight) && (camera.position.y > 0)){
    p2 += (0.002*crouchHeight)/camera.position.y;
    move2 = (30 * Math.sin(p2));
    island3.position.x = move2;
    // everything.position.x = -(move + move2);
  };

  //main island's secret moving platform
  if ((pos.distanceTo(relative4) < 4*c) && (camera.position.y < crouchHeight) && (camera.position.y > 0)){
    p4 += (0.002*crouchHeight)/camera.position.y;
    move4 = -(40 * Math.cos(p4)) + 40 + 15;
    island4.position.z = move4;
    // everything.position.z = -(move4 + move7) + 15 + 20;
  };

    //main island's far double secret moving platform
  if ((pos.distanceTo(relative7) < 8*c) && (camera.position.y < crouchHeight) && (camera.position.y > 0)){
    p7 += (0.002*crouchHeight)/camera.position.y;
    move7 = -(39 * -Math.cos(p7)) + 39 + 10;
    move7x = 43*Math.cos((move7-20)/53) - 10;
    island7.position.z = move7;
    island7.position.x = move7x;
    flowerPatch.position.set(island7.position.x,.1,island7.position.z - 2);
    bufflock2.position.set(flowerPatch.position.x + 10, flowerPatch.position.y, flowerPatch.position.z);
    flower[0].position.set(island7.position.x + 16, island7.position.y, island7.position.z - 1);
  };

  //glowbird island's circle
  if ((pos.distanceTo(relative8) < 8*c) && (camera.position.y < crouchHeight) && (camera.position.y > 0)){
    p8 += (0.002*crouchHeight)/camera.position.y;
    move8z = 70*Math.sin(p8/6);
    move8x = 125*Math.cos(p8/6)+25;
    island8.position.z = move8z;
    island8.position.x = move8x;
    glowbird.position.z = move8z + 10*Math.sin(p8);
    glowbird.position.x = move8x + 15*Math.cos(p8);

  };

    everything.position.x = c*( -(move8x + move + move2 + move7x) + 30 -30 -4 +150 );
    everything.position.z = c*( -(move8z + move7 + move4) + 10 + 20 + 78 );

  //bird flapping
  for (var i = 0; i < birdNumber; i++){
    var flappy = Math.sin(t/(7-(2*birdseed[i])));
    var flappy2 = Math.sin(t/(8-(3*birdseed[i])));
    bird[i].geometry.vertices[0].set(2,flappy+flappy2,0);
    bird[i].geometry.vertices[1].set(-2,flappy+flappy2,0);
    bird[i].geometry.verticesNeedUpdate = true;
    bird[i].lookAt(camera.position);
    bird[i].position.x = 57*birdseed[i] + 20 * Math.sin((t+200*birdseed[i])/57) + 5*Math.sin(t*birdseed[i]/51) + 8*Math.sin(t*birdseed[i]/67) + 10*birdseed[i]*Math.sin(t*birdseed[i]/79);
    bird[i].position.z = 20 * Math.cos((t+200*birdseed[i])/57) + 7*Math.sin(t*birdseed[i]/51) + 6*Math.sin(t*birdseed[i]/67) + 11*birdseed[i]*Math.cos(t*birdseed[i]/73);
    bird[i].position.y = 25 + 5*Math.sin((t+333*birdseed[i])/(39 - 20000*(birdseed[i]/2432)));
  };

  flock.position.x = 60*Math.sin(t/800) + 10*Math.sin(t/300);
  flock.position.z = 60*Math.cos(t/800) + 33*Math.cos(t/467);

    glowbird.geometry.vertices[0].set(1,Math.sin(t/10),0);
    glowbird.geometry.vertices[1].set(-1,Math.sin(t/10),0);
    glowbird.position.y = 7 + Math.sin(t/23);
    glowbird.geometry.verticesNeedUpdate = true;
    birdglow.position.set(glowbird.position.x, glowbird.position.y + 3, glowbird.position.z)

  //bufflap
  for (i = 0; i < butCount; i++){
    var buflappy = 0.5 + Math.sin(t/(2 + 2*(i/butCount)));
    butterfly[i].children[0].geometry.vertices[0].y = buflappy;
    butterfly[i].children[0].geometry.vertices[1].y = buflappy;
    butterfly[i].children[1].geometry.vertices[0].y = buflappy;
    butterfly[i].children[1].geometry.vertices[1].y = buflappy;
    butterfly[i].children[0].geometry.verticesNeedUpdate = true;
    butterfly[i].children[1].geometry.verticesNeedUpdate = true;
    butterfly[i].position.y = 7 + 2*Math.sin(t/(23+i)) + Math.sin((t+i)/9)/2 + buflappy/5;
    butterfly[i].position.z = 4*Math.sin(t/(50+i)) + 4*Math.sin(t/(42+i));
    butterfly[i].position.x = 5*Math.cos(t/(50+i)) + 3*Math.cos(t/(56+i));
  };

    //plant1
  relativePlant1 = new THREE.Vector2(plant1.position.x*c + everything.position.x, plant1.position.z*c + everything.position.z);
  if (relativePlant1.distanceTo(pos) < 20*c){
    g1 += .01;
    plant1.scale.x = Math.min(15, 3+g1);
    plant1.scale.z = Math.min(15, 3+g1);
    plant1.scale.y = Math.min(30, 8+g1);
    bloom1 = Math.max(0.5, 3-(g1/10));
    for (var i = 0; i < petalNumber; i++){
      petal[i].geometry.vertices[0].set(1, bloom1 + Math.sin(g1)/10, 0);
      petal[i].geometry.vertices[1].set(-1, bloom1 + Math.sin(g1)/10, 0);
      petal[i].geometry.verticesNeedUpdate = true;
    };
    plant1.position.y = Math.min(g1/3, 7);

    plant2.scale.set(Math.min(10+(g1/2), 20),Math.min(10+g1, 40),Math.min(10+(g1/2), 20));
  }

  //main island blooming flower
  var relativeFlower = new THREE.Vector2(bufflower.position.x*c + everything.position.x, bufflower.position.z*c + everything.position.z); 
  if ( pos.distanceTo(relativeFlower) < 8*c && (g3 < 2*pi) ){
    g3 += .002;
    for (var i = 0; i < petal3Number; i++){
      petal3[i].geometry.vertices[0].set(Math.cos(g3)/2 + 0.51, 2*bloom3 - 6*Math.cos(g3)/10, 0);
      petal3[i].geometry.vertices[1].set(-Math.cos(g3)/2 - 0.51, 2*bloom3 - 6*Math.cos(g3)/10, 0);
      petal3[i].geometry.vertices[2].set(0,-Math.cos(g3)/3 + 0.2,Math.cos(g3)/8 + 0.5);
      petal3[i].geometry.vertices[3].set(0,-0.3,- 0.1);
      petal3[i].geometry.vertices[4].set(0,-0.3,0.1);
      petal3[i].geometry.vertices[5].set(0,-Math.cos(g3)/3 + 0.2,-Math.cos(g3)/8 - 0.5);
      petal3[i].geometry.verticesNeedUpdate = true;
    };
  };

    //lower sub island blooming flower
  var relativeFlower5 = new THREE.Vector2(bufflower5.position.x*c + everything.position.x, bufflower5.position.z*c + everything.position.z); 
  if ( pos.distanceTo(relativeFlower5) < 8*c && (g5 < 2*pi) ){
    g5 += .002;
    for (var i = 0; i < petal5Number; i++){ 
      petal5[i].geometry.vertices[0].set(Math.cos(g5)/2 + 0.51, 2*bloom5 - 6*Math.cos(g5)/10, 0);
      petal5[i].geometry.vertices[1].set(-Math.cos(g5)/2 - 0.51, 2*bloom5 - 6*Math.cos(g5)/10, 0);
      petal5[i].geometry.vertices[2].set(0,-Math.cos(g5)/3 + 0.2,Math.cos(g5)/8 + 0.5);
      petal5[i].geometry.vertices[3].set(0,-0.3,- 0.1);
      petal5[i].geometry.vertices[4].set(0,-0.3,0.1);
      petal5[i].geometry.vertices[5].set(0,-Math.cos(g5)/3 + 0.2,-Math.cos(g5)/8 - 0.5);
      petal5[i].geometry.verticesNeedUpdate = true;
    };
  };
  //upper sub island blooming flower
  var relativeFlower6 = new THREE.Vector2(bufflower6.position.x*c + everything.position.x, bufflower6.position.z*c + everything.position.z); 
  if ( pos.distanceTo(relativeFlower6) < 8*c && (g6 < 2*pi) ){
    g6 += .002;
    for (var i = 0; i < petal6Number; i++){ 
      petal6[i].geometry.vertices[0].set(Math.cos(g6)/2 + 0.51, 2*bloom6 - 6*Math.cos(g6)/10, 0);
      petal6[i].geometry.vertices[1].set(-Math.cos(g6)/2 - 0.51, 2*bloom6 - 6*Math.cos(g6)/10, 0);
      petal6[i].geometry.vertices[2].set(0,-Math.cos(g6)/3 + 0.2,Math.cos(g6)/8 + 0.5);
      petal6[i].geometry.vertices[3].set(0,-0.3,- 0.1);
      petal6[i].geometry.vertices[4].set(0,-0.3,0.1);
      petal6[i].geometry.vertices[5].set(0,-Math.cos(g6)/3 + 0.2,-Math.cos(g6)/8 - 0.5);
      petal6[i].geometry.verticesNeedUpdate = true;
    };
  };
  if ((g6 > 3*pi/2) && ((-150 + b6) < bufflower6.position.z)){
    b6 += 0.4;
    bufflock6.position.set(bufflower6.position.x, bufflower6.position.y, -150 + b6);
  }
  if ((g5 > 3*pi/2) && ((-150 + b5) < bufflower5.position.z)){
    b5 += 0.4;
    bufflock5.position.set(bufflower5.position.x, bufflower5.position.y, -150 + b5);
  }
  if ((g3 > 3*pi/2) && ((-150 + b0) < bufflower.position.z)){
    b0 += 0.4;
    bufflock.position.set(bufflower.position.x + 5, bufflower.position.y, -150 + b0);
  }

  //rolling clouds
  for (var i = 0; i < plane2.geometry.vertices.length; i++){
  plane2.geometry.vertices[i].z = Math.sin((plane.geometry.vertices[i].y + t/89)/3) + 2*Math.sin((plane.geometry.vertices[i].y + t/99)/17) + 1.2*Math.sin((plane.geometry.vertices[i].x + t/123)/2) + 1.1*Math.cos((plane.geometry.vertices[i].y + t/197)/3.6) + 1.5*Math.cos((plane.geometry.vertices[i].x + t/111)/3);
  };
  plane2.geometry.verticesNeedUpdate=true;

  //L island music
  music1.volume = Math.min(1, 2/(pos.distanceTo(relative2)*pos.distanceTo(relative2)*pos.distanceTo(relative2)));

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
