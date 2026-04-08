// ========== 教室物理データ ==========
// Auto-exported by Admin Ver.2.0
// sameAs: 同型教室参照, parent+partitionHalf: パーティション分割

var PHYSICAL = {

  "201": {
    name: "201教室", podium: "201教室", type: "fan", rows: 18,
    sections: [
      { name: "正面 左", blocks: [1, 2] },
      { name: "201教室", blocks: [3, 4] },
      { name: "正面 右", blocks: [5, 6] }
    ],
    tables: [
      [[0],[5],[0],[0],[5],[0]],
      [[3],[5],[0],[0],[5],[3]],
      [[3],[5],[1],[1],[5],[3]],
      [[3],[5],[2],[2],[5],[3]],
      [[3],[5],[3],[3],[5],[3]],
      [[3],[5],[4],[4],[5],[3]],
      [[4],[6],[5],[5],[6],[3]],
      [[5],[6],[6],[6],[6],[3]],
      [[5],[6],[7],[7],[6],[3]],
      [[5],[6],[8],[8],[6],[3]],
      [[5],[7],[9],[9],[7],[3]],
      [[5],[7],[10],[10],[7],[3]],
      [[5],[7],[11],[11],[7],[3]],
      [[5],[7],[8],[8],[7],[3]],
      [[5],[7],[0],[0],[7],[3]],
      [[5],[7],[0],[0],[7],[3]],
      [[5],[0],[0],[0],[0],[3]],
      [[4],[0],[0],[0],[0],[3]]
    ]
  },

  "202": {
    name: "202教室", podium: "202教室", type: "fan", rows: 12,
    sections: [
      { name: "正面 左", blocks: [1, 2] },
      { name: "202教室", blocks: [3, 4] },
      { name: "正面 右", blocks: [5, 6] }
    ],
    tables: [
      [[0],[0],[2],[2],[0],[0]],
      [[3],[2],[2],[2],[2],[3]],
      [[3],[3],[3],[3],[3],[3]],
      [[3],[4],[3],[3],[4],[3]],
      [[3],[5],[4],[4],[5],[3]],
      [[3],[6],[5],[5],[6],[3]],
      [[3],[6],[6],[6],[6],[3]],
      [[3],[7],[7],[7],[7],[3]],
      [[3],[7],[8],[8],[7],[3]],
      [[3],[8],[9],[9],[8],[3]],
      [[3],[8],[6],[6],[8],[3]],
      [[3],[8],[0],[0],[8],[3]]
    ]
  },

  "301F": {
    name: "301F", podium: "教 卓", type: "rect", rows: 18,
    building: "太陽が丘１号棟",
    sections: [
      { name: "左", blocks: [1] },
      { name: "中央", blocks: [2] },
      { name: "右", blocks: [3] }
    ],
    tables: [
      [[2],[6],[2]],
      [[4],[6],[4]],
      [[4],[6],[4]],
      [[4],[6],[4]],
      [[4],[6],[4]],
      [[4],[6],[4]],
      [[4],[6],[4]],
      [[4],[6],[4]],
      [[4],[6],[4]],
      [[4],[6],[4]],
      [[4],[6],[4]],
      [[4],[6],[4]],
      [[4],[6],[4]],
      [[4],[6],[4]],
      [[4],[6],[4]],
      [[4],[6],[4]],
      [[4],[6],[4]],
      [[4],[6],[4]]
    ]
  },

  "302": {
    name: "302", podium: "教 卓", type: "rect", rows: 10,
    partition: 5,
    sections: [
      { name: "左", blocks: [1] },
      { name: "中央", blocks: [2] },
      { name: "右", blocks: [3] }
    ],
    tables: [
      [[3],[3,3],[3]],
      [[3],[3,3],[3]],
      [[3],[3,3],[3]],
      [[3],[3,3],[3]],
      [[3],[3,3],[3]],
      [[3],[3,3],[3]],
      [[3],[3,3],[3]],
      [[3],[3,3],[3]],
      [[3],[3,3],[3]],
      [[3],[3,3],[3]]
    ]
  },

  "302-I": { name: "302-I", podium: "教 卓", type: "rect", rows: 5, parent: "302", partitionHalf: "front",
    sections: [
      { name: "左", blocks: [1] },
      { name: "中央", blocks: [2] },
      { name: "右", blocks: [3] }
    ],
    tables: [
      [[3],[3,3],[3]],
      [[3],[3,3],[3]],
      [[3],[3,3],[3]],
      [[3],[3,3],[3]],
      [[3],[3,3],[3]]
    ]
  },

  "302-II": { name: "302-II", podium: "教 卓", type: "rect", rows: 5, parent: "302", partitionHalf: "back",
    sections: [
      { name: "左", blocks: [1] },
      { name: "中央", blocks: [2] },
      { name: "右", blocks: [3] }
    ],
    tables: [
      [[3],[3,3],[3]],
      [[3],[3,3],[3]],
      [[3],[3,3],[3]],
      [[3],[3,3],[3]],
      [[3],[3,3],[3]]
    ]
  },

  "402": {
    name: "402", podium: "教 卓", type: "rect", rows: 10,
    sameAs: "302",
    partition: 5,
    sections: [
      { name: "左", blocks: [1] },
      { name: "中央", blocks: [2] },
      { name: "右", blocks: [3] }
    ],
    tables: [
      [[3],[3,3],[3]],
      [[3],[3,3],[3]],
      [[3],[3,3],[3]],
      [[3],[3,3],[3]],
      [[3],[3,3],[3]],
      [[3],[3,3],[3]],
      [[3],[3,3],[3]],
      [[3],[3,3],[3]],
      [[3],[3,3],[3]],
      [[3],[3,3],[3]]
    ]
  },

  "311": {
    name: "311", podium: "教 卓", type: "rect", rows: 9,
    sections: [
      { name: "左", blocks: [1] },
      { name: "中央", blocks: [2] },
      { name: "右", blocks: [3] }
    ],
    tables: [
      [[3],[3],[3]],
      [[3],[3],[3]],
      [[3],[3],[3]],
      [[3],[3],[3]],
      [[3],[3],[3]],
      [[3],[3],[3]],
      [[3],[3],[3]],
      [[3],[3],[3]],
      [[3],[3],[3]]
    ]
  },

  "312": {
    name: "312", podium: "教 卓", type: "rect", rows: 9,
    sameAs: "311",
    sections: [
      { name: "左", blocks: [1] },
      { name: "中央", blocks: [2] },
      { name: "右", blocks: [3] }
    ],
    tables: [
      [[3],[3],[3]],
      [[3],[3],[3]],
      [[3],[3],[3]],
      [[3],[3],[3]],
      [[3],[3],[3]],
      [[3],[3],[3]],
      [[3],[3],[3]],
      [[3],[3],[3]],
      [[3],[3],[3]]
    ]
  },

  "313": {
    name: "313", podium: "教 卓", type: "rect", rows: 9,
    sameAs: "311",
    sections: [
      { name: "左", blocks: [1] },
      { name: "中央", blocks: [2] },
      { name: "右", blocks: [3] }
    ],
    tables: [
      [[3],[3],[3]],
      [[3],[3],[3]],
      [[3],[3],[3]],
      [[3],[3],[3]],
      [[3],[3],[3]],
      [[3],[3],[3]],
      [[3],[3],[3]],
      [[3],[3],[3]],
      [[3],[3],[3]]
    ]
  },

  "316": {
    name: "316", podium: "教 卓", type: "rect", rows: 9,
    sameAs: "311",
    sections: [
      { name: "左", blocks: [1] },
      { name: "中央", blocks: [2] },
      { name: "右", blocks: [3] }
    ],
    tables: [
      [[3],[3],[3]],
      [[3],[3],[3]],
      [[3],[3],[3]],
      [[3],[3],[3]],
      [[3],[3],[3]],
      [[3],[3],[3]],
      [[3],[3],[3]],
      [[3],[3],[3]],
      [[3],[3],[3]]
    ]
  },

  "402-I": { name: "402-I", podium: "教 卓", type: "rect", rows: 5, parent: "402", partitionHalf: "front",
    sections: [
      { name: "左", blocks: [1] },
      { name: "中央", blocks: [2] },
      { name: "右", blocks: [3] }
    ],
    tables: [
      [[3],[3,3],[3]],
      [[3],[3,3],[3]],
      [[3],[3,3],[3]],
      [[3],[3,3],[3]],
      [[3],[3,3],[3]]
    ]
  },

  "402-II": { name: "402-II", podium: "教 卓", type: "rect", rows: 5, parent: "402", partitionHalf: "back",
    sections: [
      { name: "左", blocks: [1] },
      { name: "中央", blocks: [2] },
      { name: "右", blocks: [3] }
    ],
    tables: [
      [[3],[3,3],[3]],
      [[3],[3,3],[3]],
      [[3],[3,3],[3]],
      [[3],[3,3],[3]],
      [[3],[3,3],[3]]
    ]
  },

  "404": {
    name: "404", podium: "教 卓", type: "rect", rows: 20,
    sections: [
      { name: "左", blocks: [1] },
      { name: "中央", blocks: [2] },
      { name: "右", blocks: [3] }
    ],
    tables: [
      [[3],[4],[3]],
      [[3],[4],[3]],
      [[3],[4],[3]],
      [[3],[4],[3]],
      [[3],[4],[3]],
      [[3],[4],[3]],
      [[3],[4],[3]],
      [[3],[4],[3]],
      [[3],[4],[3]],
      [[3],[4],[3]],
      [[3],[4],[3]],
      [[3],[4],[3]],
      [[3],[4],[3]],
      [[3],[4],[3]],
      [[3],[4],[3]],
      [[3],[4],[3]],
      [[3],[4],[3]],
      [[3],[4],[3]],
      [[3],[4],[3]],
      [[3],[4],[3]]
    ]
  },

  "406": {
    name: "406", podium: "教 卓", type: "rect", rows: 20,
    sameAs: "404",
    sections: [
      { name: "左", blocks: [1] },
      { name: "中央", blocks: [2] },
      { name: "右", blocks: [3] }
    ],
    tables: [
      [[3],[4],[3]],
      [[3],[4],[3]],
      [[3],[4],[3]],
      [[3],[4],[3]],
      [[3],[4],[3]],
      [[3],[4],[3]],
      [[3],[4],[3]],
      [[3],[4],[3]],
      [[3],[4],[3]],
      [[3],[4],[3]],
      [[3],[4],[3]],
      [[3],[4],[3]],
      [[3],[4],[3]],
      [[3],[4],[3]],
      [[3],[4],[3]],
      [[3],[4],[3]],
      [[3],[4],[3]],
      [[3],[4],[3]],
      [[3],[4],[3]],
      [[3],[4],[3]]
    ]
  },

  "405": {
    name: "405", podium: "教 卓", type: "rect", rows: 16,
    sections: [
      { name: "左", blocks: [1] },
      { name: "中央", blocks: [2] },
      { name: "右", blocks: [3] }
    ],
    tables: [
      [[3],[4],[3]],
      [[3],[4],[3]],
      [[3],[4],[3]],
      [[3],[4],[3]],
      [[3],[4],[3]],
      [[3],[4],[3]],
      [[3],[4],[3]],
      [[3],[4],[3]],
      [[3],[4],[3]],
      [[3],[4],[3]],
      [[3],[4],[3]],
      [[3],[4],[3]],
      [[3],[4],[3]],
      [[3],[4],[3]],
      [[3],[4],[3]],
      [[3],[4],[3]]
    ]
  },

  "431": {
    name: "431", podium: "教 卓", type: "individual", rows: 8,
    sections: [
      { name: "1", blocks: [1] },
      { name: "2", blocks: [2] },
      { name: "3", blocks: [3] },
      { name: "4", blocks: [4] }
    ],
    tables: [
      [[1],[1],[1],[1]],
      [[1],[1],[1],[1]],
      [[1],[1],[1],[1]],
      [[1],[1],[1],[1]],
      [[1],[1],[1],[1]],
      [[1],[1],[1],[1]],
      [[1],[1],[1],[1]],
      [[0],[0],[1],[1]]
    ]
  }
};


