'use client'
import Head from 'next/head'
import HeroCard from '@/components/heroCard'

export default function Home() {
  return (
    <main className="flex max-h-screen flex-col items-center justify-between p-24">
      <HeroCard />
    </main>
  )
}
