function rectGrid(nR, nC) {
  const g = [];
  for (let r = 0; r < nR; r++) {
    const row = [];
    for (let c = 0; c < nC; c++) row.push(c * nR + r + 1);
    g.push(row);
  }
  return g;
}
const ROOMS = {
  "201(247)": {
    name: "201(247)", capacity: 247, rows: 18, cols: 23,
    podium: "201教室",
    innerAisles: [2, 11, 20],
    centerExclude: [[2,11],[2,12],[3,11],[3,12]],
    sections: [{name:"正面 左",s:0,e:6},{name:"201教室",s:7,e:16},{name:"正面 右",s:17,e:22}],
    grid: [
      [null,null,null,46,62,78,null,null,null,null,null,null,null,null,null,null,null,null,166,182,198,null,null],
      [null,12,29,47,63,79,null,null,null,null,null,null,null,null,null,null,null,null,167,183,199,214,231],
      [null,13,30,48,64,80,null,null,null,null,null,118,130,null,null,null,null,null,168,184,200,215,232],
      [null,14,31,49,65,81,null,null,null,null,null,119,131,null,null,null,null,null,169,185,201,216,233],
      [null,15,32,50,66,82,null,null,null,null,108,120,132,142,null,null,null,null,170,186,202,217,234],
      [null,16,33,51,67,83,null,null,null,null,109,121,133,143,null,null,null,null,171,187,203,218,235],
      [null,17,34,52,68,84,null,null,null,100,110,122,134,144,152,null,null,null,172,188,204,219,236],
      [1,18,35,53,69,85,null,null,null,101,111,123,135,145,153,null,null,null,173,189,205,220,237],
      [2,19,36,54,70,86,null,null,94,102,112,124,136,146,154,160,null,null,174,190,206,221,238],
      [3,20,37,55,71,87,null,null,95,103,113,125,137,147,155,161,null,null,175,191,207,222,239],
      [4,21,38,56,72,88,0,null,96,104,114,126,138,148,156,162,null,0,176,192,208,223,240],
      [5,22,39,57,73,89,0,0,97,105,115,127,139,149,157,163,0,0,177,193,209,224,241],
      [6,23,40,58,74,90,0,0,98,106,116,128,140,150,158,164,0,0,178,194,210,225,242],
      [7,24,41,59,75,91,0,null,99,107,117,129,141,151,159,165,null,0,179,195,211,226,243],
      [8,25,42,60,76,92,0,null,null,null,null,null,null,null,null,null,null,0,180,196,212,227,244],
      [9,26,43,61,77,93,0,null,null,null,null,null,null,null,null,null,null,0,181,197,213,228,245],
      [10,27,44,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,229,246],
      [11,28,45,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,230,247]]
  },
  "201(263)": {
    name: "201(263)", capacity: 263, rows: 18, cols: 23,
    podium: "201教室",
    innerAisles: [2, 11, 20],
    centerExclude: [[2,11],[2,12],[3,11],[3,12]],
    sections: [{name:"正面 左",s:0,e:6},{name:"201教室",s:7,e:16},{name:"正面 右",s:17,e:22}],
    grid: [
      [null,null,null,46,62,78,null,null,null,null,null,null,null,null,null,null,null,null,182,198,214,null,null],
      [null,12,29,47,63,79,null,null,null,null,null,null,null,null,null,null,null,null,183,199,215,230,247],
      [null,13,30,48,64,80,null,null,null,null,null,126,138,null,null,null,null,null,184,200,216,231,248],
      [null,14,31,49,65,81,null,null,null,null,null,127,139,null,null,null,null,null,185,201,217,232,249],
      [null,15,32,50,66,82,null,null,null,null,116,128,140,150,null,null,null,null,186,202,218,233,250],
      [null,16,33,51,67,83,null,null,null,null,117,129,141,151,null,null,null,null,187,203,219,234,251],
      [null,17,34,52,68,84,null,null,null,108,118,130,142,152,160,null,null,null,188,204,220,235,252],
      [1,18,35,53,69,85,null,null,null,109,119,131,143,153,161,null,null,null,189,205,221,236,253],
      [2,19,36,54,70,86,null,null,102,110,120,132,144,154,162,168,null,null,190,206,222,237,254],
      [3,20,37,55,71,87,null,null,103,111,121,133,145,155,163,169,null,null,191,207,223,238,255],
      [4,21,38,56,72,88,94,null,104,112,122,134,146,156,164,170,null,176,192,208,224,239,256],
      [5,22,39,57,73,89,95,100,105,113,123,135,147,157,165,171,174,177,193,209,225,240,257],
      [6,23,40,58,74,90,96,101,106,114,124,136,148,158,166,172,175,178,194,210,226,241,258],
      [7,24,41,59,75,91,97,null,107,115,125,137,149,159,167,173,null,179,195,211,227,242,259],
      [8,25,42,60,76,92,98,null,null,null,null,null,null,null,null,null,null,180,196,212,228,243,260],
      [9,26,43,61,77,93,99,null,null,null,null,null,null,null,null,null,null,181,197,213,229,244,261],
      [10,27,44,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,245,262],
      [11,28,45,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,246,263]]
  },
  "202": {
    name: "202",
    capacity: 204,
    rows: 12,
    cols: 26,
    podium: "202教室",
    innerAisles: [1, 12, 23],
    centerExclude: [[0,12],[0,13],[1,12],[1,13]],
    sections: [{
      name: "正面 左",
      s: 0,
      e: 7
    }, {
      name: "202教室",
      s: 8,
      e: 17
    }, {
      name: "正面 右",
      s: 18,
      e: 25
    }],
    grid: [[null, null, null, null, null, null, null, null, null, null, null, null, 92, 103, null, null, null, null, null, null, null, null, null, null, null, null], [1, 12, 23, 34, null, null, null, null, null, null, null, null, 93, 104, null, null, null, null, null, null, null, null, 161, 172, 183, 194], [2, 13, 24, 35, null, null, null, null, null, null, null, 83, 94, 105, 114, null, null, null, null, null, null, null, 162, 173, 184, 195], [3, 14, 25, 36, 45, null, null, null, null, null, null, 84, 95, 106, 115, null, null, null, null, null, null, 152, 163, 174, 185, 196], [4, 15, 26, 37, 46, 54, null, null, null, null, null, 85, 96, 107, 116, null, null, null, null, null, 144, 153, 164, 175, 186, 197], [5, 16, 27, 38, 47, 55, null, null, null, null, 77, 86, 97, 108, 117, 123, null, null, null, null, 145, 154, 165, 176, 187, 198], [6, 17, 28, 39, 48, 56, null, null, null, 72, 78, 87, 98, 109, 118, 124, 129, null, null, null, 146, 155, 166, 177, 188, 199], [7, 18, 29, 40, 49, 57, 62, null, null, 73, 79, 88, 99, 110, 119, 125, 130, null, null, 139, 147, 156, 167, 178, 189, 200], [8, 19, 30, 41, 50, 58, 63, null, 70, 74, 80, 89, 100, 111, 120, 126, 131, 134, null, 140, 148, 157, 168, 179, 190, 201], [9, 20, 31, 42, 51, 59, 64, 67, 71, 75, 81, 90, 101, 112, 121, 127, 132, 135, 136, 141, 149, 158, 169, 180, 191, 202], [10, 21, 32, 43, 52, 60, 65, 68, null, 76, 82, 91, 102, 113, 122, 128, 133, null, 137, 142, 150, 159, 170, 181, 192, 203], [11, 22, 33, 44, 53, 61, 66, 69, null, null, null, null, null, null, null, null, null, null, 138, 143, 151, 160, 171, 182, 193, 204]]
  },
  "202(166)": {
    name: "202(166)", capacity: 166, rows: 12, cols: 26,
    podium: "202教室",
    innerAisles: [1, 12, 23],
    centerExclude: [[0,12],[0,13],[1,12],[1,13]],
    sections: [{name:"正面 左",s:0,e:7},{name:"202教室",s:8,e:17},{name:"正面 右",s:18,e:25}],
    grid: [
      [null,null,null,null,null,null,null,null,null,null,null,null,73,84,null,null,null,null,null,null,null,null,null,null,null,null],
      [1,12,23,0,null,null,null,null,null,null,null,null,74,85,null,null,null,null,null,null,null,null,0,134,145,156],
      [2,13,24,34,null,null,null,null,null,null,null,64,75,86,95,null,null,null,null,null,null,124,0,135,146,157],
      [3,14,25,35,0,null,null,null,null,null,null,65,76,87,96,null,null,null,null,null,null,125,0,136,147,158],
      [4,15,26,36,0,44,null,null,null,null,null,66,77,88,97,null,null,null,null,null,116,126,0,137,148,159],
      [5,16,27,37,0,45,null,null,null,null,0,67,78,89,98,0,null,null,null,null,117,127,0,138,149,160],
      [6,17,28,38,0,46,null,null,null,59,0,68,79,90,99,0,104,null,null,null,118,128,0,139,150,161],
      [7,18,29,39,0,47,52,null,null,60,0,69,80,91,100,0,105,null,null,111,119,129,0,140,151,162],
      [8,19,30,40,0,48,53,null,57,61,0,70,81,92,101,0,106,109,null,112,120,130,0,141,152,163],
      [9,20,31,41,0,49,54,0,58,62,0,71,82,93,102,0,107,110,0,113,121,131,0,142,153,164],
      [10,21,32,42,0,50,55,0,null,63,0,72,83,94,103,0,108,null,0,114,122,132,0,143,154,165],
      [11,22,33,43,0,51,56,0,null,null,null,null,null,null,null,null,null,null,0,115,123,133,0,144,155,166]]
  },
  "302": {
    name: "302",
    capacity: 72,
    rows: 12,
    cols: 6,
    podium: "教 卓",
    sections: [{
      name: "左",
      s: 0,
      e: 1
    }, {
      name: "中央",
      s: 2,
      e: 3
    }, {
      name: "右",
      s: 4,
      e: 5
    }],
    grid: rectGrid(12, 6)
  },
  "302-I": {
    name: "302-I",
    capacity: 36,
    rows: 6,
    cols: 6,
    podium: "教 卓",
    sections: [{
      name: "左",
      s: 0,
      e: 1
    }, {
      name: "中央",
      s: 2,
      e: 3
    }, {
      name: "右",
      s: 4,
      e: 5
    }],
    grid: rectGrid(6, 6)
  },
  "404": {
    name: "404",
    capacity: 120,
    rows: 20,
    cols: 6,
    podium: "教 卓",
    sections: [{
      name: "左",
      s: 0,
      e: 1
    }, {
      name: "中央",
      s: 2,
      e: 3
    }, {
      name: "右",
      s: 4,
      e: 5
    }],
    grid: rectGrid(20, 6)
  },
  "406": {
    name: "406",
    capacity: 120,
    rows: 20,
    cols: 6,
    podium: "教 卓",
    sections: [{
      name: "左",
      s: 0,
      e: 1
    }, {
      name: "中央",
      s: 2,
      e: 3
    }, {
      name: "右",
      s: 4,
      e: 5
    }],
    grid: rectGrid(20, 6)
  }
};
const ROOM_LIST = ["201(247)", "201(263)", "202(166)", "202", "302", "302-I", "404", "406"];
