declare module 'lucide-react' {
  import type { FC, SVGProps } from 'react'

  export interface IconProps extends SVGProps<SVGSVGElement> {
    size?: number | string
  }

  export type Icon = FC<IconProps>

  export const Menu: Icon
  export const X: Icon
  export const Sun: Icon
  export const Moon: Icon
  export const MessageCircle: Icon
  export const ArrowRight: Icon
  export const ArrowUp: Icon
  export const Code2: Icon
  export const Zap: Icon
  export const Shield: Icon
  export const Sparkles: Icon
  export const Palette: Icon
  export const TrendingUp: Icon
  export const Globe: Icon
  export const Smartphone: Icon
  export const Layout: Icon
  export const ShoppingCart: Icon
  export const PenTool: Icon
  export const Settings: Icon
  export const ExternalLink: Icon
  export const Github: Icon
  export const Linkedin: Icon
  export const Instagram: Icon
  export const Mail: Icon
  export const BarChart3: Icon
  export const Activity: Icon
  export const CheckSquare: Icon
  export const Utensils: Icon
  export const Cloud: Icon
  export const Quote: Icon
  export const Send: Icon
  export const CheckCircle2: Icon
  export const AlertCircle: Icon
  export const Loader2: Icon
  export const Terminal: Icon
}