import Logo from '@/app/components/Logo'

const NotFound = () => {
	return (
		<div className="flex flex-col justify-center items-center h-screen">
      <div className="mb-6">
        <Logo />
      </div>
			<div className="flex flex-col justify-center items-center">
				<h1 className="text-4xl mt-4 font-semibold">404</h1>
				<p className="text-sm text-gray-400">Page Not Found</p>
			</div>
		</div>
	)
}

export default NotFound