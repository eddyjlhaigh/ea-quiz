import Head from 'next/head'
import Link from 'next/link'

export default function Quiz() {
  return (
    <>
      <Head>
        <title>Effective Altruism Quiz</title>
      </Head>

      <Link href="/">
        <a>Back to start</a>
      </Link>

      <div id="question-heading">
        <h1>Question 1</h1>
      </div>

      <div id="answers">
        <input type="radio" value="" name="answer" /> Answer 1
        <input type="radio" value="" name="answer" /> Answer 2
        <input type="radio" value="" name="answer" /> Answer 3
        <input type="radio" value="" name="answer" /> Answer 4
      </div>

      <div id="submit-answer">
        <Link href="results">
          <button>
            Submit
          </button>
        </Link>
      </div>
    </>
  )
}