// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

const letter = ["", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let cell = Array.from({length: 10}, () => Array.from({length: 20}, () => 0));
let celld = Array.from({length: 10}, () => Array.from({length: 20}, () => 0));
let cells = Array.from({length: 10}, () => Array.from({length: 20}, () => 0));
let chcell = Array.from({length: 10}, () => Array.from({length: 20}, () => 0));
let r = Array.from({length: 10}, () => [""]);

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
let word = ["look","see","watch","listen","hear","stand","speak","talk","tell","say","ask","put","find","think","believe","know","learn","study","go","come","run","move","reach","leave","take","bring","carry","make","let","have","give","get","keep","hold","lose","do","help","break","build","meet","drive","change","agree","oppose","advise","tip","discuss","blame","argue","claim","complain","offer","suggest","recommend","grateful","apologize","excuse","celebrate","admire","impress","award","describe","explain","communicate","express","promise","information","technology","research","material","artificial","electric","invent","discover","develop","skill","ability","talent","effort","practice","game","achieve","manage","improve","produce","create","establish","save","medicine","patient","condition","medical","stress","suffer","exercise","breathe","thirsty","physical","fever","strength","tear","taste","rule","role","habit","custom","tradition","society","law","ancestor","population","native","abroad","local","survey","evidence","value","treasure","fashion","public","vote","government","nation","capital","state","political","price","cost","sum","budget","fee","fare","bill","trade","wealth","economy","company","task","earn","hurt","injure","damage","destroy","ruin","danger","neighbor","audience","crowd","author","staff","clerk","customer","passenger","elderly","female","head","follow","wander","travel","pass","likely","natural","certain","probably","face","avoid","solve","trouble","issue","cheer","encourage","support","prevent","deny","enable","succeed","miss","fail","mistake","check","hide","draw","join","throw","operate","repair","sew","raise","serve","pour","spill","pretend","behave","bear","explore","happen","appear","remain","survive","belong","represent","base","include","contain","own","share","collect","gather","history","subject","education","knowledge","uniform","grade","senior","graduate","decide","judge","quit","retire","review","choose","imagine","guess","expect","predict","remember","remind","realize","appreciate","accept","consider","mind","wonder","seem","compare","concentrate","focus","allow","admit","ground","pollution","sight","view","landscape","nature","seed","plant","bloom","harvest","insect","earthquake","temperature","degree","flood","freeze","reflect","polite","rude","lonely","lazy","strict","ugly","intelligent","silly","nervous","awake","attitude","character","characteristic","feature","detail","advantage","fault","quality","correct","ideal","fair","appropriate","famous","elementary","major","matter","bright","brilliant","lively","comfortable","pleasant","convenient","false","terrible","awful","thin","tight","loose","raw","empty","smooth","direct","familiar","similar","differ","vary","specific","common","unusual","add","increase","reduce","divide","count","weigh","quarter","lot","pile","rate","figure","lack","extra","ready","prepare","adjust","apply","suit","case","scene","chance","opportunity","experience","time","spring","minute","period","generation","anniversary","recently","used","early","first","latest","modern","latter","spend","delay","borrow","lend","rent","provide","shelf","board","garbage","item","wheel","note","present","stuff","string","leisure","diet","furniture","refrigerator","traffic","jam","sell","pay","wear","clothes","marry","greet","order","room","story","site","yard","bottom","line","row","background","direction","art","culture","cartoon","novel","instrument","tune","sentence","article","passage","vocabulary","rumor","spell","pronounce","sign","mean","publish","display","trust","depend","rely","pray","beg","prefer","weep","hate","worry","anxious","satisfy","annoy","bother","disturb","frighten","upset","regret","favor","interest","pity","due","reason","result","effect","influence","cause","affect","way","manner","purpose","sake","right","complete","hardly","nearly","partly","actually","indeed","even","exactly","gradually","therefore","instead","until","besides","except","debate","criticize","accuse","insist","object","protest","controversial","bound","bet","congratulate","praise","honor","chat","refer","mention","convey","emphasize","exaggerate","reply","respond","whisper","remark","observe","theory","analysis","experiment","device","phenomenon","substance","chemical","fuel","nuclear","statistics","pursue","accomplish","overcome","fulfill","devote","aim","challenge","trial","dizzy","pale","appetite","starve","mental","rest","ache","surgery","disease","symptom","cancer","ambulance","recover","sore","swell","cough","bleed","faint","exhaust","cure","disabled","stiff","muscle","tongue","sense","sweat","nationality","citizen","civil","racial","domestic","rural","suburb","border","burden","impact","status","equal","relationship","reputation","trend","service","religion","moral","standard","prosperity","crisis","prejudice","discrimination","charity","benefit","welfare","community","individual","official","immigrant","volunteer","contribute","abolish","impose","access","duty","compulsory","responsible","policy","elect","industry","income","profit","tax","expense","debt","deposit","charge","wage","recession","consume","waste","invest","import","financial","hire","employ","resign","qualify","assign","occupation","career","profession","unemployment","document","department","branch","retail","system","structure","architecture","construction","function","surface","aspect","edge","consist","compose","attach","connect","relate","associate","stick","separate","thief","crime","motive","punish","violate","legal","enemy","compete","defeat","victim","obstacle","harm","invade","endanger","interrupt","spoil","spectator","relative","enter","accompany","departure","destination","transportation","via","lead","rise","lower","flow","burst","crack","melt","progress","advance","deal","handle","cope","treat","clue","restrict","limit","forbid","ban","refuse","reject","persuade","convince","inspire","discourage","promote","expand","extend","broaden","spread","tie","bind","fasten","fix","install","resist","obey","engage","bump","crash","bend","hug","stare","gaze","glance","glimpse","stretch","stumble","press","drag","lean","scratch","bow","nod","sigh","yawn","bury","perform","adopt","escape","scatter","fold","hang","release","strike","beat","protect","twist","stir","shake","burn","skip","expose","dip","polish","cheat","attend","participate","imitate","exist","arise","occur","generate","involve","require","counterpart","maintain","last","persist","gain","obtain","acquire","examine","search","reunion","scholarship","logic","instruction","determine","conclude","distinguish","classify","estimate","select","organize","recognize","suppose","assume","care","doubt","notice","aware","conscious","concerned","regard","commit","memorize","approve","forgive","grant","recall","abandon","rid","eliminate","relieve","remove","resource","conservation","preserve","disaster","planet","environment","horizon","agriculture","crop","soil","weed","drown","leak","climate","atmosphere","forecast","thermometer","humid","tropical","solar","mosquito","species","extinct","feed","energetic","greedy","brave","generous","intellectual","curious","imaginative","talkative","afford","eager","selfish","aggressive","cruel","addicted","stubborn","earnest","bold","guilty","innocent","sincere","modest","stupid","indifferent","punctual","coward","precise","accurate","proper","tidy","neat","efficient","reasonable","significant","precious","essential","fundamental","critical","serious","complex","complicated","delicate","plain","obvious","remarkable","outstanding","various","diverse","sort","fancy","marvelous","fabulous","active","positive","pure","steady","flexible","ripe","mature","stable","negative","vague","weird","rough","severe","passive","vain","fake","risky","absurd","odd","contrast","valid","available","casual","rare","practical","brand-new","rapid","urgent","sharp","calm","shallow","bare","naked","independent","tense","broad","narrow","vacant","vivid","mutual","awkward","objective","manual","alike","tend","deserve","fragment","ease","range","scale","unique","particular","general","ordinary","typical","account","calculate","measure","split","volume","proportion","dozen","amount","mass","shortage","enormous","spare","arrange","adapt","match","fit","emergency","occasion","circumstance","incident","current","temporary","permanent","previous","former","annual","contemporary","lately","immediately","supply","replace","exchange","substitute","submit","alternative","deliver","enclose","envelope","trick","load","content","routine","household","good","luxury","credit","questionnaire","reservation","applause","fuss","reward","farewell","reception","hospitality","portion","laundry","stain","dye","outlet","nap","wake","vending machine","grocery","appointment","consult","register","subscribe","guarantee","wipe","sweep","transfer","divorce","fate","destiny","flavor","perfume","ingredient","tender","bitter","aisle","track","district","facility","basement","height","distant","remote","locate","occupy","surround","classical","civilization","heritage","script","tale","literature","tragedy","poetry","biography","term","proverb","fluent","translate","define","interpret","quote","literally","indicate","reveal","announce","broadcast","prove","advertise","seek","entertain","amuse","attract","fascinate","absorb","fond","scare","alarm","amaze","irritate","puzzle","confuse","bore","frustrate","disappoint","embarrass","ashamed","uneasy","hesitate","reluctant","tremble","boast","jealous","envy","yell","respect","despair","emotion","sympathy","shame","ambition","confidence","courage","ignore","owe","fear","method","medium","means","extent","extremely","total","largely","moderate","somewhat","subtle","possibly","eventually","necessarily","frankly","ironically","moreover","otherwise","regardless","worth","according to","propose","demand","desire","dismiss","bless","glory","compliment","feast","declare","demonstrate","highlight","imply","recite","ray","radiation","laboratory","oxygen","molecule","compound","tissue","cell","gene","solid","satellite","orbit","launch","attempt","capacity","capable","attain","desperate","struggle","dedicate","pain","strain","remedy","fatigue","obesity","nursing","terminal","pregnant","heal","ankle","thumb","forehead","chin","chest","breast","lung","organ","vision","skeleton","sensation","code","agenda","gender","liberty","humanity","mankind","authority","justice","insurance","hardship","poverty","chaos","isolation","interaction","region","proof","principle","origin","setting","monument","mission","project","revolution","pension","found","contract","negotiate","cooperate","restore","conservative","affair","agency","council","kingdom","republic","empire","security","aid","reform","mayor","minister","poll","fortune","property","fund","stock","bankrupt","labor","overwork","firm","union","administration","secretary","editor","client","colleague","basis","element","constitute","unify","unite","combine","murder","arrest","prison","vice","witness","conflict","bullet","wound","triumph","military","strategy","conquer","defend","quarrel","rob","deprive","devastate","hazard","orphan","infant","slave","acquaintance","merchant","resident","crew","commute","chase","overtake","fade","dissolve","float","sink","fluctuate","circulate","transform","shift","modify","revise","vehicle","voyage","confirm","ensure","address","approach","resolve","settle","warn","force","boost","appeal","leap","grab","seize","cast","slap","stun","illuminate","mend","react","endure","encounter","neglect","undergo","trace","conduct","emerge","unfold","derive","possess","retain","secure","capture","inquiry","specialize","semester","biology","ecology","philosophy","geography","psychology","institution","dormitory","notion","concept","meditation","insight","outlook","caution","will","option","nightmare","keen","cherish","intend","suspect","comprehend","misunderstand","identify","permit","acknowledge","trim","omit","cultivate","shade","breeze","desert","fog","moisture","damp","path","trail","stream","tide","habitat","layer","volcano","mine","scent","wheat","swallow","web","cattle","kitten","organism","wildlife","beast","ape","mammal","flock","breed","reproduce","hatch","diligent","noble","arrogant","timid","humble","inclined","principal","prime","indispensable","grave","definite","evident","prominent","marked","grace","charm","rational","magnificent","superior","loyal","horrible","miserable","dull","nasty","insane","ridiculous","notorious","evil","mess","vast","huge","tiny","sphere","strip","internal","mobile","steep","intense","abstract","inevitable","neutral","brief","potential","tough","secondhand","resemble","contrary","category","scope","respective","given","peculiar","plenty","sufficient","numerous","substantial","unit","diameter","quantity","deficiency","lessen","era","session","pause","meanwhile","souvenir","brick","pole","thread","mischief","superstition","storage","shelter","garment","cabinet","recipe","brochure","shipping","fetch","distribute","statue","sculpture","carve","myth","craft","journal","heaven","funeral","soul","priest","faith","sacred","divine","context","singular","command","instance","narrative","dialogue","usage","accent","temper","affection","enthusiasm","passion","rage","sorrow","incredible","chuckle","tease","dare","willing","scream","soothe","tempt","scold","oppress","threaten","delight","astonish","mourn","offend","depress","sacrifice","impulse","curse","factor","stem","trigger","consequence","process","resort","formula","procedure","extraordinary","absolute","overwhelming","altogether","entire","tremendous","sheer","partial","barely","slight","approximately","frequently","apparently","merely","nevertheless","somehow","thus","pretty","despite","assert","defy","condemn","contradict","cite","illustrate","articulate","advocate","breakthrough","evolution","innovation","probe","fluid","particle","gravity","friction","mutation","heredity","hypothesis","specimen","microscope","realm","acid","toxic","poison","strive","endeavor","manufacture","yield","duplicate","assemble","mold","coin","physician","veterinarian","therapy","injection","dose","sanitation","germ","tumor","agony","disorder","plague","epidemic","diagnosis","mortality","chronic","immune","choke","paralyze","infect","prescribe","digest","weary","nourish","flesh","kidney","posture","limb","erect","compensate","flourish","abuse","bias","prestige","privilege","feat","dignity","virtue","aristocracy","rebel","scheme","convention","conference","consent","initiative","province","colony","frontier","tribe","primitive","ethnic","anonymous","coverage","obligation","norm","patent","entitled","donate","conform","comply","legislation","testimony","jury","legitimate","enforce","regime","bureaucracy","corruption","tyranny","sanction","census","candidate","senator","ambassador","diplomat","refugee","territory","ally","federal","feudal","communist","estate","asset","revenue","deficit","commerce","output","subsidy","monopoly","transaction","corporation","enterprise","venture","headquarters","personnel","expertise","quota","warehouse","toil","undertake","merge","comprise","component","framework","prototype","dimension","margin","relevant","compatible","correspond","identical","equivalent","random","warrior","assault","troop","torture","dispute","riot","persecution","dominate","slaughter","suppress","surrender","contend","hostile","wreck","toll","disrupt","interfere","confront","hinder","explode","collide","nephew","spouse","heir","folk","peer","proceed","navigate","roam","flee","retreat","crawl","drift","alter","convert","shrink","wither","transition","distortion","enhance","reinforce","foster","breakdown","collapse","render","impair","deteriorate","undermine","tackle","disposal","confine","designate","regulate","prohibit","refrain","curb","restrain","halt","animate","spur","urge","lure","stimulate","compel","dictate","blur","divert","reverse","supplement","pose","stroll","shrug","sniff","embrace","betray","deceive","bully","squeeze","insert","detach","withdraw","withstand","exert","compile","browse","manipulate","implement","execute","host","mount","discharge","drain","soak","suspend","extract","summon","embark","thrust","penetrate","intrude","evade","utilize","spin","plunge","rattle","vanish","cease","haste","conceal","disguise","coincide","prevail","sustain","linger","revive","resume","inspect","investigate","detect","discern","expedition","enroll","discipline","cram","faculty","tuition","diploma","mentor","ethic","astronomy","archaeologist","anthropologist","perceive","grasp","conceive","anticipate","foresee","speculate","infer","deduce","ponder","contemplate","assure","assess","evaluate","verify","compromise","reconcile","alert","stereotype","perspective","prospect","vow","intuition","illusion","criterion","tolerate","overlook","grain","drought","irrigation","spectacle","altitude","catastrophe","decay","erosion","flame","galaxy","meteor","chill","meadow","exploit","contaminate","erupt","evaporate","fertile","roar","inhabit","nurture","owl","instinct","prey","timber","fabric","textile","weave","competent","optimistic","patriotic","naughty","vigorous","solitary","vulgar","skeptical","haunt","obsessed","intent","indulge","cling","flaw","defect","trait","analogy","parallel","crucial","primary","integral","vital","profound","grim","fierce","harsh","savage","acute","ambiguous","obscure","misleading","straightforward","explicit","sophisticated","ingenious","decent","thrive","wit","affluent","elaborate","prompt","swift","mighty","renowned","dim","gloomy","barren","idle","tiresome","static","clumsy","ignorant","reckless","arbitrary","foul","shabby","monotonous","crude","fragile","vulnerable","rust","plight","conventional","innate","exotic","tame","solemn","manifest","dense","superficial","transparent","consistent","coherent","universal","upright","underlying","spontaneous","mock","liable","converse","preliminary","version","indigenous","decline","multiply","soar","accumulate","exceed","abundant","ample","gross","infinite","sole","heap","fraction","simultaneous","medieval","decade","dawn","span","expire","postpone","equip","transmit","endow","inherit","retrieve","displace","bond","ornament","certificate","accommodation","intersection","pavement","pedestrian","excursion","itinerary","token","detergent","purchase","dwell","juvenile","adolescent","initial","precede","phase","priority","premise","legend","masterpiece","ritual","worship","advent","swear","confess","verbal","oral","eloquent","linguistic","plot","draft","statement","paradox","slang","riddle","clarify","exhibit","portray","attribute","console","arouse","distract","plead","yearn","long","adore","utter","exclaim","lament","shed","resent","dread","startle","thrill","humiliate","blush","frown","dismay","bewilder","perplex","disgust","despise","furious","intimate","intriguing","conscience","self-esteem","mercy","aspiration","grief","distress","apprehension","melancholy","contempt","insult","nuisance","menace","verge","incentive","outcome","thorough","adequate","overall","ultimate","genuine","radical","drastic","trivial","virtually","abruptly","deliberately","hence","namely","whereas"]
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
  this.so = ' ';
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
   g.drawString(String(ranw), 150, 80);
   g.setTextSize(15);
   g.drawString("そろえた単語数" + String(cwo), 170, 125);
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
  let ch = Math.floor(Math.random() * 26) + 27;
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
    console.log("turn_start")
    for (let iy = 0; iy < 20; iy++) {
      for (let ix = 0; ix < 10; ix++) {
        if (cell[ix][iy] >= 27 && bool_t === 0) {
          if (ix !== cenx || iy !== ceny) {
            let disx = ix - cenx;
            let disy = iy - ceny;
            let dx = 1; 
            let dy = 1;
            for (let i = 0; i < t; i++) {
             dx = 1 * disy;
              dy = -1 * disx;
              disx = dx;
              disy = dy;
            }
            if (cenx + dx < 0 || cenx + dx > 9 || ceny + dy < 0 || ceny + dy > 19) {
              t = t + 1;
              bool_t = 1;
              console.log("ret1")
            } else {
              if (cell[cenx + dx][ceny + dy] === 0 || cell[cenx + dx][ceny + dy] >= 27) {
                celld[cenx + dx][ceny + dy] = cell[ix][iy];
              } else {
                t = t + 1;
                bool_t = 1;
                console.log("ret2")
              }
            }
          }
        }
      }
    }
  }
  console.log("trun_finish")
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
                  hi(word[w]);
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
                  hi(word[w]);
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
  r[9] = text;
  
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

