import Button from '@/shared/Button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex justify-center items-center w-100 h-[90vh] mx-4">
      <div className="flex flex-col gap-4 max-w-xl text-darkviolet">
        <h2 className="font-bold text-2xl">
          <span className="text-lightviolet">404.</span> Strony nie znaleziono
        </h2>
        <p className="opacity-75">
          To jest błąd na miarę naszych możliwości. My tym błędem otwieramy oczy
          niedowiarkom! Mówimy: to jest nasz błąd, przez nas zrobiony i to nie
          jest nasze ostatnie słowo!
        </p>
        <Link href="/">
          <Button type="primary">Strona główna</Button>
        </Link>
      </div>
    </div>
  );
}
