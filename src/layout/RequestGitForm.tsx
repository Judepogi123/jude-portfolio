//styles
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

//libs
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

//interface
const requestSchema = z.object({
  email: z.string().email(),
  fullname: z.string(),
});

type RequestProps = z.infer<typeof requestSchema>;

const RequestGitForm = () => {
  const form = useForm<RequestProps>({ resolver: zodResolver(requestSchema) });
  const {
    handleSubmit,
    setError,
    register,
    formState: { errors },
  } = form;

  const onSubmit = async (value: RequestProps) => {};

  return (
    <div className=" w-full h-auto">
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormField
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} placeholder="Your email" />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="fullname"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} placeholder="Your fullname"/>
                </FormControl>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};

export default RequestGitForm;
