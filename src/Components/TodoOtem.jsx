/* eslint-disable react/prop-types */
import { useState } from "react";
import { UseTodo } from "../Context/UserContext";

function TodoItem({ todo }) {
    const [iseditable, updateIseditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)

    const { updateTodo, completeTodo, deleteTodo } = UseTodo()

    const CompletedTodo = () => {
        completeTodo(todo.id)
    }

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoMsg })
        updateIseditable(false)
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${
                todo.completeTodo ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completeTodo}
                onChange={CompletedTodo}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    iseditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completeTodo ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!iseditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completeTodo) return;

                    if (iseditable) {
                        editTodo();
                    } else updateIseditable((prev) => !prev);
                }}
                disabled={todo.completeTodo}
            >
                {iseditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
