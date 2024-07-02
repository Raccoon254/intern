import Logo from "@/app/components/Logo"
const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Logo />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="text-xl">Page Not Found</p>
        <p className="text-xl">The resource is not available</p>
      </div>
    </div>
  );
}

export default NotFound