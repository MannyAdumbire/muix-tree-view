import "./styles.css";

import { useState } from "react";

const tree = {
  id: "root",
  name: "root",
  expanded: false,
  children: [
    {
      id: "ch1",
      name: "child1",
      expanded: false
    },
    {
      id: "ch2",
      name: "child2",
      expanded: false
    }
  ]
};

const RenderTree = (node, handleData, inPref) => {
  const pref = "-";

  return (
    <div key={node.id} onClick={() => handleData(node)}>
      {pref + (inPref ?? "")} {node.name}
      {node.expanded &&
        node.children &&
        node.children.map((item) => RenderTree(item, handleData, pref))}
    </div>
  );
};

export default function App() {
  const [data, setData] = useState(tree);

  const handleData = (node) => {
    const newNode = { ...node, expanded: !node.expanded };
    setData({ ...newNode });
  };

  return <div className="App">{RenderTree(data, handleData)}</div>;
}
