import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(){
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed563f",
      amount : 200,
      status: "pending",
      email: "vahidmomi@gmail.com"
    },
    // {
    //   id: "246d2we15",
    //   amount: 4950,
    //   status: "success",
    //   email: "najiyamoin@gmail.com"
    // }
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className=" min-w-1 max-w-7xl container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
