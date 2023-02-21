# Components Tree

!["Compnents Tree"](https://github.com/Hongseoupyun/typescript_todo/blob/main/src/assets/Screen%20Shot%202023-02-20%20at%209.57.06%20PM.png?raw=true)

# Pesudocode / Logical Approach

## App/General
1.App component has single todo, Todos(array of todo) and completedTodos(array of todo)

2.Define Todo interface in mode.ts
```interface Todo{
id: number;
todo: string;
isDone: boolean;
}
```
## InputField

3.Take inputs from users as a single todo using InputField components and add it on todos using setTodos.

4.Implement auto focus and blur features using useRef when user types input in the inputfield and press enter.

## TodoList
5.The TodoList component will consist of two containers: one for active todos and another for completed todos.

6.Each container will have SingleTodo components which maps out todos(active) and completedTodos(completed) respectively.

## SingleTodo
7.conditional rendering when a single todo item is set to edit or complete.

8.SingleTodo will have form that contains input field to edit and edit, delete and complete buttons.

9.Implement 3 funtions that handle delete, edit and compelte and use useRef to auto focus when user clikc edit button.

10.handleDelete; filter out single todo item whose id is === todo.id from todos using .filter and setTodos.

11.handleEdit; use setTodos and .map to update todo to editTodo.

12.handleDone; change value of isDone to true using setTodos.

## Drag and Drop functionality<br>
 
1.Install``` "react-beautiful-dnd";``` and improt ```{ DragDropContext, DropResult }``` in App.tsx.

2.Wrap the App component with 
```
<DragDropContext onDragEnd={onDragEnd}>
```

3.Wrap the TodoList component(Where you are going to drop your todo/item) with ```<Droppable>``` and give unique droppableId to distingiush destination(where the item is dropped) and source(where the item is coming from).

4.Wrap the SingleTodo(which you will drag) component with ```<Draggable>``` and give unique droppableId and index. 

5.Implement onDragEnd function that handles drag and drop features;
```
  -Define base cases ; when item is dropped in same place in same position or there is no destionation to drop your item, return

  -Declare two variables add, active and complete, where active and complete are arrays of todo items.

  -Check the droppableId property of the source object to determine if the dragged item is coming from the "TodosTodo" list or the "completedTodos" list.

  -Assign the item being dragged to the add variable and remove it from either the active or complete array using the splice() method.

  -Check the droppableId property of the destination object to determine if the dragged item is being dropped back into the "TodosTodo" list or the "completedTodos" list.

  -Use the splice() method to insert the add item into the appropriate array at the specified index.

  -Update the completedTodos and todos state variables with the modified arrays using the setCompletedTodos() and setTodos() functions, respectively.
  ```
