export function StatusBar() {
  return (
    <div className="px-6 py-3 flex items-center justify-between text-sm">
      <span>9:41</span>
      <div className="flex items-center gap-2">
        <svg className="w-4 h-3" viewBox="0 0 16 12" fill="currentColor">
          <path d="M0 4h2v4H0V4zm3 2h2v2H3V6zm3-2h2v4H6V4zm3 1h2v3H9V5zm3-1h2v4h-2V4z" />
        </svg>
        <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
          <path d="M1 4c0-.55.45-1 1-1h1v10H2c-.55 0-1-.45-1-1V4zm12.5 8h-1v-1h-1v1h-1v-1h-1v1h-1V2h1V1h1v1h1V1h1v1h1V12z" />
        </svg>
      </div>
    </div>
  );
}
