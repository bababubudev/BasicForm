export interface InputParams {
  id: number;
  name: string;
  type: "text" | "email" | "password" | "number";
  placeholder: string;
  autoComplete?: "true" | "false" | "null";
}