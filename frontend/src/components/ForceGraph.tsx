import React from "react";
import ForceGraph3D from "react-force-graph-3d";
import { GraphData } from "../types";
import * as THREE from "three";

interface ForceGraphProps {
  data: GraphData;
  mainNode: string;
  onNodeClick: (nodeId: string) => void;
  isDark?: boolean;
  width?: number;
  height?: number;
}

const ForceGraph: React.FC<ForceGraphProps> = ({
  data,
  mainNode,
  onNodeClick,
  isDark = false,
  width = 600,
  height = 350,
}) => {
  return (
    <div className="w-full h-full rounded-lg overflow-hidden">
      <ForceGraph3D
        graphData={data}
        backgroundColor={isDark ? "#1f2937" : "#ffffff"}
        linkColor={() => (isDark ? "#ffffff" : "#000000")}
        onNodeClick={(node: any) => onNodeClick(node.id)}
        width={width}
        height={height}
        nodeThreeObjectExtend={true}
        nodeThreeObject={(node: any) => {
          const group = new THREE.Group();

          const sphere = new THREE.Mesh(
            new THREE.SphereGeometry(5),
            new THREE.MeshBasicMaterial({
              color:
                node.id === mainNode
                  ? "#f59e0b"
                  : isDark
                  ? "#60a5fa"
                  : "#2563eb",
            })
          );
          group.add(sphere);

          return group;
        }}
        linkLabel={(link: any) =>
          `${link.value} common molecule${link.value > 1 ? "s" : ""}`
        }
        linkWidth={(link: any) => link.value} // Thicker line for higher values (optional)
        linkDirectionalParticles={2}
        linkDirectionalParticleWidth={2}
      />
    </div>
  );
};

export default ForceGraph;
