import { useEffect } from 'react';
import { toast } from '@/components/ui/use-toast';

export default function Toast({ title, description, variant, className }) {
    useEffect(() => {
        toast({
            title: title,
            description: description,
            variant: variant,
            className: className,
        });
    }, [title, description, variant, className]); // dependencies to control when the toast appears

    return null; // This component doesn't render any visible JSX
}

