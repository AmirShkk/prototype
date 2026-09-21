import * as LucideIcons from 'lucide-react';
import { Circle, type LucideProps } from 'lucide-react';

interface SafeIconProps extends LucideProps {
  name: string;
}

export default function SafeIcon({ name, ...props }: SafeIconProps) {
  const IconComponent = (LucideIcons as any)[name];
  if (!IconComponent) {
    console.warn(`SafeIcon: icon "${name}" not found in lucide-react, using fallback`);
    return <Circle {...props} />;
  }
  return <IconComponent {...props} />;
}
