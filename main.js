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
const material = new THREE.MeshBasicMaterial({color: 0xFF6347, wireframe: true});

//Mesh
//Geometry + Material
const torus = new THREE.Mesh(geometry, material);
