import React from "react";
import "../../../src/index.css";
import { members } from "../../utils/constants";

const Content = ({ activeTab }) => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div
        className={
          activeTab === 1
            ? "m-auto grid grid-cols-2 content-end justify-items-center"
            : "hidden"
        }
      >
        <div className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          aliquam consequuntur veritatis ex odit autem soluta! Vitae, modi quos
          beatae dicta debitis et eos nobis placeat harum soluta ad. Saepe?
          Doloribus delectus natus unde placeat repellat sint obcaecati
          accusantium! Ducimus eveniet rem aperiam architecto. Facere, eos odio
          vitae provident iusto sapiente harum inventore ab modi odit commodi
          necessitatibus itaque nam. Officiis reprehenderit cupiditate dolore!
          Magnam voluptates consequuntur vitae illum? Sint consectetur, possimus
          dolores, expedita natus vel cumque, dolore ex doloremque accusamus
          voluptates. Expedita obcaecati ratione nesciunt, perferendis excepturi
          quisquam deleniti?
        </div>
        <div className="ml-4 p-4">
          <img
            src={members.jorge.image}
            alt=""
            className="h-[60%] object-cover"
          />
        </div>
      </div>
      <div className={activeTab === 2 ? "" : "hidden"}>
        <div className="h-screen w-[60%] bg-red-500">asdasd</div>
      </div>
      <div className={activeTab === 3 ? "" : "hidden"}>Tab 3 content</div>
      <div className={activeTab === 4 ? "" : "hidden"}>Tab 4 content</div>
    </div>
  );
};

export default Content;
