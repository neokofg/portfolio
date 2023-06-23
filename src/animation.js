import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const container = document.getElementById( 'canvas' );

const renderer = new THREE.WebGLRenderer({antialias: true });
renderer.setSize( container.offsetWidth, 600);

let base = new THREE.Object3D();
scene.add(base);
const loader = new GLTFLoader();
loader.load( 'scene.gltf', function ( gltf ) {
    gltf.scene.scale.setScalar(2);
    base.add( gltf.scene );
} );
scene.add( base );
var plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -2);
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
var pointOfIntersection = new THREE.Vector3();
renderer.domElement.addEventListener("mousemove", onMouseMove, false);
camera.position.z = 3
camera.position.x = 1.2
camera.position.y = 1.5
renderer.render( scene, camera );
function onMouseMove(event){
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    raycaster.ray.intersectPlane(plane, pointOfIntersection);
    base.lookAt(pointOfIntersection);
}
renderer.setAnimationLoop(() => {

    container.appendChild( renderer.domElement );
    renderer.render(scene, camera);
});