import { info } from "daisyui/src/colors";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function create() {
  return (
    <div>
      <div className="navbar bg-base-100 bg-white">
  <div className="flex-none">
    <button className="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current "><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    </button>
  </div>
  <div className="flex-1">
  <Link href="/../">
    <a className="btn btn-ghost normal-case text-xl">exquiz.me</a>
    </Link>
  </div>
  <div className="flex-none">
    <button className="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
    </button>
  </div>
</div>
      <div className="my-10 flex justify-center">
        <progress
          className="progress progress-info w-56"
          value="40"
          max="100"
        ></progress>
        <p>{}</p>
      </div>

      <div className="flex justify-between">
        <div className="w-60">
          <div className="card card-compact w-38 bg-base-100 shadow-xl">
            <figure></figure>
            <div className="card-body">
              <h2 className="card-title">Q1.</h2>
              <p>우리나라에서 장마가 시작되는 계절은?</p>
            </div>
          </div>

          <div className="card card-compact w-38 bg-base-100 bg-gray-300 shadow-xl">
            <figure></figure>
            <div className="card-body">
              <h2 className="card-title">Q2.</h2>
              <p>우리나라에서 가장 고도가 높은 산은?</p>
            </div>
          </div>

          <div className="card card-compact bg-gray-500 w-38 bg-base-100 shadow-xl">
            <figure></figure>
            <div className="card-body">
              <h2 className="card-title">Q3.</h2>
              <p>
                <br />
                <br />
              </p>
            </div>
          </div>
          <div className="card card-compact bg-gray-500 w-38 bg-base-100 shadow-xl">
            <figure></figure>
            <div className="card-body">
              <h2 className="card-title">Q4.</h2>
              <p>
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>

        <div className="px-10">
          <div className="flex justify-between card card-compact w-128 bg-base-100 shadow-xl">
            <figure>
              <Image
                src="/../public/halla.jpeg"
                alt="mountain"
                width={300}
                height={200}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">[지구과학-중1]</h2>
              <p className="text-xl">우리나라에서 가장 고도가 높은 산은?</p>
            </div>
          </div>

          <div className={styles.grid}>
            <div>
              <button className="text-white bg-red-500 my-10 mx-10 btn btn-wide">
                1. 지리산
              </button>
              <button className="text-white bg-blue-500 my-10 mx-10 btn btn-wide">
                2. 설악산
              </button>
            </div>
            <div>
              <button className="text-white bg-orange-500 my-10 mx-10 btn btn-wide">
                3. 한라산
              </button>
              <button className="text-white bg-green-500 my-10 mx-10 btn btn-wide">
                4. 북한산
              </button>
            </div>
          </div>
        </div>
        <div className="w-60">
          <div className="avatar tooltip" data-tip="명랑한 소크라테스">
            <div className="w-24 mask mask-squircle">
              <img src="https://api.lorem.space/image/face?hash=30000" />
            </div>
          </div>
          <div className="avatar tooltip" data-tip="고뇌하는 니체">
            <div className="w-24 mask mask-squircle">
              <img src="https://api.lorem.space/image/face?hash=47449" />
            </div>
          </div>
          <div className="avatar tooltip" data-tip="용감한 나폴레옹">
            <div className="w-24 mask mask-squircle">
              <img src="https://api.lorem.space/image/face?hash=12345" />
            </div>
          </div>
          <div className="avatar tooltip" data-tip="지략적인 한신">
            <div className="w-24 mask mask-squircle">
              <img src="https://api.lorem.space/image/face?hash=29999" />
            </div>
          </div>
          <div className="avatar tooltip" data-tip="저돌적인 칸">
            <div className="w-24 mask mask-squircle">
              <img src="https://api.lorem.space/image/face?hash=13131" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
