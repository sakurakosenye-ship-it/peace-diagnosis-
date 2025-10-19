// ===============================
// 質問リスト（例：10問）
// ===============================
const questions = [
  {
    question: "明日、世界が終わるとしたら…最後に会いたい人は？",
    choices: [
      { text: "自分の中で一番大切な人", type: "hero" },
      { text: "家族全員", type: "knight" },
      { text: "今の自分を応援してくれる人", type: "president" },
      { text: "まだ出会ってない“誰か”", type: "drifter" },
      { text: "1人で静かに過ごしたい", type: "cat" }
    ]
  },
  {
    question: "世界中で1つだけ禁止できるとしたら？",
    choices: [
      { text: "戦争や暴力", type: "architect" },
      { text: "差別や偏見", type: "researcher" },
      { text: "SNSの誹謗中傷", type: "influencer" },
      { text: "お金による格差", type: "saver" },
      { text: "働きすぎ", type: "performer" }
    ]
  },
  {
    question: "あなたが守りたい“小さなもの”は？",
    choices: [
      { text: "ペットや動物", type: "knight" },
      { text: "子ども", type: "hero" },
      { text: "植物・自然", type: "researcher" },
      { text: "趣味の時間", type: "cat" },
      { text: "自分の心", type: "saver" }
    ]
  },
  {
    question: "どんなときに「自分、いいな」って思う？",
    choices: [
      { text: "誰かの悩みに寄り添えたとき", type: "researcher" },
      { text: "好きなことに没頭してるとき", type: "cat" },
      { text: "堂々と発言できたとき", type: "president" },
      { text: "笑いを取れたとき", type: "performer" },
      { text: "そっと優しくできたとき", type: "knight" }
    ]
  },
  {
    question: "ピンチのとき、あなたの選択は？",
    choices: [
      { text: "落ち着いて考える", type: "architect" },
      { text: "助けを呼ぶ", type: "knight" },
      { text: "自分でなんとかする", type: "hero" },
      { text: "そっと逃げる", type: "drifter" },
      { text: "時間が過ぎるのを待つ", type: "cat" }
    ]
  },
  {
    question: "一生ひとつだけスキルを極められるなら？",
    choices: [
      { text: "人を癒す力", type: "cat" },
      { text: "自分を豊かにする知恵", type: "saver" },
      { text: "誰かを笑わせる話術", type: "performer" },
      { text: "世界を変える影響力", type: "president" },
      { text: "静かな場所を作る力", type: "architect" }
    ]
  },
  {
    question: "友達が泣いていたら、あなたは？",
    choices: [
      { text: "黙って隣に座る", type: "cat" },
      { text: "お茶を淹れて渡す", type: "saver" },
      { text: "一緒に泣く", type: "hero" },
      { text: "理由を聞いてアドバイス", type: "researcher" },
      { text: "気づかないふり（でも気になる）", type: "performer" }
    ]
  },
  {
    question: "子どものころの“理想の大人像”は？",
    choices: [
      { text: "スーパーヒーロー", type: "hero" },
      { text: "人を笑顔にする芸人さん", type: "performer" },
      { text: "知識にあふれた先生", type: "researcher" },
      { text: "自然と暮らす優しい人", type: "saver" },
      { text: "自分の時間を大切にしてる人", type: "cat" }
    ]
  },
  {
    question: "心から「平和だな〜」と思う瞬間は？",
    choices: [
      { text: "こたつでお茶とおやつ", type: "cat" },
      { text: "好きな人と並んで歩いてるとき", type: "knight" },
      { text: "知らない街を旅してるとき", type: "drifter" },
      { text: "SNSで共感コメントをもらったとき", type: "influencer" },
      { text: "誰とも会わずに寝てるとき", type: "saver" }
    ]
  },
  {
    question: "もしも1日だけ別の世界に行けるなら？",
    choices: [
      { text: "争いのないユートピア", type: "architect" },
      { text: "魔法が使える世界", type: "performer" },
      { text: "大切な人が戻ってくる世界", type: "hero" },
      { text: "静かな無人島", type: "cat" },
      { text: "全部忘れられる夢の中", type: "drifter" }
    ]
  }
];

