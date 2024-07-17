// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

const letter = ["", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const cell = Array.from({length: 10}, () => Array.from({length: 20}, () => 0));
const celld = Array.from({length: 10}, () => Array.from({length: 20}, () => 0));
const cells = Array.from({length: 10}, () => Array.from({length: 20}, () => 0));
const chcell = Array.from({length: 10}, () => Array.from({length: 20}, () => 0));
const r = Array.from({length: 10}, () => [""]);

let sco = 0;
let set_o = 0;
let boot_t = 0;
let t = 1;
let down_s = 0;
let rightm = 0;
let leftm = 0;
let downm = 0;
let key = 0;
let cenx = 0;
let ceny = 0;
let p = 1;
let stopt = 0;
let chc = 1;
let cwo = 0;
let ranw = "";
let tit = 0;

// グリッド線の描画
// g.drawGrid();
// 描画色の設定
// g.setColor(255, 0, 0);
console.log("変数:ok")
// セルの初期化
cell[1][1] = 52;
cell[1][2] = 27;
cenx = 1;
ceny = 1;
class mkeyboard{
  constructor(){
  this.so = " ";
  }
  set(s){
    this.so = s;
  }
  print_so(){
    console.log(this.so == 'a')
    console.log(this.so);
  }
  isPressed(co){
    if(this.so == co){
      return 1;
    }else{
      return 0;
    }
  }
}
const keyboard = new mkeyboard();
const canvas = document.querySelector('.canvas');
const ctc = canvas.getContext('2d');

window.addEventListener("keydown", (e)=>{
  const keycd = e.keyCode;
  console.log("key_push");
  keyboard.set(e.key);
  keyboard.print_so();
  
  // ★New!
  const onShift = e.shiftKey;  // シフトキー (Boolean)
  const onCtrl  = e.ctrlKey;   // コントロールキー (Boolean)
  const onAlt   = e.altKey;    // オルトキー (Boolean)
  const onMeta  = e.metaKey;   // メタキー: Windowsキー,⌘キーなど (Boolean)
});

window.addEventListener("keyup", (e)=>{
  const keycd =0;
  keyboard.set(" ")

  // ★New!
  const onShift = e.shiftKey;  // シフトキー (Boolean)
  const onCtrl  = e.ctrlKey;   // コントロールキー (Boolean)
  const onAlt   = e.altKey;    // オルトキー (Boolean)
  const onMeta  = e.metaKey;   // メタキー: Windowsキー,⌘キーなど (Boolean)
});
class mg{
  setColor(r,g,b){
    var t = "rgb(" + r + " " + g + " " + b + ")"
     ctc.fillStyle = t;
 }
  //
 setTextSize(s){
   var p = s
     var t =  String(p) + 'px Roboto medium'
     ctc.font = t
 }
 drawString(t,x,y){
     ctc.fillText(t,x,y)
 }
 clear(){
     ctc.clearRect(0, 0, canvas.width, canvas.height);
 }
  fillRect(x,y,w,h){
     ctc.fillRect(x,y,w,h);
 }
}
const g = new mg();
// タイトル表示
function title() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  g.setColor(red, green, blue);
  g.setTextSize(150);
//g.font = '150px Roboto medium'
  g.drawString("LEAP", 100, 100);
  g.setColor(0, 0, 0);
  g.setTextSize(50);
   g.drawString("puzzle", 100, 150);
  g.setTextSize(15);
   g.drawString("LEAPに載っている単語を揃えて。", 100, 210);
   g.drawString("sボタンでスタート！", 100, 300);
}

