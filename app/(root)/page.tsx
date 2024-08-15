"use client";

import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Home = () => {
    const name = { firstName: 'Michael'};
    const router = useRouter();
    const { data: session, status } = useSession();
    console.log(session)
    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/sign-in');
        }
    }, [status, router]);

    if (status === "loading") {
        return <div>Loading...</div>; // You can replace this with a loading spinner if needed
    }
    
    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                <HeaderBox
                    type="greeting"
                    title="Welcome"
                    user={name?.firstName || 'Guest'}
                    subtext="Access and manage your account & transactions."
                />

                <TotalBalanceBox
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1250.68}
                />
                </header>
                Recent Transactions
            </div>
        </section>
  )
}

export default Home;
