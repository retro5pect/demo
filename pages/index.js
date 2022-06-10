import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>exquiz.me : quiz experience</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex="0" className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
              <ul
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>마이페이지</a>
                </li>
                <li>
                  <a>가격안내</a>
                </li>
                <li>
                  <a>회사소개</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-center">
            <a className="btn btn-ghost normal-case text-xl">exquiz.me</a>
          </div>
          <div className="navbar-end">
            <button className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
          </div>
        </div>

        <h1 className={styles.title}>
          <a>교육 경험의 새로운 패러다임</a>
        </h1>

        <p className={styles.description}>초대 코드를 입력하여 입장해보세요!</p>
        <span>
          <input type="text" placeholder="Type here" className="input" />
          <button className="btn btn-ghost">입장하기</button>
        </span>

        <div className={styles.grid}>
          <Link href="/teach">
            <a className={styles.card}>
              <h2>수업하기 &rarr;</h2>
              <p>학생들을 초대하여 새로운 수업 경험을 즐겨보세요</p>
            </a>
          </Link>

          <Link href="/create">
            <a className={styles.card}>
              <h2>출제하기 &rarr;</h2>
              <p>다양한 문제들을 제작하여 퀴즈로 배포해보세요</p>
            </a>
          </Link>

          <Link href="/test">
            <a className={styles.card}>
              <h2>채점하기 &rarr;</h2>
              <p>학생 개인의 맞춤화된 지표를 통해 성취도를 설정해보세요 </p>
            </a>
          </Link>

          <Link href="/test">
            <a className={styles.card}>
              <h2>검색하기 &rarr;</h2>
              <p>다른 사람이 만든 검증된 문제들을 탐색하고 적용해보세요</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Copyright © 2022 exquiz.me All rights reserved. | Team MUMOMU.
        </a>
      </footer>
    </div>
  );
}