// 描画
function draw() {
   g.setColor(200, 200, 255);
   g.clear();
   g.fillRect(0, 0, 300, 300);
  for (let iy = 0; iy < 20; iy++) {
    for (let ix = 0; ix < 10; ix++) {
       g.setColor(0, 0, 0);
       g.setTextSize(15);
      if (cell[ix][iy] === 0) {
        if (iy === 1 && (ix === 4 || ix === 5)) {
           g.drawString("@", ix * 15 - 1, iy * 15 + 15);
        } else {
           g.drawString("_", ix * 15, iy * 15 + 10);
        }
      } else {
        if (cell[ix][iy] >= 27) {
           g.drawString(letter[cell[ix][iy] - 26], ix * 15, iy * 15 + 10);
        } else {
           g.drawString(letter[cell[ix][iy]], ix * 15, iy * 15 + 10);
        }
      }
    }
  }
   g.setColor(255, 200, 255);
   g.fillRect(150, 100, 150, 200);
   g.setTextSize(20);
   g.setColor(255, 100, 200);
   g.drawString("ランダム単語", 170, 50);
   g.drawString(str(ranw), 150, 80);
   g.setTextSize(15);
   g.drawString("そろえた単語数" + str(cwo), 170, 125);
   g.setTextSize(15);
   g.setColor(100, 150, 255);
  for (let i = 0; i < 10; i++) {
    if (r[9 - i] === "leap") {
      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);
       g.setColor(red, green, blue);
    }
     g.drawString(r[9 - i], 250, i * 15 + 150);
  }
}

// セルの設定
function set() {
  for (let iy = 0; iy < 20; iy++) {
    for (let ix = 0; ix < 10; ix++) {
      if (cell[ix][iy] >= 27) {
        cell[ix][iy] = cell[ix][iy] - 26;
      }
    }
  }
  celld = Array.from({length: 10}, () => Array.from({length: 20}, () => 0));
  set_o = 1;
  const ch = Math.floor(Math.random() * 26) + 27;
  cell[4][1] = ch;
  ch = Math.floor(Math.random() * 26) + 27;
  cell[5][1] = ch;
  cenx = 4;
  ceny = 1;

  set_o = 0;
}

// 回転
function turn() {
  celld = Array.from({length: 10}, () => Array.from({length: 20}, () => 0));
  celld[cenx][ceny] = cell[cenx][ceny];

  let bool_t = 1;
  t = 1;
  while (bool_t) {
    bool_t = 0;
    for (let iy = 0; iy < 20; iy++) {
      for (let ix = 0; ix < 10; ix++) {
        if (cell[ix][iy] >= 27 && bool_t === 0) {
          if (ix !== cenx || iy !== ceny) {
            const disx = ix - cenx;
            const disy = iy - ceny;
            for (let i = 0; i < t; i++) {
              const dx = 1 * disy;
              const dy = -1 * disx;
              disx = dx;
              disy = dy;
            }
            if (cenx + dx < 0 || cenx + dx > 9 || ceny + dy < 0 || ceny + dy > 19) {
              t = t + 1;
              bool_t = 1;
            } else {
              if (cell[cenx + dx][ceny + dy] === 0 || cell[cenx + dx][ceny + dy] >= 27) {
                celld[cenx + dx][ceny + dy] = cell[ix][iy];
              } else {
                t = t + 1;
                bool_t = 1;
              }
            }
          }
        }
      }
    }
  }
  back();
}

// チェック
function chack() {
  rightm = 100;
  leftm = 100;
  downm = 100;
  for (let iy = 0; iy < 20; iy++) {
    for (let ix = 0; ix < 10; ix++) {
      if (cell[ix][iy] >= 27) {
        if (rightm === 100) {
          rightm = ix;
          leftm = ix;
          downm = iy;
        }
        if (rightm < ix) {
          rightm = ix;
        }
        if (leftm > ix) {
          leftm = ix;
        }
        if (downm < iy) {
          downm = iy;
        }
      }
    }
  }
}

// 戻す
function back() {
  for (let iy = 0; iy < 20; iy++) {
    for (let ix = 0; ix < 10; ix++) {
      if (cell[ix][iy] >= 27) {
        cell[ix][iy] = 0;
      }
    }
  }
  for (let iy = 0; iy < 20; iy++) {
    for (let ix = 0; ix < 10; ix++) {
      if (celld[ix][iy] >= 27) {
        cell[ix][iy] = celld[ix][iy];
      }
    }
  }
  celld = Array.from({length: 10}, () => Array.from({length: 20}, () => 0));
}

