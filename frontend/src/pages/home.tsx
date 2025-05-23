import { ClipboardDocumentIcon } from '@heroicons/react/16/solid'
import axios from 'axios'
import { ArrowLeftRightIcon, BoxIcon, ClockIcon, WalletIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

interface SolanaStat {
	averageBlockTime: string
	blockHeight: number
	epoch: number
	epochProgressPercent: string
	estimatedDailyTransactions: number
	estimatedEpochTimeRemaining: string
	slot: number
	totalBlocks: number
	totalSupply: string
	totalTransactions: number
	tps: number
	walletAddresses: number
}

const generateChartData = (): number[] => {
	return Array.from({ length: 36 }, () => 40 + Math.random() * 50)
}

export const Home = () => {
	const [solanaStats, setSolanaStats] = useState<SolanaStat>()
	const [activeTab, setActiveTab] = useState<string>('30m')
	const [chartData, setChartData] = useState<number[]>(generateChartData())

	const tpsOptions = ['30m', '2h', '6h']

	useEffect(() => {
		const fetchStats = async () => {
			try {
				const response = await axios.get('http://82.25.93.96:3000/api/stats')
				setSolanaStats(response.data)
			} catch (err) {
				console.error(err)
			}
		}

		fetchStats()
	}, [])

	const regenerateChart = () => {
		setChartData(generateChartData())
	}

	const handleTabClick = (tab: string) => {
		setActiveTab(tab)
		regenerateChart()
	}

	const formatWithKPriority = (number: number) => {
		if (number < 1000) return number.toString()
		if (number < 1_000_000) {
			return (number / 1000).toFixed(1).replace(/\.0$/, '') + 'K'
		}
		if (number < 1_000_000_000) {
			return (number / 1000).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',') + 'K'
		}
		return (number / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B'
	}

	return (
		<div className="text-white bg-[#121212] min-h-screen font-sans">
			<header className="sticky top-0 z-50 h-16 flex items-center bg-[#1e1e1e] border-b border-[#2c2c2c] px-6">
				<div className="max-w-screen-xl flex items-center justify-between px-6 mx-auto w-full">
					<div className="flex items-center font-bold text-lg">
						<img src="/logo.png" alt="Modl logo" className="w-7 h-7 mr-2" />
						Modl{' '}
						<span className="ml-2 bg-[#333] text-sm text-[#b0b0b0] px-2 py-0.5 rounded">
							Explorer [BETA]
						</span>
					</div>
				</div>
			</header>

			<main className="max-w-screen-xl mx-auto px-6 py-6">
				<section className="grid grid-rows-2 grid-cols-3 gap-2 mb-6">
					<article className="flex items-center bg-[#1e1e1e] rounded-lg p-3 space-between gap-2">
						<div className="flex flex-col gap-1">
							<h2 className="text-base text-[#FFFFFFCC] leading-4">Circulating Supply</h2>
							<div className="text-3xl font-bold flex items-center">
								{solanaStats?.totalSupply} <span className="text-xl text-[#b0b0b0] ml-2">MODL</span>
							</div>
							<div className="text-sm text-[#4d8bf9] mt-2">100% Circulating (Fixed Supply)</div>
						</div>
					</article>
					<article className="flex items-center bg-[#1e1e1e] rounded-lg p-3 space-between gap-2">
						<BoxIcon className="size-6 shrink-0" />
						<div className="flex flex-col">
							<h2 className="text-sm text-[#A0AEC0] leading-4">Total blocks</h2>
							<h1 className="font-medium text-lg text-[#FFFFFFEB]">
								{new Intl.NumberFormat('en-US').format(solanaStats?.totalBlocks ?? 0)}
							</h1>
						</div>
					</article>
					<article className="flex items-center bg-[#1e1e1e] rounded-lg p-3 space-between gap-2">
						<ArrowLeftRightIcon className="size-6 shrink-0" />
						<div className="flex flex-col">
							<h2 className="text-sm text-[#A0AEC0] leading-4">Total transactions</h2>
							<h1 className="font-medium text-lg text-[#FFFFFFEB]">
								{new Intl.NumberFormat('en-US').format(solanaStats?.totalTransactions ?? 0)}
							</h1>
						</div>
					</article>
					<article className="flex items-start bg-[#1e1e1e] rounded-lg p-3 space-between gap-2">
						<div className="flex flex-col gap-1">
							<h2 className="text-base text-[#FFFFFFCC] leading-4">Daily transactions</h2>
							<h1 className="font-medium text-3xl text-[#FFFFFFCC]">
								{formatWithKPriority(solanaStats?.estimatedDailyTransactions ?? 0)}
							</h1>
						</div>
					</article>
					<article className="flex items-center bg-[#1e1e1e] rounded-lg p-3 space-between gap-2">
						<WalletIcon className="size-6 shrink-0" />
						<div className="flex flex-col">
							<h2 className="text-sm text-[#A0AEC0] leading-4">Wallet addresses</h2>
							<h1 className="font-medium text-lg text-[#FFFFFFEB]">
								{solanaStats?.walletAddresses}
							</h1>
						</div>
					</article>
					<article className="flex items-center bg-[#1e1e1e] rounded-lg p-3 space-between gap-2">
						<ClockIcon className="size-6 shrink-0" />
						<div className="flex flex-col">
							<h2 className="text-sm text-[#A0AEC0] leading-4">Average block time</h2>
							<h1 className="font-medium text-lg text-[#FFFFFFEB]">
								{solanaStats?.averageBlockTime}s
							</h1>
						</div>
					</article>
				</section>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div className="bg-[#1e1e1e] rounded-lg shadow-lg p-6">
						<h3 className="text-lg font-semibold mb-4">Live Cluster Stats</h3>
						<table className="w-full text-sm text-[#b0b0b0]">
							<tbody>
								<tr className="border-b border-white/20">
									<td className="py-3">Slot</td>
									<td className="text-right text-white">{solanaStats?.slot}</td>
								</tr>
								<tr className="border-b border-white/20">
									<td className="py-3">Block height</td>
									<td className="text-right text-white">{solanaStats?.blockHeight}</td>
								</tr>
								<tr className="border-b border-white/20">
									<td className="py-3">Cluster time</td>
									<td className="text-right text-white">{new Date().toUTCString()}</td>
								</tr>
								<tr className="border-b border-white/20">
									<td className="py-3">Slot time (1min average)</td>
									<td className="text-right text-white">400ms</td>
								</tr>
								<tr className="border-b border-white/20">
									<td className="py-3">Slot time (1hr average)</td>
									<td className="text-right text-white">400ms</td>
								</tr>
								<tr className="border-b border-white/20">
									<td className="py-3">Epoch</td>
									<td className="text-right py-3 text-white flex justify-end items-center">
										{solanaStats?.epoch}{' '}
										<ClipboardDocumentIcon className="ml-2 size-4 text-[#4d8bf9] cursor-pointer" />
									</td>
								</tr>
								<tr className="border-b border-white/20">
									<td className="py-3">Epoch progress</td>
									<td className="text-right text-white">{solanaStats?.epochProgressPercent}%</td>
								</tr>
								<tr>
									<td className="py-3">Epoch time remaining (approx.)</td>
									<td className="text-right text-white">
										{solanaStats?.estimatedEpochTimeRemaining}
									</td>
								</tr>
							</tbody>
						</table>
					</div>

					<div className="bg-[#1e1e1e] h-full rounded-lg shadow-md mb-6 overflow-hidden text-white">
						<div className="p-6">
							<h3 className="text-lg font-semibold mb-4">Live Transaction Stats</h3>

							<table className="w-full border-collapse mb-4">
								<tbody>
									<tr className="border-b border-[#2c2c2c]">
										<td className="py-4 text-[#b0b0b0]">Transaction count</td>
										<td className="py-4 text-right text-white font-medium">
											{new Intl.NumberFormat('en-US').format(solanaStats?.totalTransactions ?? 0)}
										</td>
									</tr>
									<tr className="border-b border-[#2c2c2c]">
										<td className="py-4 text-[#b0b0b0]">Transactions per second (TPS)</td>
										<td className="py-4 text-right text-white font-medium">{solanaStats?.tps}</td>
									</tr>
								</tbody>
							</table>

							<div className="pt-4">
								<div className="flex justify-end mb-4 space-x-1">
									{tpsOptions.map(option => (
										<button
											key={option}
											onClick={() => handleTabClick(option)}
											className={`px-4 py-1 text-sm border border-[#2c2c2c] transition-all rounded ${
												activeTab === option
													? 'bg-[#4d8bf9] text-white'
													: 'bg-[#2c2c2c] text-[#b0b0b0]'
											}`}>
											{option}
										</button>
									))}
								</div>

								<div className="relative h-44">
									<div className="absolute inset-x-0 top-0 flex justify-between text-[#b0b0b0] text-sm px-2">
										<div>3</div>
										<div>2</div>
										<div>1</div>
										<div>0</div>
									</div>
									<div className="flex items-end gap-0.5 h-full px-2 pt-6" id="chartBars">
										{chartData.map((value, idx) => (
											<div
												key={idx}
												className="flex-1 bg-[#4d8bf9]"
												style={{ height: `${value}%` }}
												title={`TPS: ${value.toFixed(1)}`}
											/>
										))}
									</div>
								</div>

								<p className="text-center text-[#b0b0b0] text-sm mt-4">
									For transaction confirmation time statistics, please visit{' '}
									<a
										href="https://validators.app"
										target="_blank"
										className="text-[#4d8bf9] underline">
										validators.app
									</a>{' '}
									or{' '}
									<a
										href="https://solscan.io/token/9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump"
										target="_blank"
										className="text-[#4d8bf9] underline">
										solscan.io
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}