// ===============================
// タイプ定義（完全版）
// ===============================
const types = {
  architect: {
    title: "戦争がない世界の設計士",
    caption: "“こうなったらいいな”を形にできる、平和のアイデア職人。",
    image: "assets/images/architect.png",
    sections: {
      detail: "あなたは理想を空想で終わらせず、仕組みやルールに落とし込んで現実にできる人。人と人との間に摩擦が生まれたときも、「どうすれば心地よく過ごせるか」を冷静に考え、未来図を描きながら解決へ導きます。誠実で責任感が強く、安心感を生み出す存在です。• 恋愛：一緒に未来図を描けること。言葉がすれ違っても、「ここを直そうね」と前向きに話し合える関係が理想。• 家族：感情よりも“仕組み”でつながる安心。居心地が悪いルールがあれば、制度ごと改善したいタイプ。• 友達：ただ盛り上がるだけでなく「もっと楽しくするには？」を一緒に考えられる仲間が心地いい。",
      action: "• 面倒な話し合いこそ、あなたの出番！誰も無理せず過ごせる“空間”や“ルール”を作り、理想を夢物語で終わらせず、ちゃんと現実に落とそう。",
      match: "ベストフレンドは「空の青さを知る研究家」。細やかな気づきがあなたの大きな設計を支えてくれます。ベストパートナーは「わんこを守る騎士」。守る優しさが、あなたの作る世界を実際に育ててくれます。"
    }
  },
  knight: {
    title: "わんこを守る騎士",
    caption: "“この子は、私が守る。”その優しさが世界をあたためる。",
    image: "assets/images/knight.png",
    sections: {
      detail: "あなたは“守るべき存在”があるとき、力を最大限に発揮する人。\n\n自分のことよりも周りの人や弱い立場の存在を優先し、平和で安心できる環境をつくろうとします。まっすぐで温かいその心は、人に深い信頼を与えます。\n\n• 恋愛：相手を全力で守ること。どんな困難も「一緒に立ち向かおう」と言える人に安心感を抱く。• 家族：家族の安全と幸せが最優先。小さな異変にも気づいて支える。• 友達：友達の悩みを真剣に受け止めて、必要なら代わりに戦ってでも守ろうとする。",
      action: "正義感を信じて行動することで、誰かの安心を守れる。しかし自分を犠牲にしすぎないことも大事。守る対象があるときにこそ、最大の力を発揮できます。",
      match: "ベストフレンドは「愛と恋人を守り抜く英雄」。あなたと同じ“守りたい心”を共有できる相手です。\n\nベストパートナーは「戦争がない世界の設計士」。理想を描く人を支えるあなたの力が大きな平和を作ります。"
    }
  },
  president: {
    title: "自分が一番幸せになれる国の大統領",
    caption: "“まず自分が幸せ”を堂々と掲げる、ポジティブリーダー。",
    image: "assets/images/president.png",
　　sections: {
   　 detail: "あなたはまず“自分自身が幸せであること”を大切にし、その状態こそが平和であると定義します。その幸せや楽しさが自然に周りに広がり、結果的にみんなを笑顔にできる人。自己肯定感が高く、堂々とした姿が周囲の安心を生み出します。• 恋愛：お互いが自分らしく幸せで平和にいられること。無理に合わせなくても尊重し合える関係。• 家族：家庭内で自分の楽しさをシェアし、場を明るくする。 • 友達：みんなが楽しめるように、まず自分が率先して笑顔を見せる。",
   　 action: "自分を満たすことが、平和の第一歩。「リーダーだからこそ、楽しく！」を忘れず、周りを引っ張るより“平和な場をあたためる”ことを意識してみて。",
   　 match: "ベストフレンドは「エブリデイ倹約家」。足元を固める堅実さがあなたを支えます。ベストパートナーは「世界中に笑顔を振りまくインフルエンサー」。一緒に明るさを広げられるコンビです。"
　  }
  },
  saver: {
    title: "エブリデイ倹約家",
    caption: "“あるもので幸せ”が美学の、平和の実践者。",
    image: "assets/images/saver.png",
　　sections: {
   　 detail: "あなたは派手さよりも“足るを知る心”を大切にする人。小さな幸せや身近な工夫に喜びを見つけ、周囲にも安心と落ち着きを与えます。質素だけど豊かな平和観を持っています。• 恋愛：高価なデートより、一緒に料理したり日常を楽しめる関係が理想。• 家族：無駄を省いて、居心地のいい暮らしをつくることが幸せ。• 友達：お金をかけなくても楽しく過ごせる仲間を大切にする。",
   　 action: "• 小さな幸せを大切にすると、周囲の心が安らぐのですから、倹約は“我慢”ではなく“工夫”として楽しみましょう。あなたの生活力が人を助けます。",
   　 match: "ベストフレンドは「英雄」。同じ地に足のついた姿勢を分かち合えます。ベストパートナーは「大統領」。あなたの安定が相手のエネルギーを支えます。"
　  }
  },
  influencer: {
    title: "世界中に笑顔を振りまくインフルエンサー",
    caption: "“楽しい”を伝えることがあなたの平和。",
    image: "assets/images/influencer.png",
　　sections: {
    　detail: "あなたは場を明るくする天才。小さな冗談やポジティブな言葉で、重たい空気を軽やかに変えてしまいます。人に元気を与え、平和の灯りを広げる存在です。• 恋愛：一緒に笑えることが一番。どんな困難も冗談に変えて乗り越えたい。• 家族：家族を笑わせて、重たい空気を吹き飛ばすのが得意。• 友達：友達の落ち込みを笑顔で和らげる。",
   　 action: "笑い声は最高の平和のツール。明るさを無理せず自然に発揮するのが魅力。悲しいときは、あなた自身も支えを頼っていいのです。",
   　 match: "ベストフレンドは「演者」。お互いの冗談やユーモアで支え合えます。ベストパートナーは「大統領」。ポジティブを拡散できる強力タッグ。"
　  }
  },
  researcher: {
    title: "空の青さを知る研究家",
    caption: "小さな気づきが世界を豊かにする、静かな観察者。",
    image: "assets/images/researcher.png",
　　sections: {
      detail: "あなたは細やかな観察力で、誰も気づかない小さな優しさや違和感を拾い上げる人。\真面目で繊細だけれど、その洞察力が周囲を安心に導きます。恋愛：相手の小さな変化に気づき、寄り添える関係が安心で平和を感じる。家族：家族の体調や気分にすぐ気づいて、支えたい。友達：友達の何気ない言葉を覚えていて、後から思いやりで返し、平和な空気を作る。",
      action: "小さな変化に敏感なあなたは、観察を言葉や形に残すと力になります。ただし、自分の心も観察して、休むことを忘れずに。",
      match: "ベストフレンドは「設計士」。細やかな気づきが理想を現実に落とします。ベストパートナーは「にゃんこ」。観察力と癒しで、穏やかな時間を築けます。"
　  }
  },
  hero: {
    title: "愛と恋人を守り抜く英雄",
    caption: "情熱で人を包み込み、強さと愛を持つ存在。",
    image: "assets/images/hero.png",
　　sections: {
    　detail: "あなたは心から愛する存在のために全力を尽くすことで平和を体現する人。\n\n 困難に立ち向かう勇気と、強い情熱を持ち合わせています。頼られることに喜びを感じるタイプ。恋愛：愛する人を全力で守りたい。強い情熱をもって支える。家族：家族が困っていたら、最前線に立って助ける。友達：大切な仲間を励まし、支え続ける。",
    　action: "勇気と行動力が武器。情熱は人を動かすけれど、燃え尽きないように自分の心も守ること。",
   　 match: "ベストフレンドは「騎士」。同じ“守りたい心”を共有できる仲間。ベストパートナーは「倹約家」。地に足のついた穏やかさがあなたを支える。"
　  }
  },
  cat: {
    title: "こたつの中のにゃんこ",
    caption: "“ぬくもり”の象徴。自分の時間を大切にする平和主義。",
    image: "assets/images/cat.png",
　　sections: {
   　 detail: "あなたは無理をせず、自分の居場所を大切にする人。安心できる空間でこそ力を発揮でき、周囲にも癒しを与え、平和なひとときを作ります。ほっとする存在で、人を自然と和ませます。• 恋愛：安心感を共有できる人と過ごす時間に価値を感じる。• 家族：居心地のいい家庭を一番大事にしたい。 •友達：無理せず自然体でいられる相手が心地いい。",
    　action: "自分のペースを守ることがあなたの武器。頑張らなくても、人を癒せる存在です。時には一歩外へ出て、新しい平和な風を取り入れるのもおすすめ。",
   　 match: "ベストフレンドは「研究家」。静かな時間を一緒に過ごせる相手。ベストパートナーは「設計士」。安全な居場所を一緒に作れる。"
　  }
  },
  drifter: {
    title: "夢を追う流浪者",
    caption: "縛られずに自由を求める、心の旅人。",
    image: "assets/images/drifter.png",
　　sections: {
    　detail: "あなたは型にはまらず、直感や感覚を大事に平和を形作る人。変化を恐れず、新しい平和の景色を探し求めます。その自由さは、周囲に可能性を思い出させます。 • 恋愛：一緒に冒険できる相手が理想。束縛は苦手。• 家族：家族にも自由を与えたい。お互いを尊重するという平和な関係。• 友達：常識に縛られない自由な話ができる友人が心地いい。",
    　action: "自由はあなたの原動力。迷いながらも進むことで、新しい平和を見つけられます。時には立ち止まって振り返るのも大事。",
   　 match: "ベストフレンドは「にゃんこ」。無理をしない存在が安心をくれます。ベストパートナーは「インフルエンサー」。自由な旅に明るさを添えてくれます。"
　  }
  },
  performer: {
    title: "心を踊らせる演者",
    caption: "場を盛り上げ、笑顔を引き出す表現者。",
    image: "assets/images/performer.png",
　　sections: {
    　detail: "あなたは人前に立ち、明るさで場を照らす人。笑いや驚きを届けて、誰もが平和と思える空気に変えることができます。大胆でありながらも、相手の反応を気にかける繊細さも持っています。• 恋愛：一緒に楽しめることが大事。サプライズ好き。• 家族：家族の笑顔を引き出すムードメーカー。• 友達：どんな場も明るくしてくれる中心人物。",
   　 action: "笑顔は人を救う力。無理に笑わせる必要はなく、自然体で表現を楽しんで。",
   　 match: "ベストフレンドは「インフルエンサー」。冗談で支え合える相手。 ベストパートナーは「英雄」。あなたの平和で楽しい舞台を後ろから支えてくれる存在です。"
　  }
  }
};