// 削除
function dele() {
  let delew = "";
  let delenu = 0;
  stopt = 1;
  let exit = 0;
  cells = Array.from({length: 10}, () => Array.from({length: 20}, () => 0));
  celld = Array.from({length: 10}, () => Array.from({length: 20}, () => 0));
  for (let iy = 0; iy < 20; iy++) {
    for (let ix = 0; ix < 10; ix++) {
      if ((chcell[ix][0] === 1 || chcell[0][iy] === 1) && cell[ix][iy] !== 0) {
        for (let d = 0; d < 2; d++) {
          if (d === 0) {
            for (let s = 0; s < 10 - ix; s++) {
              if (ix + s <= 9) {
                delew += letter[cell[ix + s][iy]];
              }
              for (let w = 0; w < word.length; w++) {
                if (delew === word[w]) {
                  sco += 50;
                  cwo += 1;
                  // hi(word[w]);
                  for (let ws = 0; ws < s + 1; ws++) {
                    if (ix + s <= 9) {
                      cells[ix + ws][iy] = 5;
                    }
                  }
                }
              }
            }
          } else {
            for (let s = 0; s < 20 - iy; s++) {
              if (ix + s <= 19) {
                delew += letter[cell[ix][iy + s]];
              }
              for (let w = 0; w < word.length; w++) {
                if (delew === word[w]) {
                  // hi(word[w]);
                  for (let ws = 0; ws < s + 1; ws++) {
                    if (ix + s <= 19) {
                      cells[ix][iy + ws] = 5;
                    }
                  }
                }
              }
            }
          }
          delew = "";
        }
      }
    }
  }
  chcell = Array.from({length: 10}, () => Array.from({length: 20}, () => 0));
  chc = 0;
  stopt = 1;
  ranw = word[Math.floor(Math.random() * word.length)];
  for (let iy = 0; iy < 20; iy++) {
    for (let ix = 0; ix < 10; ix++) {
      if (cells[ix][iy] === 5) {
        cell[ix][iy] = 0;
        cells[ix][iy] = 0;
      }
    }
  }
  for (let i = 0; i < 10; i++) {
    for (let iy = 0; iy < 19; iy++) {
      for (let ix = 0; ix < 10; ix++) {
        if (cell[ix][iy + 1] === 0 && cell[ix][iy] !== 0) {
          chcell[ix][0] = 0;
          chcell[0][iy] = 0;
          chcell[ix][0] = 1;
          chcell[0][iy + 1] = 1;
          cell[ix][iy + 1] = cell[ix][iy];
          cell[ix][iy] = 0;
        }
      }
    }
  }
  // print(chcell);
  stopt = 0;
}

// 単語表示
function hi(text) {
  if (text === "leap") {
    for (let i = 0; i < 10; i++) {
      cell[i][19] = 0;
    }
  }
  r[0] = [];
  for (let i = 0; i < 9; i++) {
    r[i] = r[i + 1];
  }
  delete r[9];
  r.push(text);
}

// リセット
function reset() {
  celld = Array.from({length: 10}, () => Array.from({length: 20}, () => 0));
}

// 移動
function move() {
  chack();
  celld = Array.from({length: 10}, () => Array.from({length: 20}, () => 0));

  let cantp = 0;
  if (key === 0) {
    if (keyboard.isPressed("a") && leftm > 0) {
      for (let iy = 0; iy < 20; iy++) {
        for (let ix = 0; ix < 10; ix++) {
          if (cell[ix][iy] >= 27) {
            if (cell[ix - 1][iy] <= 26 && cell[ix - 1][iy] !== 0) {
              cantp = 1;
            }
            celld[ix - 1][iy] = cell[ix][iy];
          }
        }
      }
      if (cantp === 0) {
        cenx = cenx - 1;
        back();
      }
      key = 1;
      celld = Array.from({length: 10}, () => Array.from({length: 20}, () => 0));
    }

    cantp = 0;

    if (keyboard.isPressed("d") && rightm < 9) {
      for (let iy = 0; iy < 20; iy++) {
        for (let ix = 0; ix < 10; ix++) {
          if (cell[ix][iy] >= 27) {
            if (cell[ix + 1][iy] <= 26 && cell[ix + 1][iy] !== 0) {
              cantp = 1;
            }
            celld[ix + 1][iy] = cell[ix][iy];
          }
        }
      }
      if (cantp === 0) {
        cenx = cenx + 1;
        back();
      }
      key = 1;
      celld = Array.from({length: 10}, () => Array.from({length: 20}, () => 0));
    }

    if (keyboard.isPressed("w")) {
      turn();
      key = 1;
    }
    if (keyboard.isPressed("s")) {
      if (downm < 19) {
        down();
      } else {
        stop();
      }
    }
    // if (keyboard.isPressed("f")) {
    //   print(chcell);
    // }
  } else {
    if (!keyboard.isPressed("a") && !keyboard.isPressed("d") && !keyboard.isPressed("w") && !keyboard.isPressed("s")) {
      key = 0;
    }
  }
}

