import React, { useState } from 'react';

export default function App() {
const questions = [
{
id: 1,
text: '子どもの「やりたい」を大切にしている',
type: 'forest',
},
{
id: 2,
text: '安心感や関係性を大切にしている',
type: 'hidamari',
},
{
id: 3,
text: '行事やみんなで作る活動を大切にしている',
type: 'festival',
},
{
id: 4,
text: '新しい挑戦や工夫を大切にしている',
type: 'rocket',
},
];

const typeNames = {
forest: '🌳 森のたんけん型',
hidamari: '☀️ ひだまり型',
festival: '🎪 おまつり職人型',
rocket: '🚀 ロケット挑戦型',
};

const copyMap = {
'forest-hidamari': '「やってみたい！を安心の中で育む園」',
'forest-rocket': '「遊びと挑戦から未来が広がる園」',
'hidamari-festival': '「ぬくもりと一体感を大切にする園」',
'festival-rocket': '「みんなで挑戦を楽しむ園」',
};

const [answers, setAnswers] = useState({});
const [result, setResult] = useState(null);

const handleAnswer = (id, value) => {
setAnswers({
...answers,
[id]: Number(value),
});
};

const diagnose = () => {
const scores = {
forest: 0,
hidamari: 0,
festival: 0,
rocket: 0,
};

```
questions.forEach((q) => {
  scores[q.type] += answers[q.id] || 0;
});

const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);

const main = sorted[0][0];
const sub = sorted[1][0];

const copyKey = main + '-' + sub;
const reverseKey = sub + '-' + main;

const copy =
  copyMap[copyKey] ||
  copyMap[reverseKey] ||
  '「それぞれの良さを大切に育む園」';

setResult({
  main,
  sub,
  copy,
});
```

};

return (
<div
style={{
maxWidth: '700px',
margin: '0 auto',
padding: '40px',
fontFamily: 'sans-serif',
}}
> <h1>園風タイプ診断</h1>

```
  {questions.map((q) => (
    <div
      key={q.id}
      style={{
        marginBottom: '30px',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '12px',
      }}
    >
      <p>{q.text}</p>

      <div style={{ display: 'flex', gap: '10px' }}>
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            onClick={() => handleAnswer(q.id, num)}
            style={{
              padding: '10px 14px',
              borderRadius: '8px',
              border: 'none',
              background:
                answers[q.id] === num ? '#4caf50' : '#ddd',
              color:
                answers[q.id] === num ? 'white' : 'black',
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

      <h3>{typeNames[result.main]}</h3>

      <p>×</p>

      <h3>{typeNames[result.sub]}</h3>

      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          background: 'white',
          borderRadius: '12px',
        }}
      >
        <h4>園キャッチコピー</h4>

        <p
          style={{
            fontSize: '20px',
            fontWeight: 'bold',
          }}
        >
          {result.copy}
        </p>
      </div>
    </div>
  )}
</div>


);
}
