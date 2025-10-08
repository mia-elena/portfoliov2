type ProjectStatus = "complete" | "in-progress" | "planning" | "on-hold" | "archived"

interface StatusBadgeProps {
  status: ProjectStatus
  size?: "sm" | "md" | "lg"
  showIcon?: boolean
}

export default function StatusBadge({ status, size = "md" }: StatusBadgeProps) {
  const statusConfig = {
    complete: {
      label: "Complete",
      colors: "bg-gray-100 text-gray-700 border-gray-200",
    },
    "in-progress": {
      label: "In Progress",
      colors: "bg-gray-100 text-gray-700 border-gray-200",
    },
    planning: {
      label: "Planning",
      colors: "bg-gray-100 text-gray-700 border-gray-200",
    },
    "on-hold": {
      label: "On Hold",
      colors: "bg-gray-100 text-gray-700 border-gray-200",
    },
    archived: {
      label: "Archived",
      colors: "bg-gray-100 text-gray-700 border-gray-200",
    }
  }

  const config = statusConfig[status]

  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-1 text-xs",
    lg: "px-3 py-1.5 text-sm"
  }

  return (
    <span className={`
      inline-flex items-center
      ${sizeClasses[size]}
      ${config.colors}
      rounded-md font-medium border
    `}>
      {config.label}
    </span>
  )
}