import React, { useMemo } from 'react';
import {
  sankey as d3Sankey,
  sankeyLinkHorizontal,
  sankeyLeft,
} from 'd3-sankey';
import { Rect, Path, VictoryContainer } from 'victory';
import useNodeInteraction from '../hooks/useNodeInteraction';
import useNodes from '../hooks/useNodes';

const SankeyChart = ({ width, height, nodeWidth = 30, nodePadding = 30 }) => {
  const { focusNode, nodeInteraction } = useNodeInteraction();
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

  const graph = sankey({
    nodes: nodes.map(d => Object.assign({}, d)),
    links: links.map(d => Object.assign({}, d)),
  });

  return (
    <VictoryContainer width={width} height={height}>
      {graph.links.map(link => (
        <Path
          fill="none"
          stroke="#000"
          strokeOpacity="0.2"
          key={link.index}
          d={sankeyLinkHorizontal()(link)}
          strokeWidth={Math.max(1, link.width)}
        />
      ))}
      {graph.nodes.map(node => (
        <Rect
          {...nodeInteraction(node.id)}
          key={node.id}
          fill={node.id === focusNode ? 'black' : 'grey'}
          x={node.x0}
          y={node.y0}
          width={node.x1 - node.x0}
          height={node.y1 - node.y0}
        />
      ))}
    </VictoryContainer>
  );
};

export default SankeyChart;
