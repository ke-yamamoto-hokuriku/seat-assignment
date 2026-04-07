// ========== 教室物理データ ==========
// Ver.2.3  2026.04.07
//
// 用語:
//   エリア = 201/202のみ。2ブロックをまとめた表示グループ
//   ブロック = 通路で区切られた椅子のかたまり（全教室共通）
//   テーブル = ブロック内の個別の机
//   椅子 = テーブル上の着座位置（着座ルールにより座席/ギャップに分かれる）
//
// データ構造:
//   tables[行][ブロック] = [テーブル脚数配列]
//   例: [[3],[3,3],[3]] = 左ブロック3脚×1台、中央ブロック3脚×2台、右ブロック3脚×1台
//   扇型教室: 1ブロック = 1つの連結机  例: [7] = 7脚の連結机
//
// sameAs:
//   同じ物理構造の教室は sameAs で参照元を指定
//   type, rows, sections, tables, partition を参照元から継承
//   name, podium は自身の値を使用
//
// parent + partitionHalf:
//   パーティション分割教室は parent で親教室を指定
//   親の tables を partition 位置で分割し、front/back を導出
//   親が sameAs を持つ場合はさらに解決
//
// 着座ルールは別途定義（このファイルには含まない）

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
      [[ 5],[ 6],[ 6],[ 6],[ 6],[ 3]],
      [[ 5],[ 6],[ 7],[ 7],[ 6],[ 3]],
      [[ 5],[ 6],[ 8],[ 8],[ 6],[ 3]],
      [[ 5],[ 7],[ 9],[ 9],[ 7],[ 3]],
      [[ 5],[ 7],[10],[10],[ 7],[ 3]],
      [[ 5],[ 7],[11],[11],[ 7],[ 3]],
      [[ 5],[ 7],[ 8],[ 8],[ 7],[ 3]],
      [[ 5],[ 7],[ 0],[ 0],[ 7],[ 3]],
      [[ 5],[ 7],[ 0],[ 0],[ 7],[ 3]],
      [[ 5],[ 0],[ 0],[ 0],[ 0],[ 3]],
      [[ 4],[ 0],[ 0],[ 0],[ 0],[ 3]]
    ] // 464脚
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
  "302-I":  { name: "302-I",  podium: "教 卓", parent: "302", partitionHalf: "front" },
  "302-II": { name: "302-II", podium: "教 卓", parent: "302", partitionHalf: "back" },

  "402":    { name: "402",    podium: "教 卓", sameAs: "302" },
  "402-I":  { name: "402-I",  podium: "教 卓", parent: "402", partitionHalf: "front" },
  "402-II": { name: "402-II", podium: "教 卓", parent: "402", partitionHalf: "back" },

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

  "406": { name: "406", podium: "教 卓", sameAs: "404" },

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
      [[0],[0],[1],[1]]   // R8: 2台のみ
    ] // 30台=30名
  }
};

// ========== ユーティリティ ==========

function seatsPerTable(n) {
  if (n <= 0) return 0;
  return Math.floor((n + 1) / 2);
}

// テーブル内の位置iが座席かギャップかを判定
// leanRight=true: 右端（通路側）からS → 左半分のブロック用
// leanRight=false: 左端（通路側）からS → 右半分のブロック用
function isSeatPos(i, tableSize, roomType, leanRight) {
  if (tableSize <= 1) return true;
  if (roomType === "rect" && tableSize === 4) return (i === 0 || i === 3);
  if (leanRight) return ((tableSize - 1 - i) % 2 === 0);
  return (i % 2 === 0);
}

function resolveSource(roomId) {
  var room = PHYSICAL[roomId];
  if (room.parent) {
    var parentRoom = PHYSICAL[room.parent];
    var parentSrc = parentRoom.sameAs ? PHYSICAL[parentRoom.sameAs] : parentRoom;
    var p = parentSrc.partition || 0;
    return {
      type: parentSrc.type, sections: parentSrc.sections,
      tables: room.partitionHalf === "front" ? parentSrc.tables.slice(0, p) : parentSrc.tables.slice(p),
      rows: room.partitionHalf === "front" ? p : parentSrc.tables.length - p
    };
  }
  return room.sameAs ? PHYSICAL[room.sameAs] : room;
}

function totalChairs(roomId) {
  var src = resolveSource(roomId);
  var total = 0;
  for (var r = 0; r < src.rows; r++)
    for (var b = 0; b < src.tables[r].length; b++)
      for (var t = 0; t < src.tables[r][b].length; t++)
        total += src.tables[r][b][t];
  return total;
}


// ========== グリッド生成（フルグリッド版）==========
// 全物理椅子をグリッドに含める
// grid値: 1+=座席番号, 0=ギャップ椅子, null=椅子なし

function generateRoom(roomId) {
  var room = PHYSICAL[roomId];
  var src = resolveSource(roomId);
  var nBlocks = src.tables[0].length;

  var maxBlockW = [];
  for (var b = 0; b < nBlocks; b++) {
    var maxW = 0;
    for (var r = 0; r < src.rows; r++) {
      var w = 0;
      for (var t = 0; t < src.tables[r][b].length; t++) w += src.tables[r][b][t];
      if (w > maxW) maxW = w;
    }
    maxBlockW.push(maxW);
  }

  var totalCols = 0, blockStart = [];
  for (var b = 0; b < nBlocks; b++) { blockStart.push(totalCols); totalCols += maxBlockW[b]; }

  var midBlock = nBlocks / 2;
  var grid = [];
  for (var r = 0; r < src.rows; r++) {
    var row = [];
    for (var c = 0; c < totalCols; c++) row.push(null);
    for (var b = 0; b < nBlocks; b++) {
      var tables = src.tables[r][b], chairCount = 0;
      for (var t = 0; t < tables.length; t++) chairCount += tables[t];
      var offset = 0;
      if (src.type === "fan" && b % 2 === 0) {
        offset = maxBlockW[b] - chairCount;
      }
      var pos = 0;
      for (var t = 0; t < tables.length; t++) {
        for (var i = 0; i < tables[t]; i++) {
          var ci = blockStart[b] + offset + pos;
          var leanRight = (b % 2 === 0);
          row[ci] = (src.type === "individual" || isSeatPos(i, tables[t], src.type, leanRight)) ? -1 : 0;
          pos++;
        }
      }
    }
    grid.push(row);
  }

  var seatNum = 1;
  for (var c = 0; c < totalCols; c++)
    for (var r = 0; r < src.rows; r++)
      if (grid[r][c] === -1) grid[r][c] = seatNum++;

  var sections = [], innerAisles = [];
  for (var si = 0; si < src.sections.length; si++) {
    var sec = src.sections[si];
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
  if (src.type === "fan" && nBlocks >= 4) {
    var centerBlocks = [2, 3];
    for (var r = 0; r < src.rows; r++) {
      for (var bi = 0; bi < centerBlocks.length; bi++) {
        var cb = centerBlocks[bi];
        var chairs = 0;
        for (var t = 0; t < src.tables[r][cb].length; t++) chairs += src.tables[r][cb][t];
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
    rows: src.rows, cols: totalCols,
    podium: room.podium, sections: sections,
    innerAisles: innerAisles.length > 0 ? innerAisles : undefined,
    centerExclude: centerExclude.length > 0 ? centerExclude : undefined,
    grid: grid
  };
}
