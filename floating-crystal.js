import * as THREE from 'three';

let scene, camera, renderer, crystal;

function init() {
    // Scene setup
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Crystal geometry
    const geometry = new THREE.OctahedronGeometry(1.5);
    const material = new THREE.MeshStandardMaterial({ color: 0x89CFF0, emissive: 0x002244, metalness: 0.6, roughness: 0.4 });
    crystal = new THREE.Mesh(geometry, material);
    scene.add(crystal);

    // Lighting
    const light = new THREE.PointLight(0xffffff, 1.5, 100);
    light.position.set(5, 5, 5);
    scene.add(light);

    animate();
}

function animate() {
    requestAnimationFrame(animate);
    crystal.rotation.y += 0.01;
    renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

init();
