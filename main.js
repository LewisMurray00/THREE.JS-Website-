//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();

//Perspective camera is what we would see through our eyes
// 1st: FOV 2nd: Aspect ratio 3rd: view Frustum
//CAMERA
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight);

//RENDER
//need to use a renderer, which is where the magic happens
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg')
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

//GEOMETRY
//Added a 3d shape to the screen
const geometry = new THREE.TorusGeometry(10,3,16,100);

//Material
//The wrapping paper for an object 
const material = new THREE.MeshStandardMaterial({color: 0xFF6347});

//MESH
//Geometry + Material
const torus = new THREE.Mesh(geometry, material);

//Adding it to the screen
scene.add(torus);

//LIGHTING
//Add some lighting
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5,5,5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

//ORBIT CONTROLS
//const controls = new OrbitControls(camera, renderer.domElement);



//To see it you need to recall the render method
//ANIMATION LOOP
function animate(){
    requestAnimationFrame(animate);

    //Adding the ability to move it:
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.01;

    //controls.update();

    renderer.render(scene,camera);
}

animate();

