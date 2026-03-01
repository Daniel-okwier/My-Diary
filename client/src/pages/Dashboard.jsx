import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { FileText, Mic, Image } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-semibold">Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-6">

        <Card>
          <CardHeader>
            <CardTitle>Total Entries</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center gap-3 text-2xl font-bold">
            <FileText size={24} />
            24
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Audio Notes</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center gap-3 text-2xl font-bold">
            <Mic size={24} />
            6
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Images</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center gap-3 text-2xl font-bold">
            <Image size={24} />
            12
          </CardContent>
        </Card>

      </div>
    </div>
  )
}