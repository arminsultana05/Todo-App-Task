import { useEffect, useState } from "react";

const useTask = () => {
  const [task, setTask] = useState([]);
  const [spinner, setSpinner] = useState(false);
  useEffect(() => {
    setSpinner(true);
    fetch('http://localhost:5000/tasks')
      .then(res => res.json())
      .then(data => {
        setTask(data);
        setSpinner(false);
      })
  }, [task]);
  return {task, spinner};
};

export default useTask;