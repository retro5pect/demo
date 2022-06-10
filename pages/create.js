import { info } from "daisyui/src/colors";

export default function create() {
  return (
    <div>
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
              <p>퀴즈1</p>
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
              <p>퀴즈2</p>
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
              <p>퀴즈3</p>
            </div>
          </div>
        </div>

        <div> hi </div>
        <div className="w-48"></div>
      </div>
    </div>
  );
}
