const questions = [
  {
    question: "1 + 1",
    correctAns: "2",
    ans1: "1",
    ans2: "2",
    ans3: "3",
    ans4: "4"
  },
  {
    question: "2 + 2",
    correctAns: "4",
    ans1: "2",
    ans2: "4",
    ans3: "6",
    ans4: "8"
  },
  {
    question: "3 + 3",
    correctAns: "6",
    ans1: "3",
    ans2: "5",
    ans3: "6",
    ans4: "9"
  }
]

export default (req, res) => {
  let payload = questions[Math.floor(Math.random() * questions.length)];

  res.statusCode = 200
  res.json({ 
    ...payload
  })
}