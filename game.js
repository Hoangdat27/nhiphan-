/* ============================================
   BINARY TREE MASTER - GAME LOGIC
   ============================================ */

// ============================================
// DATA: Quiz Questions
// ============================================
const quizQuestions = [
    // Category: Định nghĩa cây
    {
        category: "Định nghĩa cây",
        question: "Cây (Tree) là cấu trúc dữ liệu thuộc loại nào?",
        answers: ["Cấu trúc dữ liệu phi tuyến tính", "Cấu trúc dữ liệu tuyến tính", "Cấu trúc dữ liệu ngẫu nhiên", "Cấu trúc dữ liệu song song"],
        correct: 0,
        explanation: "Cây là cấu trúc dữ liệu phi tuyến tính (non-linear), các phần tử được tổ chức theo quan hệ phân cấp (cha – con)."
    },
    {
        category: "Định nghĩa cây",
        question: "Cây rỗng (empty tree) là gì?",
        answers: ["Cây không có node nào", "Cây chỉ có 1 node", "Cây có tất cả node lá", "Cây cân bằng hoàn toàn"],
        correct: 0,
        explanation: "Cây rỗng là cây không chứa bất kỳ node (nút) nào, thường được biểu diễn bằng NULL."
    },
    {
        category: "Định nghĩa cây",
        question: "Một cây không rỗng gồm những thành phần gì?",
        answers: ["Một node gốc (root) và các cây con (subtree)", "Chỉ có các node lá", "Một danh sách liên kết", "Một mảng các phần tử"],
        correct: 0,
        explanation: "Cây không rỗng bao gồm một node gốc (root) và 0 hoặc nhiều cây con (subtree) không giao nhau."
    },

    // Category: Khái niệm liên quan đến cây
    {
        category: "Khái niệm về cây",
        question: "Node gốc (root) của cây là gì?",
        answers: ["Node không có node cha", "Node không có node con", "Node ở cuối cây", "Node có nhiều con nhất"],
        correct: 0,
        explanation: "Node gốc (root) là node duy nhất trong cây không có node cha (parent). Nó là điểm bắt đầu của cây."
    },
    {
        category: "Khái niệm về cây",
        question: "Node lá (leaf) là node như thế nào?",
        answers: ["Node không có node con", "Node không có node cha", "Node có đúng 2 con", "Node ở mức đầu tiên"],
        correct: 0,
        explanation: "Node lá (leaf/external node) là node không có bất kỳ node con nào."
    },
    {
        category: "Khái niệm về cây",
        question: "Bậc (degree) của một node là gì?",
        answers: ["Số cây con (subtree) của node đó", "Chiều cao của node", "Số node cha của node đó", "Số node anh em"],
        correct: 0,
        explanation: "Bậc (degree) của node là số cây con trực tiếp của node đó. Ví dụ node có 3 con thì bậc bằng 3."
    },
    {
        category: "Khái niệm về cây",
        question: "Chiều cao (height) của cây được tính như thế nào?",
        answers: ["Mức lớn nhất của node lá trong cây", "Số node trong cây", "Số cạnh trong cây", "Bậc của node gốc"],
        correct: 0,
        explanation: "Chiều cao của cây bằng mức (level) lớn nhất của các node lá. Nếu gốc ở mức 0 thì height = max(level(leaf))."
    },
    {
        category: "Khái niệm về cây",
        question: "Mức (level) của node gốc thường được quy ước bằng bao nhiêu?",
        answers: ["0 hoặc 1 (tùy quy ước)", "Luôn bằng 0", "Luôn bằng 1", "Bằng chiều cao của cây"],
        correct: 0,
        explanation: "Mức của node gốc có thể quy ước bằng 0 hoặc 1 tùy theo sách/giáo trình. Mức của node con = mức node cha + 1."
    },

    // Category: Biểu diễn cây trên bộ nhớ
    {
        category: "Biểu diễn cây",
        question: "Cây nhị phân có thể biểu diễn bằng cấu trúc nào?",
        answers: ["Mảng hoặc danh sách liên kết", "Chỉ mảng", "Chỉ danh sách liên kết", "Stack"],
        correct: 0,
        explanation: "Cây nhị phân có thể biểu diễn bằng mảng (array) hoặc con trỏ/tham chiếu (linked representation)."
    },
    {
        category: "Biểu diễn cây",
        question: "Khi biểu diễn cây nhị phân bằng mảng, node con trái của node ở vị trí i nằm ở đâu?",
        answers: ["Vị trí 2*i + 1", "Vị trí 2*i", "Vị trí i + 1", "Vị trí i/2"],
        correct: 0,
        explanation: "Với index bắt đầu từ 0: con trái ở 2*i+1, con phải ở 2*i+2. Với index từ 1: con trái ở 2*i, con phải ở 2*i+1."
    },

    // Category: Khai báo cấu trúc dữ liệu cây nhị phân
    {
        category: "Cấu trúc dữ liệu",
        question: "Một node trong cây nhị phân liên kết (linked) thường chứa những trường nào?",
        answers: ["Data, con trỏ trái (left), con trỏ phải (right)", "Data, con trỏ next", "Data, con trỏ prev, con trỏ next", "Chỉ có data"],
        correct: 0,
        explanation: "Mỗi node cây nhị phân kiểu liên kết gồm: vùng dữ liệu (data), con trỏ đến cây con trái (left) và con trỏ đến cây con phải (right)."
    },
    {
        category: "Cấu trúc dữ liệu",
        question: 'Trong C, khai báo <code>struct Node { int data; Node *left, *right; };</code> đại diện cho cấu trúc gì?',
        answers: ["Node của cây nhị phân", "Node của danh sách liên kết đôi", "Node của đồ thị", "Node của hàng đợi"],
        correct: 0,
        explanation: "Khai báo có 2 con trỏ left và right chính là cấu trúc node chuẩn của cây nhị phân liên kết."
    },

    // Category: Thao tác với cây nhị phân
    {
        category: "Thao tác cây nhị phân",
        question: "Duyệt cây theo thứ tự NLR (Preorder) nghĩa là gì?",
        answers: ["Gốc → Trái → Phải", "Trái → Gốc → Phải", "Trái → Phải → Gốc", "Phải → Gốc → Trái"],
        correct: 0,
        explanation: "NLR (Preorder): Thăm Node gốc (N), duyệt cây con trái (L), rồi duyệt cây con phải (R)."
    },
    {
        category: "Thao tác cây nhị phân",
        question: "Duyệt cây theo thứ tự LNR (Inorder) nghĩa là gì?",
        answers: ["Trái → Gốc → Phải", "Gốc → Trái → Phải", "Trái → Phải → Gốc", "Phải → Trái → Gốc"],
        correct: 0,
        explanation: "LNR (Inorder): Duyệt cây con trái (L), thăm Node gốc (N), rồi duyệt cây con phải (R)."
    },
    {
        category: "Thao tác cây nhị phân",
        question: "Duyệt cây theo thứ tự LRN (Postorder) nghĩa là gì?",
        answers: ["Trái → Phải → Gốc", "Gốc → Trái → Phải", "Trái → Gốc → Phải", "Phải → Gốc → Trái"],
        correct: 0,
        explanation: "LRN (Postorder): Duyệt cây con trái (L), duyệt cây con phải (R), rồi thăm Node gốc (N)."
    },
    {
        category: "Thao tác cây nhị phân",
        question: "Đếm số node trong cây nhị phân dùng đệ quy có công thức nào?",
        answers: ["count(T) = 1 + count(T.left) + count(T.right)", "count(T) = count(T.left) + count(T.right)", "count(T) = 2 * count(T.left)", "count(T) = height(T) + 1"],
        correct: 0,
        explanation: "Số node = 1 (node hiện tại) + số node cây con trái + số node cây con phải. Cây rỗng trả về 0."
    },

    // Category: Cây nhị phân tìm kiếm (BST)
    {
        category: "Cây nhị phân tìm kiếm",
        question: "Tính chất quan trọng nhất của cây nhị phân tìm kiếm (BST) là gì?",
        answers: ["Node trái < Gốc < Node phải", "Node trái > Gốc > Node phải", "Tất cả node cùng mức bằng nhau", "Luôn cân bằng hoàn toàn"],
        correct: 0,
        explanation: "BST: Mọi node ở cây con trái < node gốc, mọi node ở cây con phải > node gốc (đệ quy cho mọi cây con)."
    },
    {
        category: "Cây nhị phân tìm kiếm",
        question: "Khi duyệt LNR (Inorder) cây BST, ta được kết quả gì?",
        answers: ["Dãy giá trị tăng dần", "Dãy giá trị giảm dần", "Dãy ngẫu nhiên", "Dãy theo thứ tự chèn"],
        correct: 0,
        explanation: "Duyệt LNR cây BST sẽ cho kết quả là dãy các giá trị được sắp xếp tăng dần. Đây là tính chất đặc biệt và quan trọng của BST."
    },
    {
        category: "Cây nhị phân tìm kiếm",
        question: "Độ phức tạp trung bình khi tìm kiếm trong BST là bao nhiêu?",
        answers: ["O(log n)", "O(n)", "O(1)", "O(n²)"],
        correct: 0,
        explanation: "Trung bình mỗi lần so sánh loại bỏ một nửa số node, nên độ phức tạp trung bình là O(log n). Trường hợp xấu nhất (cây suy biến) là O(n)."
    },
    {
        category: "Cây nhị phân tìm kiếm",
        question: "Khi xóa một node có 2 con trong BST, thường thay thế bằng node nào?",
        answers: ["Node lớn nhất cây con trái hoặc nhỏ nhất cây con phải", "Node gốc", "Node lá gần nhất", "Node cha"],
        correct: 0,
        explanation: "Thay bằng phần tử trực tiếp lớn nhất bên trái (predecessor) hoặc nhỏ nhất bên phải (successor) để giữ tính chất BST."
    },
];

