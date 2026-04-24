import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const CyberBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Create a digital grid
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const size = 50;
    const divisions = 50;

    for (let i = -size; i <= size; i += size / divisions) {
      vertices.push(-size, -1, i, size, -1, i);
      vertices.push(i, -1, -size, i, -1, size);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    const material = new THREE.LineBasicMaterial({ 
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.1
    });
    const grid = new THREE.LineSegments(geometry, material);
    scene.add(grid);

    // Add some random "data" particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 100;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: 0x00ff88,
      transparent: true,
      opacity: 0.5,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 30;
    camera.position.y = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      
      grid.position.z += 0.05;
      if (grid.position.z >= size / divisions) {
        grid.position.z = 0;
      }

      particlesMesh.rotation.y += 0.001;
      particlesMesh.rotation.x += 0.0005;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 -z-10 pointer-events-none opacity-40" />;
};
