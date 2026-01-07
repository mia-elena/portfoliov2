import { WorkItem as WorkItemType } from '@/types'
import TechBadge from './TechBadge'

interface WorkItemProps {
  item: WorkItemType
  onImageClick: (images: string[], index: number) => void
}

export default function WorkItem({ item, onImageClick }: WorkItemProps) {
  return (
    <div>
      {/* Title - clickable if URL exists */}
      <div className="mb-1">
        {item.url ? (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-xl"
          >
            {item.title}
          </a>
        ) : (
          <span className="font-semibold text-xl">{item.title}</span>
        )}
      </div>

      {/* Role/Subtitle */}
      <div className="text-stone-600 mb-1">{item.role}</div>

      {/* Date */}
      <div className="text-xs font-mono text-stone-500 mb-3">{item.date}</div>

      {/* Description */}
      <p className="mb-3">{item.description}</p>

      {/* Technical Details */}
      {item.technicalDetails && item.technicalDetails.length > 0 && (
        <div className="mb-4">
          <div className="text-xs font-mono uppercase tracking-wider text-stone-500 mb-2">Technical Details</div>
          <ul className="space-y-1.5 text-stone-700">
            {item.technicalDetails.map((detail, i) => (
              <li key={i} className="flex"><span className="mr-2">–</span><span>{detail}</span></li>
            ))}
          </ul>
        </div>
      )}

      {/* Technologies */}
      {item.technologies && item.technologies.length > 0 && (
        <div className="flex flex-row gap-1 mb-3">
          {item.technologies.map((tech) => (
            <TechBadge key={tech} tech={tech} size="sm" showbg={true} showIcon={false}/>
          ))}
        </div>
      )}

      {/* Image Gallery Thumbnails */}
      {item.images && item.images.length > 0 && (
        <div className="flex gap-3 flex-wrap mt-4">
          {item.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${item.title} screenshot ${idx + 1}`}
              className="w-20 h-20 object-cover border border-stone-200 rounded cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => onImageClick(item.images!, idx)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