// ============================================
// DATA: Match Pairs
// ============================================
const matchPairs = [
    { term: "Node gốc (Root)", definition: "Node không có node cha, đỉnh cao nhất của cây" },
    { term: "Node lá (Leaf)", definition: "Node không có node con nào" },
    { term: "Bậc (Degree)", definition: "Số cây con trực tiếp của một node" },
    { term: "Chiều cao (Height)", definition: "Mức lớn nhất của các node trong cây" },
    { term: "Cây con (Subtree)", definition: "Một cây bao gồm node và toàn bộ hậu duệ của nó" },
    { term: "Node cha (Parent)", definition: "Node có liên kết trực tiếp xuống node khác" },
    { term: "Node con (Child)", definition: "Node được liên kết trực tiếp từ node phía trên" },
    { term: "Node anh em (Sibling)", definition: "Các node có cùng node cha" },
    { term: "BST", definition: "Cây nhị phân với node trái < gốc < node phải" },
    { term: "Preorder (NLR)", definition: "Duyệt: Gốc → Trái → Phải" },
    { term: "Inorder (LNR)", definition: "Duyệt: Trái → Gốc → Phải" },
    { term: "Postorder (LRN)", definition: "Duyệt: Trái → Phải → Gốc" },
    { term: "Đường đi (Path)", definition: "Dãy các node liên tiếp từ node này đến node khác" },
    { term: "Cây nhị phân đầy đủ", definition: "Mọi node đều có 0 hoặc 2 con" },
    { term: "Cây nhị phân hoàn chỉnh", definition: "Tất cả các mức đều đầy, trừ mức cuối lấp từ trái sang" },
];

