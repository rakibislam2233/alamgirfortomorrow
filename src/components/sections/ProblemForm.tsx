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
import { useLanguage } from "@/context/LanguageContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

export function ProblemForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { language } = useLanguage();

  const formSchema = z.object({
    name: z.string().min(2, {
      message:
        language === "bn"
          ? "অনুগ্রহ করে আপনার নাম লিখুন।"
          : "Please enter your name.",
    }),
    area: z.string().min(2, {
      message:
        language === "bn"
          ? "আপনার এলাকার নাম লিখুন।"
          : "Please enter your area.",
    }),
    problemType: z.string().min(1, {
      message:
        language === "bn"
          ? "সমস্যার ধরন নির্বাচন করুন।"
          : "Please select a problem type.",
    }),
    description: z.string().min(10, {
      message:
        language === "bn"
          ? "সমস্যার বিস্তারিত বিবরণ দিন (অন্তত ১০ অক্ষর)।"
          : "Please describe the problem (at least 10 chars).",
    }),
    phone: z.string().optional(),
  });

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
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <div className="w-full bg-primary p-8 sm:p-12 text-white">
        <h3 className="bengali text-2xl sm:text-3xl font-bold mb-4">
          {language === "bn" ? "ধন্যবাদ!" : "Thank You!"}
        </h3>
        <p className="bengali text-lg sm:text-xl leading-relaxed">
          {language === "bn"
            ? "আপনার সমস্যাটি সফলভাবে জমা দেওয়া হয়েছে। আমরা আপনার সাথে শীঘ্রই যোগাযোগ করব।"
            : "Your problem has been submitted successfully. We will contact you soon."}
        </p>
        <Button
          variant="outline"
          onClick={() => setIsSubmitted(false)}
          className="mt-8 border-white text-primary"
        >
          {language === "bn" ? "আরেকটি সমস্যা জানান" : "Report another problem"}
        </Button>
      </div>
    );
  }

  return (
    <section
      id="report-problem"
      className="bg-neutral-50 py-24 md:py-32 border-b border-primary"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          <div>
            <span className="bengali text-sm font-bold uppercase tracking-widest text-primary mb-4 block italic">
              — {language === "bn" ? "সরাসরি অভিযোগ" : "Direct Complaint"}
            </span>
            <h2 className="bengali text-3xl font-black tracking-tight text-black sm:text-4xl md:text-5xl lg:text-6xl mb-8">
              {language === "bn"
                ? "আপনার অভিযোগ বা সমস্যা আমাদের জানান"
                : "Report Your Complaints or Problems"}
            </h2>
            <p className="bengali text-xl text-neutral-600 leading-relaxed mb-8">
              {language === "bn"
                ? "আপনার এলাকার সমস্যা যেমন চাঁদাবাজি, দখলবাজি বা অন্য কোনো অনিয়মের কথা সরাসরি আমাদের জানান। আপনার পরিচয় গোপন রাখা হবে।"
                : "Report issues in your area such as extortion, occupation, or any other irregularities directly to us. Your identity will be kept confidential."}
            </p>
            <div className="p-8 bg-white border border-primary italic text-sm text-neutral-500">
              {language === "bn"
                ? "প্রাইভেসি ডিসক্লেমার: আপনার ব্যক্তিগত তথ্য শুধুমাত্র সমস্যা সমাধানের উদ্দেশ্যে ব্যবহার করা হবে এবং তা তৃতীয় পক্ষের কাছে প্রকাশ করা হবে না।"
                : "Privacy Disclaimer: Your personal information will only be used for the purpose of resolving the issue and will not be disclosed to third parties."}
            </div>
          </div>

          <div className="bg-white p-8 sm:p-10 md:p-14 border border-primary">
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
                        <FormLabel className="bengali font-bold text-sm sm:text-base">
                          {language === "bn" ? "আপনার নাম" : "Your Name"}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={
                              language === "bn" ? "নাম লিখুন" : "Enter name"
                            }
                            className="border-primary h-12"
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
                        <FormLabel className="bengali font-bold text-sm sm:text-base">
                          {language === "bn" ? "এলাকা/গ্রাম" : "Area/Village"}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={
                              language === "bn" ? "এলাকার নাম" : "Area name"
                            }
                            className="border-primary h-12"
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
                      <FormLabel className="bengali font-bold text-sm sm:text-base">
                        {language === "bn" ? "সমস্যার ধরন" : "Problem Type"}
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="border-primary h-12">
                            <SelectValue
                              placeholder={
                                language === "bn" ? "নির্বাচন করুন" : "Select"
                              }
                            />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="border-primary rounded-none">
                          <SelectItem value="extortion">
                            {language === "bn" ? "চাঁদাবাজি" : "Extortion"}
                          </SelectItem>
                          <SelectItem value="land-grabbing">
                            {language === "bn" ? "দখলবাজি" : "Land Grabbing"}
                          </SelectItem>
                          <SelectItem value="injustice">
                            {language === "bn"
                              ? "অন্যায় / জুলুম"
                              : "Injustice / Oppression"}
                          </SelectItem>
                          <SelectItem value="other">
                            {language === "bn" ? "অন্যান্য" : "Others"}
                          </SelectItem>
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
                      <FormLabel className="bengali font-bold text-sm sm:text-base">
                        {language === "bn"
                          ? "সমস্যার বিবরণ"
                          : "Description of the Problem"}
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={
                            language === "bn"
                              ? "বিস্তারিত লিখুন..."
                              : "Write in detail..."
                          }
                          className="border-primary min-h-[150px]"
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
                      <FormLabel className="bengali font-bold text-sm sm:text-base">
                        {language === "bn"
                          ? "ফোন নম্বর (ঐচ্ছিক)"
                          : "Phone Number (Optional)"}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="০১৭০০-০০০০০০"
                          className="border-primary h-12"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription className="bengali text-[10px] text-neutral-400">
                        {language === "bn"
                          ? "জরুরি প্রয়োজনে যোগাযোগ করার জন্য।"
                          : "To contact in case of emergency."}
                      </FormDescription>
                      <FormMessage className="bengali text-xs" />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="bengali w-full bg-primary h-14 text-lg font-bold text-white transition-none hover:bg-primary"
                >
                  {language === "bn" ? "দাখিল করুন" : "Submit"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
