import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

interface FiltersProps {
  filterGreenOnly: boolean
  setFilterGreenOnly: (value: boolean) => void
  filterGreenGasOnly: boolean
  setFilterGreenGasOnly: (value: boolean) => void
}

export function Filters({
  filterGreenOnly,
  setFilterGreenOnly,
  filterGreenGasOnly,
  setFilterGreenGasOnly,
}: FiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="flex items-center space-x-2">
        <Switch id="green-energy" checked={filterGreenOnly} onCheckedChange={setFilterGreenOnly} />
        <Label htmlFor="green-energy">Alleen groene stroom</Label>
      </div>

      <div className="flex items-center space-x-2">
        <Switch id="green-gas" checked={filterGreenGasOnly} onCheckedChange={setFilterGreenGasOnly} />
        <Label htmlFor="green-gas">Alleen groen gas</Label>
      </div>
    </div>
  )
}
