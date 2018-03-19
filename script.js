var scene = new THREE.Scene()
var camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
)

var renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

var texture = new THREE.TextureLoader().load('snow.jpg')
texture.wrapS = THREE.RepeatWrapping
texture.wrapT = THREE.RepeatWrapping
texture.repeat.set(4, 4)

var geometryBase = new THREE.SphereGeometry(6, 32, 32)
var geometryAbdomen = new THREE.SphereGeometry(5, 32, 32)
var geometryHead = new THREE.SphereGeometry(4, 32, 32)
var material = new THREE.MeshBasicMaterial({ color: 0xffffff, map: texture })
var base = new THREE.Mesh(geometryBase, material)
var abdomen = new THREE.Mesh(geometryAbdomen, material)
var head = new THREE.Mesh(geometryHead, material)
abdomen.position.y = 6.5
head.position.y = 12
scene.add(base)
scene.add(abdomen)
scene.add(head)

camera.position.z = 16
camera.position.y = 4

function animate() {
	requestAnimationFrame(animate)
	//sphere.rotation.x += 0.2
	//sphere.rotation.y += 0.2
	renderer.render(scene, camera)
}

ambientLight = new THREE.AmbientLight(0x333333) // 0.2
light = new THREE.DirectionalLight(0xffffff, 1.0)

scene.add(ambientLight)
scene.add(light)

animate()