// ===============================
// 質問の流れ
// ===============================
let currentQuestion = 0;
let answers = [];

function showQuestion() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";

  if (currentQuestion < questions.length) {
    const q = questions[currentQuestion];

    const h2 = document.createElement("h2");
    h2.textContent = q.question;
    container.appendChild(h2);

    const choiceDiv = document.createElement("div");
    choiceDiv.classList.add("choices");

    q.choices.forEach((choice) => {
      const btn = document.createElement("button");
      btn.textContent = choice.text;

      btn.addEventListener("click", () => {
        answers.push(choice.type);

        const buttons = choiceDiv.querySelectorAll("button");
        buttons.forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");

        setTimeout(() => {
          currentQuestion++;
          showQuestion();
        }, 600);
      });

      choiceDiv.appendChild(btn);
    });

    container.appendChild(choiceDiv);

    // 戻るボタンの表示切替
    const backBtn = document.getElementById("back-button");
    if (currentQuestion > 0) {
      backBtn.style.display = "block";
    } else {
      backBtn.style.display = "none";
    }

  } else {
    showResult();
  }
}

function showResult() {

  const quizContainer = document.getElementById("quiz-container");
  const resultContainer = document.getElementById("result-container");

  quizContainer.classList.add("hidden");
  resultContainer.classList.remove("hidden");

  // 戻るボタンは非表示
  document.getElementById("back-button").style.display = "none";

  // ===== 集計 =====
  const count = {};
  answers.forEach(type => {
    count[type] = (count[type] || 0) + 1;
  });

  let finalType = Object.keys(count).reduce(
    (a, b) => (count[a] > count[b] ? a : b),
    Object.keys(count)[0]
  );

  const result = types[finalType];

  document.getElementById("result-title").textContent = result.title;
  document.getElementById("result-caption").textContent = result.caption;
  document.getElementById("result-image").src = result.image;

  // sections の中から出す
  document.getElementById("result-detail").textContent = result.sections.detail;
  document.getElementById("result-action").textContent = result.sections.action;
  document.getElementById("result-match").textContent = result.sections.match;
  }

