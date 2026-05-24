"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, Loader2, Send } from "lucide-react";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().min(2, "Company / organisation name is required"),
  city: z.string().min(2, "City and state are required"),
  phone: z.string().min(8, "A valid phone number is required"),
  email: z.string().refine(
    (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
    "A valid email address is required"
  ),
  partnershipType: z.string().min(1, "Please select a partnership type"),
  businessDescription: z
    .string()
    .min(20, "Please give a brief description of your business (min 20 characters)"),
  productsOfInterest: z.string().optional(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const partnershipTypes = [
  "Dealer / Distributor",
  "Vendor / Supplier",
  "Technical Service Partner",
  "Other",
];

const inputBase =
  "w-full rounded-sm border bg-vertex-bg px-4 py-3 text-sm text-vertex-primary placeholder:text-vertex-muted outline-none transition-colors focus:border-vertex-accent focus:ring-1 focus:ring-vertex-accent/30";

const labelBase =
  "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-vertex-secondary";

export default function PartnershipForm() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (_data: FormValues) => {
    // TODO: POST to /api/partnership
    await new Promise((r) => setTimeout(r, 900));
    setIsSuccess(true);
    reset();
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-vertex-accent/15 text-vertex-accent">
          <CheckCircle size={28} />
        </div>
        <h3
          className="text-2xl font-extrabold uppercase text-vertex-primary"
          style={{ fontFamily: "var(--font-barlow-condensed)" }}
        >
          Application Received
        </h3>
        <p className="max-w-sm text-sm text-vertex-secondary">
          Thank you for your interest. We will review your application and be in touch within
          2–3 business days.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="mt-2 text-xs font-semibold text-vertex-accent transition-colors hover:text-vertex-primary"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Name + Company */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="pf-name" className={labelBase}>
            Full Name <span className="text-vertex-accent">*</span>
          </label>
          <input
            id="pf-name"
            {...register("name")}
            placeholder="Your name"
            className={cn(inputBase, errors.name ? "border-red-500/60" : "border-vertex-border")}
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-red-400">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="pf-company" className={labelBase}>
            Company / Organisation <span className="text-vertex-accent">*</span>
          </label>
          <input
            id="pf-company"
            {...register("company")}
            placeholder="Your company"
            className={cn(inputBase, errors.company ? "border-red-500/60" : "border-vertex-border")}
          />
          {errors.company && (
            <p className="mt-1.5 text-xs text-red-400">{errors.company.message}</p>
          )}
        </div>
      </div>

      {/* City + Phone */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="pf-city" className={labelBase}>
            City &amp; State <span className="text-vertex-accent">*</span>
          </label>
          <input
            id="pf-city"
            {...register("city")}
            placeholder="e.g. Hyderabad, Telangana"
            className={cn(inputBase, errors.city ? "border-red-500/60" : "border-vertex-border")}
          />
          {errors.city && (
            <p className="mt-1.5 text-xs text-red-400">{errors.city.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="pf-phone" className={labelBase}>
            Phone Number <span className="text-vertex-accent">*</span>
          </label>
          <input
            id="pf-phone"
            {...register("phone")}
            type="tel"
            placeholder="+91 XXXXX XXXXX"
            className={cn(inputBase, errors.phone ? "border-red-500/60" : "border-vertex-border")}
          />
          {errors.phone && (
            <p className="mt-1.5 text-xs text-red-400">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Email + Partnership type */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="pf-email" className={labelBase}>
            Email Address <span className="text-vertex-accent">*</span>
          </label>
          <input
            id="pf-email"
            {...register("email")}
            type="email"
            placeholder="you@company.com"
            className={cn(inputBase, errors.email ? "border-red-500/60" : "border-vertex-border")}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-400">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="pf-partnershipType" className={labelBase}>
            Partnership Type <span className="text-vertex-accent">*</span>
          </label>
          <select
            id="pf-partnershipType"
            {...register("partnershipType")}
            className={cn(
              inputBase,
              "cursor-pointer appearance-none",
              errors.partnershipType ? "border-red-500/60" : "border-vertex-border"
            )}
          >
            <option value="" disabled>
              Select type…
            </option>
            {partnershipTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {errors.partnershipType && (
            <p className="mt-1.5 text-xs text-red-400">{errors.partnershipType.message}</p>
          )}
        </div>
      </div>

      {/* Business description */}
      <div>
        <label htmlFor="pf-businessDescription" className={labelBase}>
          About Your Business <span className="text-vertex-accent">*</span>
        </label>
        <textarea
          id="pf-businessDescription"
          {...register("businessDescription")}
          rows={3}
          placeholder="Describe your current business activities, market presence, and industry focus…"
          className={cn(
            inputBase,
            "resize-none",
            errors.businessDescription ? "border-red-500/60" : "border-vertex-border"
          )}
        />
        {errors.businessDescription && (
          <p className="mt-1.5 text-xs text-red-400">{errors.businessDescription.message}</p>
        )}
      </div>

      {/* Products of interest */}
      <div>
        <label htmlFor="pf-productsOfInterest" className={labelBase}>
          Products / Lines of Interest
        </label>
        <input
          id="pf-productsOfInterest"
          {...register("productsOfInterest")}
          placeholder="e.g. Hydraulic Seals, Industrial Valves, Full Range"
          className={cn(inputBase, "border-vertex-border")}
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="pf-message" className={labelBase}>Additional Information</label>
        <textarea
          id="pf-message"
          {...register("message")}
          rows={3}
          placeholder="Anything else you'd like us to know — your geographic focus, existing customer base, current suppliers…"
          className={cn(inputBase, "resize-none border-vertex-border")}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-vertex-accent px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-vertex-accent-hover disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-[200px]"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={15} className="animate-spin" />
            Submitting…
          </>
        ) : (
          <>
            <Send size={14} />
            Submit Application
          </>
        )}
      </button>
    </form>
  );
}
