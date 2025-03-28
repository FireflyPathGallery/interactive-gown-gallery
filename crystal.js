import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.155.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.155.0/examples/jsm/loaders/GLTFLoader.js';

let scene, camera, renderer, crystal;

function init() {
    // Create scene
    scene = new THREE.Scene();

    // Set up camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 3;

    // WebGL Renderer
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Load the 3D Crystal Model
    const loader = new GLTFLoader();
    loader.load('crystalModel.glb', function (gltf) {
        crystal = gltf.scene;
        scene.add(crystal);
    });

    // Lighting
    const light = new THREE.PointLight(0xffffff, 2, 100);
    light.position.set(10, 10, 10);
    scene.add(light);

    animate();
}

function animate() {
    requestAnimationFrame(animate);

    // Rotate the crystal
    if (crystal) {
        crystal.rotation.y += 0.01;
    }

    renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

// Initialize the scene
init();
