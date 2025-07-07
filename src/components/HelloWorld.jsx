function HelloWorld({ text = "Hello World", className = "" }) {
  return (
    <h1 className={`text-4xl font-bold text-gray-800 hover:text-indigo-600 transition-colors duration-300 ${className}`}>
      {text}
    </h1>
  )
}

export default HelloWorld 