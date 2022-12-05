
interface ErrorMessageProps{
  justError: string
  
}
export function ErrorMessage({ justError}:ErrorMessageProps) {
  return (
    <p className="text-center text-red-600"> { justError}</p>
  )
}
