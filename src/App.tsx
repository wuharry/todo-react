import { useCallback, useState } from "react";
import { Task } from "./types";
import { SubmitHandler, useForm } from "react-hook-form";
import List from "./components/list";
import { settingIcon, plusIcon } from "./assets";
import LanguageSelector from "./components/languageSelector";
import { useTranslation } from "react-i18next";

interface IFormInput {
  taskName: string;
  date?: string;
  time?: string;
}
const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { t } = useTranslation();

  const { register, handleSubmit, reset } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const newTask: Task = {
      id: Date.now(),
      note: data.taskName,
      completed: false,
    };
    setLoading(true);
    setTasks([...tasks, newTask]);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    reset();
  };

  const handleDelete = useCallback((taskToDelete: Task) => {
    setLoading(true);
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== taskToDelete.id)
    );
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  const handleCompleted = useCallback((taskToCompleted: Task) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskToCompleted.id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }, []);

  return (
    <div className="flex justify-center items-center flex-col min-h-screen bg-[#ECECEC] w-full">
      <header className="fixed top-0 w-full shadow-sm z-10 bg-[#0071FF] px-4 py-3">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <button className="text-xl sm:text-2xl text-white p-1">☰</button>
            <h1 className="text-xl sm:text-2xl font-bold text-white">
              {t("todoList")}
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <LanguageSelector />
            <button className="p-1">
              <img
                src={settingIcon}
                alt={t("settings")}
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
            </button>
          </div>
        </div>
      </header>
      <main className="flex flex-col justify-center items-center w-full p-4 sm:p-6 mt-16 mb-24 sm:mb-20">
        <div className="flex justify-center items-center rounded-lg bg-white w-full sm:w-4/5 h-3/4 relative">
          <div className="flex flex-col w-full h-full p-3 sm:p-4">
            <List
              listdata={tasks}
              deletdata={handleDelete}
              completedTask={handleCompleted}
              loading={loading}
            />
          </div>
          <div className="flex flex-col w-full p-4 fixed bottom-0  bg-transparent">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex w-full gap-2 sm:gap-4 items-center justify-center"
            >
              <input
                type="text"
                placeholder={t("inputPlaceholder")}
                {...register("taskName", {
                  required: t("error.required"),
                })}
                disabled={loading}
                className="flex-1 border border-gray-300 rounded-md p-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 sm:py-2 sm:px-4 rounded transition-colors"
              >
                <img
                  src={plusIcon}
                  alt={t("addTask")}
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};
export default App;
