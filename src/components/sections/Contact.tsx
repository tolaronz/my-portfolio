import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const INITIAL_STATE = Object.fromEntries(
  Object.keys(config.contact.form).map((input) => [input, ""])
);

const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  accessToken:
    import.meta.env.VITE_EMAILJS_ACCESS_TOKEN ??
    import.meta.env.VITE_EMAIL_JS_ACCESS_TOKEN,
};

const Contact = () => {
  const formRef = useRef<React.LegacyRef<HTMLFormElement> | undefined>();
  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  ) => {
    if (e === undefined) return;
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | undefined) => {
    if (e === undefined) return;
    e.preventDefault();
    setLoading(true);

    if (
      !emailjsConfig.serviceId ||
      !emailjsConfig.templateId ||
      !emailjsConfig.accessToken
    ) {
      setLoading(false);
      alert(
        "Email service is not configured. Please set EmailJS environment variables."
      );
      return;
    }

    emailjs
      .send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: form.name,
          to_name: config.html.fullName,
          from_email: form.email,
          to_email: config.html.email,
          reply_to: form.email,
          message: form.message,
        },
        emailjsConfig.accessToken
      )
      .then(
        () => {
          setLoading(false);
          setShowSuccess(true);

          setForm(INITIAL_STATE);
        },
        (error) => {
          setLoading(false);

          console.log(error);
          alert("Something went wrong.");
        }
      );
  };

  return (
    <div
      className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-black-100 flex-[0.75] rounded-2xl p-8"
      >
        <Header useMotion={false} {...config.contact} />

        <form
          // @ts-expect-error
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          {Object.keys(config.contact.form).map((input) => {
            const { span, placeholder } =
              config.contact.form[input as keyof typeof config.contact.form];
            const Component = input === "message" ? "textarea" : "input";

            return (
              <label key={input} className="flex flex-col">
                <span className="mb-4 font-medium text-white">{span}</span>
                <Component
                  type={input === "email" ? "email" : "text"}
                  name={input}
                  value={form[`${input}`]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="bg-tertiary placeholder:text-secondary rounded-lg border-none px-6 py-4 font-medium text-white outline-none"
                  {...(input === "message" && { rows: 7 })}
                />
              </label>
            );
          })}
          <button
            type="submit"
            className="bg-tertiary shadow-primary w-fit rounded-xl px-8 py-3 font-bold text-white shadow-md outline-none"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
      >
        <EarthCanvas />
      </motion.div>

      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowSuccess(false)}
          />
          <div className="relative w-full max-w-lg rounded-3xl border border-[#E6C77D]/40 bg-[#0E0B14] p-8 text-white shadow-[0_20px_80px_-20px_rgba(0,0,0,0.8)]">
            <div className="mb-6">
              <p className="text-[13px] uppercase tracking-[0.3em] text-[#E6C77D]">
                Message Sent
              </p>
              <h3 className="mt-3 text-3xl font-semibold text-[#F7E7B3]">
                Thank you for reaching out.
              </h3>
              <p className="text-secondary mt-4 leading-relaxed">
                Your message has been delivered. I will get back to you shortly
                with a thoughtful response.
              </p>
            </div>
            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowSuccess(false)}
                className="rounded-full border border-[#E6C77D]/40 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-[#F7E7B3] transition hover:border-[#F7E7B3] hover:text-white"
              >
                Close
              </button>
            </div>
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#E6C77D]/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-12 -left-8 h-36 w-36 rounded-full bg-[#9C5BFF]/20 blur-3xl" />
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
