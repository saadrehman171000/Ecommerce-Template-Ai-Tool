import Image from "next/image"
import Link from "next/link"
import { Eye, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface TemplateProps {
  id: number
  name: string
  category: string
  description: string
  image: string
  isNew?: boolean
  isPro?: boolean
}

export function TemplateCard({ template }: { template: TemplateProps }) {
  return (
    <div className="template-card group relative overflow-hidden rounded-xl bg-card shadow-md">
      <div className="aspect-[16/10] overflow-hidden">
        <Image
          src={template.image || "/placeholder.svg"}
          alt={template.name}
          width={800}
          height={500}
          className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="absolute top-3 left-3 flex gap-2">
        {template.isNew && (
          <Badge variant="default" className="bg-primary">
            New
          </Badge>
        )}
        {template.isPro && (
          <Badge variant="outline" className="bg-black/50 text-white border-white/20">
            Pro
          </Badge>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-lg">{template.name}</h3>
          <Badge variant="secondary" className="text-xs">
            {template.category}
          </Badge>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{template.description}</p>

        <div className="mt-4 flex items-center justify-between">
          <Button variant="outline" size="sm" className="gap-1">
            <Eye className="h-3.5 w-3.5" />
            <span>Preview</span>
          </Button>
          <Link href={`/customize?template=${template.id}`}>
            <Button size="sm" className="gap-1">
              <span>Use Template</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