// 停止
function stop() {
  for (let iy = 0; iy < 19; iy++) {
    for (let ix = 0; ix < 10; ix++) {
      if (cell[ix][iy + 1] === 0) {
        cell[ix][iy + 1] = cell[ix][iy];
        cell[ix][iy] = 0;
      }
    }
  }
  for (let iy = 0; iy < 20; iy++) {
    for (let ix = 0; ix < 10; ix++) {
      if (cell[ix][iy] >= 27) {
        chcell[ix][0] = 1;
        chcell[0][iy] = 1;
        cell[ix][iy] = cell[ix][iy] - 26;
      }
    }
  }
  sco += 1;
  chc = 0;
  for (let iy = 0; iy < 20; iy++) {
    for (let ix = 0; ix < 10; ix++) {
      if (chcell[ix][iy] === 1) {
        chc += 1;
      }
    }
  }
  while (chc) {
    for (let iy = 0; iy < 20; iy++) {
      for (let ix = 0; ix < 10; ix++) {
        if (chcell[ix][iy] === 1) {
          chc += 1;
        }
      }
    }

    dele();
  }
  reset();
  for (let iy = 0; iy < 2; iy++) {
    for (let ix = 0; ix < 10; ix++) {
      if (cell[ix][iy] <= 26 && cell[ix][iy] !== 0) {
        over();
      }
    }
  }
  set();
}

// 時間
function time() {
  if (p === 1 && stopt === 0) {
    setTimeout(f, 0);
  }
  if (p === 0 && stopt === 0) {
    down();
    p = 1;
  }
  setTimeout(time, 500);
}

// 処理
function f() {
  p = 0;
}

// 下に移動
function down() {
  let down_s = 0;
  stopt = 1;
  chack();
  celld = Array.from({length: 10}, () => Array.from({length: 20}, () => 0));
  if (set_o === 0 && downm < 19) {
    for (let iy = 0; iy < 20; iy++) {
      for (let ix = 0; ix < 10; ix++) {
        if (cell[ix][iy] >= 27) {
          if (cell[ix][iy + 1] === 0 || cell[ix][iy + 1] >= 27) {
            celld[ix][iy + 1] = cell[ix][iy];
          } else {
            down_s = 1;
          }
        }
      }
    }
    if (down_s === 0) {
      ceny = ceny + 1;
      back();
    } else {
      stop();
    }
  }
  if (downm === 19) {
    stop();
  }
  stopt = 0;
}

// ゲームオーバー
function over() {
  cell = Array.from({length: 10}, () => Array.from({length: 20}, () => 0));
  celld = Array.from({length: 10}, () => Array.from({length: 20}, () => 0));
  cells = Array.from({length: 10}, () => Array.from({length: 20}, () => 0));
  chcell = Array.from({length: 10}, () => Array.from({length: 20}, () => 0));
  r = Array.from({length: 10}, () => [""]);
  sco = 0;
  cwo = 0;
}

// メインループ
function main() {
  if (tit === 0) {
    title();
    if (keyboard.isPressed("s")) {
      tit = 1;
    }
  } else if (tit === 1) {
    time();
    tit = 2;
  } else {
    move();
    draw();
  }
  setTimeout(main, 50);
}
console.log("function:ok")
// メイン呼び出し
main();

