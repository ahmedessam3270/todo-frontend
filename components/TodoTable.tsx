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
import { Pen, Trash } from "lucide-react";
import { Button } from "./ui/button";
import { ITodo } from "@/interfaces";
import { getTodoListAction } from "@/actions/todo.action";
import { Badge } from "./ui/badge";
import TodoActionsBtns from "./TodoActionsBtns";

export default async function TodosTable({ todos }: ITodo[]) {
  const data = await getTodoListAction();
  console.log(data);
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Completed</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos.map((todo) => (
          <TableRow key={todo.id}>
            <TableCell className="font-medium">{todo.id}</TableCell>
            <TableCell>{todo.title}</TableCell>
            <TableCell>
              {todo.complete ? (
                <Badge>Completed</Badge>
              ) : (
                <Badge variant="secondary">Incomplete</Badge>
              )}
            </TableCell>
            <TableCell className="flex space-x-2 items-center justify-end">
              <TodoActionsBtns id={todo.id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">{todos.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