// ============================================
// STATE
// ============================================
let currentScreen = 'main-menu';
let currentGameMode = null;
let lastGameMode = null;

// Quiz state
let quizState = {
    questions: [],
    currentIndex: 0,
    score: 0,
    correctCount: 0,
    totalAnswered: 0,
};

// BST state
let bstState = {
    tree: null,
    insertValue: 0,
    score: 0,
    round: 0,
    maxRounds: 8,
    correctCount: 0,
};

// Traversal state
let traversalState = {
    tree: null,
    traversalType: 'NLR',
    correctOrder: [],
    userOrder: [],
    score: 0,
    round: 0,
    maxRounds: 9,
    correctCount: 0,
    nodeValues: [],
};

// Match state
let matchState = {
    pairs: [],
    selectedTerm: null,
    selectedDef: null,
    matchedCount: 0,
    totalPairs: 0,
    score: 0,
    round: 0,
    maxRounds: 5,
    correctCount: 0,
};

// Persistent stats
let stats = JSON.parse(localStorage.getItem('btm_stats') || '{"highScore":0,"totalPlays":0,"totalCorrect":0,"totalQuestions":0}');

// ============================================
// UTILITY
// ============================================
function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    currentScreen = id;
}

function goHome() {
    showScreen('main-menu');
    updateStatsDisplay();
}

function updateStatsDisplay() {
    document.getElementById('high-score').textContent = stats.highScore;
    document.getElementById('total-plays').textContent = stats.totalPlays;
    const accuracy = stats.totalQuestions > 0 ? Math.round(stats.totalCorrect / stats.totalQuestions * 100) : 0;
    document.getElementById('accuracy').textContent = accuracy + '%';
}

function saveStats() {
    localStorage.setItem('btm_stats', JSON.stringify(stats));
}

// ============================================
// NAVIGATION
// ============================================
function startGame(mode) {
    currentGameMode = mode;
    lastGameMode = mode;
    switch (mode) {
        case 'quiz': initQuiz(); break;
        case 'bst': initBST(); break;
        case 'traversal': initTraversal(); break;
        case 'match': initMatch(); break;
    }
}

function replayGame() {
    if (lastGameMode) startGame(lastGameMode);
}

// ============================================
// QUIZ MODE
// ============================================
function initQuiz() {
    const shuffled = shuffleArray(quizQuestions);
    quizState = {
        questions: shuffled.slice(0, 10),
        currentIndex: 0,
        score: 0,
        correctCount: 0,
        totalAnswered: 0,
    };
    document.getElementById('quiz-score').textContent = '0';
    document.getElementById('quiz-progress').style.width = '0%';
    showScreen('quiz-screen');
    renderQuizQuestion();
}

function renderQuizQuestion() {
    const q = quizState.questions[quizState.currentIndex];
    document.getElementById('question-num').textContent = `Câu ${quizState.currentIndex + 1}/${quizState.questions.length}`;
    document.getElementById('q-category').textContent = q.category;
    document.getElementById('question-text').innerHTML = q.question;
    document.getElementById('quiz-feedback').innerHTML = '';

    const labels = ['A', 'B', 'C', 'D'];
    // Shuffle answers while tracking correct index
    const answerIndices = [0, 1, 2, 3];
    const shuffledIndices = shuffleArray(answerIndices);
    const newCorrect = shuffledIndices.indexOf(q.correct);

    const container = document.getElementById('answers-container');
    container.innerHTML = '';
    shuffledIndices.forEach((origIdx, displayIdx) => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.innerHTML = `<span class="answer-label">${labels[displayIdx]}</span><span>${q.answers[origIdx]}</span>`;
        btn.onclick = () => handleQuizAnswer(btn, displayIdx, newCorrect, q.explanation, container);
        container.appendChild(btn);
    });

    const progress = ((quizState.currentIndex) / quizState.questions.length) * 100;
    document.getElementById('quiz-progress').style.width = progress + '%';
}

