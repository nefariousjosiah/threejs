import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js";
// Canvas

const canvas = document.querySelector('canvas.webgl');
//Scene

const scene = new THREE.Scene();

//Object 


const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "white"});
const mesh = new THREE.Mesh(geometry, material);
//second object
const geometry1 = new THREE.BoxGeometry(1, 1, 1);
const material1 = new THREE.MeshBasicMaterial({ color: "#FF69B4"});
const mesh1 = new THREE.Mesh(geometry1, material1);

scene.add(mesh);
scene.add(mesh1);

//Sizes

const sizes = {
        width: window.innerWidth,
        height: window.innerHeight,
};


//Camera

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
scene.add(camera);
camera.position.y = 5;
camera.position.z = 5;
camera.position.x = 5.5;
mesh.position.y = 1;
mesh.position.z = -1;
mesh1.position.z = -1;
mesh1.position.y = 3

// Renderer

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);

//animations
//clock

const clock = new THREE.Clock()

const tick = () =>
    {

        const elapsedTime = clock.getElapsedTime();

        //clock
        mesh.position.x = Math.cos(elapsedTime);
        mesh1.position.z = Math.sin(elapsedTime);
        mesh1.rotation.y = Math.sin(elapsedTime)
        ;

        renderer.render (scene, camera)
  

        window.requestAnimationFrame(tick)
    }
    tick()
    const controls = new OrbitControls(camera, renderer.domElement);
    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    }




