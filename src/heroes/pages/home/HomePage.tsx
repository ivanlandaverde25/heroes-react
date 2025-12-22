import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { SearchControls } from "../search/ui/SearchControls"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { useEffect, useState } from "react"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomBreadCrumbs } from "@/components/custom/CustonBreadCrumbs"
import { getHeroesByPage } from "@/heroes/actions/get-heroes-by-page.action"

export const HomePage = () => {
  
  const [activeTab, setActiveTab] = useState<
    "all" | "favorites" | "heroes" | "villains"
  >('all');

  useEffect(() => {
    getHeroesByPage().then((heroes) => {
      console.log(heroes);
    });
  }, []);


  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron 
          title="Universo de SuperHéroes" 
          description="Descubre, explora y administra superheroes y villanos"
        />

        
        {/* BreadCrums */}
        <CustomBreadCrumbs 
        currentPage='Listado superhéroes' 
        breadCrums={[
          {label: 'Inicio 1', to: '/'},
          {label: 'Inicio 2', to: '/'},
          {label: 'Inicio 3', to: '/'},
        ]}  
      />

        {/* Stats Dashboard */}
        <HeroStats />

        {/* Controls */}
        <SearchControls />

        {/* Tabs */}
        <Tabs value={activeTab} className="mb-8">

          <TabsList className="grid w-full grid-cols-4">

            <TabsTrigger 
              value="all"
              onClick={() => setActiveTab('all')}
            >
              {/* Mostrar todos los personajes */}
              All Characters (16)
            </TabsTrigger>

            <TabsTrigger 
              value="favorites" 
              className="flex items-center gap-2"
              onClick={() => setActiveTab('favorites')}
            >
              Favorites (3)
            </TabsTrigger>

            <TabsTrigger 
              value="heroes"
              onClick={() => setActiveTab('heroes')}
            >
              Heroes (12)
            </TabsTrigger>

            <TabsTrigger 
              value="villains"
              onClick={() => setActiveTab('villains')}
            >
              Villains (2)
            </TabsTrigger>
          </TabsList>

          {/* Content */}
          <TabsContent value="all">
            <HeroGrid />
          </TabsContent>

          <TabsContent value="favorites">
            <HeroGrid />
          </TabsContent>

          <TabsContent value="heros">
            <HeroGrid />
          </TabsContent>

          <TabsContent value="villians">
            <HeroGrid />
          </TabsContent>

        </Tabs>


        {/* Pagination */}
        <CustomPagination totalPages={8} />
      </>
    </>
  )
}
