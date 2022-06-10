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
      </div>

      <div className="flex justify-between">
        <div>
          <div className="card card-compact w-36 bg-base-100 shadow-xl">
            <figure>
              <img src="/../public/halla.jpeg" alt="halla" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Q1.</h2>
              <p>우리나라에서 가장 고도가 높은 산은?</p>
            </div>
          </div>

          <div className="card card-compact w-36 bg-base-100 shadow-xl">
            <figure></figure>
            <div className="card-body">
              <h2 className="card-title">Q2.</h2>
              <p></p>
            </div>
          </div>

          <div className="card card-compact w-36 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://api.lorem.space/image/shoes?w=400&h=225"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Q3.</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
        </div>

        <div> hi </div>
        <div className="w-48"></div>
      </div>
    </div>
  );
}
