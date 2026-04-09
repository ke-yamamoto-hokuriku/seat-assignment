// 薬学部キャンパス 教室データ
// pharmacy_seating.html から読み込み
//
// === データ構造 ===
// ROOMS[教室ID] = {
//   id:       "教室名",
//   type:     "fan" | "rect",        // 扇形 or 長方形
//   blocks: [                         // ブロック（通路で区切られた塊）
//     {
//       name:  "ブロック名",          // "左", "中央", "右" 等
//       rows: [                       // 列（前方から順）
//         {
//           chairs:  数字,            // テーブルの椅子数
//           allowed: [番号, ...]      // 着席可能な椅子番号（1始まり）。空=着席なし
//         }
//       ]
//     }
//   ]
// }
//
// ・1列 = 1テーブル（ブロック内の横一列の机）
// ・chairs = そのテーブルの物理的な椅子の総数
// ・allowed = 試験時に着席可能な椅子の位置（左から1始まり）
// ・教室追加時はこのファイルに追加するだけでOK

const ROOMS = {
  "202PN": {
    id: "202PN",
    type: "fan",
    blocks: [
      {
        name: "左",
        rows: [
          { chairs: 4,  allowed: [1, 4] },
          { chairs: 7,  allowed: [] },
          { chairs: 7,  allowed: [4, 7] },
          { chairs: 7,  allowed: [4, 7] },
          { chairs: 8,  allowed: [1] },
          { chairs: 9,  allowed: [7] },
          { chairs: 10, allowed: [1, 4, 10] },
          { chairs: 10, allowed: [1, 4, 10] },
          { chairs: 5,  allowed: [2] },
        ]
      },
      {
        name: "中央",
        rows: [
          { chairs: 6,  allowed: [1, 6] },
          { chairs: 6,  allowed: [1, 6] },
          { chairs: 7,  allowed: [4] },
          { chairs: 7,  allowed: [4] },
          { chairs: 8,  allowed: [1, 8] },
          { chairs: 9,  allowed: [] },
          { chairs: 10, allowed: [1, 4, 7, 10] },
          { chairs: 10, allowed: [1, 4, 7, 10] },
          { chairs: 11, allowed: [] },
          { chairs: 12, allowed: [1, 7, 12] },
          { chairs: 11, allowed: [4, 9] },
        ]
      },
      {
        name: "右",
        rows: [
          { chairs: 4,  allowed: [1, 4] },
          { chairs: 7,  allowed: [] },
          { chairs: 7,  allowed: [1, 4] },
          { chairs: 7,  allowed: [1, 4] },
          { chairs: 8,  allowed: [8] },
          { chairs: 9,  allowed: [3] },
          { chairs: 10, allowed: [1, 7, 10] },
          { chairs: 10, allowed: [1, 7, 10] },
          { chairs: 5,  allowed: [4] },
        ]
      }
    ]
  },

  "301P": {
    id: "301P",
    type: "rect",
    blocks: [
      {
        name: "左",
        rows: [
          { chairs: 5, allowed: [1, 4] },
          { chairs: 5, allowed: [1, 4] },
          { chairs: 5, allowed: [1, 4] },
          { chairs: 5, allowed: [1, 4] },
          { chairs: 5, allowed: [1, 4] },
          { chairs: 5, allowed: [1, 4] },
          { chairs: 5, allowed: [1, 4] },
          { chairs: 5, allowed: [1, 4] },
          { chairs: 5, allowed: [1, 4] },
          { chairs: 5, allowed: [1, 4] },
          { chairs: 5, allowed: [1, 4] },
        ]
      },
      {
        name: "中央",
        rows: [
          { chairs: 7, allowed: [1, 4, 7] },
          { chairs: 7, allowed: [1, 4, 7] },
          { chairs: 7, allowed: [1, 4, 7] },
          { chairs: 7, allowed: [1, 4, 7] },
          { chairs: 7, allowed: [1, 4, 7] },
          { chairs: 7, allowed: [1, 4, 7] },
          { chairs: 7, allowed: [1, 4, 7] },
          { chairs: 7, allowed: [1, 4, 7] },
          { chairs: 7, allowed: [1, 4, 7] },
          { chairs: 7, allowed: [1, 4, 7] },
          { chairs: 7, allowed: [1, 4, 7] },
        ]
      },
      {
        name: "右",
        rows: [
          { chairs: 5, allowed: [2, 5] },
          { chairs: 5, allowed: [2, 5] },
          { chairs: 5, allowed: [2, 5] },
          { chairs: 5, allowed: [2, 5] },
          { chairs: 5, allowed: [2, 5] },
          { chairs: 5, allowed: [2, 5] },
          { chairs: 5, allowed: [2, 5] },
          { chairs: 5, allowed: [2, 5] },
          { chairs: 5, allowed: [2, 5] },
          { chairs: 5, allowed: [2, 5] },
          { chairs: 5, allowed: [2, 5] },
        ]
      }
    ]
  }
};
