import {
  Heart,
  Zap,
  Eye,
  Brain,
  Gauge,
  Shield,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { SearchControls } from "../search/ui/SearchControls"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { useState } from "react"

export const HomePage = () => {
  
  const [activeTab, setActiveTab] = useState<
    "all" | "favorites" | "heroes" | "villains"
  >('all');

  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron 
          title="Universo de SuperHéroes" 
          description="Descubre, explora y administra superheroes y villanos"
        />

        {/* Stats Dashboard */}
        <HeroStats />

        {/* Controls */}
        <SearchControls />

        {/* Tabs */}
        <Tabs value="all" className="mb-8">

          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All Characters (16)</TabsTrigger>
            <TabsTrigger value="favorites" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger value="heroes">Heroes (12)</TabsTrigger>
            <TabsTrigger value="villains">Villains (2)</TabsTrigger>
          </TabsList>

          {/* Content */}
          <TabsContent value="all">
            <h1>Todos los personajes</h1>
          </TabsContent>

          <TabsContent value="favorites">
            <h1>Favoritos</h1>
          </TabsContent>

          <TabsContent value="heros">
            <h1>Heroes</h1>
          </TabsContent>

          <TabsContent value="villians">
            <h1>Villanos</h1>
          </TabsContent>

        </Tabs>

        {/* Character Grid */}
        <HeroGrid />

        {/* Pagination */}
        <div className="flex items-center justify-center space-x-2">
          <Button variant="outline" size="sm" disabled>
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>

          <Button variant="default" size="sm">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <Button variant="ghost" size="sm" disabled>
            <MoreHorizontal className="h-4 w-4" />
          </Button>

          <Button variant="outline" size="sm">
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </>
    </>
  )
}
