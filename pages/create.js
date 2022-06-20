import { info } from "daisyui/src/colors";
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
    <a className="btn btn-ghost normal-case text-xl">exquiz.me</a>
  </div>
  <div className="flex-none">
    <button className="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
    </button>
  </div>
</div>

      <div className="my-10 flex justify-center">
        <ul className="steps">
          <li className="step step-primary">1. 퀴즈 설정</li>
          <li className="step step-primary">2. 문제 설정</li>
          <li li className="step">
            3. 완료!
          </li>
          <li className="step">4. 부가 설정</li>
        </ul>
      </div>

      <div className="flex justify-between">
        <div>
          <div className="card w-48 bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="card-actions justify-end">
                <button className="btn btn-square btn-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <p>Q1.</p>
            </div>
          </div>

          <div className="card w-48 bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="card-actions justify-end">
                <button className="btn btn-square btn-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <p>Q2.</p>
            </div>
          </div>

          <div className="card w-48 bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="card-actions justify-end">
                <button className="btn btn-square btn-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <p>Q3.</p>
            </div>
          </div>
        </div>

        <div>
          <div clasNames="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Step 1. 퀴즈 질문을 입력하세요</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <br />
          <div clasNames="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Step 2. 퀴즈 내용을 입력하세요</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <br />

          <div clasNames="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Step 3. 퀴즈 선지를 입력하세요</span>
            </label>
          </div>

          <div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">1. 지리산</span>
                <input
                  type="radio"
                  name="radio-6"
                  className="radio checked:bg-red-500"
                  checked
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">2. 설악산</span>
                <input
                  type="radio"
                  name="radio-6"
                  className="radio checked:bg-blue-500"
                  checked
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">3. 한라산</span>
                <input
                  type="radio"
                  name="radio-6"
                  className="radio checked:bg-orange-500"
                  checked
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">4. 북한산</span>
                <input
                  type="radio"
                  name="radio-6"
                  className="radio checked:bg-green-500"
                  checked
                />
              </label>
            </div>
          </div>
        </div>

        <div className="w-48"></div>
      </div>
    </div>
  );
}
