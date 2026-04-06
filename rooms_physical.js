// ========== 教室物理データ ==========
//
// 設計原則:
//   教室の物理データ（テーブル・椅子・通路）は不変
//   そこから配置ルール（1席空け等）を適用して座席表を生成
//
// データ構造:
//   tables[row] = 各行のブロック構成
//   ブロック = 通路で区切られた椅子のかたまり（1始まり）
//   各ブロック = テーブルサイズの配列  例: [3,3] = 3人がけ×2台
//   扇型教室: 1ブロック = 1つの連結机  例: [7] = 7脚の連結机
//
// 配置ルール（1席空け）:
//   テーブル単位で適用: N脚テーブル → ⌊(N+1)/2⌋名
//   独立机(type:"individual")は1席空け不要（机=席）

var PHYSICAL = {

  "201": {
    name: "201教室", podium: "201教室", type: "fan", rows: 18,
    sections: [
      { name: "正面 左", blocks: [1, 2] },
      { name: "201教室", blocks: [3, 4] },
      { name: "正面 右", blocks: [5, 6] }
    ],
    tables: [
      [[ 0],[ 5],[ 0],[ 0],[ 5],[ 0]],
      [[ 3],[ 5],[ 0],[ 0],[ 5],[ 3]],
      [[ 3],[ 5],[ 1],[ 1],[ 5],[ 3]],
      [[ 3],[ 5],[ 2],[ 2],[ 5],[ 3]],
      [[ 3],[ 5],[ 3],[ 3],[ 5],[ 3]],
      [[ 3],[ 5],[ 4],[ 4],[ 5],[ 3]],
      [[ 4],[ 6],[ 5],[ 5],[ 6],[ 3]],
      [[ 6],[ 5],[ 6],[ 6],[ 6],[ 3]],
      [[ 5],[ 6],[ 7],[ 7],[ 6],[ 3]],
      [[ 5],[ 6],[ 8],[ 8],[ 6],[ 3]],
      [[ 5],[ 7],[ 9],[ 9],[ 7],[ 3]],
      [[10],[ 5],[ 7],[10],[ 7],[ 3]],
      [[ 5],[ 7],[11],[11],[ 7],[ 3]],
      [[ 5],[ 7],[ 8],[ 8],[ 7],[ 3]],
      [[ 5],[ 7],[ 0],[ 0],[ 7],[ 3]],
      [[ 5],[ 7],[ 0],[ 0],[ 7],[ 3]],
      [[ 5],[ 0],[ 0],[ 0],[ 0],[ 3]],
      [[ 4],[ 0],[ 0],[ 0],[ 0],[ 3]]
    ] // 464脚→1席空け266名
  },

  "202": {
    name: "202教室", podium: "202教室", type: "fan", rows: 12,
    sections: [
      { name: "正面 左", blocks: [1, 2] },
      { name: "202教室", blocks: [3, 4] },
      { name: "正面 右", blocks: [5, 6] }
    ],
    tables: [
      [[ 0],[ 0],[ 2],[ 2],[ 0],[ 0]],
      [[ 3],[ 2],[ 2],[ 2],[ 2],[ 3]],
      [[ 3],[ 3],[ 3],[ 3],[ 3],[ 3]],
      [[ 3],[ 4],[ 3],[ 3],[ 4],[ 3]],
      [[ 3],[ 5],[ 4],[ 4],[ 5],[ 3]],
      [[ 3],[ 6],[ 5],[ 5],[ 6],[ 3]],
      [[ 3],[ 6],[ 6],[ 6],[ 6],[ 3]],
      [[ 3],[ 7],[ 7],[ 7],[ 7],[ 3]],
      [[ 3],[ 7],[ 8],[ 8],[ 7],[ 3]],
      [[ 3],[ 8],[ 9],[ 9],[ 8],[ 3]],
      [[ 3],[ 8],[ 6],[ 6],[ 8],[ 3]],
      [[ 3],[ 8],[ 0],[ 0],[ 8],[ 3]]
    ] // 304脚→1席空け172名
  },

  "302": {
    name: "302", podium: "教 卓", type: "rect", rows: 10,
    partition: 5,
    sections: [
      { name: "左",   blocks: [1] },
      { name: "中央", blocks: [2] },
      { name: "右",   blocks: [3] }
    ],
    tables: [
      [[3],[3,3],[3]], [[3],[3,3],[3]], [[3],[3,3],[3]], [[3],[3,3],[3]], [[3],[3,3],[3]],
      [[3],[3,3],[3]], [[3],[3,3],[3]], [[3],[3,3],[3]], [[3],[3,3],[3]], [[3],[3,3],[3]]
    ] // 120脚→1席空け80名
  },
  "302-I":  { name:"302-I",  podium:"教 卓", type:"rect", rows:5, parent:"302", partitionHalf:"front",
    sections:[{name:"左",blocks:[1]},{name:"中央",blocks:[2]},{name:"右",blocks:[3]}],
    tables:[[[3],[3,3],[3]],[[3],[3,3],[3]],[[3],[3,3],[3]],[[3],[3,3],[3]],[[3],[3,3],[3]]]
  },
  "302-II": { name:"302-II", podium:"教 卓", type:"rect", rows:5, parent:"302", partitionHalf:"back",
    sections:[{name:"左",blocks:[1]},{name:"中央",blocks:[2]},{name:"右",blocks:[3]}],
    tables:[[[3],[3,3],[3]],[[3],[3,3],[3]],[[3],[3,3],[3]],[[3],[3,3],[3]],[[3],[3,3],[3]]]
  },

  "402": {
    name: "402", podium: "教 卓", type: "rect", rows: 10,
    partition: 5,
    sections: [
      { name: "左",   blocks: [1] },
      { name: "中央", blocks: [2] },
      { name: "右",   blocks: [3] }
    ],
    tables: [
      [[3],[3,3],[3]], [[3],[3,3],[3]], [[3],[3,3],[3]], [[3],[3,3],[3]], [[3],[3,3],[3]],
      [[3],[3,3],[3]], [[3],[3,3],[3]], [[3],[3,3],[3]], [[3],[3,3],[3]], [[3],[3,3],[3]]
    ] // 120脚→1席空け80名
  },
  "402-I":  { name:"402-I",  podium:"教 卓", type:"rect", rows:5, parent:"402", partitionHalf:"front",
    sections:[{name:"左",blocks:[1]},{name:"中央",blocks:[2]},{name:"右",blocks:[3]}],
    tables:[[[3],[3,3],[3]],[[3],[3,3],[3]],[[3],[3,3],[3]],[[3],[3,3],[3]],[[3],[3,3],[3]]]
  },
  "402-II": { name:"402-II", podium:"教 卓", type:"rect", rows:5, parent:"402", partitionHalf:"back",
    sections:[{name:"左",blocks:[1]},{name:"中央",blocks:[2]},{name:"右",blocks:[3]}],
    tables:[[[3],[3,3],[3]],[[3],[3,3],[3]],[[3],[3,3],[3]],[[3],[3,3],[3]],[[3],[3,3],[3]]]
  },

  "404": {
    name: "404", podium: "教 卓", type: "rect", rows: 20,
    sections: [
      { name: "左",   blocks: [1] },
      { name: "中央", blocks: [2] },
      { name: "右",   blocks: [3] }
    ],
    tables: [
      [[3],[4],[3]],[[3],[4],[3]],[[3],[4],[3]],[[3],[4],[3]],[[3],[4],[3]],
      [[3],[4],[3]],[[3],[4],[3]],[[3],[4],[3]],[[3],[4],[3]],[[3],[4],[3]],
      [[3],[4],[3]],[[3],[4],[3]],[[3],[4],[3]],[[3],[4],[3]],[[3],[4],[3]],
      [[3],[4],[3]],[[3],[4],[3]],[[3],[4],[3]],[[3],[4],[3]],[[3],[4],[3]]
    ] // 200脚→1席空け120名
  },

  "406": {
    name: "406", podium: "教 卓", type: "rect", rows: 20,
    sections: [
      { name: "左",   blocks: [1] },
      { name: "中央", blocks: [2] },
      { name: "右",   blocks: [3] }
    ],
    tables: [
      [[3],[4],[3]],[[3],[4],[3]],[[3],[4],[3]],[[3],[4],[3]],[[3],[4],[3]],
      [[3],[4],[3]],[[3],[4],[3]],[[3],[4],[3]],[[3],[4],[3]],[[3],[4],[3]],
      [[3],[4],[3]],[[3],[4],[3]],[[3],[4],[3]],[[3],[4],[3]],[[3],[4],[3]],
      [[3],[4],[3]],[[3],[4],[3]],[[3],[4],[3]],[[3],[4],[3]],[[3],[4],[3]]
    ] // 200脚→1席空け120名
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
      [[1],[1],[1],[1]],  // R1
      [[1],[1],[1],[1]],  // R2
      [[1],[1],[1],[1]],  // R3
      [[1],[1],[1],[1]],  // R4
      [[1],[1],[1],[1]],  // R5
      [[1],[1],[1],[1]],  // R6
      [[1],[1],[1],[1]],  // R7
      [[1],[1],[0],[0]]   // R8: 2台のみ
    ] // 30台=30名
  }
};

