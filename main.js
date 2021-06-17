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
