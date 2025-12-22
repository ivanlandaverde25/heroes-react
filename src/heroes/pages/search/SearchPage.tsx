import { CustomJumbotron } from '@/components/custom/CustomJumbotron';
import { HeroStats } from '@/heroes/components/HeroStats';
import { SearchControls } from './ui/SearchControls';
import { CustomBreadCrumbs } from "@/components/custom/CustonBreadCrumbs"

export const SearchPage = () => {
  return (
    <>
      {/* Header */}
      <CustomJumbotron 
        title='Búsqueda de SuperHéroes' 
        description='Descubre, explora y administra superhéroes y villanos'
      />

      <CustomBreadCrumbs 
        currentPage='Buscar superhéroes' 
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
    </>
  )
}

export default SearchPage;