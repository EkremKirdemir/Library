export type Book = {
    id: string; // Firestore belge ID'si
    title: string; // Kitap adı
    authors: string[]; // Yazarlar listesi
    isbn: number; // ISBN numarası
    genre: string; // Tür
    coverUri: string | null; // Kitap kapağı URI'si (opsiyonel)
    createdAt: string; // Oluşturulma tarihi
  };
  