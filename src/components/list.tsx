import { FC, useMemo } from "react";
import Item from "./item";
import { Task } from "../types";
import BeatLoader from "react-spinners/BeatLoader";
import { ProgressBar } from "./progressBar";
import { useTranslation } from "react-i18next";

interface Props {
  listdata: Array<Task>;
  deletdata: (deletdata: Task) => void;
  completedTask: (completedTask: Task) => void;
  loading: boolean;
}
const List: FC<Props> = ({ listdata, deletdata, completedTask, loading }) => {
  const { t } = useTranslation();

  const completedTasks = useMemo(() => {
    return listdata.filter((task) => task.completed);
  }, [listdata]);

  const taskPercentage = useMemo(() => {
    if (listdata.length === 0) return 0;
    return Math.round((completedTasks.length / listdata.length) * 100);
  }, [listdata, completedTasks]);
  return (
    <div className="flex justify-center items-center flex-col gap-2">
      {loading ? (
        <BeatLoader />
      ) : (
        <>
          <div className="w-full flex gap-2 justify-center items-center">
            {t("progress")}:{`${completedTasks.length}/${listdata.length}`}
            <ProgressBar percentage={taskPercentage} progressColor="blue" />
          </div>
          {listdata.map((item) => {
            const { note, id, completed } = item;
            return (
              <Item
                key={id}
                id={id}
                note={note}
                deletdata={deletdata}
                completed={completed}
                changeCompleted={completedTask}
              />
            );
          })}
        </>
      )}
    </div>
  );
};
export default List;
