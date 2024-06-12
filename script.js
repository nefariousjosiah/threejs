import * as THREE from "three";
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
const material1 = new THREE.MeshBasicMaterial({ color: "pink"});
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
camera.position.y = 2;
camera.position.z = 3;
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

const tick = () =>
    {
        mesh.rotation.y += 0.03
        mesh1.rotation.y += -0.03

        renderer.render (scene, camera)
  

        window.requestAnimationFrame(tick)
    }
    tick()





