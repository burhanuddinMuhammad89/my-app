import { useState, useEffect } from "react";

export default function Todo() {
  const [feedback, setFeedback] = useState("Lanjut");
  const [value, setValue] = useState("");
  const [lists, setLists] = useState([
    {
      label: "Tidur",
      isDone: false,
    },
    {
      label: "Makan",
      isDone: false,
    },
  ]);

  const addNewList = () => {
    if (value && value !== "") {
      const newList = [...lists];
      newList.push({
        label: value,
        isDone: false,
      });
      setLists(newList);
    }
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleCheck = (event, index) => {
    const newList = [...lists];
    newList[index].isDone = newList[index].isDone === true ? false : true;
    setLists(newList);
  };

  useEffect(
    function () {
      if (lists.every((list) => list.isDone)) {
        setFeedback("Selesai!!");
      }
    },
    [lists]
  );

  return (
    <>
      <div>
        <input onChange={handleChange} value={value} />
        <button onClick={addNewList}>Tambah</button>
      </div>

      <ul>
        {lists.map((list, index) => (
          <li className={`list ${list.isDone ? "checked" : ""}`}>
            <input
              type="checkbox"
              checked={list.isDone}
              onChange={(event) => handleCheck(event, index)}
            />
            <span>{list.label}</span>
          </li>
        ))}
      </ul>

      <span className="feeds">{feedback}</span>
    </>
  );
}
