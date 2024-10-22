import React from 'react'

// Table component definitions remain the same
const Table: React.FC<React.HTMLAttributes<HTMLTableElement>> = (props) => (
  <table {...props} className="w-full max-w-4xl mx-auto divide-y divide-gray-200 shadow-lg rounded-lg" />
)
const TableHead: React.FC<React.HTMLAttributes<HTMLTableSectionElement>> = (props) => (
  <thead {...props} className="bg-gray-100" />
)
const TableBody: React.FC<React.HTMLAttributes<HTMLTableSectionElement>> = (props) => (
  <tbody {...props} className="bg-white divide-y divide-gray-200" />
)
const TableRow: React.FC<React.HTMLAttributes<HTMLTableRowElement>> = (props) => <tr {...props} />
const TableHeader: React.FC<React.ThHTMLAttributes<HTMLTableCellElement>> = (props) => (
  <th {...props} className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider" />
)
const TableCell: React.FC<React.TdHTMLAttributes<HTMLTableCellElement>> = (props) => (
  <td {...props} className="px-6 py-4 whitespace-nowrap" />
)
const TableCaption: React.FC<React.HTMLAttributes<HTMLTableCaptionElement>> = (props) => (
  <caption {...props} className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider" />
)
const TableFooter: React.FC<React.HTMLAttributes<HTMLTableSectionElement>> = (props) => (
  <tfoot {...props} className="bg-gray-100" />
)

type Issue = {
  issueNumber: string;
  status: 'Fixed' | 'In Progress' | 'Queued';
  issue: string;
  priority: 'Non Critical' | 'Critical' | 'Severe';
}

const issues: Issue[] = [
  { issueNumber: "ISS001", status: "Fixed", issue: "Login page not responsive", priority: "Critical" },
  { issueNumber: "ISS002", status: "In Progress", issue: "Payment gateway timeout", priority: "Severe" },
  { issueNumber: "ISS003", status: "Queued", issue: "Typo in about page", priority: "Non Critical" },
  { issueNumber: "ISS004", status: "Fixed", issue: "404 error on product page", priority: "Critical" },
  { issueNumber: "ISS005", status: "In Progress", issue: "Search functionality broken", priority: "Severe" },
]

export default function IssueTable() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-8">
      <Table>
        <TableCaption>A list of current issues.</TableCaption>
        <TableHead>
          <TableRow>
            <TableHeader>Issue Number</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Issue</TableHeader>
            <TableHeader>Priority</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {issues.map((issue) => (
            <TableRow key={issue.issueNumber}>
              <TableCell>{issue.issueNumber}</TableCell>
              <TableCell>{issue.status}</TableCell>
              <TableCell>{issue.issue}</TableCell>
              <TableCell>{issue.priority}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total Issues</TableCell>
            <TableCell>{issues.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}
