import ReactFlow, {
  Node,
  Edge,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  Connection,
  addEdge,
} from "reactflow";
import "reactflow/dist/style.css";

import "./App.css";
import { useCallback } from "react";

const initNodes: Node[] = [
  {
    id: "1",
    data: {
      label: "Node 1",
    },
    position: { x: 0, y: 0 },
  },
  {
    id: "2",
    data: {
      label: "Node 2",
    },
    position: { x: 200, y: 200 },
  },
  {
    id: "3",
    data: {
      label: "Node 3",
    },
    position: { x: 400, y: 400 },
  },
];

const initEdges: Edge[] = [
  {
    id: "1-2",
    source: "1",
    target: "2",
    animated: true,
  },
];
function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges);
  const onConnect = useCallback((connection: Connection) => {
    const edge = { ...connection, animated: true, id: `${edges.length + 1}` };
    setEdges((prevEdges) => addEdge(edge, prevEdges));
  }, []);

  return (
    <>
      <div
        style={{ height: "500px", width: "500px", border: "1px solid black" }}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </>
  );
}

export default App;
