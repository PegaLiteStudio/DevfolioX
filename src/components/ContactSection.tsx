import {useState} from "react";
import {motion} from "framer-motion";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {apiRequest} from "@/lib/queryClient";
import {useToast} from "@/hooks/use-toast";
import portfolioData from "@/lib/portfolio-data";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {Mail, MapPin, Phone, Send} from "lucide-react";

const contactFormSchema = z.object({
    name: z.string().min(2, {message: "Name must be at least 2 characters"}),
    email: z.string().email({message: "Please enter a valid email address"}),
    subject: z.string().min(5, {message: "Subject must be at least 5 characters"}),
    message: z.string().min(10, {message: "Message must be at least 10 characters"}),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const {toast} = useToast();

    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    async function onSubmit(data: ContactFormValues) {
        setIsSubmitting(true);
        try {
            if (!portfolioData.contactFormUrl || !portfolioData.contactFormUrl.includes("://")) {
                toast({
                    title: "Please Setup Contact Form",
                    description: "Add Form Api in client/src/lib/portfolio-data.ts",
                    variant: "destructive",
                });
                return;
            }
            await apiRequest("POST", "/api/contact", data);
            toast({
                title: "Message sent!",
                description: "Thank you for your message. I'll get back to you soon.",
            });
            form.reset();
        } catch (error) {
            toast({
                title: "Error sending message",
                description: "There was a problem sending your message. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section id="contact" className="py-20 bg-background relative">
            <div
                className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1483817101829-339b08e8d83f?ixlib=rb-4.0.3&auto=format&fit=crop')] bg-fixed opacity-5"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.h2
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                    viewport={{once: true}}
                    className="text-3xl md:text-4xl font-bold mb-12 text-center"
                >
                    <span className="text-gradient">Get In Touch</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    <motion.div
                        initial={{opacity: 0, x: -20}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.6, delay: 0.2}}
                        viewport={{once: true}}
                    >
                        <p className="text-muted-foreground text-lg mb-8">
                            Have a project in mind or want to discuss opportunities? Feel free to reach out to me using
                            the contact form or through my social media.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center">
                                <div
                                    className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4">
                                    <Mail className="text-primary h-5 w-5"/>
                                </div>
                                <div>
                                    <h3 className="text-sm text-muted-foreground mb-1">Email</h3>
                                    <p className="text-lg">{portfolioData.email}</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <div
                                    className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4">
                                    <Phone className="text-primary h-5 w-5"/>
                                </div>
                                <div>
                                    <h3 className="text-sm text-muted-foreground mb-1">Phone</h3>
                                    <p className="text-lg">{portfolioData.phone}</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <div
                                    className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4">
                                    <MapPin className="text-primary h-5 w-5"/>
                                </div>
                                <div>
                                    <h3 className="text-sm text-muted-foreground mb-1">Location</h3>
                                    <p className="text-lg">{portfolioData.location}</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center mt-10 space-x-6">
                            {portfolioData.socialLinks.map((link) => (
                                <a
                                    key={link.platform}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={link.platform}
                                    className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-foreground hover:text-primary transition-colors duration-300"
                                >
                                    <link.icon className="h-5 w-5"/>
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, x: 20}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.6, delay: 0.4}}
                        viewport={{once: true}}
                    >
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Your name"
                                                    className="bg-secondary border-border focus:border-primary"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Your email"
                                                    type="email"
                                                    className="bg-secondary border-border focus:border-primary"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="subject"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Subject</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Subject"
                                                    className="bg-secondary border-border focus:border-primary"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Message</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Your message"
                                                    rows={4}
                                                    className="bg-secondary border-border focus:border-primary"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />

                                <Button
                                    type="submit"
                                    className="w-full rounded-lg"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                    <Send className="ml-2 h-4 w-4"/>
                                </Button>
                            </form>
                        </Form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
