import { SlashIcon } from "lucide-react"
import { Link, useLocation } from "react-router"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "../ui/breadcrumb"

interface BreadCrums {
    label: string;
    to:string;
}

interface Props {
    currentPage: string;
    breadCrums?: BreadCrums[];
}

export const CustomBreadCrumbs = ({ currentPage, breadCrums }: Props) => {
  
    const { pathname } = useLocation();
    console.log({pathname});

    return (

    <Breadcrumb className="mb-5">

      <BreadcrumbList>

        {/* Home */}
        <BreadcrumbItem>

          <BreadcrumbLink asChild>
            <Link to="/">Inicio</Link>
          </BreadcrumbLink>

        </BreadcrumbItem>

        {/* Separador */}
        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>

        {
            breadCrums?.map((breadcrumb, index) => (

                <div className="flex items-center gap-2">
                    <BreadcrumbItem key={index}>
                        <BreadcrumbLink asChild>
                            <Link to={breadcrumb.to}>{breadcrumb.label}</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbSeparator>
                        <SlashIcon />
                    </BreadcrumbSeparator>
                </div>
            ))
        }
        
        {/* Página actual */}
        <BreadcrumbItem>
          <BreadcrumbPage>{ currentPage }</BreadcrumbPage>
        </BreadcrumbItem>
      
      </BreadcrumbList>

    </Breadcrumb>

  )
}
