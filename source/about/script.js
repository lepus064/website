
import * as THREE from 'https://cdn.skypack.dev/three@0.134.0';

import { OrbitControls } from 'https://cdn.skypack.dev/three@0.134.0/examples/jsm/controls/OrbitControls.js';

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(50, 400 / 300, 0.1, 1000);

//var renderer = new THREE.WebGLRenderer();
var renderer = new THREE.WebGLRenderer( { canvas: animationCanvas } );
renderer.setSize(400, 300);
//document.body.appendChild(renderer.domElement);

var geometry = new THREE.SphereGeometry(3, 50, 50, 0, Math.PI * 2, 0, Math.PI * 2);
var material1 = new THREE.MeshBasicMaterial();
var material2 = new THREE.MeshBasicMaterial();
var sphere = [new THREE.Mesh(geometry, material1), new THREE.Mesh(geometry, material1), new THREE.Mesh(geometry, material2)];

sphere[0].position.set(1, 1, 1);
sphere[1].position.set(-1, -1, -1);

scene.add(sphere[0]);
scene.add(sphere[1]);
scene.add(sphere[2]);

camera.position.z = 10;


var hex = "0x" + "000000".replace(/0/g, function() {
  return (~~(Math.random() * 16)).toString(16);
});
sphere[0].material.color.setHex(hex);

hex = "0x" + "000000".replace(/0/g, function() {
  return (~~(Math.random() * 16)).toString(16);
});
sphere[2].material.color.setHex(hex);


var render = function() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
};

render();