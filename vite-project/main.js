import './style.css'
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

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
const material = new THREE.MeshStandardMaterial({color: 0xff6347});

//MESH
//Added geometry and material together
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);

//LIGHTING
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5,5,5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

//ORBIT CONTROLS
const controls = new OrbitControls(camera, renderer.domElement);

//RANDOM GENERATE
//randomly generate "stars"
function addStar(){
  const geometry = new THREE.SphereGeometry(0.25,24,24);
  const material = new THREE.MeshStandardMaterial({color: 0xffffff});
  const star = new THREE.Mesh(geometry, material);

  //randomly generate the position for the stars 
  const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
  star.position.set(x,y,z);

  scene.add(star);
}

Array(200).fill().forEach(addStar);

//Adding a background image 
const spaceTexture = new THREE.TextureLoader().load('space.jpg');
scene.background = spaceTexture;


//ANIMATION LOOP
function animate(){
  requestAnimationFrame(animate);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  controls.update();

  renderer.render(scene,camera);
}

animate();
