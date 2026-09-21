import React, { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SafeIcon from "@/components/common/SafeIcon";

interface SearchBarProps {
  placeholder: string;
  defaultValue?: string;
  onSearch: (query: string) => void;
}

export default function SearchBar({
  placeholder,
  defaultValue = "",
  onSearch,
}: SearchBarProps) {
  const [value, setValue] = useState(defaultValue);

  // Debounce logic for real-time search experience
  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(value);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [value, onSearch]);

  const handleClear = () => {
    setValue("");
    onSearch("");
  };

  return (
    <div className="relative flex items-center w-full max-w-md">
      <div className="absolute left-3 flex items-center pointer-events-none">
        <SafeIcon
          name="Search"
          size={18}
          className="text-muted-foreground"
          strokeWidth={2}
        />
      </div>
      
      <Input
        type="text"
        className="pl-10 pr-10 h-10 w-full bg-background border-input focus:ring-primary/20"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      {value && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-1 h-8 w-8 text-muted-foreground hover:text-foreground"
          onClick={handleClear}
          type="button"
          aria-label="Clear search"
        >
          <SafeIcon name="X" size={16} strokeWidth={2.5} />
        </Button>
      )}
    </div>
  );
}
