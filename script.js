// 問題データを定義
const quizData = [
    // 第九条
    {
        question: "【第九条】\n1. 日本国民は、正義と秩序を基調とする国際平和を誠実に希求し、国権の発動たる戦争と、武力による威嚇又は武力の行使は、`[ 　 ]`を解決する手段としては、永久にこれを放棄する。\n2. 前項の目的を達するため、陸海空軍その他の戦力は、これを保持しない。国の交戦権は、これを認めない。",
        choices: ["国際紛争", "国内問題", "経済摩擦", "安全保障問題"],
        answer: "国際紛争",
        explanation: "9条1項は「国際紛争」を解決する手段としての戦争を放棄しています。"
    },
    {
        question: "【第九条】\n1. 日本国民は、正義と秩序を基調とする国際平和を誠実に希求し、国権の発動たる戦争と、武力による威嚇又は武力の行使は、国際紛争を解決する手段としては、永久にこれを放棄する。\n2. 前項の目的を達するため、陸海空軍その他の戦力は、これを保持しない。国の`[ 　 ]`は、これを認めない。",
        choices: ["交戦権", "自衛権", "統帥権", "警察権"],
        answer: "交戦権",
        explanation: "9条2項は戦力の不保持と共に「交戦権」を否認しています。"
    },
    // 第十条
    {
        question: "【第十条】\n日本国民たる要件は、`[ 　 ]`でこれを定める。",
        choices: ["法律", "政令", "条例", "憲法"],
        answer: "法律",
        explanation: "国籍に関する要件は国会が定める「法律」（国籍法）で規定されます。"
    },
    // 第十一条
    {
        question: "【第十一条】\n国民は、すべての基本的人権の享有を妨げられない。この憲法が国民に保障する基本的人権は、侵すことのできない`[ 　 ]`として、現在及び将来の国民に与へられる。",
        choices: ["永久の権利", "不可侵の権利", "天賦の権利", "自然権"],
        answer: "永久の権利",
        explanation: "11条の条文上の表現は「永久の権利」です。他の選択肢は思想的背景ですが、条文の文言そのものを問う問題です。"
    },
    // 第十二条
    {
        question: "【第十二条】\nこの憲法が国民に保障する自由及び権利は、国民の`[ 　 ]`によつて、これを保持しなければならない。又、国民は、これを濫用してはならないのであつて、常に公共の福祉のためにこれを利用する責任を負ふ。",
        choices: ["不断の努力", "誠実な対話", "遵法精神", "相互の協力"],
        answer: "不断の努力",
        explanation: "12条は、人権は与えられて終わりではなく、国民自身の「不断の努力」で守り続けるべきものだと示しています。"
    },
    // 第十三条
    {
        question: "【第十三条】\nすべて国民は、`[ 　 ]`として尊重される。生命、自由及び幸福追求に対する国民の権利については、公共の福祉に反しない限り、立法その他の国政の上で、最大の尊重を必要とする。",
        choices: ["個人", "国民", "人間", "臣民"],
        answer: "個人",
        explanation: "13条は、一人ひとりがかけがえのない「個人」として尊重されることを示しています。「国民」は国家の構成員、「臣民」は旧憲法の用語です。"
    },
    // 第十四条
    {
        question: "【第十四条】\n1. すべて国民は、`[ 　 ]`の下に平等であつて、人種、信条、性別、社会的身分又は門地により、政治的、経済的又は社会的関係において、差別されない。\n（2項以下略）",
        choices: ["法", "神", "国家", "人"],
        answer: "法",
        explanation: "14条は「法の下の平等」を定めています。全ての人が法的に平等に扱われることを意味します。"
    },
    {
        question: "【第十四条】\n1. すべて国民は、法の下に平等であつて、人種、信条、性別、社会的身分又は`[ 　 ]`により、政治的、経済的又は社会的関係において、差別されない。\n（2項以下略）",
        choices: ["門地", "財産", "職業", "学歴"],
        answer: "門地",
        explanation: "14条に列挙されている差別理由は「人種、信条、性別、社会的身分又は門地」です。「門地」とは家柄や家格を意味します。"
    },
    // 第十五条
    {
        question: "【第十五条】\n1. `[ 　 ]`を選定し、及びこれを罷免することは、国民固有の権利である。\n（2項以下略）",
        choices: ["公務員", "議員", "大臣", "裁判官"],
        answer: "公務員",
        explanation: "15条は「公務員」全般の選定・罷免権が国民にあることを定めています。"
    },
    {
        question: "【第十五条】\n（1項略）\n2. すべて公務員は、`[ 　 ]`であつて、一部の奉仕者ではない。\n（3項以下略）",
        choices: ["全体の奉仕者", "国民の代表", "国家の機関", "行政の専門家"],
        answer: "全体の奉仕者",
        explanation: "15条2項は、公務員が特定の一部ではなく「全体の奉仕者」であることを明確にしています。"
    },
    // 第十六条
    {
        question: "【第十六条】\n何人も、損害の救済、公務員の罷免、法律、命令又は規則の制定、廃止又は改正その他の事項に関し、平穏に`[ 　 ]`する権利を有し、何人も、かかる請願をしたためにいかなる差別待遇も受けない。",
        choices: ["請願", "請求", "異議", "陳情"],
        answer: "請願",
        explanation: "16条で保障されているのは「請願権」です。裁判所への訴え（請求）などとは区別されます。"
    },
    // 第十七条
    {
        question: "【第十七条】\n何人も、公務員の`[ 　 ]`により、損害を受けたときは、法律の定めるところにより、国又は公共団体に、その賠償を求めることができる。",
        choices: ["不法行為", "職務怠慢", "不当な処分", "権力濫用"],
        answer: "不法行為",
        explanation: "17条は、公務員の「不法行為」に対する国の賠償責任（国家賠償責任）を定めています。"
    },
    // 第十八条
    {
        question: "【第十八条】\n何人も、いかなる`[ 　 ]`も受けない。又、犯罪に因る処罰の場合を除いては、その意に反する苦役に服させられない。",
        choices: ["奴隷的拘束", "強制労働", "不当な拘束", "人身売買"],
        answer: "奴隷的拘束",
        explanation: "18条の条文で明確に禁止されているのは「奴隷的拘束」です。"
    },
    // 第十九条
    {
        question: "【第十九条】\n`[ 　 ]`は、これを侵してはならない。",
        choices: ["思想及び良心の自由", "表現の自由", "信教の自由", "プライバシーの権利"],
        answer: "思想及び良心の自由",
        explanation: "19条が保障するのは内心の自由である「思想及び良心の自由」です。"
    },
    // 第二十条
    {
        question: "【第二十条】\n1. `[ 　 ]`は、何人に対してもこれを保障する。いかなる宗教団体も、国から特権を受け、又は政治上の権力を行使してはならない。\n（2項以下略）",
        choices: ["信教の自由", "思想の自由", "政教分離", "信仰の権利"],
        answer: "信教の自由",
        explanation: "20条1項は「信教の自由」を保障しています。"
    },
    {
        question: "【第二十条】\n（1-2項略）\n3. 国及びその機関は、`[ 　 ]`その他いかなる宗教的活動もしてはならない。",
        choices: ["宗教教育", "布教活動", "宗教儀式", "政治介入"],
        answer: "宗教教育",
        explanation: "20条3項（政教分離）では、国による「宗教教育」などが禁じられています。"
    },
    // 第二十一～三十条も同様に作成
    {
        question: "【第二十一条】\n1. 集会、結社及び言論、出版その他一切の`[ 　 ]`は、これを保障する。\n2. 検閲は、これをしてはならない。通信の秘密は、これを侵してはならない。",
        choices: ["表現の自由", "知る権利", "政治活動", "報道の自由"],
        answer: "表現の自由"
    },
    {
        question: "【第二十一条】\n（1項略）\n2. `[ 　 ]`は、これをしてはならない。通信の秘密は、これを侵してはならない。",
        choices: ["検閲", "事前抑制", "報道規制", "司法審査"],
        answer: "検閲"
    },
    {
        question: "【第二十二条】\n1. 何人も、公共の福祉に反しない限り、居住、移転及び`[ 　 ]`を有する。\n2. 何人も、外国に移住し、又は国籍を離脱する自由を侵されない。",
        choices: ["職業選択の自由", "営業の自由", "契約の自由", "勤労の権利"],
        answer: "職業選択の自由"
    },
    {
        question: "【第二十二条】\n（1項略）\n2. 何人も、外国に移住し、又は`[ 　 ]`する自由を侵されない。",
        choices: ["国籍を離脱", "永住権を取得", "亡命を申請", "外国に移住"],
        answer: "国籍を離脱"
    },
    {
        question: "【第二十三条】\n`[ 　 ]`は、これを保障する。",
        choices: ["学問の自由", "研究の自由", "教授の自由", "教育の自由"],
        answer: "学問の自由"
    },
    {
        question: "【第二十四条】\n1. 婚姻は、`[ 　 ]`のみに基いて成立し、夫婦が同等の権利を有することを基本として、相互の協力により、維持されなければならない。\n（2項略）",
        choices: ["両性の合意", "個人の尊厳", "親権者の同意", "戸籍法の届出"],
        answer: "両性の合意"
    },
    {
        question: "【第二十四条】\n（1項略）\n2. …法律は、`[ 　 ]`と両性の本質的平等に立脚して、制定されなければならない。",
        choices: ["個人の尊厳", "家の存続", "公共の福祉", "両性の平等"],
        answer: "個人の尊厳"
    },
    {
        question: "【第二十五条】\n1. すべて国民は、健康で文化的な`[ 　 ]`を営む権利を有する。\n（2項略）",
        choices: ["最低限度の生活", "平均的な生活", "安定した生活", "文化的な生活"],
        answer: "最低限度の生活"
    },
    {
        question: "【第二十五条】\n（1項略）\n2. 国は、すべての生活部面について、社会福祉、`[ 　 ]`及び公衆衛生の向上及び増進に努めなければならない。",
        choices: ["社会保障", "医療制度", "雇用対策", "生活保護"],
        answer: "社会保障"
    },
    {
        question: "【第二十六条】\n1. すべて国民は、法律の定めるところにより、その`[ 　 ]`に応じて、ひとしく教育を受ける権利を有する。\n（2項略）",
        choices: ["能力", "希望", "年齢", "財産"],
        answer: "能力"
    },
    {
        question: "【第二十六条】\n（1項略）\n2. …その保護する子女に普通教育を受けさせる義務を負ふ。`[ 　 ]`は、これを無償とする。",
        choices: ["義務教育", "普通教育", "公教育", "高等教育"],
        answer: "義務教育"
    },
    {
        question: "【第二十七条】\n1. すべて国民は、勤労の`[ 　 ]`を有し、`[ 　 ]`を負ふ。\n（2項以下略）",
        choices: ["権利・義務", "義務・権利", "自由・責任", "権利・責任"],
        answer: "権利・義務"
    },
    {
        question: "【第二十七条】\n（1-2項略）\n3. `[ 　 ]`は、これを酷使してはならない。",
        choices: ["児童", "未成年者", "勤労者", "女性"],
        answer: "児童"
    },
    {
        question: "【第二十八条】\n勤労者の団結する権利、`[ 　 ]`及びその他の団体行動をする権利は、これを保障する。",
        choices: ["団体交渉をする権利", "ストライキをする権利", "賃上げを要求する権利", "労働条件を決定する権利"],
        answer: "団体交渉をする権利"
    },
    {
        question: "【第二十九条】\n（1項略）\n2. 財産権の内容は、`[ 　 ]`に適合するやうに、法律でこれを定める。\n（3項略）",
        choices: ["公共の福祉", "国家の利益", "市場経済", "個人の尊厳"],
        answer: "公共の福祉"
    },
    {
        question: "【第二十九条】\n（1-2項略）\n3. 私有財産は、`[ 　 ]`の下に、これを公共のために用ひることができる。",
        choices: ["正当な補償", "相当な対価", "事前の協議", "法律の定め"],
        answer: "正当な補償"
    },
    {
        question: "【第三十条】\n国民は、法律の定めるところにより、`[ 　 ]`の義務を負ふ。",
        choices: ["納税", "勤労", "防衛", "奉仕"],
        answer: "納税"
    }
];


