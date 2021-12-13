const HomePage = () => {
  return (
    <div>
      <nav className="flex space-x-4">
        {[
          ['Home', '/dashboard'],
          ['Team', '/team'],
          ['Team', '/projects'],
          ['Reports', '/reports']
        ].map(([title, url]) => (
          <a
            href={url}
            className="rounded-lg px-3 py-2 text-gray-700 font-medium hover:bg-gray-100 hover:text-gray-900"
          >
            {title}
          </a>
        ))}
      </nav>
    </div>
  )
}

export default HomePage
