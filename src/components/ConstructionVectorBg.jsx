import React from 'react';

/**
 * Komponen Vektor Dekorasi Blueprint Arsitektural Gedung Bertingkat Modern & Tower Crane
 * Menghadirkan atmosfer teknik sipil, konstruksi terencana, dan kemewahan arsitektur
 */
export const ConstructionVectorBg = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex flex-col justify-end select-none">
      
      {/* Background Engineering Coordinate Dots Grid */}
      <div 
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(#0f2444 1.5px, transparent 1.5px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* SVG Architectural Wireframe Skyline & Tower Cranes */}
      <svg
        viewBox="0 0 1920 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto min-h-[500px] max-h-[85vh] object-cover object-bottom opacity-[0.32] transition-opacity duration-700"
        preserveAspectRatio="xMidYMax slice"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="blueprintGrad" x1="0" y1="0" x2="0" y2="800" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#0f2444" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0f2444" stopOpacity="0.05" />
          </linearGradient>

          <linearGradient id="goldBeam" x1="0" y1="0" x2="1920" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#cba135" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#cba135" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0.2" />
          </linearGradient>

          <linearGradient id="fadeMask" x1="0" y1="0" x2="0" y2="800" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="25%" stopColor="white" stopOpacity="0.7" />
            <stop offset="100%" stopColor="white" stopOpacity="1" />
          </linearGradient>

          <mask id="skylineMask">
            <rect width="1920" height="800" fill="url(#fadeMask)" />
          </mask>
        </defs>

        <g mask="url(#skylineMask)">
          
          {/* Engineering Ground Datum Line */}
          <line x1="0" y1="760" x2="1920" y2="760" stroke="#0f2444" strokeWidth="2" strokeDasharray="8 4" opacity="0.4" />
          <text x="40" y="752" fill="#2563EB" fontSize="11" fontFamily="monospace" fontWeight="bold" opacity="0.6">
            DATUM LEVEL EL. ±0.000m (SITE BASE)
          </text>
          <text x="1750" y="752" fill="#0f2444" fontSize="11" fontFamily="monospace" opacity="0.5">
            WSM-ENG-CIVIL-2026
          </text>

          {/* ========================================================
              TOWER CRANE 1 (Left - Dominant High Crane)
             ======================================================== */}
          <g opacity="0.85">
            {/* Mast / Vertical Tower (Lattice Truss) */}
            <line x1="380" y1="120" x2="380" y2="760" stroke="#0f2444" strokeWidth="2.5" />
            <line x1="410" y1="120" x2="410" y2="760" stroke="#0f2444" strokeWidth="2.5" />
            {/* Mast Lattice Cross Bracing */}
            {Array.from({ length: 16 }).map((_, i) => {
              const yTop = 120 + i * 40;
              const yBottom = yTop + 40;
              return (
                <g key={`crane1-lattice-${i}`} stroke="#2563EB" strokeWidth="1" opacity="0.6">
                  <line x1="380" y1={yTop} x2="410" y2={yBottom} />
                  <line x1="410" y1={yTop} x2="380" y2={yBottom} />
                  <line x1="380" y1={yBottom} x2="410" y2={yBottom} stroke="#0f2444" strokeWidth="1" />
                </g>
              );
            })}

            {/* Operator Cabin & Slew Ring */}
            <rect x="372" y="105" width="46" height="24" rx="3" fill="#ffffff" stroke="#2563EB" strokeWidth="1.8" />
            <circle cx="395" cy="117" r="4" fill="#cba135" />

            {/* Crane Apex Tower Peak */}
            <polygon points="380,105 410,105 395,45" stroke="#0f2444" strokeWidth="2" fill="none" />
            <line x1="395" y1="45" x2="395" y2="105" stroke="#2563EB" strokeWidth="1" strokeDasharray="3 3" />

            {/* Counter Jib (Left side) & Counterweight */}
            <line x1="395" y1="105" x2="220" y2="105" stroke="#0f2444" strokeWidth="3" />
            <line x1="395" y1="45" x2="240" y2="105" stroke="#2563EB" strokeWidth="1.5" />
            <rect x="230" y="105" width="40" height="26" rx="2" fill="#cba135" fillOpacity="0.4" stroke="#cba135" strokeWidth="1.8" />
            <text x="236" y="122" fill="#0f2444" fontSize="9" fontFamily="monospace" fontWeight="bold">WT 15T</text>

            {/* Main Working Jib (Right side - Cantilever Lattice) */}
            <line x1="395" y1="105" x2="720" y2="105" stroke="#0f2444" strokeWidth="3" />
            <line x1="395" y1="45" x2="520" y2="105" stroke="#2563EB" strokeWidth="1.5" />
            <line x1="395" y1="45" x2="680" y2="105" stroke="#2563EB" strokeWidth="1.2" />

            {/* Working Jib Internal Truss */}
            {Array.from({ length: 10 }).map((_, i) => {
              const xStart = 395 + i * 32;
              const xEnd = xStart + 32;
              return (
                <g key={`jib1-${i}`} stroke="#2563EB" strokeWidth="1" opacity="0.6">
                  <line x1={xStart} y1="105" x2={xEnd} y2="120" />
                  <line x1={xEnd} y1="105" x2={xStart} y2="120" />
                  <line x1={xStart} y1="120" x2={xEnd} y2="120" stroke="#0f2444" strokeWidth="1.5" />
                </g>
              );
            })}

            {/* Trolley & Hoist Cable with Hook Block */}
            <rect x="580" y="118" width="16" height="8" rx="2" fill="#2563EB" />
            <line x1="588" y1="126" x2="588" y2="260" stroke="#0f2444" strokeWidth="1.2" strokeDasharray="4 2" />
            <path d="M584,260 L592,260 L590,272 L586,272 Z" fill="#cba135" stroke="#0f2444" strokeWidth="1" />
            <circle cx="588" cy="276" r="3" stroke="#2563EB" strokeWidth="1.5" fill="none" />
          </g>

          {/* ========================================================
              HIGH-RISE TOWER A (Left Center - Modern Stepped Skyscraper)
             ======================================================== */}
          <g opacity="0.8">
            {/* Outer Silhouette & Columns */}
            <rect x="470" y="240" width="220" height="520" fill="#ffffff" fillOpacity="0.15" stroke="#0f2444" strokeWidth="2" />
            <rect x="500" y="160" width="160" height="80" fill="#ffffff" fillOpacity="0.2" stroke="#0f2444" strokeWidth="2" />
            <rect x="535" y="90" width="90" height="70" fill="#ffffff" fillOpacity="0.25" stroke="#2563EB" strokeWidth="2" />
            <line x1="580" y1="30" x2="580" y2="90" stroke="#2563EB" strokeWidth="2" />
            <circle cx="580" cy="30" r="4" fill="#cba135" />

            {/* Floor Slabs / Levels */}
            {Array.from({ length: 18 }).map((_, i) => {
              const y = 240 + i * 28;
              return (
                <line key={`slab-a-${i}`} x1="470" y1={y} x2="690" y2={y} stroke="#2563EB" strokeWidth="1" opacity="0.35" />
              );
            })}

            {/* Vertical Mullion Columns */}
            <line x1="510" y1="240" x2="510" y2="760" stroke="#0f2444" strokeWidth="1" strokeDasharray="6 3" opacity="0.3" />
            <line x1="550" y1="240" x2="550" y2="760" stroke="#0f2444" strokeWidth="1.2" opacity="0.4" />
            <line x1="610" y1="240" x2="610" y2="760" stroke="#0f2444" strokeWidth="1.2" opacity="0.4" />
            <line x1="650" y1="240" x2="650" y2="760" stroke="#0f2444" strokeWidth="1" strokeDasharray="6 3" opacity="0.3" />

            {/* Structural Diagonal Mega-Bracing (Exoskeleton Architecture) */}
            <line x1="470" y1="760" x2="690" y2="520" stroke="#2563EB" strokeWidth="1.5" opacity="0.35" />
            <line x1="690" y1="760" x2="470" y2="520" stroke="#2563EB" strokeWidth="1.5" opacity="0.35" />
            <line x1="470" y1="520" x2="690" y2="280" stroke="#2563EB" strokeWidth="1.5" opacity="0.35" />
            <line x1="690" y1="520" x2="470" y2="280" stroke="#2563EB" strokeWidth="1.5" opacity="0.35" />

            {/* Technical Level Dimension Annotations */}
            <line x1="705" y1="90" x2="725" y2="90" stroke="#2563EB" strokeWidth="1" />
            <text x="730" y="94" fill="#2563EB" fontSize="10" fontFamily="monospace" fontWeight="bold">TOP +185.00m</text>
            <line x1="705" y1="240" x2="725" y2="240" stroke="#0f2444" strokeWidth="1" />
            <text x="730" y="244" fill="#0f2444" fontSize="10" fontFamily="monospace">LVL 45 +112.50m</text>
          </g>

          {/* ========================================================
              CENTER HIGH-RISE TOWER B (Twisted / Diagonal Facets)
             ======================================================== */}
          <g opacity="0.75">
            <polygon points="760,200 920,150 990,210 990,760 760,760" fill="#ffffff" fillOpacity="0.1" stroke="#0f2444" strokeWidth="2" />
            <line x1="920" y1="150" x2="920" y2="760" stroke="#2563EB" strokeWidth="1.5" />

            {/* Dynamic Angled Facet Lines */}
            {Array.from({ length: 15 }).map((_, i) => {
              const y = 220 + i * 36;
              return (
                <g key={`facet-b-${i}`}>
                  <line x1="760" y1={y + 15} x2="920" y2={y - 15} stroke="#2563EB" strokeWidth="1" opacity="0.4" />
                  <line x1="920" y1={y - 15} x2="990" y2={y} stroke="#0f2444" strokeWidth="1" opacity="0.3" />
                </g>
              );
            })}

            {/* Structural Core Column */}
            <rect x="830" y="210" width="40" height="550" stroke="#cba135" strokeWidth="1.2" strokeDasharray="5 3" fill="none" opacity="0.5" />
            <text x="834" y="235" fill="#cba135" fontSize="9" fontFamily="monospace" fontWeight="bold">RC CORE</text>
          </g>

          {/* ========================================================
              TOWER CRANE 2 (Right Side - Supporting Construction)
             ======================================================== */}
          <g opacity="0.85">
            {/* Mast */}
            <line x1="1350" y1="180" x2="1350" y2="760" stroke="#0f2444" strokeWidth="2.5" />
            <line x1="1380" y1="180" x2="1380" y2="760" stroke="#0f2444" strokeWidth="2.5" />
            {Array.from({ length: 15 }).map((_, i) => {
              const yTop = 180 + i * 38;
              const yBottom = yTop + 38;
              return (
                <g key={`crane2-lattice-${i}`} stroke="#2563EB" strokeWidth="1" opacity="0.6">
                  <line x1="1350" y1={yTop} x2="1380" y2={yBottom} />
                  <line x1="1380" y1={yTop} x2="1350" y2={yBottom} />
                  <line x1="1350" y1={yBottom} x2="1380" y2={yBottom} stroke="#0f2444" strokeWidth="1" />
                </g>
              );
            })}

            {/* Apex & Jib */}
            <polygon points="1350,165 1380,165 1365,110" stroke="#0f2444" strokeWidth="2" fill="none" />
            <line x1="1365" y1="165" x2="1140" y2="165" stroke="#0f2444" strokeWidth="2.8" />
            <line x1="1365" y1="110" x2="1190" y2="165" stroke="#2563EB" strokeWidth="1.5" />
            
            {/* Working Jib to Right */}
            <line x1="1365" y1="165" x2="1660" y2="165" stroke="#0f2444" strokeWidth="3" />
            <line x1="1365" y1="110" x2="1520" y2="165" stroke="#2563EB" strokeWidth="1.5" />
            <line x1="1365" y1="110" x2="1640" y2="165" stroke="#2563EB" strokeWidth="1.2" />

            {/* Truss Lattice */}
            {Array.from({ length: 9 }).map((_, i) => {
              const xStart = 1365 + i * 32;
              const xEnd = xStart + 32;
              return (
                <g key={`jib2-${i}`} stroke="#2563EB" strokeWidth="1" opacity="0.6">
                  <line x1={xStart} y1="165" x2={xEnd} y2="180" />
                  <line x1={xEnd} y1="165" x2={xStart} y2="180" />
                  <line x1={xStart} y1="180" x2={xEnd} y2="180" stroke="#0f2444" strokeWidth="1.5" />
                </g>
              );
            })}

            {/* Suspended Steel Girder Section (Under Hook) */}
            <rect x="1510" y="178" width="16" height="8" rx="2" fill="#2563EB" />
            <line x1="1518" y1="186" x2="1518" y2="340" stroke="#0f2444" strokeWidth="1.2" strokeDasharray="4 2" />
            {/* Heavy Steel Beam Being Lifted */}
            <g transform="rotate(-6 1518 350)">
              <rect x="1460" y="348" width="116" height="10" rx="1.5" fill="#cba135" fillOpacity="0.7" stroke="#0f2444" strokeWidth="1.5" />
              <line x1="1480" y1="348" x2="1518" y2="340" stroke="#0f2444" strokeWidth="1" />
              <line x1="1556" y1="348" x2="1518" y2="340" stroke="#0f2444" strokeWidth="1" />
            </g>
          </g>

          {/* ========================================================
              MODERN COMMERCIAL TOWERS (Right Side Complex)
             ======================================================== */}
          <g opacity="0.75">
            {/* Tower C */}
            <rect x="1050" y="270" width="180" height="490" fill="#ffffff" fillOpacity="0.12" stroke="#0f2444" strokeWidth="2" />
            <rect x="1075" y="210" width="130" height="60" fill="#ffffff" fillOpacity="0.2" stroke="#2563EB" strokeWidth="1.8" />
            
            {Array.from({ length: 16 }).map((_, i) => {
              const y = 270 + i * 30;
              return (
                <line key={`slab-c-${i}`} x1="1050" y1={y} x2="1230" y2={y} stroke="#2563EB" strokeWidth="1" opacity="0.35" />
              );
            })}
            
            {/* Glass curtain wall vertical fins */}
            {Array.from({ length: 6 }).map((_, i) => {
              const x = 1075 + i * 25;
              return (
                <line key={`fin-c-${i}`} x1={x} y1="270" x2={x} y2="760" stroke="#0f2444" strokeWidth="1" strokeDasharray="8 4" opacity="0.3" />
              );
            })}

            {/* Tower D (Far Right Landmark) */}
            <polygon points="1290,320 1480,240 1480,760 1290,760" fill="#ffffff" fillOpacity="0.1" stroke="#0f2444" strokeWidth="2" />
            <polygon points="1480,240 1620,290 1620,760 1480,760" fill="#ffffff" fillOpacity="0.15" stroke="#2563EB" strokeWidth="2" />
            <line x1="1480" y1="240" x2="1480" y2="760" stroke="#0f2444" strokeWidth="2.5" />

            {/* Far Right Low-Rise & Scaffolding Section */}
            <rect x="1660" y="440" width="210" height="320" fill="#ffffff" fillOpacity="0.08" stroke="#0f2444" strokeWidth="1.8" />
            {/* Scaffolding Crosses */}
            {Array.from({ length: 5 }).map((_, row) => {
              const y = 440 + row * 64;
              return Array.from({ length: 4 }).map((_, col) => {
                const x = 1660 + col * 52;
                return (
                  <g key={`scaff-${row}-${col}`} stroke="#2563EB" strokeWidth="0.8" opacity="0.35">
                    <rect x={x} y={y} width="52" height="64" />
                    <line x1={x} y1={y} x2={x + 52} y2={y + 64} />
                    <line x1={x + 52} y1={y} x2={x} y2={y + 64} />
                  </g>
                );
              });
            })}
          </g>

          {/* ========================================================
              LEFT SKYLINE FLANK (Low to Mid-Rise Modern Architecture)
             ======================================================== */}
          <g opacity="0.65">
            <rect x="60" y="460" width="160" height="300" fill="#ffffff" fillOpacity="0.1" stroke="#0f2444" strokeWidth="1.8" />
            <rect x="190" y="380" width="130" height="380" fill="#ffffff" fillOpacity="0.15" stroke="#2563EB" strokeWidth="1.8" />
            
            {Array.from({ length: 10 }).map((_, i) => {
              const y = 380 + i * 38;
              return (
                <line key={`slab-left-${i}`} x1="190" y1={y} x2="320" y2={y} stroke="#0f2444" strokeWidth="1" opacity="0.3" />
              );
            })}
          </g>

          {/* Technical Dimension Marks & Reference Axis Lines */}
          <g opacity="0.5" stroke="#2563EB" strokeWidth="1">
            {/* Axis Grid Markers */}
            <circle cx="395" cy="780" r="12" fill="#ffffff" stroke="#0f2444" strokeWidth="1.5" />
            <text x="391" y="784" fill="#0f2444" fontSize="11" fontFamily="monospace" fontWeight="bold">A</text>

            <circle cx="580" cy="780" r="12" fill="#ffffff" stroke="#2563EB" strokeWidth="1.5" />
            <text x="576" y="784" fill="#2563EB" fontSize="11" fontFamily="monospace" fontWeight="bold">B</text>

            <circle cx="920" cy="780" r="12" fill="#ffffff" stroke="#0f2444" strokeWidth="1.5" />
            <text x="916" y="784" fill="#0f2444" fontSize="11" fontFamily="monospace" fontWeight="bold">C</text>

            <circle cx="1140" cy="780" r="12" fill="#ffffff" stroke="#0f2444" strokeWidth="1.5" />
            <text x="1136" y="784" fill="#0f2444" fontSize="11" fontFamily="monospace" fontWeight="bold">D</text>

            <circle cx="1480" cy="780" r="12" fill="#ffffff" stroke="#2563EB" strokeWidth="1.5" />
            <text x="1476" y="784" fill="#2563EB" fontSize="11" fontFamily="monospace" fontWeight="bold">E</text>
          </g>

        </g>
      </svg>
    </div>
  );
};

export default ConstructionVectorBg;
