var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var texture = new THREE.TextureLoader().load("snow.jpg");
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(4, 4);

// body
var geometryBase = new THREE.SphereGeometry(6, 32, 32);
var geometryAbdomen = new THREE.SphereGeometry(5, 32, 32);
var geometryHead = new THREE.SphereGeometry(4, 32, 32);
var materialBody = new THREE.MeshLambertMaterial({
  color: 0xffffff,
  map: texture
});
var base = new THREE.Mesh(geometryBase, materialBody);
var abdomen = new THREE.Mesh(geometryAbdomen, materialBody);
var head = new THREE.Mesh(geometryHead, materialBody);

//nose
var geometryNose = new THREE.ConeGeometry(1, 3, 8);
var materialNose = new THREE.MeshLambertMaterial({ color: 0xffa500 });
var nose = new THREE.Mesh(geometryNose, materialNose).rotateX(1.5);

//eyes
var geometryEye = new THREE.SphereGeometry(0.3, 32, 32);
var materialEye = new THREE.MeshLambertMaterial({ color: 0x000000 });
var leftEye = new THREE.Mesh(geometryEye, materialEye);
var rightEye = new THREE.Mesh(geometryEye, materialEye);

//face position
var face = new THREE.Group();

nose.position.z = 5;
nose.position.y = 12;
leftEye.position.z = 3.9;
leftEye.position.x = -1;
leftEye.position.y = 13;
rightEye.position.z = 3.9;
rightEye.position.x = 1;
rightEye.position.y = 13;

face.add(head);
face.add(nose);
face.add(leftEye);
face.add(rightEye);

scene.add(face);

//body position

abdomen.position.y = 6.5;
head.position.y = 12;

scene.add(base);
scene.add(abdomen);

// light
var directionalLight = new THREE.DirectionalLight(0xffffff, 0.9);
var ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
directionalLight.position.set(5, 25, 5).normalize();
scene.add(directionalLight);
scene.add(ambientLight);
scene.background = new THREE.Color(0xffbb00);
//camera position

camera.position.z = 32;
camera.position.y = 12;

//animation

function animate() {
  requestAnimationFrame(animate);

  face.rotation.y += 0.1;
  abdomen.rotation.y += 0.1;
  base.rotation.y += 0.1;
  renderer.render(scene, camera);
}

animate();
