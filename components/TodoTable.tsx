"use client";
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
import { useEffect, useState } from "react";

export default function TodosTable() {
  const [Data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTodoListAction();
        // Do something with the response

        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
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
          {Data?.map((todo) => (
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
            <TableCell className="text-right">{Data.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  );
}