function restartQuiz() {
  currentQuestion = 0;
  answers = [];

  document.getElementById("result-container").classList.add("hidden");
  document.getElementById("quiz-container").classList.remove("hidden");

  showQuestion();  // 最初の質問を表示
}

// ===============================
// SNSシェア機能
// ===============================

// Xでシェア
document.getElementById("share-x").addEventListener("click", () => {
  const text = "小さな平和タイプ診断をやってみた！";
  const url = window.location.href;
  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, "_blank");
});

// Instagramは直接シェアできないので案内
document.getElementById("share-insta").addEventListener("click", () => {
  alert("Instagramには直接シェアできません💦 スクショして投稿してね📷✨");
});

function shareLine() {
  const url = location.href; // 今のページのURL
  const shareUrl = "https://social-plugins.line.me/lineit/share?url=" + encodeURIComponent(url);
  window.open(shareUrl, "_blank");
}

document.getElementById("share-line").addEventListener("click", shareLine);

// リンクコピー
document.getElementById("copy-url").addEventListener("click", () => {
  navigator.clipboard.writeText(window.location.href).then(() => {
    alert("URLをコピーしました！");
  });
});


// -----------------------------
// 戻るボタン：確実に存在させて、イベントをセットするユーティリティ
// -----------------------------
function ensureBackButton() {
  let btn = document.getElementById("back-button");
  if (!btn) {
    // なければ作る（重複防止のため id を使って管理）
    btn = document.createElement("button");
    btn.id = "back-button";
    btn.className = "back-button";
    btn.textContent = "← 戻る";
    btn.style.display = "none"; // 初期は非表示
    document.body.appendChild(btn);
    console.log("back-button created");
  }
  return btn;
}

