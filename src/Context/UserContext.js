import { createContext, useContext } from "react";

// Todo Context
export const TodoContext = createContext({
    todos: [],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    completeTodo: (id) => {},
});

export const UseTodo = () => {
    return useContext(TodoContext);
}

export const Todoprovider = TodoContext.Provider

// Theme Context
export const ThemeContext = createContext({
    defaultTheme: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const useThemeContext = () => {
    return useContext(ThemeContext);
}

export const ThemeProvider = ThemeContext.Provider
