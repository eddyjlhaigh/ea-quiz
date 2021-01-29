import Head from 'next/head'
import Link from 'next/link'


export default function Quiz({ data }) {
  console.log(data)
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

      <div id="question-text">
        <p>
          { data.question }
        </p>
      </div>

      <div id="answers">
        <input type="radio" value="" name="answer" /> { data.correctAns }
        <input type="radio" value="" name="answer" /> { data.ans1 }
        <input type="radio" value="" name="answer" /> { data.ans2 }
        <input type="radio" value="" name="answer" /> { data.ans3 }
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

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/question`)
  const data = await res.json()

  // Pass data to the page via props
  return { 
    props: { 
      data
    } 
  }
}
