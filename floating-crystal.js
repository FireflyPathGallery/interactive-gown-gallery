// Import Three.js and OrbitControls
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Create the scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Create the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('crystal-container').appendChild(renderer.domElement);

// Create the crystal geometry and material
const geometry = new THREE.OctahedronGeometry(5);
const material = new THREE.MeshBasicMaterial({ vertexColors: true });

// Define colors for each facet
const colors = [
    new THREE.Color(0xff0000), // Red
    new THREE.Color(0x00ff00), // Green
    new THREE.Color(0x0000ff), // Blue
    new THREE.Color(0xffff00), // Yellow
    new THREE.Color(0xff00ff), // Magenta
    new THREE.Color(0x00ffff), // Cyan
    new THREE.Color(0xffffff), // White
    new THREE.Color(0x000000)  // Black
];

// Assign colors to the geometry
for (let i = 0; i < geometry.faces.length; i++) {
    geometry.faces[i].color = colors[i % colors.length];
}

// Create the crystal mesh
const crystal = new THREE.Mesh(geometry, material);
scene.add(crystal);

// Position the camera and add controls
camera.position.z = 10;
const controls = new OrbitControls(camera, renderer.domElement);

// Add event listener for clicks
renderer.domElement.addEventListener('click', onCrystalClick);

function onCrystalClick(event) {
    // Calculate mouse position in normalized device coordinates
    const mouse = new THREE.Vector2();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Create a raycaster and set its position
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);

    // Check for intersections with the crystal
    const intersects = raycaster.intersectObject(crystal);
    if (intersects.length > 0) {
        const intersectedFace = intersects[0].face;
        const clickedColor = intersectedFace.color;
        // Redirect to the gallery page based on the clicked color
        redirectToGallery(clickedColor);
    }
}

function redirectToGallery(color) {
    // Define the mapping from color to gallery URL
    const colorToGallery = {
        'ff0000': 'red-gallery.html',
        '00ff00': 'green-gallery.html',
        '0000ff': 'blue-gallery.html',
        'ffff00': 'yellow-gallery.html',
        'ff00ff': 'magenta-gallery.html',
        '00ffff': 'cyan-gallery.html',
        'ffffff': 'white-gallery.html',
        '000000': 'black-gallery.html'
    };

    // Convert color to hex string and navigate to the corresponding gallery
    const colorHex = color.getHexString();
    window.location.href = colorToGallery[colorHex];
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();
