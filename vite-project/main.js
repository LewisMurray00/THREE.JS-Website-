import './style.css'
import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

//GEOMETRY
//The {x,y,z} points that makeup a shape
const geometry = new THREE.TorusGeometry(10,3,16,100);

//MATERIAL
//The wrapping paper for an object 
const material = new THREE.MeshBasicMaterial({color: 0xff6347, wireframe: true});

//MESH
//Added geometry and material together
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);

//ANIMATION LOOP
function animate(){
  requestAnimationFrame(animate);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;


  renderer.render(scene,camera);
}

animate();
