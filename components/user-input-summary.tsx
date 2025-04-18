import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Zap, Flame } from "lucide-react"

export function UserInputSummary({ data }: { data: any }) {
  return (
    <Card className="bg-white shadow-lg">
      <CardHeader className="bg-green-700 text-white rounded-t-lg">
        <CardTitle className="text-xl">Jouw gegevens</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-3 rounded-full">
              <Home className="h-6 w-6 text-green-700" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Adres</p>
              <p className="font-medium">
                {data.postcode} {data.huisnummer}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-3 rounded-full">
              <Zap className="h-6 w-6 text-green-700" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Stroomverbruik</p>
              <p className="font-medium">{data.stroom_per_jaar_kWh} kWh per jaar</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-3 rounded-full">
              <Flame className="h-6 w-6 text-green-700" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Gasverbruik</p>
              <p className="font-medium">{data.gas_per_jaar_m3} m³ per jaar</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
