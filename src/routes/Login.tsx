
//lib
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
//styles
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

//schema
const userSchema = z.object({
  username: z.string().min(8, "Username must have at least 8 characters!"),
  password: z.string().min(8, "Password must have at least 8 characters!"),
});

type UserProps = z.infer<typeof userSchema>;

const Login = () => {
  const form = useForm<UserProps>({ resolver: zodResolver(userSchema) });
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors, isSubmitting },
  } = form;

  const onSubmit = async (value: UserProps) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(value);
    } catch (error) {
      setError("username", { message: "The username is already taken!" });
      setError("root", { message: "Inter Server error!" });
    }
  };

  return (
    <div className=" w-full h-screen grid">
      <div className=" m-auto w-full h-full md:w-[350px] md:h-[400px] rounded border p-8 bg-[#f8f9fa]">
        <div className=" w-full p-4">
          <p className=" font-roboto text-2xl">Login</p>
        </div>
        <Form {...form}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" flex flex-col justify-between w-full h-[85%]"
          >
           
            <div className=" w-full h-auto flex flex-col">
            {errors.root && (
              <Alert variant="destructive">
                <AlertTitle>Sorry something went wrong!</AlertTitle>
                <AlertDescription>{errors.root.message} <a href="#" className=" hover:underline text-black">Report</a></AlertDescription>
              </Alert>
            )}
              <FormField
                render={({ field }) => (
                  <FormItem className=" mt-2">
                    <FormControl>
                      <Input
                        {...register("username", {
                          required: "Username is Required",
                        })}
                        {...field}
                        placeholder="Username"
                      />
                    </FormControl>
                    <div className=" w-full h-6">
                      {errors.username && (
                        <FormMessage>{errors.username.message}</FormMessage>
                      )}
                    </div>
                  </FormItem>
                )}
                name="username"
              />
              <FormField
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...register("password", {
                          required: "Password is required!",
                        })}
                        type="password"
                        {...field}
                        placeholder="Password"
                      />
                    </FormControl>
                    <div className=" w-full h-6">
                      {errors.password && (
                        <FormMessage>{errors.password.message}</FormMessage>
                      )}
                    </div>
                  </FormItem>
                )}
                name="password"
              />
            </div>

            <Button
              disabled={isSubmitting}
              className=" w-full rounded-full bg-[#1b263b] hover:bg-[#0d1b2a] text-white"
              variant="secondary"
              type="submit"
            >
              {isSubmitting ? "Loading..." : "Continue"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Login;
