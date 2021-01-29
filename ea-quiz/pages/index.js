import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Effective Altruism Quiz</title>
      </Head>
      <div id="heading">
        <h1>Effective Altruism Quiz</h1>
      </div>

      <div id="home-body-text">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      
      <div id="start-quiz-button">
        <Link href="quiz">
          <a>     
          <button>Start!</button>
          </a>
        </Link>
      </div>
    </>
  )
}
