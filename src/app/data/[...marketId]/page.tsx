'use client';

import React, { useState } from 'react';
import { GoogleAnalytics } from '@next/third-parties/google'
import ComponentWrapper from '@/components/MarketData/ComponentWrapper';
import CarouselSlider from '@/components/MarketData/CarouselSlider';
import TradingChart from '@/components/MarketData/TradingChart';
import MarketList from '@/components/MarketData/MarketsList';
import OrderBook from '@/components/MarketData/OrderBook';
import TradeHistory from '@/components/MarketData/TradeHistory';
import MarketDepth from '@/components/MarketData/MarketDepth';
import MarketInformation from '@/components/MarketData/MarketInformation';
import AdditionalDetails from '@/components/MarketData/AdditionalDetails';
import MarketsBar from '@/components/MarketData/MarketsBar';
import Footer from '@/components/MarketData/Footer';
import Navbar from '@/components/Shared/Navbar';
import '@/app/data/css/styles.css';

const Page = () => {
  const [refreshKey, setRefreshKey] = useState(0);

  // Function to increment the refreshKey, triggering refresh
  const refreshData = () => setRefreshKey(prevKey => prevKey + 1);

  return (
    <main className='w-full'>
      <Navbar />
      <GoogleAnalytics gaId="G-9PEVYHKFL5" />
      <CarouselSlider />
      <button
        onClick={refreshData}
        className="fixed bottom-4 right-4 bg-lightgrey hover:opacity-50 text-white font-bold p-4 rounded-full"
        style={{width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
      >
        ↻
      </button>
      <ComponentWrapper>
        <div className='w-full flex flex-col'>
          <div className='w-full grid grid-cols-1 lg:grid-cols-[1.9fr,1fr] lg:gap-0 gap-8 justify-center items-start py-2 sm:py-6'>
            <div className='w-full flex justify-center items-center'>
              <div className='w-full max-w-[700px] lg:max-w-none bg-transparent h-full'>
                <MarketsBar />
                <TradingChart />
              </div>
            </div>
            <div className='w-full flex justify-center items-center'>
              <MarketList />
            </div>
          </div>
          <div className='w-full grid grid-cols-1 xl:grid-cols-[1.9fr,1fr] gap-6 xl:gap-0 justify-center items-start pt-6 pb-10 sm:pb-10'>
            <OrderBook />
            <div className='w-full gap-y-4 gap-x-4 flex flex-col md:flex-row xl:flex-col'>
              <TradeHistory />
              <MarketDepth />
            </div>
          </div>
        </div>
      </ComponentWrapper>
      <div className='w-full bg-[#e0e0e0] dark:bg-[#01171E] py-6'>
        <ComponentWrapper>
          <div className='w-full grid gap-6 grid-cols-1 lg:grid-cols-2 py-3 items-start'>
            <MarketInformation />
            <AdditionalDetails />
          </div>
        </ComponentWrapper>
      </div>
      <Footer />
    </main>
  );
};

export default Page;