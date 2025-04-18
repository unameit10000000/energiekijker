import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star } from "lucide-react"
import Image from "next/image"

interface DealCardProps {
  deal: any
  rank: number
}

export function DealCard({ deal, rank }: DealCardProps) {
  // Map van leveranciers naar logo's
  const logoMap: Record<number, string> = {
    1: "/logos/engie.svg",
    2: "/logos/united-consumers.svg",
    3: "/logos/oxxio.svg",
    4: "/logos/greenchoice.svg",
    5: "/logos/energiedirect.svg",
    6: "/logos/budget-energie.svg",
  }

  // Kies een logo op basis van rank (voor demo doeleinden)
  const logoPath = logoMap[rank % 6 || 1]

  return (
    <Card className="overflow-hidden border-2 hover:border-green-500 transition-all">
      <CardContent className="p-0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Ranking en logo */}
          <div className="md:col-span-2 bg-green-50 p-4 flex flex-col items-center justify-center">
            <div className="text-lg font-bold text-green-800 mb-2">#{rank}</div>
            <div className="relative w-20 h-20 mb-2 flex items-center justify-center bg-white rounded-full p-2">
              <Image
                src={logoPath || "/placeholder.svg"}
                alt="Energiebedrijf logo"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              <span className="ml-1 font-medium">{deal.klantbeoordeling}</span>
            </div>
          </div>

          {/* Deal details */}
          <div className="md:col-span-6 p-4">
            <h3 className="text-lg font-bold text-green-800 mb-2">Energiepakket {rank}</h3>

            <div className="flex flex-wrap gap-2 mb-3">
              <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
                {deal.tarief} tarief
              </Badge>
              <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
                {deal.looptijd}
              </Badge>
              {deal.stroom && (
                <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
                  {deal.stroom}
                </Badge>
              )}
              {deal.gas && (
                <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
                  {deal.gas}
                </Badge>
              )}
            </div>

            <ul className="space-y-1 text-sm">
              <li className="flex items-center">
                <Check className="h-4 w-4 text-green-600 mr-2" />
                <span>Vast tarief voor {deal.looptijd}</span>
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 text-green-600 mr-2" />
                <span>{deal.stroom}</span>
              </li>
              {deal.gas && (
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-600 mr-2" />
                  <span>{deal.gas}</span>
                </li>
              )}
              <li className="flex items-center">
                <Check className="h-4 w-4 text-green-600 mr-2" />
                <span>Klantbeoordeling: {deal.klantbeoordeling}</span>
              </li>
            </ul>
          </div>

          {/* Prijsinformatie en CTA */}
          <div className="md:col-span-4 bg-green-50 p-4 flex flex-col justify-between">
            <div>
              <div className="text-center mb-2">
                <div className="text-sm text-gray-600">Kosten per maand</div>
                <div className="text-2xl font-bold text-green-800">€{deal.kosten_per_maand_euro.toFixed(2)}</div>
                <div className="text-xs text-gray-500">€{deal.kosten_per_jaar_euro.toFixed(2)} per jaar</div>
              </div>

              <div className="text-center mb-4">
                <div className="text-sm text-gray-600">Cashback</div>
                <div className="text-xl font-bold text-coral-600">€{deal.cashback}</div>
              </div>
            </div>

            <Button className="w-full bg-coral-500 hover:bg-coral-600">Bekijk aanbieding</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