function handleQuizAnswer(btn, selected, correct, explanation, container) {
    const buttons = container.querySelectorAll('.answer-btn');
    buttons.forEach(b => b.classList.add('disabled'));

    quizState.totalAnswered++;

    if (selected === correct) {
        btn.classList.add('correct');
        quizState.score += 10;
        quizState.correctCount++;
        document.getElementById('quiz-score').textContent = quizState.score;
        document.getElementById('quiz-feedback').innerHTML = `
            <div class="feedback-text correct">✅ Chính xác! +10 điểm</div>
            <div class="feedback-text">${explanation}</div>
        `;
    } else {
        btn.classList.add('wrong');
        buttons[correct].classList.add('correct');
        document.getElementById('quiz-feedback').innerHTML = `
            <div class="feedback-text wrong">❌ Sai rồi!</div>
            <div class="feedback-text">${explanation}</div>
        `;
    }

    setTimeout(() => {
        quizState.currentIndex++;
        if (quizState.currentIndex < quizState.questions.length) {
            renderQuizQuestion();
        } else {
            showResults(quizState.score, quizState.correctCount, quizState.questions.length, 'quiz');
        }
    }, 2500);
}

// ============================================
// BST BUILDER MODE
// ============================================
class BSTNode {
    constructor(value, x = 0, y = 0) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.x = x;
        this.y = y;
    }
}

function generateBSTTree() {
    // Create a random small BST for challenges
    const values = [];
    const count = 4 + Math.floor(Math.random() * 3); // 4-6 nodes
    const pool = shuffleArray(Array.from({ length: 50 }, (_, i) => i + 1));
    for (let i = 0; i < count; i++) values.push(pool[i]);
    
    let root = null;
    for (const v of values) {
        root = insertBST(root, v);
    }

    // Pick a value to insert that isn't already in
    let newVal;
    do {
        newVal = Math.floor(Math.random() * 50) + 1;
    } while (values.includes(newVal));

    return { root, newVal };
}

function insertBST(root, value) {
    if (!root) return new BSTNode(value);
    if (value < root.value) root.left = insertBST(root.left, value);
    else root.right = insertBST(root.right, value);
    return root;
}

function layoutBST(root, canvasWidth, canvasHeight) {
    if (!root) return;
    const topMargin = 60;
    const levelHeight = 70;
    
    function layout(node, x, y, spread) {
        if (!node) return;
        node.x = x;
        node.y = y;
        if (node.left) layout(node.left, x - spread, y + levelHeight, spread * 0.55);
        if (node.right) layout(node.right, x + spread, y + levelHeight, spread * 0.55);
    }
    
    layout(root, canvasWidth / 2, topMargin, canvasWidth * 0.22);
}

function findInsertPositions(root, value) {
    // Returns possible positions (both correct and distractors)
    const positions = [];
    const correctPos = { x: 0, y: 0, side: '' };

    function findCorrect(node, parentX, parentY, spread) {
        if (!node) return;
        if (value < node.value) {
            if (!node.left) {
                correctPos.x = node.x - spread * 0.55;
                correctPos.y = node.y + 70;
                correctPos.side = 'left';
                correctPos.parentValue = node.value;
            } else {
                findCorrect(node.left, node.x, node.y, spread * 0.55);
            }
        } else {
            if (!node.right) {
                correctPos.x = node.x + spread * 0.55;
                correctPos.y = node.y + 70;
                correctPos.side = 'right';
                correctPos.parentValue = node.value;
            } else {
                findCorrect(node.right, node.x, node.y, spread * 0.55);
            }
        }
    }

    // Calculate initial spread from canvas
    const canvas = document.getElementById('bst-canvas');
    findCorrect(root, canvas.width / 2, 60, canvas.width * 0.22);

    // Generate wrong positions from null children of other nodes
    function findNulls(node, spread) {
        if (!node) return;
        if (!node.left) {
            const px = node.x - spread * 0.55;
            const py = node.y + 70;
            if (Math.abs(px - correctPos.x) > 10 || Math.abs(py - correctPos.y) > 10) {
                positions.push({ x: px, y: py, correct: false, parentValue: node.value, side: 'left' });
            }
        }
        if (!node.right) {
            const px = node.x + spread * 0.55;
            const py = node.y + 70;
            if (Math.abs(px - correctPos.x) > 10 || Math.abs(py - correctPos.y) > 10) {
                positions.push({ x: px, y: py, correct: false, parentValue: node.value, side: 'right' });
            }
        }
        if (node.left) findNulls(node.left, spread * 0.55);
        if (node.right) findNulls(node.right, spread * 0.55);
    }

    findNulls(root, canvas.width * 0.22);
    positions.push({ ...correctPos, correct: true });

    return positions;
}

