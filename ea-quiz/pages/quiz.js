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
    </>
  )
}