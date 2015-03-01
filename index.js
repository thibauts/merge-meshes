
function offsetCells(cells, offset) {
  return cells.map(function(cell) {
    return cell.map(function(index) {
      return index + offset;
    });
  });
}

function mergeMeshes(meshes) {
  var positions = [];
  var cells = [];
  var offset = 0;

  meshes.forEach(function(mesh) {
    positions = positions.concat(mesh.positions);
    cells = cells.concat(offsetCells(mesh.cells, offset));
    offset += mesh.positions.length;
  });

  return {
    cells: cells,
    positions: positions
  };
}

module.exports = mergeMeshes;