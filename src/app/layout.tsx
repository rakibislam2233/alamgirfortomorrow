import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

// Since we have a `[locale]` dynamic segment, we can define the root layout here.
export default function RootLayout({ children }: Props) {
  return children;
}
