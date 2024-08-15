
import Sidebar from "@/components/Sidebar";
import { Provider } from "../provider";
import { useSession } from "next-auth/react";
import { redirect } from 'next/navigation';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  


  return (
    <Provider>
      <main className="flex h-screen w-full font-inter">
          <Sidebar user={{
              $id: "",
              email: "",
              userId: "",
              firstName: "",
              lastName: "",
              address1: "",
              city: "",
              state: "",
              postalCode: "",
              dateOfBirth: "",
              ssn: ""
            }} />
          {children}
      </main>
    </Provider>

  );
}
