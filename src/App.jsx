import React, { useState } from 'react';

export default function App() {
  const questions = [
    { id: 1, text: '予定や計画よりも、その場の状況に応じて活動内容が変わることがある' },
    { id: 2, text: '活動の流れは事前に共有された計画を基準に進むことが多い' },
    { id: 3, text: '子どもの発見や興味から、計画にはない活動に広がることがある' },

    { id: 4, text: '子ども全体あるいは集団への関わりが多い' },
    { id: 5, text: '集団としての子どもに働きかけるより、個別に関わることが多い' },
    { id: 6, text: '異なる年齢の子ども同士の関わりが、日常の保育の中で大きな比重を占めている' },
    { id: 16, text: '子どもの関わる相手や集団は、固定されず流動的に変わることが多い' },

    { id: 7, text: 'クラスのみんなで一斉に活動を行う場面がある' },
    { id: 8, text: '複数の活動が同時に進むことがある' },
    { id: 9, text: '活動の選択を子ども自身が決める場面がある' },
    { id: 17, text: '活動の区切りや切り替えは、職員が決めることが多い' },

    { id: 10, text: '遊びの中で自然物（砂・水・葉・土など）を用いることがある' },
    { id: 11, text: '教材や構造化された遊具を中心に活動が組み立てられることがある' },
    {
      id: 12,
      text: 'ICT機器や人工的・構造化された素材（教材・ブロック・パズル・既製遊具など、用途や遊び方がある程度定まったもの）を使う活動がある',
    },

    { id: 13, text: 'うまくいくか分からない方法でも試してみることがある' },
    { id: 14, text: '職員は、想定通りに進まない場合でもやり方を変えることへの抵抗が少ない' },
    { id: 18, text: '職員は、試行錯誤を前提に保育や活動を進めることがある' },
    { id: 15, text: '新しい提案は、誰の提案であっても取り入れられることがある' },
  ];

  const typeData = {
    forest: {
      name: '🌳 森のたんけん型',
      description: 'その場の状況や子どもの発見から、活動が柔軟に広がっていく園です。',
      words: ['発見', '遊び', '自然', '即興'],
    },
    hidamari: {
      name: '☀️ ひだまり型',
      description: '個々の子どもとの関わりや安定した関係性を大切にする園です。',
      words: ['ぬくもり', '関わり', '安心', '個別'],
    },
    festival: {
      name: '🎪 おまつり職人型',
      description: '集団で動く力や園全体の一体感が表れやすい園です。',
      words: ['一体感', '協働', '行事', '集団'],
    },
    rocket: {
      name: '🚀 ロケット挑戦型',
      description: '新しい方法や提案を取り入れながら、試行錯誤して進む園です。',
      words: ['挑戦', '工夫', '変化', '実験'],
    },
    satoyama: {
      name: '🌿 里山くらし型',
      description: '自然や暮らしの中で、落ち着いた育ちを積み重ねる園です。',
      words: ['自然', '暮らし', '積み重ね', '安定'],
    },
    design: {
      name: '🧩 デザイン工房型',
      description: '計画や教材、環境構成を活かして保育を組み立てる園です。',
      words: ['設計', '教材', '計画', '構成'],
    },
    hiroba: {
      name: '🏡 ひろば型',
      description: '年齢や集団が固定されすぎず、多様な関わりが生まれやすい園です。',
      words: ['行き来', '関係', 'まざりあい', 'ひろがり'],
    },
    komorebi: {
      name: '🌲 木もれび型',
      description: '一つの方向に偏りすぎず、状況に応じてしなやかに保育を組み立てる園です。',
      words: ['調和', 'しなやか', '場づくり', 'ほどよさ'],
    },
  };

  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const reverse = (value) => 6 - value;
  const get = (id) => answers[id] || 3;

  const handleAnswer = (id, value) => {
    setAnswers({
      ...answers,
      [id]: Number(value),
    });
  };

  const generateCopy = (main, sub) => {
    const mainWord = typeData[main].words[0];
    const subWord = typeData[sub].words[0];

    return `「${mainWord}と${subWord}が重なり合う園」`;
  };

  const diagnose = () => {
    const q1 = get(1);
    const q2 = get(2);
    const q3 = get(3);
    const q4 = get(4);
    const q5 = get(5);
    const q6 = get(6);
    const q7 = get(7);
    const q8 = get(8);
    const q9 = get(9);
    const q10 = get(10);
    const q11 = get(11);
    const q12 = get(12);
    const q13 = get(13);
    const q14 = get(14);
    const q15 = get(15);
    const q16 = get(16);
    const q17 = get(17);
    const q18 = get(18);

    const improv = q1 + reverse(q2) + q3;
    const plan = reverse(q1) + q2 + reverse(q3);

    const relational = q5 + q6 + q16 + reverse(q4);
    const group = q4 + reverse(q5) + reverse(q6) + reverse(q16);

    const free = reverse(q7) + q8 + q9 + reverse(q17);
    const control = q7 + reverse(q8) + reverse(q9) + q17;

    const nature = q10 + reverse(q11) + reverse(q12);
    const artificial = reverse(q10) + q11 + q12;

    const trial = q13 + q14 + q18 + q15;
    const stable = reverse(q13) + reverse(q14) + reverse(q18) + reverse(q15);

    const axisScores = {
      improv,
      plan,
      relational,
      group,
      free,
      control,
      nature,
      artificial,
      trial,
      stable,
    };

    const maxAxis = Math.max(...Object.values(axisScores));
    const minAxis = Math.min(...Object.values(axisScores));
    const balanceScore = 20 - (maxAxis - minAxis);

    const typeScores = {
      forest: improv + free + nature,
      hidamari: relational + stable,
      festival: group + control + plan,
      rocket: trial + artificial + free,
      satoyama: nature + stable + relational,
      design: artificial + plan + control,
      hiroba: q6 + q16 + free + relational,
      komorebi: balanceScore,
    };

    const sorted = Object.entries(typeScores).sort((a, b) => b[1] - a[1]);

    const main = sorted[0][0];
    const sub = sorted[1][0];

    setResult({
      main,
      sub,
      copy: generateCopy(main, sub),
      typeScores,
      axisScores,
    });
  };

  return (
    <div
      style={{
        maxWidth: '760px',
        margin: '0 auto',
        padding: '40px',
        fontFamily: 'sans-serif',
      }}
    >
      <h1>園風タイプ診断</h1>

      <p style={{ color: '#555' }}>
        各項目について、現在の園の様子に近いものを選んでください。
      </p>

      {questions.map((q, index) => (
        <div
          key={q.id}
          style={{
            marginBottom: '24px',
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '12px',
            background: '#fff',
          }}
        >
          <p>
            {index + 1}. {q.text}
          </p>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={num}
                onClick={() => handleAnswer(q.id, num)}
                style={{
                  padding: '10px 14px',
                  borderRadius: '8px',
                  border: 'none',
                  background: answers[q.id] === num ? '#4caf50' : '#ddd',
                  color: answers[q.id] === num ? 'white' : 'black',
                  cursor: 'pointer',
                }}
              >
                {num}
              </button>
            ))}
          </div>
        </div>
      ))}

      <button
        onClick={diagnose}
        style={{
          padding: '14px 24px',
          border: 'none',
          borderRadius: '12px',
          background: '#ff9800',
          color: 'white',
          fontSize: '18px',
          cursor: 'pointer',
        }}
      >
        診断する
      </button>

      {result && (
        <div
          style={{
            marginTop: '40px',
            padding: '30px',
            background: '#f7f7f7',
            borderRadius: '20px',
          }}
        >
          <h2>診断結果</h2>

          <h3>主型：{typeData[result.main].name}</h3>
          <p>{typeData[result.main].description}</p>

          <h3>副型：{typeData[result.sub].name}</h3>
          <p>{typeData[result.sub].description}</p>

          <div
            style={{
              marginTop: '20px',
              padding: '20px',
              background: 'white',
              borderRadius: '12px',
            }}
          >
            <h4>園キャッチコピー</h4>
            <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
              {result.copy}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}