// 確保してイベントを登録（複数回呼んでもaddEventListenerが二重登録されないように一度だけ登録）
const _backBtn = ensureBackButton();
if (!_backBtn._listenerAdded) {
  _backBtn.addEventListener("click", () => {
    console.log("back-button clicked, currentQuestion:", currentQuestion);
    if (currentQuestion > 0) {
      currentQuestion--;
      answers.pop();
      showQuestion();
    }
  });
  _backBtn._listenerAdded = true;
}

// showQuestion の中で必ずこの関数を呼ぶようにする（既に showQuestion 内で表示切替がある場合は置き換え可）
function updateBackButtonVisibility() {
  const btn = ensureBackButton();
  // 診断中（1問目以外かつまだ結果ページに行っていない）なら表示
  const isQuizActive = (typeof currentQuestion === "number") && (currentQuestion > 0) && (currentQuestion < questions.length);
  btn.style.display = isQuizActive ? "block" : "none";
  // スタイルの安全策（右下固定・他要素より上）
  btn.style.position = "fixed";
  btn.style.bottom = "20px";
  btn.style.right = "20px";
  btn.style.zIndex = "9999";
  // 見えない場合はデバッグ
  console.log("updateBackButtonVisibility:", isQuizActive, "btn:", btn);
}

// showQuestion の先頭か末尾に必ず呼ぶ（既に内部で表示切替している箇所があれば、そちらをコメントアウトしてこの関数を呼ぶ）
/* 例:
function showQuestion() {
  ...
  container.appendChild(choiceDiv);
  updateBackButtonVisibility(); // ← ここを呼ぶ
  ...
}
*/

// また、結果表示（showResult）の中でも非表示確保
// （もし showResult を上書きしているなら以下1行を showResult の中へ移動）
document.addEventListener("DOMContentLoaded", () => {
  // ページロード時に1回更新（スクリプトがいつ実行されても安全にする）
  updateBackButtonVisibility();
});

// もし既に showQuestion の中で backBtn を操作しているなら、そちらを削除して
// この updateBackButtonVisibility() を呼ぶように置き換えると重複が無くなります。

window.onload = showQuestion;