function drawBSTTree(canvas, root, highlightNode) {
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    
    canvas.width = 900 * dpr;
    canvas.height = 500 * dpr;
    canvas.style.width = '900px';
    canvas.style.height = '500px';
    ctx.scale(dpr, dpr);
    
    ctx.clearRect(0, 0, 900, 500);

    if (!root) return;

    layoutBST(root, 900, 500);

    // Draw edges
    function drawEdges(node) {
        if (!node) return;
        ctx.strokeStyle = 'rgba(99, 102, 241, 0.3)';
        ctx.lineWidth = 2;
        if (node.left) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(node.left.x, node.left.y);
            ctx.stroke();
            drawEdges(node.left);
        }
        if (node.right) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(node.right.x, node.right.y);
            ctx.stroke();
            drawEdges(node.right);
        }
    }
    drawEdges(root);

    // Draw nodes
    function drawNodes(node) {
        if (!node) return;
        const isHighlight = highlightNode && node.value === highlightNode;
        
        // Glow
        if (isHighlight) {
            ctx.shadowColor = 'rgba(16, 185, 129, 0.6)';
            ctx.shadowBlur = 20;
        } else {
            ctx.shadowColor = 'rgba(99, 102, 241, 0.3)';
            ctx.shadowBlur = 10;
        }

        // Circle
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 22);
        if (isHighlight) {
            gradient.addColorStop(0, '#10b981');
            gradient.addColorStop(1, '#059669');
        } else {
            gradient.addColorStop(0, '#6366f1');
            gradient.addColorStop(1, '#4f46e5');
        }
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 22, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowBlur = 0;

        // Text
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 16px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(node.value, node.x, node.y);

        drawNodes(node.left);
        drawNodes(node.right);
    }
    drawNodes(root);
}

function initBST() {
    bstState = {
        tree: null,
        insertValue: 0,
        score: 0,
        round: 0,
        maxRounds: 8,
        correctCount: 0,
    };
    document.getElementById('bst-score').textContent = '0';
    showScreen('bst-screen');
    newBSTChallenge();
}

function newBSTChallenge() {
    if (bstState.round >= bstState.maxRounds) {
        showResults(bstState.score, bstState.correctCount, bstState.maxRounds, 'bst');
        return;
    }

    bstState.round++;
    const { root, newVal } = generateBSTTree();
    bstState.tree = root;
    bstState.insertValue = newVal;

    document.getElementById('bst-insert-value').textContent = newVal;
    document.getElementById('bst-feedback').textContent = `Câu ${bstState.round}/${bstState.maxRounds}`;
    document.getElementById('bst-next-btn').classList.add('hidden');

    const canvas = document.getElementById('bst-canvas');
    drawBSTTree(canvas, root);

    // Create click zones
    const positions = findInsertPositions(root, newVal);
    const zonesDiv = document.getElementById('bst-click-zones');
    zonesDiv.innerHTML = '';

    const canvasRect = canvas.getBoundingClientRect();
    const scaleX = canvasRect.width / 900;
    const scaleY = canvasRect.height / 500;

    positions.forEach((pos, idx) => {
        const zone = document.createElement('div');
        zone.className = 'bst-zone';
        zone.style.left = (pos.x * scaleX - 25) + 'px';
        zone.style.top = (pos.y * scaleY - 25) + 'px';
        zone.textContent = '?';
        zone.onclick = () => handleBSTClick(zone, pos, positions);
        zonesDiv.appendChild(zone);
    });
}

function handleBSTClick(zone, pos, allPositions) {
    // Disable all zones
    document.querySelectorAll('.bst-zone').forEach(z => z.style.pointerEvents = 'none');

    if (pos.correct) {
        zone.classList.add('correct-zone');
        zone.textContent = bstState.insertValue;
        bstState.score += 15;
        bstState.correctCount++;
        document.getElementById('bst-score').textContent = bstState.score;
        document.getElementById('bst-feedback').innerHTML = `<span style="color:var(--accent-green)">✅ Chính xác! ${bstState.insertValue} ${pos.side === 'left' ? '<' : '>'} ${pos.parentValue}, nên chèn vào bên ${pos.side === 'left' ? 'trái' : 'phải'} của ${pos.parentValue}. +15 điểm</span>`;

        // Also insert into tree and redraw
        insertBST(bstState.tree, bstState.insertValue);
        const canvas = document.getElementById('bst-canvas');
        drawBSTTree(canvas, bstState.tree, bstState.insertValue);
    } else {
        zone.classList.add('wrong-zone');
        // Highlight correct
        const correctZone = document.querySelectorAll('.bst-zone');
        allPositions.forEach((p, i) => {
            if (p.correct && correctZone[i]) {
                correctZone[i].classList.add('correct-zone');
                correctZone[i].textContent = bstState.insertValue;
            }
        });
        document.getElementById('bst-feedback').innerHTML = `<span style="color:var(--accent-red)">❌ Sai! Vị trí đúng là bên ${allPositions.find(p => p.correct).side === 'left' ? 'trái' : 'phải'} của node ${allPositions.find(p => p.correct).parentValue}.</span>`;
    }

    document.getElementById('bst-next-btn').classList.remove('hidden');
}

// ============================================
// TRAVERSAL MODE
// ============================================
function generateTraversalTree() {
    // Create a small binary tree (not necessarily BST)
    const values = shuffleArray(Array.from({ length: 7 }, (_, i) => (i + 1) * 10)); // 10,20,30...70
    const picked = values.slice(0, 5 + Math.floor(Math.random() * 2)); // 5-6 nodes

    // Build as BST for simplicity of layout
    let root = null;
    for (const v of picked) {
        root = insertBST(root, v);
    }
    return root;
}

