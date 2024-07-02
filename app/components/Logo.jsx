const Logo = () => {
	return (
		<center>
			<div className="w-fit relative flex flex-col items-center">
				<h2 className="">
					<span className="text-green-400">Intern</span>
					Link&trade; Auth
				</h2>
				<div className="absolute top-[35px] right-0 mb-4 text-xs font-medium text-orange-800">
					By{' '}
					<a className={'text-blue-500'} href="https://futurespace.vercel.app">
						FutureSpace{' '}
					</a>
					and{' '}
					<a className={'text-blue-500'} href="https://stevetom.vercel.app">
						kenTom
					</a>
				</div>
			</div>
		</center>
	)
}

export default Logo