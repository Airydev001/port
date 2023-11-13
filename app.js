import * as THREE from 'https://unpkg.com/three/build/three.module.js';

// Create scene and camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Create renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('scene-container').appendChild(renderer.domElement);

// Create a simple car
const carGeometry = new THREE.BoxGeometry(1, 0.5, 0.5);
const carMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const car = new THREE.Mesh(carGeometry, carMaterial);
scene.add(car);

// Set initial camera position
camera.position.z = 5;

// Handle window resize
window.addEventListener('resize', () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;

    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(newWidth, newHeight);
});

// Handle keyboard input for car movement
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            moveCar('forward');
            break;
        case 'ArrowDown':
            moveCar('backward');
            break;
        case 'ArrowLeft':
            moveCar('left');
            break;
        case 'ArrowRight':
            moveCar('right');
            break;
    }
});

// Handle button click for car movement
document.getElementById('btnForward').addEventListener('click', () => moveCar('forward'));
document.getElementById('btnBackward').addEventListener('click', () => moveCar('backward'));
document.getElementById('btnLeft').addEventListener('click', () => moveCar('left'));
document.getElementById('btnRight').addEventListener('click', () => moveCar('right'));

// Function to move the car based on the direction
function moveCar(direction) {
    const speed = 0.1;

    switch (direction) {
        case 'forward':
            car.position.z -= speed;
            break;
        case 'backward':
            car.position.z += speed;
            break;
        case 'left':
            car.position.x -= speed;
            break;
        case 'right':
            car.position.x += speed;
            break;
    }
}

// Animation loop
const animate = function () {
    requestAnimationFrame(animate);

    // Add custom animation logic here

    renderer.render(scene, camera);
};

// Start the animation loop
animate();
