//libs
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
//styles
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const emailSchema = z.object({
  email: z.string().email("Invalid email"),
  message: z.string().min(1, "Message content is required!"),
  subject: z.string().optional(),
});

type EmailProps = z.infer<typeof emailSchema>;

const SendEmailForm = () => {
  const form = useForm<EmailProps>({ resolver: zodResolver(emailSchema) });
  const {
    handleSubmit,
    setError,
    formState: { errors },
  } = form;

  const onSubmit = async (value: EmailProps) => {
    try {
      console.log(value);
      
    } catch (error) {
      setError("root", { message: `Sorry something went wrong: ${error}` });
    }
  };
  return (
    <div className=" w-full h-auto">
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormField
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                  className=" max-h-40"
                    {...field}
                    placeholder="Your email (e.g. XXXX@gxxx.com)"
                  />
                </FormControl>
                <div className=" w-full h-6">
                  {errors.email && (
                    <FormMessage>{errors.email.message}</FormMessage>
                  )}
                </div>
              </FormItem>
            )}
          />
          <FormField
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                  className=" max-h-32"
                    {...field}
                    placeholder="Message content"
                  />
                </FormControl>
                <div className=" w-full h-6">
                  {errors.message && (
                    <FormMessage>{errors.message.message}</FormMessage>
                  )}
                </div>
              </FormItem>
            )}
          />

          <Button type="submit" className=" w-full rounded-full">Send</Button>
        </form>
      </Form>
    </div>
  );
};

export default SendEmailForm;
