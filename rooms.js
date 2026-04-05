// ========== 共通関数 ==========

// 長方形教室の座席グリッド生成（列優先・上から下）
function rectGrid(nR, nC) {
  var g = [];
  for (var r = 0; r < nR; r++) {
    var row = [];
    for (var c = 0; c < nC; c++) row.push(c * nR + r + 1);
    g.push(row);
  }
  return g;
}

// 物理形状から座席番号グリッドを生成
// shape: 1=机あり（番号付与）, 0=机あり（番号なし）, null=机なし
// 番号は列優先・上から下の順に 1, 2, 3, ... と自動付与
function generateGrid(shape) {
  var rows = shape.length, cols = shape[0].length;
  var grid = shape.map(function(r) { return r.map(function(v) { return v === 1 ? 0 : v === 0 ? 0 : null; }); });
  var num = 1;
  for (var c = 0; c < cols; c++)
    for (var r = 0; r < rows; r++)
      if (shape[r][c] === 1) grid[r][c] = num++;
  return grid;
}

// ========== 扇型教室の物理形状 ==========
// 1=座席あり（番号付与）, 0=机あり（番号なし）, null=机なし

// 201教室 (18行×23列, 263席)
var SHAPE_201 = [
  [null,null,null,1,1,1,null,null,null,null,null,null,null,null,null,null,null,null,1,1,1,null,null],
  [null,1,1,1,1,1,null,null,null,null,null,null,null,null,null,null,null,null,1,1,1,1,1],
  [null,1,1,1,1,1,null,null,null,null,null,1,1,null,null,null,null,null,1,1,1,1,1],
  [null,1,1,1,1,1,null,null,null,null,null,1,1,null,null,null,null,null,1,1,1,1,1],
  [null,1,1,1,1,1,null,null,null,null,1,1,1,1,null,null,null,null,1,1,1,1,1],
  [null,1,1,1,1,1,null,null,null,null,1,1,1,1,null,null,null,null,1,1,1,1,1],
  [null,1,1,1,1,1,null,null,null,1,1,1,1,1,1,null,null,null,1,1,1,1,1],
  [1,1,1,1,1,1,null,null,null,1,1,1,1,1,1,null,null,null,1,1,1,1,1],
  [1,1,1,1,1,1,null,null,1,1,1,1,1,1,1,1,null,null,1,1,1,1,1],
  [1,1,1,1,1,1,null,null,1,1,1,1,1,1,1,1,null,null,1,1,1,1,1],
  [1,1,1,1,1,1,1,null,1,1,1,1,1,1,1,1,null,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,null,1,1,1,1,1,1,1,1,null,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,null,null,null,null,null,null,null,null,null,null,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,null,null,null,null,null,null,null,null,null,null,1,1,1,1,1,1],
  [1,1,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1,1],
  [1,1,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1,1]
];

// 202教室 (12行×26列, 166席)
// 1=座席あり, 0=机あり番号なし, null=机なし
var SHAPE_202 = [
  [null,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,null,null,null,null],
  [1,1,1,0,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,null,0,1,1,1],
  [1,1,1,1,null,null,null,null,null,null,null,1,1,1,1,null,null,null,null,null,null,1,0,1,1,1],
  [1,1,1,1,0,null,null,null,null,null,null,1,1,1,1,null,null,null,null,null,null,1,0,1,1,1],
  [1,1,1,1,0,1,null,null,null,null,null,1,1,1,1,null,null,null,null,null,1,1,0,1,1,1],
  [1,1,1,1,0,1,null,null,null,null,0,1,1,1,1,0,null,null,null,null,1,1,0,1,1,1],
  [1,1,1,1,0,1,null,null,null,1,0,1,1,1,1,0,1,null,null,null,1,1,0,1,1,1],
  [1,1,1,1,0,1,1,null,null,1,0,1,1,1,1,0,1,null,null,1,1,1,0,1,1,1],
  [1,1,1,1,0,1,1,null,1,1,0,1,1,1,1,0,1,1,null,1,1,1,0,1,1,1],
  [1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1],
  [1,1,1,1,0,1,1,0,null,1,0,1,1,1,1,0,1,null,0,1,1,1,0,1,1,1],
  [1,1,1,1,0,1,1,0,null,null,null,null,null,null,null,null,null,null,0,1,1,1,0,1,1,1]
];

// ========== ROOMS定義 ==========

var ROOMS = {
  "201": {
    name: "201", capacity: 263, rows: 18, cols: 23,
    podium: "201教室",
    innerAisles: [2, 11, 20],
    centerExclude: [[2,11],[2,12],[3,11],[3,12]],
    sections: [{name:"正面 左",s:0,e:6},{name:"201教室",s:7,e:16},{name:"正面 右",s:17,e:22}],
    grid: generateGrid(SHAPE_201)
  },
  "202": {
    name: "202", capacity: 166, rows: 12, cols: 26,
    podium: "202教室",
    innerAisles: [1, 12, 23],
    centerExclude: [[0,12],[0,13],[1,12],[1,13]],
    sections: [{name:"正面 左",s:0,e:7},{name:"202教室",s:8,e:17},{name:"正面 右",s:18,e:25}],
    grid: generateGrid(SHAPE_202)
  },
  "302": {
    name: "302", capacity: 72, rows: 12, cols: 6,
    podium: "教 卓",
    sections: [{name:"左",s:0,e:1},{name:"中央",s:2,e:3},{name:"右",s:4,e:5}],
    grid: rectGrid(12, 6)
  },
  "302-I": {
    name: "302-I", capacity: 36, rows: 6, cols: 6,
    podium: "教 卓",
    sections: [{name:"左",s:0,e:1},{name:"中央",s:2,e:3},{name:"右",s:4,e:5}],
    grid: rectGrid(6, 6)
  },
  "404": {
    name: "404", capacity: 120, rows: 20, cols: 6,
    podium: "教 卓",
    sections: [{name:"左",s:0,e:1},{name:"中央",s:2,e:3},{name:"右",s:4,e:5}],
    grid: rectGrid(20, 6)
  },
  "406": {
    name: "406", capacity: 120, rows: 20, cols: 6,
    podium: "教 卓",
    sections: [{name:"左",s:0,e:1},{name:"中央",s:2,e:3},{name:"右",s:4,e:5}],
    grid: rectGrid(20, 6)
  }
};
var ROOM_LIST = ["201", "202", "302", "302-I", "404", "406"];
