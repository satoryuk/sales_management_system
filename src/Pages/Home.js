// export default function Home() {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <h1 className="text-5xl font-bold text-red-500">Home</h1>
//     </div>
//   );
// }

export default function Home() {
  return (
    // <div>
    //   <h1>Home</h1>
    // </div>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      {/* Search Section */}
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Search for Resources
      </h2>
      <div className="relative w-full max-w-lg">
        <input
          type="text"
          placeholder="Enter your search terms ..."
          className="w-full px-5 py-3 border rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-400 hover:bg-green-500 text-white rounded-full p-3">
          ➜
        </button>
      </div>

      {/* Browse Categories */}
      <p className="mt-6 text-gray-600">
        Or <span className="font-semibold">Browse</span> categories
      </p>

      {/* Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {[
          { title: "Assistance", icon: "🛠️" },
          { title: "User Guides", icon: "📖" },
          { title: "Developers", icon: "⚙️" },
        ].map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center p-6 bg-white shadow-lg rounded-2xl transition hover:shadow-xl"
          >
            <div className="text-4xl">{item.icon}</div>
            <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-500 text-center mt-2">
              Have a problem using a feature? A bug? Get some help.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
