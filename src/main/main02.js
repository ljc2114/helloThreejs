import * as THREE from 'three';
//导入控制器
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

// 目标： 控制3D物体移动
// 1.创建场景
const scene = new THREE.Scene();

// 2.创建相机
const camera = new THREE.PerspectiveCamera(15, window.innerWidth / window.innerHeight, 0.1, 1000)

// 设置相机位置
camera.position.set(0,0,10)
scene.add(camera)

//添加物体
//创基几何体
const cubeGeometry = new THREE.BoxGeometry()
const cubeMaterial = new THREE.MeshBasicMaterial({color: 0xfff88})
//根据几何体和材质创建物体
const cube = new THREE.Mesh(cubeGeometry,cubeMaterial)
//*修改物体的位置
// cube.position.set(5,0,0)
//将几何体添加到场景中
scene.add(cube)

// 3.创建渲染器
const renderer = new THREE.WebGLRenderer();
//设置渲染的尺寸和大小
renderer.setSize(window.innerWidth,window.innerHeight)

// 4.添加到body当中
document.body.appendChild( renderer.domElement );
// renderer.render(scene,camera)

//添加坐标轴辅助器
const axesHelper = new THREE.AxesHelper(5)
scene.add(axesHelper)
// 5.创建轨道控制器
const controls = new OrbitControls( camera, renderer.domElement );
cube.position.set(0,0,0)

function render() {
if(cube.position.x < 5 ){
  cube.position.x += 0.01
}
if(cube.position.x > 5){
  cube.position.x = 0
}
renderer.render(scene,camera)
  requestAnimationFrame(render)
}

render()