import React, { useMemo } from 'react';
import {
  sankey as d3Sankey,
  sankeyLinkHorizontal,
  sankeyLeft,
} from 'd3-sankey';
import { Rect, Path, VictoryContainer } from 'victory';
import useNodeInteraction from '../hooks/useNodeInteraction';
import useNodes from '../hooks/useNodes';

const getNode = (nodes, id) => nodes.filter(node => node.id === id)[0];

const getLinkedNodes = (nodes, id) => {
  if (id === '') return [];
  const { links } = getNode(nodes, id);
  let linkedNodes = [];
  linkedNodes.push(id);
  if (links.length > 0) {
    links.forEach(link => {
      linkedNodes = linkedNodes.concat(getLinkedNodes(nodes, link));
    });
  }
  return linkedNodes;
};

const getColor = node => {
  switch (node.state) {
    case 'done':
      return 'green';
    case 'inProgress':
      return 'yellow';
    case 'auto':
      return 'grey';
    case 'todo':
    default:
      return 'blue';
  }
};

const SankeyChart = ({ width, height, nodeWidth = 30, nodePadding = 30 }) => {
  const { focusNode, nodeInteraction } = useNodeInteraction();
  const nodes = useNodes();
  const links = useMemo(() => {
    const tmp = [];
    nodes.forEach(node =>
      node.links.forEach(link =>
        tmp.push({
          id: node.id + link,
          source: link,
          target: node.id,
          value:
            node.links.length > 0
              ? node.estimate / node.links.length
              : node.estimate,
        })
      )
    );
    return tmp;
  }, [nodes]);

  const highlightedNodes = useMemo(() => getLinkedNodes(nodes, focusNode), [
    nodes,
    focusNode,
  ]);

  const sankey = useMemo(
    () =>
      d3Sankey()
        .nodePadding(nodePadding)
        .nodeWidth(nodeWidth)
        .nodeAlign(sankeyLeft)
        .nodeId(d => d.id)
        .size([width, height]),
    [nodePadding, nodeWidth, width, height]
  );

  const graph = useMemo(
    () =>
      sankey({
        nodes: nodes.map(d => Object.assign({}, d)),
        links: links.map(d => Object.assign({}, d)),
      }),
    [sankey, nodes, links]
  );

  return (
    <VictoryContainer width={width} height={height}>
      <g>
        {graph.links.map(link => (
          <Path
            fill="none"
            stroke="black"
            strokeOpacity={
              highlightedNodes.includes(link.target.id) ? '0.7' : '0.2'
            }
            key={link.id}
            d={sankeyLinkHorizontal()(link)}
            strokeWidth={Math.max(1, link.width)}
          />
        ))}
      </g>
      <g>
        {graph.nodes.map(node => (
          <Rect
            {...nodeInteraction(node.id)}
            key={node.id}
            fill={focusNode === node.id ? 'red' : getColor(node)}
            fillOpacity={highlightedNodes.includes(node.id) ? '0.7' : '0.2'}
            x={node.x0}
            y={node.y0}
            width={node.x1 - node.x0}
            height={node.y1 - node.y0}
          />
        ))}
      </g>
    </VictoryContainer>
  );
};

export default SankeyChart;
