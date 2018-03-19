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

var geometry = new THREE.SphereGeometry(2, 32, 32)
var material = new THREE.MeshNormalMaterial({ color: 0x00ff00 })
var sphere = new THREE.Mesh(geometry, material)
scene.add(sphere)

var geometry2 = new THREE.SphereGeometry(1.75, 32, 32)
var material2 = new THREE.MeshNormalMaterial({ color: 0x00ff00 })
var sphere2 = new THREE.Mesh(geometry2, material2)
sphere2.position.y = 2
scene.add(sphere2)

camera.position.z = 10

function animate() {
	requestAnimationFrame(animate)
	// sphere.rotation.x += 0.2;
	// sphere.rotation.y += 0.2;
	renderer.render(scene, camera)
}

ambientLight = new THREE.AmbientLight(0x333333) // 0.2
light = new THREE.DirectionalLight(0xffffff, 1.0)

scene.add(ambientLight)
scene.add(light)

animate()
