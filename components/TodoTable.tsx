import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ITodo } from "@/interfaces";
import { getTodoListAction } from "@/actions/todo.action";
import { Badge } from "./ui/badge";
import TodoActionsBtns from "./TodoActionsBtns";

export default async function TodosTable() {
  const todoDataRes = await getTodoListAction();
  const todoData = todoDataRes.data;

  return (
    <>
      <Table>
        <TableCaption>A list of your recent Todos.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Completed</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {todoData?.map((todo) => (
            <TableRow key={todo._id}>
              <TableCell className="font-medium">{todo._id}</TableCell>
              <TableCell>{todo.title}</TableCell>
              <TableCell>
                {todo.complete ? (
                  <Badge>Completed</Badge>
                ) : (
                  <Badge variant="secondary">Incomplete</Badge>
                )}
              </TableCell>
              <TableCell className="flex space-x-2 items-center justify-end">
                <TodoActionsBtns id={todo._id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">{todoData.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  );
}
