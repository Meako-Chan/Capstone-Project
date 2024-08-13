import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName:'Michael', lastName:'Chan'}

  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={{
              $id: "",
              email: "",
              userId: "",
              dwollaCustomerUrl: "",
              dwollaCustomerId: "",
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
  );
}
