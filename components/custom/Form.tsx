"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
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

const formSchema = z.object({
  task: z.string().min(1, {
    message: "Task is required",
  }),
  description: z.string().min(1, {
    message: "Description is required",
  }),
  category: z.string().min(1, {
    message: "Category is required",
  }),
  priority: z.string().min(1, {
    message: "Priority is required",
  }),
});

export default function TodoForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      task: "",
      description: "",
      category: "",
      priority: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
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
              <FormLabel>Task</FormLabel>
              <FormControl>
                <Input className="w-full" placeholder="Enter task name" {...field} />
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
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="work">Work</SelectItem>
                      <SelectItem value="personal">Personal</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
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
                <FormLabel>Priority</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="urgent">Urgent</SelectItem>
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
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  className="w-full min-h-[80px]"
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

        <Button type="submit" className="w-full">
          Add Task
        </Button>
      </form>
    </Form>
  );
}
