import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.155.0/build/three.module.js';

let scene, camera, renderer, crystal;

function init() {
    // Scene setup
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Crystal geometry (simple placeholder for now)
    const geometry = new THREE.OctahedronGeometry(1.2);
    const material = new THREE.MeshStandardMaterial({
        color: 0xb0e0e6, // Pale blue
        emissive: 0x440088,
        metalness: 0.5,
        roughness: 0.3,
        transparent: true,
        opacity: 0.95
    });
    crystal = new THREE.Mesh(geometry, material);
    crystal.position.y = 0.8; // Hover above ground
    scene.add(crystal);

    // Ambient glow
    const ambient = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambient);

    const pointLight = new THREE.PointLight(0x9966ff, 1.5, 100);
    pointLight.position.set(3, 4, 5);
    scene.add(pointLight);

    animate();
}

function animate() {
    requestAnimationFrame(animate);

    // Rotate and hover
    crystal.rotation.y += 0.005;
    crystal.position.y = 0.8 + Math.sin(Date.now() * 0.002) * 0.05;

    renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

init();
