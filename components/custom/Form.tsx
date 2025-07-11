"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CATEGORIES, PRIORITIES } from "@/constants/todo.constants";
import { TodoInterface } from "@/interface/todo.interface";
import { Category, Priority } from "@/interface/todo.interface";

const formSchema = z.object({
  task: z.string().min(1, {
    message: "Task is required",
  }),
  description: z.string().min(1, {
    message: "Description is required",
  }),
  category: z.enum(CATEGORIES as [Category, ...Category[]]),
  priority: z.enum(PRIORITIES as [Priority, ...Priority[]]),
});

export default function TodoForm({ onAddTodo }: { onAddTodo: (todo: TodoInterface) => void }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      task: "",
      description: "",
      category: CATEGORIES[0] as Category,
      priority: PRIORITIES[0] as Priority,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    onAddTodo({
      id: Date.now().toString(),
      title: values.task,
      description: values.description,
      category: values.category,
      priority: values.priority,
      is_completed: false,
    });

    form.reset({
      task: "",
      description: "",
      category: CATEGORIES[0] as Category,
      priority: PRIORITIES[0] as Priority,
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 w-full max-w-2xl"
      >
        <FormField
          control={form.control}
          name="task"
          render={({ field, formState: { errors } }) => (
            <FormItem>
              <FormLabel className="text-lg font-semibold">Task</FormLabel>
              <FormControl>
                <Input className="w-full rounded-none" placeholder="Enter task name" {...field} />
              </FormControl>
              {
                errors.task ? <FormMessage className="h-2"/> : <div className="h-2"/>
              }
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="category"
            render={({ field, formState: { errors } }) => (
              <FormItem>
                <FormLabel className="text-lg font-semibold">Category</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full rounded-none cursor-pointer">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {CATEGORIES.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                {
                  errors.category ? <FormMessage className="h-2"/> : <div className="h-2"/>
                }
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="priority"
            render={({ field, formState: { errors } }) => (
              <FormItem>
                <FormLabel className="text-lg font-semibold">Priority</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full rounded-none cursor-pointer">
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      {PRIORITIES.map((priority) => (
                        <SelectItem key={priority} value={priority}>
                          {priority}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                {
                  errors.priority ? <FormMessage className="h-2"/> : <div className="h-2"/>
                }
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="description"
          render={({ field, formState: { errors } }) => (
            <FormItem>
              <FormLabel className="text-lg font-semibold">Description</FormLabel>
              <FormControl>
                <Textarea
                  className="w-full min-h-[80px] rounded-none"
                  placeholder="Enter task description"
                  {...field}
                />
              </FormControl>
              {
                errors.description ? <FormMessage className="h-2"/> : <div className="h-2"/>
              }
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full rounded-none cursor-pointer">
          Add Todo
        </Button>
      </form>
    </Form>
  );
}
