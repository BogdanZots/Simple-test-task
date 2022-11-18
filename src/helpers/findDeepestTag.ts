export const findDeepestTag = (
  htmlTags: Array<HTMLElement>
) => {
  const depthChild = new Array();
  const getInteriorChild = function (container: any, depth = 0) {
    let child = container;

    if (container.children && container.children.length) {
      depth++;

      for (let i = 0; i < container.children.length; i++) {
        getInteriorChild((child = container.children[i]), depth);
      }
    }

    depthChild[depth] = child;
    return depthChild[depthChild.length - 1];
  };
  getInteriorChild(htmlTags[0]);
  return depthChild.map((child: HTMLElement) => `${child.localName} > `);
};
