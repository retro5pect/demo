import { info } from "daisyui/src/colors";
import Image from "next/image";

export default function create() {
  return (
    <div>
      <div className="my-10 flex justify-center">
        <progress
          className="progress progress-info w-56"
          value="40"
          max="100"
        ></progress>
        <p>{}</p>
      </div>

      <div className="flex justify-between">
        <div className="w-40">
          <div className="card card-compact w-38 bg-base-100 shadow-xl hover:scale-125">
            <figure></figure>
            <div className="card-body">
              <h2 className="card-title">Q1.</h2>
              <p>우리나라에서 가장 고도가 높은 산은?</p>
            </div>
          </div>

          <div className="card card-compact w-38 bg-base-100 bg-gray-300 shadow-xl hover:scale-125">
            <figure></figure>
            <div className="card-body">
              <h2 className="card-title">Q2.</h2>
              <p>우리나라에서 장마가 시작되는 계절은?</p>
            </div>
          </div>

          <div className="card card-compact w-38 bg-base-100 shadow-xl hover:scale-125">
            <figure></figure>
            <div className="card-body">
              <h2 className="card-title">[Non-sense]</h2>
              <p>어떤 퀴즈가 나올까요?</p>
            </div>
          </div>
          <div className="card card-compact w-38 bg-base-100 shadow-xl hover:scale-125">
            <figure></figure>
            <div className="card-body">
              <h2 className="card-title">Q3.</h2>
              <p>지구계 구성요소에는 생물권이 있다</p>
            </div>
          </div>
        </div>

        <div>
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure></figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-40"></div>
      </div>
    </div>
  );
}
