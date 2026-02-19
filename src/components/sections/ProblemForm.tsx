"use client";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, { message: "অনুগ্রহ করে আপনার নাম লিখুন।" }),
  area: z.string().min(2, { message: "আপনার এলাকার নাম লিখুন।" }),
  problemType: z.string().min(1, { message: "সমস্যার ধরন নির্বাচন করুন।" }),
  description: z
    .string()
    .min(10, { message: "সমস্যার বিস্তারিত বিবরণ দিন (অন্তত ১০ অক্ষর)।" }),
  phone: z.string().optional(),
});

export function ProblemForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      area: "",
      problemType: "",
      description: "",
      phone: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Here you would connect to Formspree or a custom API
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <div className="bg-primary p-12 text-white border border-black">
        <h3 className="bengali text-3xl font-bold mb-4">ধন্যবাদ!</h3>
        <p className="bengali text-xl leading-relaxed">
          আপনার সমস্যাটি সফলভাবে জমা দেওয়া হয়েছে। আমরা আপনার সাথে শীঘ্রই যোগাযোগ
          করব।
        </p>
        <Button
          variant="outline"
          onClick={() => setIsSubmitted(false)}
          className="mt-8 border-white text-white hover:bg-white hover:text-primary"
        >
          আরেকটি সমস্যা জানান
        </Button>
      </div>
    );
  }

  return (
    <section
      id="report-problem"
      className="bg-neutral-50 py-24 md:py-32 border-b border-black"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          <div>
            <span className="bengali text-sm font-bold uppercase tracking-widest text-primary mb-4 block italic">
              — সরাসরি অভিযোগ
            </span>
            <h2 className="bengali text-4xl font-black tracking-tight text-black md:text-6xl mb-8">
              আপনার অভিযোগ বা <br />
              সমস্যা আমাদের জানান
            </h2>
            <p className="bengali text-xl text-neutral-600 leading-relaxed mb-8">
              আপনার এলাকার সমস্যা যেমন চাঁদাবাজি, দখলবাজি বা অন্য কোনো অনিয়মের
              কথা সরাসরি আমাদের জানান। আপনার পরিচয় গোপন রাখা হবে।
            </p>
            <div className="p-8 bg-white border border-black italic text-sm text-neutral-500">
              প্রাইভেসি ডিসক্লেমার: আপনার ব্যক্তিগত তথ্য শুধুমাত্র সমস্যা
              সমাধানের উদ্দেশ্যে ব্যবহার করা হবে এবং তা তৃতীয় পক্ষের কাছে প্রকাশ
              করা হবে না।
            </div>
          </div>

          <div className="bg-white p-10 md:p-14 border border-black">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="bengali font-bold">
                          আপনার নাম
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="নাম লিখুন"
                            className="border-black h-12"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="bengali text-xs" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="area"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="bengali font-bold">
                          এলাকা/গ্রাম
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="এলাকার নাম"
                            className="border-black h-12"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="bengali text-xs" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="problemType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="bengali font-bold">
                        সমস্যার ধরন
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="border-black h-12">
                            <SelectValue placeholder="নির্বাচন করুন" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="border-black rounded-none">
                          <SelectItem value="extortion">চাঁদাবাজি</SelectItem>
                          <SelectItem value="land-grabbing">দখলবাজি</SelectItem>
                          <SelectItem value="injustice">
                            অন্যায় / জুলুম
                          </SelectItem>
                          <SelectItem value="other">অন্যান্য</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage className="bengali text-xs" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="bengali font-bold">
                        সমস্যার বিবরণ
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="বিস্তারিত লিখুন..."
                          className="border-black min-h-[150px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="bengali text-xs" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="bengali font-bold">
                        ফোন নম্বর (ঐচ্ছিক)
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="০১৭০০-০০০০০০"
                          className="border-black h-12"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription className="bengali text-[10px] text-neutral-400">
                        জরুরি প্রয়োজনে যোগাযোগ করার জন্য।
                      </FormDescription>
                      <FormMessage className="bengali text-xs" />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="bengali w-full bg-primary h-14 text-lg font-bold text-white transition-none hover:bg-primary"
                >
                  দাখিল করুন
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
