'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { toast } from "sonner"

import { addEmail } from "@/server/waitingList";

const formSchema = z.object({
    email: z.string().email()
})

export default function SignupForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const {success, message} = await addEmail(values.email);
        
        if (success) {
            form.reset();
            toast.success(message);
          } else {
            toast.error(message);
          }
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex justify-end gap-4 mx-4">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="email..." {...field} className="text-white placeholder:text-white" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="cursor-pointer bg-cyan-400 hover:bg-cyan-600 text-cyan-950 hover:text-cyan-50 duration-300 ease-in">Sign Up</Button>
            </form>
        </Form>
    )
}
