export function findFile(tree, fileID) {
  // Check if the current node is the file we are looking for
  if (tree.id === fileID && !tree.isDirectory) {
    console.log(tree, fileID);
    return tree;
  }

  // If the current node has no children, return null
  if (!tree?.children) return null;

  // Iterate through each child node
  for (const child of tree.children) {
    // Recursively search in the child nodes
    const result = findFile(child, fileID);
    // If the file was found in a child node, return it
    if (result) {
      return result;
    }
  }

  // If the file was not found in any of the children, return null
  return null;
}