// ========== ユーティリティ ==========

function seatsPerTable(n) {
  if (n <= 0) return 0;
  return Math.floor((n + 1) / 2);
}

function isSeatPos(i, tableSize, roomType, leanRight, bothEdges) {
  if (tableSize <= 1) return true;
  if (roomType === "rect" && tableSize === 4) return (i === 0 || i === 3);
  // 両側通路ブロック（rect中央）: 両端を座席にし、中は左寄せ
  if (bothEdges && roomType === "rect" && tableSize % 2 === 0) {
    return (i % 2 === 0 && i !== tableSize - 2) || i === tableSize - 1;
  }
  if (leanRight) return ((tableSize - 1 - i) % 2 === 0);
  return (i % 2 === 0);
}

function totalChairs(roomId) {
  var room = PHYSICAL[roomId], total = 0;
  for (var r = 0; r < room.rows; r++)
    for (var b = 0; b < room.tables[r].length; b++)
      for (var t = 0; t < room.tables[r][b].length; t++)
        total += room.tables[r][b][t];
  return total;
}


// ========== グリッド生成（フルグリッド版）==========
// grid値: 1+=座席番号, 0=ギャップ椅子, null=椅子なし

function generateRoom(roomId) {
  var room = PHYSICAL[roomId];
  var nBlocks = room.tables[0].length;
  var maxBlockW = [];
  for (var b = 0; b < nBlocks; b++) {
    var maxW = 0;
    for (var r = 0; r < room.rows; r++) {
      var w = 0;
      for (var t = 0; t < room.tables[r][b].length; t++) w += room.tables[r][b][t];
      if (w > maxW) maxW = w;
    }
    maxBlockW.push(maxW);
  }
  var totalCols = 0, blockStart = [];
  for (var b = 0; b < nBlocks; b++) { blockStart.push(totalCols); totalCols += maxBlockW[b]; }
  var midBlock = nBlocks / 2;
  var grid = [];
  for (var r = 0; r < room.rows; r++) {
    var row = [];
    for (var c = 0; c < totalCols; c++) row.push(null);
    for (var b = 0; b < nBlocks; b++) {
      var tables = room.tables[r][b], chairCount = 0;
      for (var t = 0; t < tables.length; t++) chairCount += tables[t];
      var offset = 0;
      if (room.type === "fan" && b % 2 === 0) {
        offset = maxBlockW[b] - chairCount;
      } else if (room.type === "rect" && chairCount < maxBlockW[b] && b < nBlocks / 2) {
        // rect教室: 左半分のブロックで椅子数が少ない行は中央寄せ（右寄せ）
        offset = maxBlockW[b] - chairCount;
      }
      var pos = 0;
      for (var t = 0; t < tables.length; t++) {
        for (var i = 0; i < tables[t]; i++) {
          var ci = blockStart[b] + offset + pos;
          var leanRight = (b % 2 === 0);
          if (room.type === "rect") leanRight = (b < nBlocks / 2);
          var bothEdges = (room.type === "rect" && b > 0 && b < nBlocks - 1);
          row[ci] = (room.type === "individual" || isSeatPos(i, tables[t], room.type, leanRight, bothEdges)) ? -1 : 0;
          pos++;
        }
      }
    }
    grid.push(row);
  }
  var seatNum = 1;
  for (var c = 0; c < totalCols; c++)
    for (var r = 0; r < room.rows; r++)
      if (grid[r][c] === -1) grid[r][c] = seatNum++;
  var sections = [], innerAisles = [];
  for (var si = 0; si < room.sections.length; si++) {
    var sec = room.sections[si];
    var s0 = blockStart[sec.blocks[0] - 1];
    var bLast = sec.blocks[sec.blocks.length - 1] - 1;
    var sEnd = blockStart[bLast] + maxBlockW[bLast] - 1;
    sections.push({ name: sec.name, s: s0, e: sEnd });
    for (var bi = 0; bi < sec.blocks.length - 1; bi++) {
      var bx = sec.blocks[bi] - 1;
      innerAisles.push(blockStart[bx] + maxBlockW[bx] - 1);
    }
  }
  var centerExclude = [];
  if (room.type === "fan" && nBlocks >= 4) {
    var centerBlocks = [2, 3];
    for (var r = 0; r < room.rows; r++) {
      for (var bi = 0; bi < centerBlocks.length; bi++) {
        var cb = centerBlocks[bi];
        var chairs = 0;
        for (var t = 0; t < room.tables[r][cb].length; t++) chairs += room.tables[r][cb][t];
        if (chairs >= 1 && chairs <= 2) {
          for (var c = blockStart[cb]; c < blockStart[cb] + maxBlockW[cb]; c++) {
            if (grid[r][c] > 0) centerExclude.push([r, c]);
          }
        }
      }
    }
  }
  return {
    name: room.name, capacity: seatNum - 1,
    rows: room.rows, cols: totalCols,
    podium: room.podium, sections: sections,
    innerAisles: innerAisles.length > 0 ? innerAisles : undefined,
    centerExclude: centerExclude.length > 0 ? centerExclude : undefined,
    grid: grid
  };
}
