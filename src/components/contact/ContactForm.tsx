import { useForm } from "react-hook-form";
import { useState } from "react";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const [isSubmitted, setIsSubmitted] = useState(false);

  async function onSubmit(data: ContactFormData) {
    // TODO: replace with real Formspree endpoint once client sets one up
    console.log("Form submitted:", data);
    setIsSubmitted(true);
    reset();
  }

  if (isSubmitted) {
    return (
      <div className="border border-gold p-8 text-center">
        <p className="font-display text-2xl text-charcoal dark:text-warmwhite mb-2">
          Message Sent
        </p>
        <p className="font-body text-stone-dark dark:text-stone">
          Thank you for reaching out. We'll get back to you within 1–2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div>
        <label className="font-body text-sm text-stone-dark dark:text-stone block mb-2">
          Name
        </label>
        <input
          {...register("name", { required: "Please enter your name" })}
          className="w-full bg-transparent border border-stone/40 px-4 py-3 text-charcoal dark:text-warmwhite focus:outline-none focus:border-gold transition-colors"
        />
        {errors.name && (
          <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="font-body text-sm text-stone-dark dark:text-stone block mb-2">
          Email
        </label>
        <input
          type="email"
          {...register("email", {
            required: "Please enter your email",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email",
            },
          })}
          className="w-full bg-transparent border border-stone/40 px-4 py-3 text-charcoal dark:text-warmwhite focus:outline-none focus:border-gold transition-colors"
        />
        {errors.email && (
          <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="font-body text-sm text-stone-dark dark:text-stone block mb-2">
          Message
        </label>
        <textarea
          rows={5}
          {...register("message", { required: "Please enter a message" })}
          className="w-full bg-transparent border border-stone/40 px-4 py-3 text-charcoal dark:text-warmwhite focus:outline-none focus:border-gold transition-colors resize-none"
        />
        {errors.message && (
          <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-gold text-charcoal font-body text-sm uppercase tracking-wider px-8 py-4 hover:bg-charcoal hover:text-warmwhite dark:hover:bg-warmwhite transition-colors disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}