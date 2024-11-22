import { FC } from "react";
import clsx from "clsx";
import { ProgressBarProps } from "../types";

export const ProgressBar: FC<ProgressBarProps> = ({
  percentage,
  progressColor,
}) => {
  return (
    <div
      className={clsx(
        "block justify-center items-center w-2/3 sm:min-w-[15rem] min-w-[10rem]"
      )}
    >
      <div className={clsx(" w-full h-3 rounded-lg bg-[rgba(0,0,0,0.1)]")}>
        <div
          className={clsx(
            `relative block h-full rounded-lg`,
            "animate-progress",
            "relative block h-full rounded-lg transition-all duration-300 ease-in-out"
          )}
          style={{
            width: `${percentage}%`,
            backgroundColor: progressColor,
          }}
        >
          <div
            className={clsx(
              "absolute right-0 top-[-28px] rounded text-white bg-blue-600 px-1 py-1 text-[8px]",
              "z-10",
              "before:content-['']",
              "before:bg-blue-600",
              "before:h-2",
              "before:w-2",
              "before:left-2",
              "before:top-4",
              "before:absolute",
              "before:z-0",
              "before:rotate-45"
            )}
          >
            {percentage}%
          </div>
        </div>
      </div>
    </div>
  );
};
