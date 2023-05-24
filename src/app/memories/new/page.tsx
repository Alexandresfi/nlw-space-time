import Link from 'next/link'
import { Camera, ChevronLeft } from 'lucide-react'

export default function Memories() {
  return (
    <div className="flex flex-1 flex-col gap-4 ">
      <Link
        href="/"
        className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100"
      >
        <ChevronLeft className="h-4 w-4" />
        voltar à timeline
      </Link>

      <form className="flex flex-1 flex-col gap-2">
        <div className="flex items-center gap-4">
          <label
            htmlFor="file"
            className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
          >
            <input type="file" name="midia" id="file" className=" hidden" />
            <Camera className="h-4 w-4" />
            anexar mídia
          </label>

          <label
            className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
            htmlFor="isPublic"
          >
            <input
              type="checkbox"
              name="isPublic"
              id="isPublic"
              value="true"
              className="h-4 w-4 rounded border-gray-500 bg-gray-500 text-purple-500"
            />
            Tornar memória pública
          </label>
        </div>

        <textarea
          name="content"
          spellCheck={false}
          className="w-full flex-1 resize-none rounded border-0 bg-transparent p-0 text-lg leading-relaxed text-gray-100 placeholder:text-gray-400 focus:ring-0"
          placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."
        />
      </form>
    </div>
  )
}