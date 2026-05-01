"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, Loader2, Send } from "lucide-react";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().min(2, "Company name is required"),
  phone: z.string().min(8, "A valid phone number is required"),
  email: z.string().optional().refine(
    (val) => !val || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
    "Invalid email address"
  ),
  product: z.string().min(1, "Please select a product"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

interface EnquiryFormProps {
  defaultProduct?: string;
  className?: string;
}

const productOptions = [
  "Hydraulic Seals",
  "Hydraulic Cylinders",
  "Industrial Valves",
  "Other",
];

const inputBase =
  "w-full rounded-sm border bg-[#0a0a0a] px-4 py-3 text-sm text-[#f0f0f0] placeholder-[#444] outline-none transition-colors focus:border-[#1a56db] focus:ring-1 focus:ring-[#1a56db]/30";

const labelBase = "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#888888]";

export default function EnquiryForm({ defaultProduct = "", className }: EnquiryFormProps) {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { product: defaultProduct },
  });

  const onSubmit = async (_data: FormValues) => {
    // TODO: POST to /api/enquiry
    await new Promise((r) => setTimeout(r, 900));
    setIsSuccess(true);
    reset();
  };

  if (isSuccess) {
    return (
      <div className={cn("flex flex-col items-center justify-center gap-4 py-16 text-center", className)}>
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1a56db]/15 text-[#1a56db]">
          <CheckCircle size={28} />
        </div>
        <h3
          className="text-2xl font-extrabold uppercase text-[#f0f0f0]"
          style={{ fontFamily: "var(--font-barlow-condensed)" }}
        >
          Enquiry Received
        </h3>
        <p className="max-w-sm text-sm text-[#888888]">
          Thank you. We will review your requirement and get back to you shortly.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="mt-2 text-xs font-semibold text-[#1a56db] transition-colors hover:text-[#f0f0f0]"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={cn("space-y-5", className)}
    >
      {/* Row 1: Name + Company */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className={labelBase}>
            Name <span className="text-[#1a56db]">*</span>
          </label>
          <input
            {...register("name")}
            placeholder="Your name"
            className={cn(inputBase, errors.name ? "border-red-500/60" : "border-[#1e1e1e]")}
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-red-400">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className={labelBase}>
            Company Name <span className="text-[#1a56db]">*</span>
          </label>
          <input
            {...register("company")}
            placeholder="Your company"
            className={cn(inputBase, errors.company ? "border-red-500/60" : "border-[#1e1e1e]")}
          />
          {errors.company && (
            <p className="mt-1.5 text-xs text-red-400">{errors.company.message}</p>
          )}
        </div>
      </div>

      {/* Row 2: Phone + Email */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className={labelBase}>
            Phone Number <span className="text-[#1a56db]">*</span>
          </label>
          <input
            {...register("phone")}
            type="tel"
            placeholder="+91 XXXXX XXXXX"
            className={cn(inputBase, errors.phone ? "border-red-500/60" : "border-[#1e1e1e]")}
          />
          {errors.phone && (
            <p className="mt-1.5 text-xs text-red-400">{errors.phone.message}</p>
          )}
        </div>
        <div>
          <label className={labelBase}>Email Address</label>
          <input
            {...register("email")}
            type="email"
            placeholder="you@company.com"
            className={cn(inputBase, errors.email ? "border-red-500/60" : "border-[#1e1e1e]")}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-400">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Product */}
      <div>
        <label className={labelBase}>
          Product / Service of Interest <span className="text-[#1a56db]">*</span>
        </label>
        <select
          {...register("product")}
          className={cn(
            inputBase,
            "appearance-none cursor-pointer",
            errors.product ? "border-red-500/60" : "border-[#1e1e1e]"
          )}
        >
          <option value="" disabled>
            Select a product…
          </option>
          {productOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {errors.product && (
          <p className="mt-1.5 text-xs text-red-400">{errors.product.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className={labelBase}>Message / Requirements</label>
        <textarea
          {...register("message")}
          rows={4}
          placeholder="Describe your requirement — product type, size, quantity, application…"
          className={cn(inputBase, "resize-none border-[#1e1e1e]")}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-[#1a56db] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#1e40af] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-[180px]"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={15} className="animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send size={14} />
            Submit Enquiry
          </>
        )}
      </button>
    </form>
  );
}