function getTraversalOrder(root, type) {
    const result = [];
    function preorder(node) {
        if (!node) return;
        result.push(node.value);
        preorder(node.left);
        preorder(node.right);
    }
    function inorder(node) {
        if (!node) return;
        inorder(node.left);
        result.push(node.value);
        inorder(node.right);
    }
    function postorder(node) {
        if (!node) return;
        postorder(node.left);
        postorder(node.right);
        result.push(node.value);
    }

    switch (type) {
        case 'NLR': preorder(root); break;
        case 'LNR': inorder(root); break;
        case 'LRN': postorder(root); break;
    }
    return result;
}

function getAllNodeValues(root) {
    const values = [];
    function collect(node) {
        if (!node) return;
        values.push(node.value);
        collect(node.left);
        collect(node.right);
    }
    collect(root);
    return values;
}

function drawTraversalTree(canvas, root) {
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;

    canvas.width = 700 * dpr;
    canvas.height = 350 * dpr;
    canvas.style.width = '700px';
    canvas.style.height = '350px';
    ctx.scale(dpr, dpr);

    ctx.clearRect(0, 0, 700, 350);

    if (!root) return;

    layoutBST(root, 700, 350);

    // Draw edges
    function drawEdges(node) {
        if (!node) return;
        ctx.strokeStyle = 'rgba(99, 102, 241, 0.3)';
        ctx.lineWidth = 2;
        if (node.left) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(node.left.x, node.left.y);
            ctx.stroke();
            drawEdges(node.left);
        }
        if (node.right) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(node.right.x, node.right.y);
            ctx.stroke();
            drawEdges(node.right);
        }
    }
    drawEdges(root);

    // Draw nodes
    function drawNodes(node) {
        if (!node) return;

        ctx.shadowColor = 'rgba(99, 102, 241, 0.3)';
        ctx.shadowBlur = 10;

        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 24);
        gradient.addColorStop(0, '#6366f1');
        gradient.addColorStop(1, '#4f46e5');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 24, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowBlur = 0;

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 16px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(node.value, node.x, node.y);

        // Labels for children
        if (node.left || node.right) {
            ctx.font = '11px Inter, sans-serif';
            ctx.fillStyle = 'rgba(148, 163, 184, 0.6)';
            if (node.left) ctx.fillText('L', node.x - 15, node.y - 30);
            if (node.right) ctx.fillText('R', node.x + 15, node.y - 30);
        }

        drawNodes(node.left);
        drawNodes(node.right);
    }
    drawNodes(root);
}

function initTraversal() {
    traversalState = {
        tree: null,
        traversalType: 'NLR',
        correctOrder: [],
        userOrder: [],
        score: 0,
        round: 0,
        maxRounds: 9,
        correctCount: 0,
        nodeValues: [],
    };
    document.getElementById('traversal-score').textContent = '0';
    showScreen('traversal-screen');
    newTraversalChallenge();
}

function newTraversalChallenge() {
    if (traversalState.round >= traversalState.maxRounds) {
        showResults(traversalState.score, traversalState.correctCount, traversalState.maxRounds, 'traversal');
        return;
    }

    traversalState.round++;
    const types = ['NLR', 'LNR', 'LRN'];
    const typeNames = {
        'NLR': 'NLR (Tiền tự - Preorder)',
        'LNR': 'LNR (Trung tự - Inorder)',
        'LRN': 'LRN (Hậu tự - Postorder)',
    };
    const hints = {
        'NLR': 'Gốc → Trái → Phải',
        'LNR': 'Trái → Gốc → Phải',
        'LRN': 'Trái → Phải → Gốc',
    };

    // Cycle through types: 3 rounds each
    const type = types[(traversalState.round - 1) % 3];
    traversalState.traversalType = type;

    const tree = generateTraversalTree();
    traversalState.tree = tree;
    traversalState.correctOrder = getTraversalOrder(tree, type);
    traversalState.userOrder = [];
    traversalState.nodeValues = shuffleArray(getAllNodeValues(tree));

    document.getElementById('traversal-type').textContent = typeNames[type];
    document.getElementById('traversal-hint').textContent = `Gợi ý: ${hints[type]}`;
    document.getElementById('traversal-feedback').textContent = `Câu ${traversalState.round}/${traversalState.maxRounds}`;
    document.getElementById('traversal-next-btn').classList.add('hidden');
    document.querySelector('.traversal-controls .btn-primary:not(#traversal-next-btn)').classList.remove('hidden');
    document.querySelector('.traversal-controls .btn-secondary').classList.remove('hidden');

    const canvas = document.getElementById('traversal-canvas');
    drawTraversalTree(canvas, tree);

    renderTraversalButtons();
    renderSelectedNodes();
}

function renderTraversalButtons() {
    const container = document.getElementById('node-buttons');
    container.innerHTML = '';
    traversalState.nodeValues.forEach((val, idx) => {
        const btn = document.createElement('button');
        btn.className = 'node-btn';
        if (traversalState.userOrder.includes(val)) btn.classList.add('used');
        btn.textContent = val;
        btn.onclick = () => selectTraversalNode(val, idx);
        container.appendChild(btn);
    });
}

function selectTraversalNode(val, idx) {
    if (traversalState.userOrder.includes(val)) return;
    traversalState.userOrder.push(val);
    renderTraversalButtons();
    renderSelectedNodes();
}

