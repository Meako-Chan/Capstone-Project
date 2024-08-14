import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
    const loggedIn = { firstName: 'Michael'};


    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                <HeaderBox
                    type="greeting"
                    title="Welcome"
                    user={loggedIn?.firstName || 'Guest'}
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
