import React, { useMemo } from 'react';
import {
  sankey as d3Sankey,
  sankeyLinkHorizontal,
  sankeyLeft,
} from 'd3-sankey';
import useFocusNode from '../hooks/useFocusNode';
import useNodes from '../hooks/useNodes';

const nodeWidth = 30;
const nodePadding = 30;

const margin = {
  top: 10,
  bottom: 10,
  left: 50,
  right: 50,
};

const SankeyChart = ({ width, height }) => {
  const nodes = useNodes();
  const links = useMemo(() => {
    const tmp = [];
    nodes.forEach(node =>
      node.links.forEach(link =>
        tmp.push({
          source: link,
          target: node.id,
          value: node.estimate / node.links.length,
        })
      )
    );
    return tmp;
  }, [nodes]);

  const sankey = d3Sankey()
    .nodePadding(nodePadding)
    .nodeWidth(nodeWidth)
    .nodeAlign(sankeyLeft)
    .nodeId(d => d.id)
    .size([
      width - margin.left - margin.right,
      height - margin.top - margin.bottom,
    ]);

  const graph = sankey({
    nodes: nodes.map(d => Object.assign({}, d)),
    links: links.map(d => Object.assign({}, d)),
  });

  const { focusNode, setFocusNode } = useFocusNode();

  console.log(graph);

  return (
    <svg
      width={width}
      height={height}
      transform={`translate(${margin.left}, ${margin.top})`}
    >
      <g>
        {graph.links.map(link => (
          <path
            fill="none"
            stroke="#000"
            strokeOpacity="0.2"
            key={link.index}
            d={sankeyLinkHorizontal()(link)}
            strokeWidth={Math.max(1, link.width)}
          />
        ))}
      </g>
      <g>
        {graph.nodes.map(node => (
          <rect
            {...setFocusNode(node.id)}
            key={node.id}
            fill={node.id === focusNode ? 'black' : 'grey'}
            x={node.x0 + 1}
            y={node.y0}
            width={node.x1 - node.x0}
            height={node.y1 - node.y0}
          />
        ))}
      </g>
    </svg>
  );
};

export default SankeyChart;