// ---- ここから下のJavaScriptは変更不要です ----

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const questionNumberEl = document.getElementById('question-number');
const progressBar = document.getElementById('progress-bar');
const questionTextEl = document.getElementById('question-text');
const choicesContainer = document.getElementById('choices-container');

const scoreTextEl = document.getElementById('score-text');
const messageTextEl = document.getElementById('message-text');
const wrongAnswersContainer = document.getElementById('wrong-answers-container');

let currentQuestionIndex = 0;
let score = 0;
let wrongAnswers = [];

// 配列をシャッフルする関数 (Fisher-Yatesアルゴリズム)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startQuiz() {
    // 問題をシャッフル
    shuffle(quizData);
    currentQuestionIndex = 0;
    score = 0;
    wrongAnswers = [];
    wrongAnswersContainer.innerHTML = '<h3>間違えた問題の確認</h3>';
    
    startScreen.style.display = 'none';
    resultScreen.style.display = 'none';
    quizScreen.style.display = 'block';
    
    loadQuestion();
}

function loadQuestion() {
    choicesContainer.innerHTML = '';
    const currentQuestion = quizData[currentQuestionIndex];
    
    questionNumberEl.textContent = `第 ${currentQuestionIndex + 1} 問 / ${quizData.length}`;
    progressBar.style.width = `${((currentQuestionIndex + 1) / quizData.length) * 100}%`;
    
    // questionTextの改行を<br>に変換し、プレースホルダーを装飾
    questionTextEl.innerHTML = currentQuestion.question
        .replace(/\n/g, '<br>')
        .replace('`[ 　 ]`', '<span style="color: #c62828; font-weight: bold; background-color: #fff9c4; padding: 2px 4px; border-radius: 4px;">[ 　 ]</span>');

    // 選択肢をシャッフル
    const shuffledChoices = [...currentQuestion.choices];
    shuffle(shuffledChoices);

    shuffledChoices.forEach(choice => {
        const choiceButton = document.createElement('div');
        choiceButton.classList.add('choice');
        // 権利・義務のような選択肢を整形
        choiceButton.textContent = choice.replace('・', '・');
        choiceButton.onclick = () => selectAnswer(choice);
        choicesContainer.appendChild(choiceButton);
    });
}

