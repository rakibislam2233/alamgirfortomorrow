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
  const { language, t } = useLanguage();

  const formSchema = z.object({
    name: z.string().min(2, {
      message: t.problemForm.validation.name,
    }),
    area: z.string().min(2, {
      message: t.problemForm.validation.area,
    }),
    problemType: z.string().min(1, {
      message: t.problemForm.validation.type,
    }),
    description: z.string().min(10, {
      message: t.problemForm.validation.description,
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
      <div className="w-full container mx-auto px-4 sm:px-6 bg-primary py-8 sm:py-12 text-white mt-24 md:mt-32">
        <h3 className="bengali text-2xl sm:text-3xl font-bold mb-4">
          {t.problemForm.successTitle}
        </h3>
        <p className="bengali text-lg sm:text-xl leading-relaxed">
          {t.problemForm.successMessage}
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          className="mt-8 bg-white border-white text-primary hover:bg-white/90 hover:text-primary cursor-pointer"
        >
          {t.problemForm.reportAnother}
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
              — {t.problemForm.label}
            </span>
            <h2 className="bengali text-3xl font-black tracking-tight text-black sm:text-4xl md:text-5xl lg:text-6xl mb-8">
              {t.problemForm.title}
            </h2>
            <p className="bengali text-xl text-neutral-600 leading-relaxed mb-8">
              {t.problemForm.description}
            </p>
            <div className="p-8 bg-white border border-primary italic text-sm text-neutral-500">
              {t.problemForm.disclaimer}
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
                          {t.problemForm.fields.name}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t.problemForm.fields.namePlaceholder}
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
                          {t.problemForm.fields.area}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t.problemForm.fields.areaPlaceholder}
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
                        {t.problemForm.fields.problemType}
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="border-primary h-12">
                            <SelectValue
                              placeholder={
                                t.problemForm.fields.problemTypePlaceholder
                              }
                            />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="border-primary rounded-none">
                          <SelectItem value="extortion">
                            {t.problemForm.fields.problemTypes.extortion}
                          </SelectItem>
                          <SelectItem value="land-grabbing">
                            {t.problemForm.fields.problemTypes.landGrabbing}
                          </SelectItem>
                          <SelectItem value="injustice">
                            {t.problemForm.fields.problemTypes.injustice}
                          </SelectItem>
                          <SelectItem value="other">
                            {t.problemForm.fields.problemTypes.other}
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
                        {t.problemForm.fields.problemDescription}
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={
                            t.problemForm.fields.problemDescriptionPlaceholder
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
                        {t.problemForm.fields.phone}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="০১৭০০-০০০০০০"
                          className="border-primary h-12"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription className="bengali text-[10px] text-neutral-400">
                        {t.problemForm.fields.phoneHint}
                      </FormDescription>
                      <FormMessage className="bengali text-xs" />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="bengali w-full bg-primary h-14 text-lg font-bold text-white transition-none hover:bg-primary cursor-pointer"
                >
                  {t.problemForm.submit}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
