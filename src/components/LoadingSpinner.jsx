export default function LoadingSpinner({
  size = 22,
  color = "#ffffff",
}) {
  return (
    <div
      className="animate-spin rounded-full border-4 border-t-transparent"
      style={{
        width: size,
        height: size,
        borderColor: color,
        borderTopColor: "transparent",
      }}
    />
  );
}