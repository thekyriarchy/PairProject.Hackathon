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
var materialBody = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  map: texture
});
var base = new THREE.Mesh(geometryBase, materialBody);
var abdomen = new THREE.Mesh(geometryAbdomen, materialBody);
var head = new THREE.Mesh(geometryHead, materialBody);

// face
var geometryNose = new THREE.ConeGeometry(1, 3, 8);
var materialNose = new THREE.MeshBasicMaterial({ color: 0xffa500 });
var nose = new THREE.Mesh(geometryNose, materialNose).rotateX(1.5);
var face = new THREE.Group();
abdomen.position.y = 6.5;
head.position.y = 12;
nose.position.z = 5;
nose.position.y = 12;
scene.add(base);
scene.add(abdomen);
face.add(head);
face.add(nose);
scene.add(face);

camera.position.z = 32;
camera.position.y = 12;

function animate() {
  requestAnimationFrame(animate);
  face.rotation.y += 0.1;
  abdomen.rotation.y += 0.1;
  base.rotation.y += 0.1;
  renderer.render(scene, camera);
}

ambientLight = new THREE.AmbientLight(0x333333); // 0.2
light = new THREE.DirectionalLight(0xffffff, 1.0);

scene.add(ambientLight);
scene.add(light);

animate();