// ========== ユーティリティ ==========

function seatsPerTable(n) {
  if (n <= 0) return 0;
  return Math.floor((n + 1) / 2);
}

function totalChairs(roomId) {
  var room = PHYSICAL[roomId], total = 0;
  for (var r = 0; r < room.rows; r++)
    for (var b = 0; b < room.tables[r].length; b++)
      for (var t = 0; t < room.tables[r][b].length; t++)
        total += room.tables[r][b][t];
  return total;
}

function maxCapacity(roomId) {
  var room = PHYSICAL[roomId], total = 0;
  for (var r = 0; r < room.rows; r++)
    for (var b = 0; b < room.tables[r].length; b++)
      for (var t = 0; t < room.tables[r][b].length; t++)
        total += seatsPerTable(room.tables[r][b][t]);
  return total;
}

// ========== グリッド生成 ==========
// グリッド値: 1+＝座席, 0＝ギャップ椅子（空席）, null＝机なし
// colTypes: 各列が座席列('S')かギャップ列('G')か → UI側で描画幅を変える

function generateRoom(roomId) {
  var room = PHYSICAL[roomId];
  var nBlocks = room.tables[0].length;

  // 1) 各ブロックの最大幅（物理椅子数）
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

  // 2) 総列数とブロック開始列
  var totalCols = 0, blockStart = [];
  for (var b = 0; b < nBlocks; b++) { blockStart.push(totalCols); totalCols += maxBlockW[b]; }

  // 3) 全物理椅子をグリッドに配置
  var midBlock = nBlocks / 2;
  var grid = [];
  for (var r = 0; r < room.rows; r++) {
    var row = [];
    for (var c = 0; c < totalCols; c++) row.push(null);
    for (var b = 0; b < nBlocks; b++) {
      var tables = room.tables[r][b], chairCount = 0;
      for (var t = 0; t < tables.length; t++) chairCount += tables[t];
      var offset = 0;
      if (room.type === "fan" && b < midBlock) offset = maxBlockW[b] - chairCount;
      var pos = 0;
      for (var t = 0; t < tables.length; t++) {
        for (var i = 0; i < tables[t]; i++) {
          var ci = blockStart[b] + offset + pos;
          row[ci] = (room.type === "individual" || i % 2 === 0) ? -1 : 0;
          pos++;
        }
      }
    }
    grid.push(row);
  }

  // 4) 列タイプ判定: 座席(S) or ギャップ(G)
  var colTypes = [];
  for (var c = 0; c < totalCols; c++) {
    var hasSeat = false;
    for (var r = 0; r < room.rows; r++) { if (grid[r][c] === -1) { hasSeat = true; break; } }
    colTypes.push(hasSeat ? "S" : "G");
  }

  // 5) 座席番号付与（列優先・上から下）
  var seatNum = 1;
  for (var c = 0; c < totalCols; c++)
    for (var r = 0; r < room.rows; r++)
      if (grid[r][c] === -1) grid[r][c] = seatNum++;

  // 6) sections, innerAisles
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

  return {
    name: room.name, capacity: seatNum - 1,
    rows: room.rows, cols: totalCols,
    podium: room.podium, sections: sections,
    innerAisles: innerAisles.length > 0 ? innerAisles : undefined,
    colTypes: colTypes,
    grid: grid
  };
}
