import React from 'react'
import IssueTable from './IssueTable'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Issue Tracker</h1>
      <div className="w-full max-w-5xl">
        <IssueTable />
      </div>
    </div>
  )
}

export default App
