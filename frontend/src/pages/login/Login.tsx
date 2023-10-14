import { SubmitHandler, UseFormRegister, useForm } from "react-hook-form";
import {
  loginSchema,
  LoginSchema,
  loginSchemaDefaultValues,
} from "./utils/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import clsx from "clsx";
import { axiosInstance } from "../../api/axios";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const isFormFilled = email.trim() && password.trim();

  const loginMethods = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: loginSchemaDefaultValues,
  });

  const {
    handleSubmit,
    formState: { errors },
  } = loginMethods;

  const onSubmit: SubmitHandler<LoginSchema> = (data) => {
    console.log(data);
  };

  axiosInstance.get("/").then((res) => console.log(res));

  return (
    <div className="flex flex-col mt-[10rem] items-center">
      <div className="w-1/3">
        <h1 className="text-[2rem] text-center text-brown-500">
          Bienvenue sur Maze Warriors !
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-[1rem] mt-[2rem]"
        >
          <InputWithLabel
            label="Email"
            name="email"
            type="email"
            placeholder="jean@dupont.fr"
            errorMessage={errors.email?.message}
            register={loginMethods.register}
            onInputChange={(value) => setEmail(value)}
          />
          <InputWithLabel
            label="Mot de passe"
            name="password"
            type="password"
            errorMessage={errors.password?.message}
            register={loginMethods.register}
            onInputChange={(value) => setPassword(value)}
          />
          <button
            type="submit"
            className={clsx("text-[1.5rem] py-[0.5rem] rounded-md", {
              "bg-brown-500 text-white": isFormFilled,
              "bg-white text-brown-500 border border-brown-500 cursor-not-allowed":
                !isFormFilled,
            })}
            disabled={!isFormFilled}
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}

interface InputWithLabelProps {
  label: string;
  name: "email" | "password";
  placeholder?: string;
  type: string;
  errorMessage?: string;
  register: UseFormRegister<LoginSchema>;
  onInputChange: (value: string) => void;
}

const InputWithLabel = ({
  label,
  name,
  placeholder,
  type,
  errorMessage,
  register,
  onInputChange,
}: InputWithLabelProps) => {
  return (
    <div className="flex flex-col gap-[0.5rem]">
      <label
        htmlFor={name}
        className="text-brown-500 font-medium text-[1.25rem]"
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        placeholder={placeholder}
        className="border-[.15rem] text-brown-500 border-brown-500 rounded-xl p-[0.5rem] focus:text-brown-700 focus:border-brown-700 focus:outline-none"
        {...register(name, {})}
        onChange={(e) => onInputChange(e.target.value)}
      />
      {errorMessage && (
        <span className="text-red-500 text-[1rem]">{errorMessage}</span>
      )}
    </div>
  );
};
