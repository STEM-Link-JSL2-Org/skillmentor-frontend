import { cn } from "@/lib/utils";

interface StatusPillProps {
  status: "pending" | "accepted" | "completed" | "cancelled";
}

export function StatusPill({ status }: StatusPillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        status === "pending" && "bg-yellow-100 text-yellow-800",
        status === "accepted" && "bg-green-100 text-green-800",
        status === "completed" && "bg-blue-100 text-blue-800",
        status === "cancelled" && "bg-red-100 text-red-800"
      )}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}
