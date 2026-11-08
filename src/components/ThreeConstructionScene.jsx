import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeConstructionScene() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#070b14');
    scene.fog = new THREE.FogExp2('#070b14', 0.018);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      200
    );
    camera.position.set(20, 15, 26);
    camera.lookAt(0, 9, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight('#1e293b', 1.8);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight('#60a5fa', 2.2);
    dirLight.position.set(30, 40, 20);
    scene.add(dirLight);

    const amberLight = new THREE.PointLight('#f59e0b', 3, 35);
    amberLight.position.set(-6, 16, 4);
    scene.add(amberLight);

    const cyanLight = new THREE.PointLight('#06b6d4', 2.5, 45);
    cyanLight.position.set(12, 10, -6);
    scene.add(cyanLight);

    // Materials Palette
    const steelMat = new THREE.MeshStandardMaterial({
      color: '#334155',
      roughness: 0.35,
      metalness: 0.85,
    });

    const yellowCraneMat = new THREE.MeshStandardMaterial({
      color: '#f59e0b',
      roughness: 0.4,
      metalness: 0.6,
      emissive: '#d97706',
      emissiveIntensity: 0.15,
    });

    const glowBlueLineMat = new THREE.LineBasicMaterial({
      color: '#38bdf8',
      transparent: true,
      opacity: 0.6,
    });

    const neonCyanLineMat = new THREE.LineBasicMaterial({
      color: '#22d3ee',
      transparent: true,
      opacity: 0.8,
    });

    const concreteMat = new THREE.MeshStandardMaterial({
      color: '#1e293b',
      roughness: 0.9,
      metalness: 0.1,
    });

    const beaconMat = new THREE.MeshBasicMaterial({ color: '#ef4444' });

    // --- Ground Grid & Digital Blueprint ---
    const gridHelper = new THREE.GridHelper(70, 70, '#0284c7', '#1e293b');
    gridHelper.position.y = 0;
    gridHelper.material.opacity = 0.25;
    gridHelper.material.transparent = true;
    scene.add(gridHelper);

    // Expanding blueprint rings
    const ringGeo = new THREE.RingGeometry(10, 10.2, 64);
    ringGeo.rotateX(-Math.PI / 2);
    const ringMat = new THREE.MeshBasicMaterial({
      color: '#0284c7',
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.3,
    });
    const ringMesh1 = new THREE.Mesh(ringGeo, ringMat);
    ringMesh1.position.y = 0.05;
    scene.add(ringMesh1);

    const ringMesh2 = ringMesh1.clone();
    ringMesh2.scale.set(1.8, 1.8, 1.8);
    scene.add(ringMesh2);

    // --- Skyscraper Lattice / Framework Under Construction ---
    const buildingGroup = new THREE.Group();
    buildingGroup.position.set(-11, 0, -6);
    scene.add(buildingGroup);

    const floors = 6;
    const colsX = 4;
    const colsZ = 4;
    const span = 3.6;
    const floorH = 3.0;

    // Foundation slab
    const foundationGeo = new THREE.BoxGeometry(colsX * span + 2, 0.8, colsZ * span + 2);
    const foundation = new THREE.Mesh(foundationGeo, concreteMat);
    foundation.position.set((colsX - 1) * span * 0.5, 0.4, (colsZ - 1) * span * 0.5);
    buildingGroup.add(foundation);

    // Floor slabs & vertical steel columns
    const colGeo = new THREE.BoxGeometry(0.3, floors * floorH, 0.3);
    for (let ix = 0; ix < colsX; ix++) {
      for (let iz = 0; iz < colsZ; iz++) {
        const col = new THREE.Mesh(colGeo, steelMat);
        col.position.set(ix * span, (floors * floorH) / 2, iz * span);
        buildingGroup.add(col);
      }
    }

    // Floor slabs (some complete, top ones under construction/hollow)
    for (let f = 1; f <= floors; f++) {
      const y = f * floorH;
      // Perimeter beams
      const beamGeoX = new THREE.BoxGeometry(colsX * span, 0.25, 0.25);
      const beamGeoZ = new THREE.BoxGeometry(0.25, 0.25, colsZ * span);

      for (let iz = 0; iz < colsZ; iz++) {
        const beamX = new THREE.Mesh(beamGeoX, steelMat);
        beamX.position.set(((colsX - 1) * span) / 2, y, iz * span);
        buildingGroup.add(beamX);
      }
      for (let ix = 0; ix < colsX; ix++) {
        const beamZ = new THREE.Mesh(beamGeoZ, steelMat);
        beamZ.position.set(ix * span, y, ((colsZ - 1) * span) / 2);
        buildingGroup.add(beamZ);
      }

      // Add floor deck for lower floors
      if (f <= 4) {
        const deckGeo = new THREE.BoxGeometry((colsX - 1) * span + 0.3, 0.15, (colsZ - 1) * span + 0.3);
        const deck = new THREE.Mesh(deckGeo, concreteMat);
        deck.position.set(((colsX - 1) * span) / 2, y - 0.05, ((colsZ - 1) * span) / 2);
        buildingGroup.add(deck);
      }

      // Add architectural wireframe line highlights to floor
      const edgeBox = new THREE.BoxGeometry((colsX - 1) * span, 0.1, (colsZ - 1) * span);
      const edges = new THREE.EdgesGeometry(edgeBox);
      const line = new THREE.LineSegments(edges, glowBlueLineMat);
      line.position.set(((colsX - 1) * span) / 2, y, ((colsZ - 1) * span) / 2);
      buildingGroup.add(line);
    }

    // Scaffolding on side of building
    const scaffoldPoints = [];
    const scafX = -1.2;
    for (let f = 0; f < 5; f++) {
      const y1 = f * floorH;
      const y2 = (f + 1) * floorH;
      scaffoldPoints.push(
        new THREE.Vector3(scafX, y1, 0), new THREE.Vector3(scafX, y2, 0),
        new THREE.Vector3(scafX, y1, (colsZ - 1) * span), new THREE.Vector3(scafX, y2, (colsZ - 1) * span),
        new THREE.Vector3(scafX, y1, 0), new THREE.Vector3(scafX, y2, (colsZ - 1) * span),
        new THREE.Vector3(scafX, y1, (colsZ - 1) * span), new THREE.Vector3(scafX, y2, 0)
      );
    }
    const scaffoldGeo = new THREE.BufferGeometry().setFromPoints(scaffoldPoints);
    const scaffoldLines = new THREE.LineSegments(scaffoldGeo, neonCyanLineMat);
    buildingGroup.add(scaffoldLines);

    // --- 2. Advanced 3D Tower Crane ---
    const craneGroup = new THREE.Group();
    craneGroup.position.set(0, 0, 0);
    scene.add(craneGroup);

    // Crane Base Foundation
    const craneBaseGeo = new THREE.BoxGeometry(4, 1.2, 4);
    const craneBase = new THREE.Mesh(craneBaseGeo, concreteMat);
    craneBase.position.y = 0.6;
    craneGroup.add(craneBase);

    // Crane Mast (Vertical Tower Truss)
    const mastHeight = 24;
    const mastWidth = 1.4;
    const mastSegments = 16;
    const mastGeo = new THREE.BoxGeometry(mastWidth, mastHeight, mastWidth);
    const mastEdges = new THREE.EdgesGeometry(mastGeo);
    const mastLines = new THREE.LineSegments(mastEdges, new THREE.LineBasicMaterial({ color: '#f59e0b' }));
    mastLines.position.y = mastHeight / 2;
    craneGroup.add(mastLines);

    // Internal cross lattice in mast
    const mastLatticePoints = [];
    const segH = mastHeight / mastSegments;
    const hw = mastWidth / 2;
    for (let s = 0; s < mastSegments; s++) {
      const sy1 = s * segH;
      const sy2 = (s + 1) * segH;
      mastLatticePoints.push(
        new THREE.Vector3(-hw, sy1, hw), new THREE.Vector3(hw, sy2, hw),
        new THREE.Vector3(hw, sy1, hw), new THREE.Vector3(-hw, sy2, hw),
        new THREE.Vector3(-hw, sy1, -hw), new THREE.Vector3(hw, sy2, -hw),
        new THREE.Vector3(hw, sy1, -hw), new THREE.Vector3(-hw, sy2, -hw)
      );
    }
    const mastLatGeo = new THREE.BufferGeometry().setFromPoints(mastLatticePoints);
    const mastLatLines = new THREE.LineSegments(mastLatGeo, new THREE.LineBasicMaterial({ color: '#d97706', opacity: 0.7, transparent: true }));
    craneGroup.add(mastLatLines);

    // Central core pillar
    const corePillar = new THREE.Mesh(new THREE.BoxGeometry(0.5, mastHeight, 0.5), yellowCraneMat);
    corePillar.position.y = mastHeight / 2;
    craneGroup.add(corePillar);

    // --- Slewing Assembly (Turntable + Cabin + Jib) ---
    const slewingGroup = new THREE.Group();
    slewingGroup.position.set(0, mastHeight, 0);
    craneGroup.add(slewingGroup);

    // Turntable ring
    const turntable = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 0.8, 16), steelMat);
    slewingGroup.add(turntable);

    // Operator Cabin
    const cabinGeo = new THREE.BoxGeometry(1.5, 1.8, 2.0);
    const cabin = new THREE.Mesh(cabinGeo, new THREE.MeshStandardMaterial({
      color: '#0f172a',
      roughness: 0.2,
      metalness: 0.9,
    }));
    cabin.position.set(1.5, 0.8, 0.8);
    slewingGroup.add(cabin);

    // Cabin glass window (glowing cyan interior)
    const windowMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(1.4, 1.0),
      new THREE.MeshBasicMaterial({ color: '#38bdf8', side: THREE.DoubleSide, transparent: true, opacity: 0.85 })
    );
    windowMesh.position.set(1.5, 1.0, 1.81);
    slewingGroup.add(windowMesh);

    // Crane Apex / Tower Peak (A-Frame)
    const apexHeight = 5;
    const apexPoints = [
      new THREE.Vector3(-hw, 0, -hw), new THREE.Vector3(0, apexHeight, 0),
      new THREE.Vector3(hw, 0, -hw), new THREE.Vector3(0, apexHeight, 0),
      new THREE.Vector3(-hw, 0, hw), new THREE.Vector3(0, apexHeight, 0),
      new THREE.Vector3(hw, 0, hw), new THREE.Vector3(0, apexHeight, 0),
    ];
    const apexGeo = new THREE.BufferGeometry().setFromPoints(apexPoints);
    const apexLines = new THREE.LineSegments(apexGeo, new THREE.LineBasicMaterial({ color: '#f59e0b' }));
    slewingGroup.add(apexLines);

    // Aviation Warning Beacon on Apex
    const beaconLightMesh = new THREE.Mesh(new THREE.SphereGeometry(0.25, 12, 12), beaconMat);
    beaconLightMesh.position.set(0, apexHeight + 0.2, 0);
    slewingGroup.add(beaconLightMesh);

    // Main Jib (Horizontal arm reaching over the building)
    const jibLength = 22;
    const jibHeight = 1.2;
    const jibWidth = 1.2;

    const jibLatticePoints = [];
    const jibSegments = 16;
    const jSegW = jibLength / jibSegments;
    for (let j = 0; j < jibSegments; j++) {
      const x1 = j * jSegW;
      const x2 = (j + 1) * jSegW;
      // Top spine to bottom spine
      jibLatticePoints.push(
        new THREE.Vector3(x1, 0, -jibWidth / 2), new THREE.Vector3(x2, 0, -jibWidth / 2),
        new THREE.Vector3(x1, 0, jibWidth / 2), new THREE.Vector3(x2, 0, jibWidth / 2),
        new THREE.Vector3(x1, jibHeight, 0), new THREE.Vector3(x2, jibHeight, 0),
        // Diagonals
        new THREE.Vector3(x1, 0, -jibWidth / 2), new THREE.Vector3(x2, jibHeight, 0),
        new THREE.Vector3(x1, 0, jibWidth / 2), new THREE.Vector3(x2, jibHeight, 0),
        new THREE.Vector3(x1, 0, -jibWidth / 2), new THREE.Vector3(x2, 0, jibWidth / 2)
      );
    }
    const jibGeo = new THREE.BufferGeometry().setFromPoints(jibLatticePoints);
    const jibLines = new THREE.LineSegments(jibGeo, new THREE.LineBasicMaterial({ color: '#f59e0b' }));
    slewingGroup.add(jibLines);

    // Counter-Jib (rear arm with ballast counterweights)
    const counterJibLength = 8;
    const counterJibPoints = [
      new THREE.Vector3(0, 0, 0), new THREE.Vector3(-counterJibLength, 0, 0),
      new THREE.Vector3(0, 0, -0.6), new THREE.Vector3(-counterJibLength, 0, -0.6),
      new THREE.Vector3(0, 0, 0.6), new THREE.Vector3(-counterJibLength, 0, 0.6),
    ];
    const counterJibGeo = new THREE.BufferGeometry().setFromPoints(counterJibPoints);
    const counterJibLines = new THREE.LineSegments(counterJibGeo, new THREE.LineBasicMaterial({ color: '#f59e0b' }));
    slewingGroup.add(counterJibLines);

    // Counterweight slabs
    for (let c = 0; c < 3; c++) {
      const cw = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.4, 1.8), concreteMat);
      cw.position.set(-counterJibLength + 1.2 + c * 1.8, -0.2, 0);
      slewingGroup.add(cw);
    }

    // Tie-rod cables from apex to jib & counter-jib
    const tiePoints = [
      new THREE.Vector3(0, apexHeight, 0), new THREE.Vector3(jibLength * 0.65, jibHeight, 0),
      new THREE.Vector3(0, apexHeight, 0), new THREE.Vector3(-counterJibLength + 0.5, 0, 0),
    ];
    const tieGeo = new THREE.BufferGeometry().setFromPoints(tiePoints);
    const tieLines = new THREE.LineSegments(tieGeo, new THREE.LineBasicMaterial({ color: '#94a3b8' }));
    slewingGroup.add(tieLines);

    // --- Trolley & Suspended Steel Beam / Girder ---
    const trolleyGroup = new THREE.Group();
    trolleyGroup.position.set(13, 0, 0);
    slewingGroup.add(trolleyGroup);

    const trolleyMesh = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.4, 0.8), yellowCraneMat);
    trolleyMesh.position.y = -0.2;
    trolleyGroup.add(trolleyMesh);

    // Hoist Cable
    const cableLength = 11;
    const cablePoints = [new THREE.Vector3(0, -0.3, 0), new THREE.Vector3(0, -cableLength, 0)];
    const cableGeo = new THREE.BufferGeometry().setFromPoints(cablePoints);
    const cableLine = new THREE.Line(cableGeo, new THREE.LineBasicMaterial({ color: '#cbd5e1' }));
    trolleyGroup.add(cableLine);

    // Suspended Steel I-Beam / Architectural Truss
    const hookGroup = new THREE.Group();
    hookGroup.position.set(0, -cableLength, 0);
    trolleyGroup.add(hookGroup);

    // Pulley hook block
    const hookBlock = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.6, 12), yellowCraneMat);
    hookGroup.add(hookBlock);

    // Suspended Girder (I-Beam with neon-edge outline)
    const beamLength = 7.0;
    const suspendedBeam = new THREE.Mesh(
      new THREE.BoxGeometry(beamLength, 0.5, 0.35),
      new THREE.MeshStandardMaterial({
        color: '#0284c7',
        roughness: 0.3,
        metalness: 0.9,
        emissive: '#0369a1',
        emissiveIntensity: 0.4,
      })
    );
    suspendedBeam.position.y = -0.6;
    hookGroup.add(suspendedBeam);

    // Glowing outline on the suspended girder
    const beamEdgeLines = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.BoxGeometry(beamLength, 0.5, 0.35)),
      new THREE.LineBasicMaterial({ color: '#38bdf8' })
    );
    beamEdgeLines.position.y = -0.6;
    hookGroup.add(beamEdgeLines);

    // Rigging sling straps
    const slingPoints = [
      new THREE.Vector3(0, 0, 0), new THREE.Vector3(-beamLength * 0.4, -0.4, 0),
      new THREE.Vector3(0, 0, 0), new THREE.Vector3(beamLength * 0.4, -0.4, 0),
    ];
    const slingLines = new THREE.LineSegments(
      new THREE.BufferGeometry().setFromPoints(slingPoints),
      new THREE.LineBasicMaterial({ color: '#e2e8f0' })
    );
    hookGroup.add(slingLines);

    // --- Floating Construction Spark & Light Dust Particles ---
    const particleCount = 180;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 60;
      particlePositions[i * 3 + 1] = Math.random() * 30 + 0.5;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 60;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: '#38bdf8',
      size: 0.18,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // --- Mouse Parallax & Dynamic Motion State ---
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      targetMouseX = (e.clientX / innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Window Resize Handler
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // --- Animation Loop ---
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      currentMouseX += (targetMouseX - currentMouseX) * 0.04;
      currentMouseY += (targetMouseY - currentMouseY) * 0.04;

      // Camera gentle cinematic orbit + parallax
      const baseAngle = elapsedTime * 0.04;
      const radius = 34;
      camera.position.x = Math.sin(baseAngle) * radius * 0.35 + 16 + currentMouseX * 4;
      camera.position.y = 13 - currentMouseY * 3;
      camera.position.z = Math.cos(baseAngle) * radius * 0.35 + 23;
      camera.lookAt(0, 9, 0);

      // Smooth slewing crane rotation (swaying over construction site)
      const craneAngle = Math.sin(elapsedTime * 0.35) * 0.55 - 0.25;
      slewingGroup.rotation.y = craneAngle;

      // Trolley travel along jib
      const trolleyX = 11 + Math.sin(elapsedTime * 0.5) * 4.5;
      trolleyGroup.position.x = trolleyX;

      // Subtle realistic inertia sway of suspended steel beam
      hookGroup.rotation.z = Math.sin(elapsedTime * 1.2) * 0.06;
      hookGroup.rotation.y = Math.sin(elapsedTime * 0.8) * 0.15;

      // Pulsing aviation beacon
      const beaconGlow = Math.sin(elapsedTime * 5.0) > 0.1 ? 1 : 0.15;
      beaconMat.color.setRGB(beaconGlow, 0.1, 0.1);

      // Ambient expanding ground rings
      ringMesh1.scale.setScalar(1 + (elapsedTime * 0.25) % 2.5);
      ringMat.opacity = Math.max(0, 0.35 - ((elapsedTime * 0.25) % 2.5) * 0.14);

      // Floating dust particles gentle upward drift
      const positions = particleGeo.attributes.position.array;
      for (let i = 1; i < particleCount * 3; i += 3) {
        positions[i] += 0.025;
        if (positions[i] > 32) {
          positions[i] = 0.5;
        }
      }
      particleGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // --- Cleanup on Unmount ---
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      // Dispose Three.js memory resources
      scene.traverse((child) => {
        if (child.isMesh || child.isLine || child.isPoints) {
          if (child.geometry) child.geometry.dispose();
          if (child.material) {
            if (Array.isArray(child.material)) {
              child.material.forEach((mat) => mat.dispose());
            } else {
              child.material.dispose();
            }
          }
        }
      });
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
}
