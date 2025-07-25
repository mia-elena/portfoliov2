'use client';
import { useEffect, useState } from 'react';
import { Eye } from 'lucide-react';

interface ViewCounterProps {
  className?: string;
  showIcon?: boolean;
  label?: string;
}

export default function ViewCounter({ 
  className = "", 
  showIcon = true, 
  label = "views"
}: ViewCounterProps) {
  const [viewCount, setViewCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const incrementView = async () => {
      try {
        // Only run on client side
        if (typeof window === 'undefined') return;
        
        const WORKSPACE = 'mia-personal-dev';
        const COUNTER_NAME = 'mia-portfolio-views';
        
        // Increment the view count using CounterAPI.dev V2
        const response = await fetch(`https://api.counterapi.dev/v2/${WORKSPACE}/${COUNTER_NAME}/up`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('ViewCounter: API response:', data);
        
        if (data && typeof data.count === 'number') {
          setViewCount(data.count);
        } else {
          throw new Error('Invalid response format');
        }
      } catch (error) {
        console.error('Failed to increment view count:', error);
        setError(true);
        
        // Fallback: try to get current count without incrementing
        try {
          const WORKSPACE = 'mia-personal-dev';
          const COUNTER_NAME = 'mia-portfolio-views';
          
          const response = await fetch(`https://api.counterapi.dev/v2/${WORKSPACE}/${COUNTER_NAME}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }
          });
          
          if (response.ok) {
            const data = await response.json();
            setViewCount(data.count || 0);
          } else {
            setViewCount(0);
          }
        } catch (fallbackError) {
          console.error('Failed to get view count:', fallbackError);
          setViewCount(0);
        }
      } finally {
        setIsLoading(false);
      }
    };

    // Add timeout to prevent infinite loading
    const timeoutId = setTimeout(() => {
      if (isLoading) {
        console.log('ViewCounter: API call timed out');
        setIsLoading(false);
        setViewCount(0);
      }
    }, 10000); // 10 second timeout

    incrementView();
    
    return () => clearTimeout(timeoutId);
  }, []);

  // Don't render anything if there's an error and no count
  if (error && viewCount === null) {
    return null;
  }

  // Don't render while loading
  if (isLoading) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        {showIcon && <Eye className="w-4 h-4" />}
        <span className="text-sm">Loading...</span>
      </div>
    );
  }

  const formatCount = (count: number) => {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + 'M';
    } else if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'K';
    }
    return count.toString();
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {showIcon && <Eye className="w-4 h-4" />}
      <span className="text-sm">
        {formatCount(viewCount || 0)} {label}
      </span>
    </div>
  );
} 