import { useForm } from "react-hook-form";
import { useState } from "react";
import { motion } from "framer-motion";
import { Upload } from "lucide-react";

interface ConsultationFormData {
  name: string;
  email: string;
  phone: string;
  propertyType: string;
  budget: string;
  preferredDate: string;
  message: string;
}

const PROPERTY_TYPES = ["Apartment", "House", "Office", "Restaurant", "Hotel", "Other"];
const BUDGET_RANGES = [
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000+",
];

export default function Consultation() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ConsultationFormData>();

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  async function onSubmit(data: ConsultationFormData) {
    // TODO: replace with real backend/Formspree endpoint once available
    console.log("Consultation request:", data);
    setIsSubmitted(true);
    reset();
    setFileName(null);
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    setFileName(file ? file.name : null);
  }

  if (isSubmitted) {
    return (
      <div className="pt-32 pb-24 px-6 min-h-screen flex items-center justify-center">
        <div className="max-w-md text-center border border-gold p-10">
          <p className="font-display text-3xl text-charcoal dark:text-warmwhite mb-3">
            Request Received
          </p>
          <p className="font-body text-stone-dark dark:text-stone">
            Thank you for booking a consultation. Our team will reach out within
            1–2 business days to confirm your preferred date.
          </p>
        </div>
      </div>
    );
  }

  const inputClass =
    "w-full bg-transparent border border-stone/40 px-4 py-3 text-charcoal dark:text-warmwhite focus:outline-none focus:border-gold transition-colors";
  const labelClass = "font-body text-sm text-stone-dark dark:text-stone block mb-2";
  const errorClass = "text-sm text-red-500 mt-1";

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl mx-auto"
      >
        <div className="text-center mb-14">
          <p className="font-body uppercase tracking-[0.3em] text-gold text-sm mb-4">
            Let's Begin
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-charcoal dark:text-warmwhite mb-4">
            Book a Consultation
          </h1>
          <p className="font-body text-stone-dark dark:text-stone max-w-md mx-auto">
            Tell us a little about your project and we'll be in touch to
            schedule your complimentary consultation.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className={labelClass}>Full Name</label>
              <input
                {...register("name", { required: "Please enter your name" })}
                className={inputClass}
              />
              {errors.name && <p className={errorClass}>{errors.name.message}</p>}
            </div>

            <div>
              <label className={labelClass}>Phone</label>
              <input
                type="tel"
                {...register("phone", { required: "Please enter your phone number" })}
                className={inputClass}
              />
              {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
            </div>
          </div>

          <div>
            <label className={labelClass}>Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Please enter your email",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email",
                },
              })}
              className={inputClass}
            />
            {errors.email && <p className={errorClass}>{errors.email.message}</p>}
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className={labelClass}>Property Type</label>
              <select
                {...register("propertyType", { required: "Please select a property type" })}
                className={inputClass}
                defaultValue=""
              >
                <option value="" disabled>Select one</option>
                {PROPERTY_TYPES.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              {errors.propertyType && (
                <p className={errorClass}>{errors.propertyType.message}</p>
              )}
            </div>

            <div>
              <label className={labelClass}>Estimated Budget</label>
              <select
                {...register("budget", { required: "Please select a budget range" })}
                className={inputClass}
                defaultValue=""
              >
                <option value="" disabled>Select a range</option>
                {BUDGET_RANGES.map((range) => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
              {errors.budget && <p className={errorClass}>{errors.budget.message}</p>}
            </div>
          </div>

          <div>
            <label className={labelClass}>Preferred Date</label>
            <input
              type="date"
              {...register("preferredDate", { required: "Please select a preferred date" })}
              className={inputClass}
            />
            {errors.preferredDate && (
              <p className={errorClass}>{errors.preferredDate.message}</p>
            )}
          </div>

          <div>
            <label className={labelClass}>Tell Us About Your Project</label>
            <textarea
              rows={5}
              {...register("message", { required: "Please share a few details" })}
              className={`${inputClass} resize-none`}
            />
            {errors.message && <p className={errorClass}>{errors.message.message}</p>}
          </div>

          <div>
            <label className={labelClass}>Inspiration Images (optional)</label>
            <label
              htmlFor="inspiration-upload"
              className="flex items-center gap-3 border border-dashed border-stone/40 px-4 py-6 cursor-pointer hover:border-gold transition-colors"
            >
              <Upload size={20} className="text-gold shrink-0" />
              <span className="font-body text-sm text-stone-dark dark:text-stone">
                {fileName ?? "Click to upload a reference photo"}
              </span>
            </label>
            <input
              id="inspiration-upload"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gold text-charcoal font-body text-sm uppercase tracking-wider px-8 py-4 hover:bg-charcoal hover:text-warmwhite dark:hover:bg-warmwhite transition-colors disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Request Consultation"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}