function renderSelectedNodes() {
    const container = document.getElementById('selected-nodes');
    if (traversalState.userOrder.length === 0) {
        container.innerHTML = '<span class="placeholder-text">Click các node theo thứ tự duyệt...</span>';
        return;
    }
    container.innerHTML = traversalState.userOrder.map((val, i) => {
        let html = `<span class="selected-node">${val}</span>`;
        if (i < traversalState.userOrder.length - 1) html += '<span class="selected-arrow">→</span>';
        return html;
    }).join('');
}

function clearTraversalAnswer() {
    traversalState.userOrder = [];
    renderTraversalButtons();
    renderSelectedNodes();
}

function checkTraversalAnswer() {
    const correct = traversalState.correctOrder;
    const user = traversalState.userOrder;

    if (user.length !== correct.length) {
        document.getElementById('traversal-feedback').innerHTML = `<span style="color:var(--accent-amber)">⚠️ Hãy chọn đủ ${correct.length} node!</span>`;
        return;
    }

    const isCorrect = correct.every((v, i) => v === user[i]);

    if (isCorrect) {
        traversalState.score += 15;
        traversalState.correctCount++;
        document.getElementById('traversal-score').textContent = traversalState.score;
        document.getElementById('traversal-feedback').innerHTML = `<span style="color:var(--accent-green)">✅ Chính xác! +15 điểm</span>`;
    } else {
        document.getElementById('traversal-feedback').innerHTML = `<span style="color:var(--accent-red)">❌ Sai! Đáp án đúng: ${correct.join(' → ')}</span>`;
    }

    // Disable buttons
    document.querySelectorAll('.node-btn').forEach(b => b.classList.add('used'));
    document.querySelector('.traversal-controls .btn-primary:not(#traversal-next-btn)').classList.add('hidden');
    document.querySelector('.traversal-controls .btn-secondary').classList.add('hidden');
    document.getElementById('traversal-next-btn').classList.remove('hidden');
}

// ============================================
// MATCH MODE
// ============================================
function initMatch() {
    matchState = {
        pairs: [],
        selectedTerm: null,
        selectedDef: null,
        matchedCount: 0,
        totalPairs: 0,
        score: 0,
        round: 0,
        maxRounds: 5,
        correctCount: 0,
        totalAttempts: 0,
    };
    document.getElementById('match-score').textContent = '0';
    showScreen('match-screen');
    nextMatchRound();
}

function nextMatchRound() {
    if (matchState.round >= matchState.maxRounds) {
        showResults(matchState.score, matchState.correctCount, matchState.totalAttempts, 'match');
        return;
    }

    matchState.round++;
    // Pick 3 random pairs per round
    const shuffled = shuffleArray(matchPairs);
    const roundPairs = shuffled.slice(0, 3);
    matchState.pairs = roundPairs;
    matchState.matchedCount = 0;
    matchState.totalPairs = roundPairs.length;
    matchState.selectedTerm = null;
    matchState.selectedDef = null;

    document.getElementById('match-round').textContent = `Vòng ${matchState.round}/${matchState.maxRounds}`;
    document.getElementById('match-feedback').textContent = '';
    document.getElementById('match-next-btn').classList.add('hidden');

    renderMatchBoard();
}

function renderMatchBoard() {
    const termsCol = document.getElementById('match-terms');
    const defsCol = document.getElementById('match-definitions');
    const svg = document.getElementById('match-svg');

    termsCol.innerHTML = '';
    defsCol.innerHTML = '';
    svg.innerHTML = '';

    const shuffledTerms = shuffleArray([...matchState.pairs]);
    const shuffledDefs = shuffleArray([...matchState.pairs]);

    shuffledTerms.forEach((pair, i) => {
        const item = document.createElement('div');
        item.className = 'match-item term';
        item.id = `term-${i}`;
        item.dataset.pairTerm = pair.term;
        item.innerHTML = `${pair.term}<span class="dot"></span>`;
        item.onclick = () => selectMatchItem('term', i, pair.term);
        termsCol.appendChild(item);
    });

    shuffledDefs.forEach((pair, i) => {
        const item = document.createElement('div');
        item.className = 'match-item definition';
        item.id = `def-${i}`;
        item.dataset.pairTerm = pair.term; // for matching
        item.innerHTML = `<span class="dot"></span>${pair.definition}`;
        item.onclick = () => selectMatchItem('def', i, pair.term);
        defsCol.appendChild(item);
    });
}

function selectMatchItem(type, index, pairTerm) {
    const el = document.getElementById(`${type === 'term' ? 'term' : 'def'}-${index}`);
    
    if (el.classList.contains('matched-correct')) return;

    if (type === 'term') {
        // Deselect previous term
        document.querySelectorAll('.match-item.term.selected').forEach(e => e.classList.remove('selected'));
        el.classList.add('selected');
        matchState.selectedTerm = { index, pairTerm, el };
    } else {
        // Deselect previous def
        document.querySelectorAll('.match-item.definition.selected').forEach(e => e.classList.remove('selected'));
        el.classList.add('selected');
        matchState.selectedDef = { index, pairTerm, el };
    }

    // Check if both selected
    if (matchState.selectedTerm && matchState.selectedDef) {
        checkMatchPair();
    }
}