function selectAnswer(selectedChoice) {
    const currentQuestion = quizData[currentQuestionIndex];
    const isCorrect = selectedChoice === currentQuestion.answer;
    const choiceButtons = document.querySelectorAll('.choice');

    if (isCorrect) {
        score++;
        choiceButtons.forEach(button => {
            if (button.textContent === selectedChoice) {
                button.classList.add('correct');
            }
        });
    } else {
        choiceButtons.forEach(button => {
            if (button.textContent === selectedChoice) {
                button.classList.add('wrong');
            }
            if (button.textContent === currentQuestion.answer) {
                button.classList.add('correct');
            }
        });
        wrongAnswers.push({
            question: currentQuestion.question,
            yourAnswer: selectedChoice,
            correctAnswer: currentQuestion.answer,
            explanation: currentQuestion.explanation
        });
    }

    choiceButtons.forEach(button => button.classList.add('disabled'));

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            showResult();
        }
    }, 1500);
}

function showResult() {
    quizScreen.style.display = 'none';
    resultScreen.style.display = 'block';

    const percentage = Math.round((score / quizData.length) * 100);
    scoreTextEl.textContent = `正解数: ${score} / ${quizData.length} (${percentage}%)`;

    if (percentage === 100) {
        messageTextEl.textContent = "素晴らしい！全問正解です！完璧な理解度です。";
    } else if (percentage >= 80) {
        messageTextEl.textContent = "おしい！あと少しで完璧です。間違えた問題を確認しましょう。";
    } else if (percentage >= 50) {
        messageTextEl.textContent = "よく頑張りました。復習して知識を定着させましょう。";
    } else {
        messageTextEl.textContent = "まだまだ伸びしろがありますね。間違えた問題をしっかり確認しましょう。";
    }
    
    // 解説にexplanationを追加（もしあれば）
    if (wrongAnswers.length > 0) {
        wrongAnswers.forEach(item => {
            const itemEl = document.createElement('div');
            itemEl.classList.add('wrong-answer-item');
            const explanationHTML = item.explanation ? `<p><strong>解説:</strong> ${item.explanation}</p>` : '';
            itemEl.innerHTML = `
                <p class="question">${item.question.replace(/\n/g, '<br>')}</p>
                <p><strong>あなたの回答:</strong> ${item.yourAnswer.replace('・', '・')}</p>
                <p class="answer"><strong>正解:</strong> ${item.correctAnswer.replace('・', '・')}</p>
                ${explanationHTML}
            `;
            wrongAnswersContainer.appendChild(itemEl);
        });
    } else {
        wrongAnswersContainer.innerHTML = '<h3>全問正解です！</h3>';
    }
}
// 初回ロード時にstartQuizを呼ばず、ボタンクリックを待つように修正
// ただし、もしHTML側にonclick="startQuiz()"がない場合は、ここで呼び出す必要がある。
// 今回のHTMLにはあるので、このままでOK。