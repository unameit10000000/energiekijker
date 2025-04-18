import { ComparisonResults } from "@/components/comparison-results"
import { Header } from "@/components/header"
import { mockData } from "@/lib/mock-data"

export default function Home() {
  return (
    <div className="min-h-screen bg-green-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <ComparisonResults data={mockData} />
      </main>
      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Energiekijker.nl</h3>
              <p>Vind de beste energiedeals voor jouw situatie.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p>info@energiekijker.nl</p>
              <p>088-123456789</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Links</h3>
              <ul>
                <li>
                  <a href="#" className="hover:underline">
                    Over ons
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Veelgestelde vragen
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy beleid
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-green-700 text-center">
            <p>&copy; {new Date().getFullYear()} Energiekijker.nl - Alle rechten voorbehouden</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
