"use client";

import { SubmitButton } from "@/components/ui";
import { getEndpointURL } from "@/lib/api/getEndpointURL";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitEvent, useState } from "react";

type LoginResponse = {
  success?: boolean;
  message?: string;
  data?: {
    user?: {
      id?: string;
      email?: string;
      role?: string;
    };
  };
};

export const LoginForm = ({ className }: { className?: string }) => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch(getEndpointURL("/auth/login"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      let result: LoginResponse | null = null;
      try {
        result = (await response.json()) as LoginResponse;
      } catch {
        // Ignore non-JSON responses and use fallback error message below.
      }

      if (!response.ok || !result?.success) {
        setErrorMessage(
          result?.message || "Login failed. Please verify your credentials.",
        );
        return;
      }

      router.push("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`${className} card round padding-small flex justify-center`}
    >
      <form
        className="p-10 flex flex-col items-center gap-8 max-w-125 min-w-80"
        onSubmit={handleSubmit}
      >
        <h1>Login</h1>
        <div className="w-full flex flex-col gap-3">
          <input
            className="w-full input"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            autoComplete="email"
            required
          />
          <input
            className="w-full input"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoComplete="current-password"
            required
          />
        </div>
        {errorMessage && (
          <p className="w-full text-red-500 text-center text-sm whitespace-nowrap overflow-x-auto">
            {errorMessage}
          </p>
        )}
        <SubmitButton
          buttonId={"ccm-portal-login-submit"}
          className="w-full"
          disabled={isLoading}
          page={"login"}
          style="primary"
          text={isLoading ? "Logging In..." : "Login"}
        />
        <p className="w-full text-xs text-(--medium-gray)">
          By continuing, you agree to our{" "}
          <Link className="underline" href="/terms-of-service">
            terms of service
          </Link>
          .
        </p>
      </form>
    </div>
  );
};
