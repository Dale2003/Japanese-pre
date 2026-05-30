function saveAsPdf() {
  window.print();
}

function toggleMarks() {
  document.documentElement.classList.toggle("hide-marks");
}

const sentenceNotes = [
  {
    translation: "明天是亚美的面试吧。首先，不管被问什么，什么都不说、低着头是不好的。",
    grammar: "「疑问词 + ても」表示“不管……都……”；「いわず」等于「いわないで」；「〜のはよくありません」用来评价某个行为不好。"
  },
  {
    translation: "是的。但是，我很紧张。该怎么办呢？",
    grammar: "「〜ています」表示现在的状态；「どうしたらいいですか」是遇到问题时请别人给建议的说法。"
  },
  {
    translation: "被提问的时候，先说“请让我稍微想一下”就可以。",
    grammar: "「〜たばあいは」表示“在……的情况下”；「かんがえさせてください」是使役形加「ください」，表示“请允许我想一想”；「〜ばいいですよ」表示建议。"
  },
  {
    translation: "根据公司不同，问的问题也不一样吧。",
    grammar: "「〜によって」表示“根据……不同”；句尾「よね」用来向对方确认自己的判断。"
  },
  {
    translation: "是的。所以，应该提前读一下公司的主页。",
    grammar: "「よんでおく」表示事先做好准备；「〜べきです」表示“应该……”，语气比较明确。"
  },
  {
    translation: "这套西装可以吗？不会看起来像学生吗？",
    grammar: "「名词 + みたいに + 动词」表示“像……一样”；「みえませんか」是委婉确认外观的问法。"
  },
  {
    translation: "没问题。是按照店员说的买的吧？那样就可以啦。",
    grammar: "「〜とおりに」表示“按照……那样”；「〜でしょう？」表示确认；「それでいいのよ」表示说话人肯定前面的做法。"
  },
  {
    translation: "可是，妈妈每天晚上让我练习面试。我有点累了。",
    grammar: "「AはBに〜をさせます」表示“A让B做……”；这里妈妈是发出要求的人，“我”是做练习的人。"
  },
  {
    translation: "父母是在担心你。今天早点睡吧。",
    grammar: "「しんぱいしています」表示持续的状态；「ねなさい」是「〜なさい」句型，用于要求、叮嘱。"
  },
  {
    translation: "如果早上电车晚点，怎么做才好呢？",
    grammar: "「もし〜たばあいは」表示假设情况；「どうすればよいですか」表示“怎么做才好”。"
  },
  {
    translation: "马上给公司打电话就好。然后简短说明理由。",
    grammar: "「でんわすればよいです」表示“打电话就可以”；「いいなさい」是「〜なさい」的要求用法。"
  },
  {
    translation: "是的。明天必须按时去。",
    grammar: "「じかんどおりに」表示“按照时间、准时”；「〜なきゃいけません」是口语里的“必须……”。"
  },
  {
    translation: "正是这样。遇到困难时，必须好好听别人的意见。",
    grammar: "「こまったとき」表示“遇到困难的时候”；「きかなきゃいけません」再次使用“必须……”的口语表达。"
  },
  {
    translation: "我也请让我说一句。亚美的笑容很好，所以一定没问题。",
    grammar: "「いわせてください」是使役形加「ください」，表示“请允许我说”；「〜から」表示理由。"
  },
  {
    translation: "谢谢。我稍微平静下来了。明天我试着说出自己的想法。",
    grammar: "「おちつきました」表示状态发生变化；「はなしてみます」表示“试着说说看”。"
  },
  {
    translation: "很好。面试结束后，请告诉我结果。",
    grammar: "「〜たら」表示“……之后／如果……”；「おしえてください」是礼貌请求。"
  }
];

function addSentenceNotes() {
  const lines = document.querySelectorAll(".dialogue .line");
  lines.forEach((line, index) => {
    if (line.querySelector(".line-notes")) return;
    const note = sentenceNotes[index];
    if (!note) return;

    const noteEl = document.createElement("div");
    noteEl.className = "line-notes";
    noteEl.lang = "zh-CN";
    noteEl.innerHTML = `
      <div class="note-row">
        <span class="note-label">翻译</span>
        <span>${note.translation}</span>
      </div>
      <div class="note-row">
        <span class="note-label">语法</span>
        <span>${note.grammar}</span>
      </div>
    `;
    line.append(noteEl);
  });
}

function syncNotesButton() {
  const button = document.getElementById("toggleNotesButton");
  if (!button) return;
  const hidden = document.documentElement.classList.contains("hide-notes");
  button.textContent = hidden ? "显示翻译和讲解" : "隐藏翻译和讲解";
  button.setAttribute("aria-expanded", String(!hidden));
}

function toggleNotes() {
  document.documentElement.classList.toggle("hide-notes");
  syncNotesButton();
}

window.lesson28Export = {
  saveAsPdf,
  toggleNotes,
  toggleMarks
};

document.addEventListener("DOMContentLoaded", () => {
  addSentenceNotes();
  syncNotesButton();
  document.getElementById("savePdfButton")?.addEventListener("click", saveAsPdf);
  document.getElementById("toggleMarksButton")?.addEventListener("click", toggleMarks);
  document.getElementById("toggleNotesButton")?.addEventListener("click", toggleNotes);
});
