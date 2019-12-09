import React, { useMemo } from 'react';
import {
  sankey as d3Sankey,
  sankeyLinkHorizontal,
  sankeyLeft,
} from 'd3-sankey';
import { Rect, Path, VictoryContainer } from 'victory';
import useNodeInteraction from '../hooks/useNodeInteraction';
import { useSelector } from 'react-redux';
import {
  getAllParentNodes,
  getNodeFillColor,
  getNodeData,
} from '../utils/nodeHelpers';

const SankeyChart = ({ width, height, nodeWidth = 30, nodePadding = 30 }) => {
  const { focusNode, nodeInteraction } = useNodeInteraction();
  const nodesObj = useSelector(state => state.data.nodes);

  const { links, nodes } = useMemo(() => {
    const tmpNodes = [];
    let tmpLinks = [];
    Object.values(nodesObj).forEach(node => {
      const { state, estimate } = getNodeData(nodesObj, node.id);
      tmpLinks = tmpLinks.concat(
        node.links.map(link => ({
          id: node.id + link,
          source: link,
          target: node.id,
          value: estimate / node.links.length,
        }))
      );
      tmpNodes.push({
        ...node,
        ...{
          state,
          estimate,
          // node.links.length > 0 ? estimate / node.links.length : estimate,
        },
      });
    });
    return { links: tmpLinks, nodes: tmpNodes };
  }, [nodesObj]);

  const highlightedNodes = useMemo(
    () => getAllParentNodes(nodesObj, focusNode),
    [nodesObj, focusNode]
  );

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
              highlightedNodes.includes(link.target.id) ? '0.7' : '0.4'
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
            fill={focusNode === node.id ? 'red' : getNodeFillColor(node)}
            fillOpacity={highlightedNodes.includes(node.id) ? '0.7' : '0.4'}
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
