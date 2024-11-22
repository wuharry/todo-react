import { FC } from "react";
import { ItemsProps } from "../types";
import deleteIcon from "../assets/delete.svg";

const Item: FC<ItemsProps> = (props) => {
  const { id, note, completed, deletdata, changeCompleted } = props;

  return (
    <div
      className={`
        w-3/4
        bg-white
        border-solid
        border-2
        rounded-lg
        shadow-lg
        p-4
        mx-auto
        mt-4
        flex
        justify-between
        items-center
        hover:bg-gray-100
        transition-colors
        duration-200
        ${completed ? "border-[#16CB4C]" : "border-[#ECECEC]"}
      `}
    >
      <input
        type="checkbox"
        checked={completed}
        onChange={() => changeCompleted({ id, note, completed })}
      />
      <div
        className={`
          flex-1
          mx-4
          ${
            completed
              ? "text-[#16CB4C] line-through decoration-2"
              : "text-gray-700"
          }
          transition-all
          duration-200
        `}
      >{`${note}`}</div>
      <button
        className="remove"
        onClick={() => deletdata({ id, note, completed })}
        data-id={id}
      >
        <img src={deleteIcon} alt="Settings" className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Item;
