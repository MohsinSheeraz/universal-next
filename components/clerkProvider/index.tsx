import { ClerkProvider } from "@clerk/nextjs";

type Prop = {
  children: JSX.Element;
};
export default function ClerkWrapProvider({ children }: Prop) {
  return <ClerkProvider>{children}</ClerkProvider>;
}
