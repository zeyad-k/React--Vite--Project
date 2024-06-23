const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="200"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="mb-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
      <h1 className="text-xl font-bold">404 - Page Not Found</h1>
      <p className="mt-2">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
    </div>
  );
};

export default ErrorPage;