"use client"

import { useState } from "react"
import { DealCard } from "./deal-card"
import { UserInputSummary } from "./user-input-summary"
import { Filters } from "./filters"
import { Button } from "@/components/ui/button"
import { ArrowDownAZ, ArrowUpAZ } from "lucide-react"

type SortOption = "price" | "rating" | "cashback"
type SortDirection = "asc" | "desc"

export function ComparisonResults({ data }: { data: any }) {
  const [sortBy, setSortBy] = useState<SortOption>("price")
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc")
  const [filterGreenOnly, setFilterGreenOnly] = useState(false)
  const [filterGreenGasOnly, setFilterGreenGasOnly] = useState(false)

  const toggleSortDirection = () => {
    setSortDirection(sortDirection === "asc" ? "desc" : "asc")
  }

  const sortedDeals = [...data.deals].sort((a, b) => {
    if (sortBy === "price") {
      return sortDirection === "asc"
        ? a.kosten_per_jaar_euro - b.kosten_per_jaar_euro
        : b.kosten_per_jaar_euro - a.kosten_per_jaar_euro
    } else if (sortBy === "rating") {
      return sortDirection === "asc" ? a.klantbeoordeling - b.klantbeoordeling : b.klantbeoordeling - a.klantbeoordeling
    } else {
      return sortDirection === "asc" ? a.cashback - b.cashback : b.cashback - a.cashback
    }
  })

  const filteredDeals = sortedDeals.filter((deal) => {
    if (filterGreenOnly && !deal.stroom.toLowerCase().includes("groen")) {
      return false
    }
    if (filterGreenGasOnly && (!deal.gas || !deal.gas.toLowerCase().includes("groen"))) {
      return false
    }
    return true
  })

  return (
    <div className="space-y-8">
      <UserInputSummary data={data} />

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-green-800 mb-4">Vergelijkingsresultaten</h2>

        <div className="flex flex-col gap-4 mb-6">
          <div className="overflow-x-auto -mx-6 px-6 pb-2">
            <div className="flex gap-2 min-w-max">
              <Button
                variant={sortBy === "price" ? "default" : "outline"}
                onClick={() => setSortBy("price")}
                className={`${sortBy === "price" ? "bg-green-700 hover:bg-green-800" : ""} text-xs sm:text-sm`}
                size="sm"
              >
                Prijs
                {sortBy === "price" &&
                  (sortDirection === "asc" ? (
                    <ArrowDownAZ className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                  ) : (
                    <ArrowUpAZ className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                  ))}
              </Button>
              <Button
                variant={sortBy === "rating" ? "default" : "outline"}
                onClick={() => setSortBy("rating")}
                className={`${sortBy === "rating" ? "bg-green-700 hover:bg-green-800" : ""} text-xs sm:text-sm`}
                size="sm"
              >
                Score
                {sortBy === "rating" &&
                  (sortDirection === "asc" ? (
                    <ArrowDownAZ className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                  ) : (
                    <ArrowUpAZ className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                  ))}
              </Button>
              <Button
                variant={sortBy === "cashback" ? "default" : "outline"}
                onClick={() => setSortBy("cashback")}
                className={`${sortBy === "cashback" ? "bg-green-700 hover:bg-green-800" : ""} text-xs sm:text-sm`}
                size="sm"
              >
                Cashback
                {sortBy === "cashback" &&
                  (sortDirection === "asc" ? (
                    <ArrowDownAZ className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                  ) : (
                    <ArrowUpAZ className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                  ))}
              </Button>
              <Button variant="outline" onClick={toggleSortDirection} size="sm">
                {sortDirection === "asc" ? (
                  <ArrowDownAZ className="h-3 w-3 sm:h-4 sm:w-4" />
                ) : (
                  <ArrowUpAZ className="h-3 w-3 sm:h-4 sm:w-4" />
                )}
              </Button>
            </div>
          </div>

          <Filters
            filterGreenOnly={filterGreenOnly}
            setFilterGreenOnly={setFilterGreenOnly}
            filterGreenGasOnly={filterGreenGasOnly}
            setFilterGreenGasOnly={setFilterGreenGasOnly}
          />
        </div>

        <div className="space-y-4">
          {filteredDeals.length > 0 ? (
            filteredDeals.map((deal, index) => <DealCard key={index} deal={deal} rank={index + 1} />)
          ) : (
            <div className="text-center py-8">
              <p className="text-lg text-gray-600">Geen resultaten gevonden met de huidige filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