function checkMatchPair() {
    const term = matchState.selectedTerm;
    const def = matchState.selectedDef;
    matchState.totalAttempts++;

    if (term.pairTerm === def.pairTerm) {
        // Correct match
        term.el.classList.remove('selected');
        def.el.classList.remove('selected');
        term.el.classList.add('matched-correct');
        def.el.classList.add('matched-correct');
        matchState.matchedCount++;
        matchState.score += 10;
        matchState.correctCount++;
        document.getElementById('match-score').textContent = matchState.score;

        // Draw line between matched
        drawMatchLine(term.el, def.el, true);

        if (matchState.matchedCount === matchState.totalPairs) {
            document.getElementById('match-feedback').innerHTML = `<span style="color:var(--accent-green)">🎉 Hoàn thành vòng ${matchState.round}!</span>`;
            document.getElementById('match-next-btn').classList.remove('hidden');
        }
    } else {
        // Wrong match
        term.el.classList.add('matched-wrong');
        def.el.classList.add('matched-wrong');
        document.getElementById('match-feedback').innerHTML = `<span style="color:var(--accent-red)">❌ Không khớp! Thử lại.</span>`;

        setTimeout(() => {
            term.el.classList.remove('matched-wrong', 'selected');
            def.el.classList.remove('matched-wrong', 'selected');
            document.getElementById('match-feedback').textContent = '';
        }, 800);
    }

    matchState.selectedTerm = null;
    matchState.selectedDef = null;
}

function drawMatchLine(termEl, defEl, correct) {
    const svg = document.getElementById('match-svg');
    const board = document.querySelector('.match-board');
    const boardRect = board.getBoundingClientRect();
    
    const termRect = termEl.getBoundingClientRect();
    const defRect = defEl.getBoundingClientRect();

    const x1 = termRect.right - boardRect.left;
    const y1 = termRect.top + termRect.height / 2 - boardRect.top;
    const x2 = defRect.left - boardRect.left;
    const y2 = defRect.top + defRect.height / 2 - boardRect.top;

    svg.setAttribute('width', boardRect.width);
    svg.setAttribute('height', boardRect.height);

    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', x1);
    line.setAttribute('y1', y1);
    line.setAttribute('x2', x2);
    line.setAttribute('y2', y2);
    line.setAttribute('stroke', correct ? 'rgba(16, 185, 129, 0.5)' : 'rgba(239, 68, 68, 0.5)');
    line.setAttribute('stroke-width', '2');
    line.setAttribute('stroke-dasharray', '6,3');
    svg.appendChild(line);
}

function resetMatchSelection() {
    document.querySelectorAll('.match-item.selected').forEach(e => e.classList.remove('selected'));
    matchState.selectedTerm = null;
    matchState.selectedDef = null;
}

// ============================================
// RESULTS
// ============================================
function showResults(score, correct, total, mode) {
    stats.totalPlays++;
    stats.totalCorrect += correct;
    stats.totalQuestions += total;
    if (score > stats.highScore) stats.highScore = score;
    saveStats();

    const percent = Math.round((correct / total) * 100);
    let icon, title;
    if (percent >= 90) { icon = '🏆'; title = 'Xuất sắc!'; }
    else if (percent >= 70) { icon = '🌟'; title = 'Giỏi lắm!'; }
    else if (percent >= 50) { icon = '👍'; title = 'Khá tốt!'; }
    else { icon = '💪'; title = 'Cần cố gắng thêm!'; }

    document.getElementById('result-icon').textContent = icon;
    document.getElementById('result-title').textContent = title;
    document.getElementById('result-score-text').textContent = percent + '%';

    // Animate ring
    const ring = document.getElementById('score-ring-fill');
    const circumference = 2 * Math.PI * 54;
    ring.style.strokeDasharray = circumference;
    ring.style.strokeDashoffset = circumference;

    // Add SVG gradient if not exists
    const svg = document.querySelector('.score-ring');
    if (!svg.querySelector('#ringGradient')) {
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
        gradient.setAttribute('id', 'ringGradient');
        const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop1.setAttribute('offset', '0%');
        stop1.setAttribute('stop-color', '#6366f1');
        const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop2.setAttribute('offset', '100%');
        stop2.setAttribute('stop-color', '#06b6d4');
        gradient.appendChild(stop1);
        gradient.appendChild(stop2);
        defs.appendChild(gradient);
        svg.insertBefore(defs, svg.firstChild);
    }

    setTimeout(() => {
        ring.style.strokeDashoffset = circumference - (circumference * percent / 100);
    }, 100);

    document.getElementById('result-stats').innerHTML = `
        <div class="result-stat">
            <div class="result-stat-value">${correct}/${total}</div>
            <div class="result-stat-label">Câu đúng</div>
        </div>
        <div class="result-stat">
            <div class="result-stat-value">${score}</div>
            <div class="result-stat-label">Tổng điểm</div>
        </div>
        <div class="result-stat">
            <div class="result-stat-value">${stats.highScore}</div>
            <div class="result-stat-label">Điểm cao nhất</div>
        </div>
    `;

    showScreen('result-screen');
}

// ============================================
// INIT
// ============================================
updateStatsDisplay();
