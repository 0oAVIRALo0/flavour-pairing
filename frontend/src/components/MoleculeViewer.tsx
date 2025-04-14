import React, { useEffect, useRef } from 'react';
import '3dmol';

declare global {
  interface Window {
    $3Dmol: any;
  }
}

interface MoleculeViewerProps {
  structure: string;
  isDark?: boolean;
}

const MoleculeViewer: React.FC<MoleculeViewerProps> = ({ structure, isDark = false }) => {
  const viewerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!viewerRef.current || !window.$3Dmol) return;

    // Clear any existing content
    viewerRef.current.innerHTML = '';

    const viewer = window.$3Dmol.createViewer(viewerRef.current, {
      backgroundColor: isDark ? '#1f2937' : 'white',
    });

    viewer.addModel(structure, 'mol');
    viewer.setStyle({}, { 
      stick: { 
        color: isDark ? '#60a5fa' : '#2563eb'
      } 
    });
    viewer.zoomTo();
    viewer.render();

    return () => {
      viewer.clear();
    };
  }, [structure, isDark]);

  return (
    <div 
      ref={viewerRef} 
      className="w-full h-[300px] rounded-lg shadow-lg bg-white dark:bg-gray-800"
      style={{ minHeight: '300px' }}
    />
  );
};

export default MoleculeViewer;